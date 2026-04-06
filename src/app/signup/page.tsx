import Link from 'next/link'
import Header from '@/components/layout/Header'
import { signup } from '@/app/login/actions'

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; success?: string }>
}) {
  const { error, success } = await searchParams

  if (success) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen">
        <Header />
        <div className="flex items-center justify-center px-4 py-20">
        <div className="relative w-full max-w-sm space-y-8 text-center">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-6 h-6 text-[#C9A84C]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <h1 className="font-cinzel text-3xl font-black tracking-[0.25em] text-[#C9A84C]">ZEUS FC</h1>
          </div>
          <div className="border border-[#5dbf80]/30 bg-[#5dbf80]/5 px-6 py-6 space-y-2">
            <p className="text-[#5dbf80] font-bold tracking-wider text-sm">가입 신청이 완료됐습니다</p>
            <p className="text-[#555] text-xs tracking-wide mt-1">
              이메일 확인 후 로그인할 수 있습니다.
            </p>
          </div>
          <Link href="/login" className="block text-xs text-[#C9A84C] hover:text-[#b8973b] tracking-[0.2em] transition-colors">
            로그인으로 이동 →
          </Link>
        </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Header />
      <div className="flex items-center justify-center px-4 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,_rgba(201,168,76,0.04)_0%,_transparent_70%)]" />

      <div className="relative w-full max-w-sm space-y-10">
        {/* 로고 */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg className="w-6 h-6 text-[#C9A84C]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <h1 className="font-cinzel text-3xl font-black tracking-[0.25em] text-[#C9A84C]">ZEUS FC</h1>
          </div>
          <div className="w-8 h-px bg-[#C9A84C]/40 mx-auto" />
          <p className="text-[#555] text-xs tracking-[0.4em] uppercase mt-3">회원가입</p>
        </div>

        {error && (
          <div className="border border-[#8B2020]/50 bg-[#8B2020]/10 px-4 py-3 text-[#e07050] text-sm tracking-wide">
            {decodeURIComponent(error)}
          </div>
        )}

        <form className="space-y-5">
          <div className="space-y-1.5">
            <label htmlFor="name" className="block text-xs text-[#666] tracking-[0.2em] uppercase">
              이름
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full bg-[#0d0d0d] border border-[#2a2a2a] px-4 py-3 text-[#ddd] placeholder-[#333] focus:border-[#C9A84C]/60 focus:outline-none transition-colors text-sm"
              placeholder="홍길동"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-xs text-[#666] tracking-[0.2em] uppercase">
              이메일
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full bg-[#0d0d0d] border border-[#2a2a2a] px-4 py-3 text-[#ddd] placeholder-[#333] focus:border-[#C9A84C]/60 focus:outline-none transition-colors text-sm"
              placeholder="example@email.com"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="password" className="block text-xs text-[#666] tracking-[0.2em] uppercase">
              비밀번호
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              autoComplete="new-password"
              className="w-full bg-[#0d0d0d] border border-[#2a2a2a] px-4 py-3 text-[#ddd] placeholder-[#333] focus:border-[#C9A84C]/60 focus:outline-none transition-colors text-sm"
              placeholder="6자 이상"
            />
          </div>

          <button
            formAction={signup}
            className="w-full bg-[#C9A84C] text-[#0a0a0a] px-4 py-3 font-black tracking-[0.2em] text-sm hover:bg-[#b8973b] transition-colors uppercase"
          >
            가입하기
          </button>
        </form>

        <p className="text-center text-xs text-[#444] tracking-wider">
          이미 계정이 있으신가요?{' '}
          <Link href="/login" className="text-[#C9A84C] hover:text-[#b8973b] transition-colors">
            로그인
          </Link>
        </p>
      </div>
      </div>
    </div>
  )
}
