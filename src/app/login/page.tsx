import Link from 'next/link'
import Header from '@/components/layout/Header'
import { login } from './actions'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Header />
      <div className="flex items-center justify-center px-4 py-20">
      {/* 배경 장식 */}
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
          <p className="text-[#555] text-xs tracking-[0.4em] uppercase mt-3">로그인</p>
        </div>

        {error && (
          <div className="border border-[#8B2020]/50 bg-[#8B2020]/10 px-4 py-3 text-[#e07050] text-sm tracking-wide">
            {error}
          </div>
        )}

        <form className="space-y-5">
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
              autoComplete="current-password"
              className="w-full bg-[#0d0d0d] border border-[#2a2a2a] px-4 py-3 text-[#ddd] placeholder-[#333] focus:border-[#C9A84C]/60 focus:outline-none transition-colors text-sm"
              placeholder="••••••••"
            />
          </div>

          <button
            formAction={login}
            className="w-full bg-[#C9A84C] text-[#0a0a0a] px-4 py-3 font-black tracking-[0.2em] text-sm hover:bg-[#b8973b] transition-colors uppercase"
          >
            로그인
          </button>
        </form>

        <p className="text-center text-xs text-[#444] tracking-wider">
          계정이 없으신가요?{' '}
          <Link href="/signup" className="text-[#C9A84C] hover:text-[#b8973b] transition-colors">
            회원가입
          </Link>
        </p>
      </div>
      </div>
    </div>
  )
}
