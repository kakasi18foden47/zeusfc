-- ============================================================
-- ZeusFC MMA 대회 운영 서비스 초기 스키마
-- ============================================================

-- UUID 확장 활성화
create extension if not exists "uuid-ossp";

-- ============================================================
-- 1. 프로필 (Supabase Auth 연동)
-- ============================================================
create table public.profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  name       text not null,
  role       text not null default 'user' check (role in ('admin', 'user')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- auth.users 생성 시 자동으로 profiles 레코드 생성
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, name)
  values (new.id, coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)));
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================================
-- 2. 체급
-- ============================================================
create table public.weight_classes (
  id             uuid primary key default uuid_generate_v4(),
  name           text not null unique,
  max_weight_kg  numeric(5, 2) not null,
  gender         text not null default 'male' check (gender in ('male', 'female', 'mixed')),
  created_at     timestamptz not null default now()
);

-- 기본 체급 데이터 (남자)
insert into public.weight_classes (name, max_weight_kg, gender) values
  ('스트로급',        52.16, 'male'),
  ('플라이급',        56.70, 'male'),
  ('밴텀급',          61.24, 'male'),
  ('페더급',          65.77, 'male'),
  ('라이트급',        70.31, 'male'),
  ('웰터급',          77.11, 'male'),
  ('미들급',          83.91, 'male'),
  ('라이트헤비급',    93.00, 'male'),
  ('헤비급',         120.20, 'male');

-- 기본 체급 데이터 (여자)
insert into public.weight_classes (name, max_weight_kg, gender) values
  ('여자 스트로급',   52.16, 'female'),
  ('여자 플라이급',   56.70, 'female'),
  ('여자 밴텀급',     61.24, 'female'),
  ('여자 페더급',     65.77, 'female');

-- ============================================================
-- 3. 체육관/팀
-- ============================================================
create table public.gyms (
  id         uuid primary key default uuid_generate_v4(),
  name       text not null unique,
  location   text,
  created_at timestamptz not null default now()
);

-- ============================================================
-- 4. 선수
-- ============================================================
create table public.athletes (
  id               uuid primary key default uuid_generate_v4(),
  name             text not null,
  birth_date       date,
  gender           text not null default 'male' check (gender in ('male', 'female')),
  weight_class_id  uuid references public.weight_classes(id) on delete set null,
  gym_id           uuid references public.gyms(id) on delete set null,
  record_win       integer not null default 0 check (record_win >= 0),
  record_loss      integer not null default 0 check (record_loss >= 0),
  record_draw      integer not null default 0 check (record_draw >= 0),
  record_nc        integer not null default 0 check (record_nc >= 0),
  photo_url        text,
  nationality      text,
  notes            text,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

create index athletes_weight_class_idx on public.athletes(weight_class_id);
create index athletes_gym_idx on public.athletes(gym_id);

-- ============================================================
-- 5. 대회 (이벤트)
-- ============================================================
create table public.events (
  id           uuid primary key default uuid_generate_v4(),
  name         text not null,
  event_date   date not null,
  venue        text,
  description  text,
  poster_url   text,
  status       text not null default 'upcoming'
                 check (status in ('upcoming', 'ongoing', 'completed', 'cancelled')),
  created_by   uuid references public.profiles(id) on delete set null,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create index events_date_idx on public.events(event_date desc);
create index events_status_idx on public.events(status);

-- ============================================================
-- 6. 경기 (매치업)
-- ============================================================
create table public.bouts (
  id                uuid primary key default uuid_generate_v4(),
  event_id          uuid not null references public.events(id) on delete cascade,
  athlete1_id       uuid not null references public.athletes(id) on delete restrict,
  athlete2_id       uuid not null references public.athletes(id) on delete restrict,
  weight_class_id   uuid references public.weight_classes(id) on delete set null,
  bout_order        integer not null default 1,
  scheduled_rounds  integer not null default 3 check (scheduled_rounds in (3, 5)),
  status            text not null default 'scheduled'
                      check (status in ('scheduled', 'completed', 'cancelled', 'no_contest')),
  is_title_bout     boolean not null default false,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now(),
  constraint bouts_different_athletes check (athlete1_id != athlete2_id)
);

create index bouts_event_idx on public.bouts(event_id, bout_order);

-- ============================================================
-- 7. 경기 결과
-- ============================================================
create table public.bout_results (
  id          uuid primary key default uuid_generate_v4(),
  bout_id     uuid not null unique references public.bouts(id) on delete cascade,
  winner_id   uuid references public.athletes(id) on delete set null,
  method      text not null
                check (method in ('KO', 'TKO', 'SUB', 'DEC_UNI', 'DEC_SPL', 'DEC_MAJ', 'NC', 'DQ', 'DRAW')),
  round       integer check (round > 0 and round <= 5),
  time_mm     integer check (time_mm >= 0 and time_mm <= 59),
  time_ss     integer check (time_ss >= 0 and time_ss <= 59),
  notes       text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- ============================================================
-- 8. updated_at 자동 갱신 트리거
-- ============================================================
create or replace function public.set_updated_at()
returns trigger language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_updated_at before update on public.profiles
  for each row execute procedure public.set_updated_at();
create trigger set_updated_at before update on public.athletes
  for each row execute procedure public.set_updated_at();
create trigger set_updated_at before update on public.events
  for each row execute procedure public.set_updated_at();
create trigger set_updated_at before update on public.bouts
  for each row execute procedure public.set_updated_at();
create trigger set_updated_at before update on public.bout_results
  for each row execute procedure public.set_updated_at();

-- ============================================================
-- 9. RLS (Row Level Security) 정책
-- ============================================================

-- profiles
alter table public.profiles enable row level security;
create policy "누구나 프로필 조회 가능" on public.profiles for select using (true);
create policy "본인 프로필만 수정 가능" on public.profiles for update using (auth.uid() = id);

-- weight_classes (공개 읽기, 관리자 쓰기)
alter table public.weight_classes enable row level security;
create policy "누구나 체급 조회 가능" on public.weight_classes for select using (true);
create policy "관리자만 체급 관리" on public.weight_classes
  for all using (exists (select 1 from public.profiles where id = auth.uid() and role = 'admin'));

-- gyms
alter table public.gyms enable row level security;
create policy "누구나 체육관 조회 가능" on public.gyms for select using (true);
create policy "관리자만 체육관 관리" on public.gyms
  for all using (exists (select 1 from public.profiles where id = auth.uid() and role = 'admin'));

-- athletes
alter table public.athletes enable row level security;
create policy "누구나 선수 조회 가능" on public.athletes for select using (true);
create policy "관리자만 선수 관리" on public.athletes
  for all using (exists (select 1 from public.profiles where id = auth.uid() and role = 'admin'));

-- events
alter table public.events enable row level security;
create policy "누구나 대회 조회 가능" on public.events for select using (true);
create policy "관리자만 대회 관리" on public.events
  for all using (exists (select 1 from public.profiles where id = auth.uid() and role = 'admin'));

-- bouts
alter table public.bouts enable row level security;
create policy "누구나 경기 조회 가능" on public.bouts for select using (true);
create policy "관리자만 경기 관리" on public.bouts
  for all using (exists (select 1 from public.profiles where id = auth.uid() and role = 'admin'));

-- bout_results
alter table public.bout_results enable row level security;
create policy "누구나 경기 결과 조회 가능" on public.bout_results for select using (true);
create policy "관리자만 경기 결과 관리" on public.bout_results
  for all using (exists (select 1 from public.profiles where id = auth.uid() and role = 'admin'));
