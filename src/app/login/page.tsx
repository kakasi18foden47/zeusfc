import Link from 'next/link'
import { login } from './actions'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams

  return (
    <main className="flex flex-1 items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            <span className="text-yellow-400">Zeus</span>FC
          </h1>
          <p className="mt-2 text-gray-400 text-sm">관리자 로그인</p>
        </div>

        {error && (
          <div className="rounded-lg bg-red-950 border border-red-800 px-4 py-3 text-red-400 text-sm">
            {error}
          </div>
        )}

        <form className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm text-gray-400">
              이메일
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-lg bg-gray-900 border border-gray-800 px-4 py-3 text-white placeholder-gray-600 focus:border-yellow-400 focus:outline-none transition-colors"
              placeholder="admin@example.com"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm text-gray-400">
              비밀번호
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full rounded-lg bg-gray-900 border border-gray-800 px-4 py-3 text-white placeholder-gray-600 focus:border-yellow-400 focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            formAction={login}
            className="w-full rounded-lg bg-yellow-400 px-4 py-3 font-semibold text-gray-950 hover:bg-yellow-300 transition-colors"
          >
            로그인
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          계정이 없으신가요?{' '}
          <Link href="/signup" className="text-yellow-400 hover:underline">
            회원가입
          </Link>
        </p>
      </div>
    </main>
  )
}
