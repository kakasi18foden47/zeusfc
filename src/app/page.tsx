import Header from '@/components/layout/Header'
import Link from 'next/link'

const gods = [
  {
    name: 'ZEUS',
    subtitle: '천공의 지배자',
    desc: '번개와 권위의 신. 링 위의 절대 강자.',
    textColor: '#C9A84C',
    glowColor: 'rgba(201,168,76,0.35)',
    bg: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(201,168,76,0.18) 0%, rgba(10,8,0,0.95) 70%)',
    icon: '⚡',
  },
  {
    name: 'HADES',
    subtitle: '지하세계의 왕',
    desc: '어둠과 죽음의 신. 링 위의 침묵.',
    textColor: '#a78bdc',
    glowColor: 'rgba(124,92,191,0.4)',
    bg: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(91,45,142,0.35) 0%, rgba(5,0,12,0.97) 70%)',
    icon: '💀',
  },
  {
    name: 'ARES',
    subtitle: '전쟁의 신',
    desc: '피와 전투의 신. 링 안의 불꽃.',
    textColor: '#5dbf80',
    glowColor: 'rgba(74,158,106,0.35)',
    bg: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(26,74,46,0.45) 0%, rgba(0,8,3,0.97) 70%)',
    icon: '⚔',
  },
  {
    name: 'HERACLES',
    subtitle: '반신반인의 영웅',
    desc: '불굴의 힘과 의지. 링 위의 전설.',
    textColor: '#e07050',
    glowColor: 'rgba(192,57,43,0.35)',
    bg: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(139,32,32,0.35) 0%, rgba(10,2,0,0.97) 70%)',
    icon: '🏛',
  },
]

