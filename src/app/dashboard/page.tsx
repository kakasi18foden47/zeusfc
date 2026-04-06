import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { logout } from '@/app/login/actions'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('name, role')
    .eq('id', user.id)
    .single() as { data: { name: string; role: string } | null }

  return (
    <main className="flex flex-1 flex-col">
      <header className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">
          <span className="text-yellow-400">Zeus</span>FC
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">
            {profile?.name ?? user.email}
            {profile?.role === 'admin' && (
              <span className="ml-2 rounded bg-yellow-400/10 px-2 py-0.5 text-xs text-yellow-400">
                관리자
              </span>
            )}
          </span>
          <form>
            <button
              formAction={logout}
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              로그아웃
            </button>
          </form>
        </div>
      </header>

      <div className="flex-1 p-6">
        <h2 className="text-2xl font-semibold">대시보드</h2>
        <p className="mt-2 text-gray-400">기능을 선택하세요.</p>
      </div>
    </main>
  )
}
