import Link from 'next/link'

const navItems = [
  { label: 'COMPANY', href: '/company' },
  { label: 'EVENT', href: '/events' },
  { label: 'FIGHTERS', href: '/fighters' },
  { label: 'RANKING', href: '/ranking' },
  { label: 'RESULTS', href: '/results' },
  { label: 'RULES', href: '/rules' },
  { label: 'GYM', href: '/gym' },
  { label: 'COMMUNITY', href: '/community' },
]

export default function Header() {
  return (
    <header className="w-full">
      {/* 상단 유틸리티 바 */}
      <div className="bg-black border-b border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-end gap-5 h-9 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <input
              type="text"
              placeholder="검색"
              className="bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs w-28 focus:outline-none focus:border-yellow-500 placeholder-gray-600"
            />
            <button className="bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded text-gray-300 transition-colors">
              검색
            </button>
          </div>
          <Link href="/login" className="hover:text-yellow-400 transition-colors">로그인</Link>
          <Link href="/signup" className="hover:text-yellow-400 transition-colors">회원가입</Link>
        </div>
      </div>

      {/* 메인 네비게이션 */}
      <div className="flex">
        {/* 로고 영역 — 검은 배경 */}
        <div className="bg-black flex items-center px-6 py-3 shrink-0">
          <Link href="/" className="flex items-center gap-1 select-none">
            {/* 번개 아이콘 */}
            <svg
              className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <div className="leading-none">
              <span className="block text-2xl font-black tracking-widest text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]">
                ZEUS
              </span>
              <span className="block text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">
                Fighting Championship
              </span>
            </div>
          </Link>
        </div>

        {/* 네비게이션 — 금색 배경 */}
        <nav className="flex-1 bg-yellow-400 flex items-center px-4 overflow-x-auto">
          <ul className="flex items-center gap-1 whitespace-nowrap">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-3 py-5 text-sm font-bold text-gray-900 hover:bg-yellow-300 transition-colors inline-block tracking-wide"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* LIVE 배지 */}
          <div className="ml-2 flex items-center gap-1 bg-black text-white text-xs font-bold px-2 py-1 rounded">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            LIVE
          </div>
        </nav>
      </div>

      {/* 신들의 전쟁 서브 배너 */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black border-b border-yellow-400/20 py-1">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-center gap-8 text-xs tracking-widest font-semibold">
          <span className="text-yellow-400 opacity-60">⚡ ZEUS</span>
          <span className="text-gray-600">— 신들의 전쟁 —</span>
          <span className="text-red-500 opacity-60">⚔ ARES</span>
          <span className="text-gray-600">— WHO IS THE KING —</span>
          <span className="text-purple-500 opacity-60">💀 HADES</span>
        </div>
      </div>
    </header>
  )
}