const upcomingEvents = [
  { id: 1, title: 'ZEUS FC 12', date: '2025.05.17', venue: '서울 올림픽홀', status: 'UPCOMING' },
  { id: 2, title: 'ZEUS FC 11', date: '2025.03.22', venue: '부산 BEXCO', status: 'UPCOMING' },
  { id: 3, title: 'ZEUS FC 10', date: '2025.01.18', venue: '서울 장충체육관', status: 'COMPLETED' },
]

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Header />

      <main>
        {/* 히어로 섹션 */}
        <section className="relative overflow-hidden bg-[#080808] min-h-[520px] flex items-center">
          {/* 배경 — 매우 미묘한 방사형 글로우 */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_50%,_rgba(201,168,76,0.06)_0%,_transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_70%_50%,_rgba(91,45,142,0.04)_0%,_transparent_70%)]" />
          </div>
          {/* 세로 라인 장식 */}
          <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0 w-px bg-[#C9A84C]"
                style={{ left: `${(i + 1) * 12.5}%` }}
              />
            ))}
          </div>

          <div className="relative max-w-screen-xl mx-auto px-8 py-24 w-full">
            <p className="font-cinzel text-[#C9A84C]/60 text-[10px] tracking-[0.6em] font-semibold uppercase mb-6">
              Gods At War · Season 2025
            </p>
            <h1 className="font-cinzel text-[88px] md:text-[120px] font-black tracking-[-0.02em] leading-none mb-6 text-white">
              ZEUS<span className="text-[#C9A84C]">FC</span>
            </h1>
            <div className="w-16 h-px bg-[#C9A84C] mb-6" />
            <p className="text-[#888] text-base mb-2 tracking-[0.15em]">
              신들의 전쟁이 링 위에서 펼쳐진다
            </p>
            <p className="text-[#444] text-xs tracking-[0.5em] uppercase mb-12">
              Who is the King?
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/events"
                className="bg-[#C9A84C] text-[#0a0a0a] font-bold px-10 py-3.5 hover:bg-[#b8973b] transition-colors tracking-[0.15em] text-sm uppercase"
              >
                대회 일정
              </Link>
              <Link
                href="/ranking"
                className="border border-[#C9A84C]/40 text-[#C9A84C] font-bold px-10 py-3.5 hover:bg-[#C9A84C]/10 transition-colors tracking-[0.15em] text-sm uppercase"
              >
                선수 명단
              </Link>
            </div>
          </div>
        </section>

        {/* 신들의 전쟁 */}
        <section className="border-t border-[#1a1a1a]">
          <div className="max-w-screen-xl mx-auto px-8 py-20">
            <div className="text-center mb-14">
              <p className="text-[10px] tracking-[0.5em] text-[#555] uppercase mb-3">Mythology</p>
              <h2 className="text-4xl font-black text-white tracking-[0.1em]">신들의 전쟁</h2>
              <div className="w-10 h-px bg-[#C9A84C] mx-auto mt-5" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4">
              {gods.map((god) => (
                <div
                  key={god.name}
                  className="relative overflow-hidden group cursor-pointer"
                  style={{ background: god.bg }}
                >
                  {/* 호버 오버레이 */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(ellipse 70% 50% at 50% 30%, ${god.glowColor} 0%, transparent 70%)` }}
                  />

                  <div className="relative px-6 py-12 text-center flex flex-col items-center gap-4">
                    {/* 아이콘 */}
                    <div
                      className="text-6xl mb-2 transition-transform duration-300 group-hover:scale-110"
                      style={{ filter: `drop-shadow(0 0 16px ${god.glowColor})` }}
                    >
                      {god.icon}
                    </div>

                    {/* 이름 */}
                    <h3
                      className="font-cinzel text-4xl font-black tracking-[0.2em] leading-none"
                      style={{
                        color: god.textColor,
                        textShadow: `0 0 30px ${god.glowColor}, 0 0 60px ${god.glowColor}`,
                      }}
                    >
                      {god.name}
                    </h3>

                    {/* 한국어 부제 */}
                    <p className="text-[11px] tracking-[0.35em] text-[#666]">{god.subtitle}</p>

                    {/* 구분선 */}
                    <div className="w-8 h-px" style={{ backgroundColor: god.textColor, opacity: 0.3 }} />

                    {/* 설명 */}
                    <p className="text-[#777] text-sm leading-relaxed">{god.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 대회 일정 */}
        <section className="border-t border-[#1a1a1a] bg-[#080808]">
          <div className="max-w-screen-xl mx-auto px-8 py-20">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[10px] tracking-[0.5em] text-[#555] uppercase mb-2">Schedule</p>
                <h2 className="text-3xl font-black text-white tracking-[0.05em]">대회 일정</h2>
              </div>
              <Link href="/events" className="text-xs text-[#C9A84C]/70 hover:text-[#C9A84C] tracking-[0.2em] transition-colors uppercase">
                전체 보기 →
              </Link>
            </div>

            <div className="space-y-px">
              {upcomingEvents.map((event, i) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between bg-[#0d0d0d] hover:bg-[#111] px-6 py-5 border-l-2 border-transparent hover:border-[#C9A84C] transition-all group"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-[#444] text-xs font-mono w-4">{String(i + 1).padStart(2, '0')}</span>
                    <span
                      className={`text-[10px] font-bold tracking-[0.2em] px-2.5 py-1 ${
                        event.status === 'UPCOMING'
                          ? 'bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/30'
                          : 'bg-[#1a1a1a] text-[#555] border border-[#2a2a2a]'
                      }`}
                    >
                      {event.status}
                    </span>
                    <div>
                      <p className="font-bold text-[#ddd] group-hover:text-white tracking-wide transition-colors">
                        {event.title}
                      </p>
                      <p className="text-[#555] text-xs mt-0.5 tracking-wider">{event.venue}</p>
                    </div>
                  </div>
                  <p className="text-[#555] text-sm font-mono tracking-widest">{event.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#050505] border-t border-[#1a1a1a] py-12">
        <div className="max-w-screen-xl mx-auto px-8 text-center">
          <p className="font-cinzel text-[#C9A84C] font-black tracking-[0.4em] text-xl mb-2">ZEUS FC</p>
          <p className="text-[#333] text-[10px] tracking-[0.5em] uppercase">Who Is The King?</p>
        </div>
      </footer>
    </div>
  )
}
