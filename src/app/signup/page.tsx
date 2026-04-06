import Link from 'next/link'
import { signup } from '@/app/login/actions'

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; success?: string }>
}) {
  const { error, success } = await searchParams

  if (success) {
    return (
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-sm space-y-6 text-center">
          <h1 className="text-4xl font-bold">
            <span className="text-yellow-400">Zeus</span>FC
          </h1>
          <div className="rounded-lg bg-green-950 border border-green-800 px-6 py-5 space-y-2">
            <p className="text-green-400 font-medium">가입 신청이 완료됐습니다</p>
            <p className="text-gray-400 text-sm">
              이메일 확인 후 로그인할 수 있습니다.
            </p>
          </div>
          <Link href="/login" className="block text-sm text-yellow-400 hover:underline">
            로그인으로 이동
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="flex flex-1 items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            <span className="text-yellow-400">Zeus</span>FC
          </h1>
          <p className="mt-2 text-gray-400 text-sm">회원가입</p>
        </div>

        {error && (
          <div className="rounded-lg bg-red-950 border border-red-800 px-4 py-3 text-red-400 text-sm">
            {decodeURIComponent(error)}
          </div>
        )}

        <form className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="name" className="block text-sm text-gray-400">
              이름
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg bg-gray-900 border border-gray-800 px-4 py-3 text-white placeholder-gray-600 focus:border-yellow-400 focus:outline-none transition-colors"
              placeholder="홍길동"
            />
          </div>

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
              placeholder="example@email.com"
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
              minLength={6}
              autoComplete="new-password"
              className="w-full rounded-lg bg-gray-900 border border-gray-800 px-4 py-3 text-white placeholder-gray-600 focus:border-yellow-400 focus:outline-none transition-colors"
              placeholder="6자 이상"
            />
          </div>

          <button
            formAction={signup}
            className="w-full rounded-lg bg-yellow-400 px-4 py-3 font-semibold text-gray-950 hover:bg-yellow-300 transition-colors"
          >
            가입하기
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          이미 계정이 있으신가요?{' '}
          <Link href="/login" className="text-yellow-400 hover:underline">
            로그인
          </Link>
        </p>
      </div>
    </main>
  )
}
