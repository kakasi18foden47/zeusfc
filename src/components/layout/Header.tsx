import Link from 'next/link'

const navItems = [
  { label: 'COMPANY', href: '/company' },
  { label: 'EVENT', href: '/events' },
  { label: 'RANKING', href: '/ranking' },
  { label: 'RULES', href: '/rules' },
  { label: 'COMMUNITY', href: '/community' },
]

export default function Header() {
  return (
    <header className="w-full">
      {/* 상단 유틸리티 바 */}
      <div className="bg-[#0a0a0a] border-b border-[#2a2a2a]">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-end gap-5 h-9 text-xs text-[#666]">
          <div className="flex items-center gap-1">
            <input
              type="text"
              placeholder="검색"
              className="bg-[#111] border border-[#333] px-2 py-1 text-xs w-28 focus:outline-none focus:border-[#C9A84C] placeholder-[#444] text-[#aaa]"
            />
            <button className="bg-[#1a1a1a] hover:bg-[#222] px-2 py-1 text-[#888] transition-colors">
              검색
            </button>
          </div>
          <Link href="/login" className="hover:text-[#C9A84C] transition-colors">로그인</Link>
          <Link href="/signup" className="hover:text-[#C9A84C] transition-colors">회원가입</Link>
        </div>
      </div>

      {/* 메인 네비게이션 */}
      <div className="flex">
        {/* 로고 영역 */}
        <div className="bg-[#0a0a0a] flex items-center px-6 py-3 shrink-0 border-r border-[#2a2a2a]">
          <Link href="/" className="flex items-center gap-2 select-none">
            <svg
              className="w-7 h-7 text-[#C9A84C]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <div className="leading-none">
              <span className="font-cinzel block text-xl font-black tracking-[0.2em] text-[#C9A84C]">
                ZEUS FC
              </span>
              <span className="font-cinzel block text-[9px] font-medium tracking-[0.35em] text-[#555] uppercase">
                Fighting Championship
              </span>
            </div>
          </Link>
        </div>

        {/* 네비게이션 — 앤틱 골드 배경 */}
        <nav className="flex-1 bg-[#C9A84C] flex items-center justify-center overflow-x-auto">
          <ul className="flex items-center whitespace-nowrap">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-cinzel px-4 py-5 text-sm font-bold text-[#0a0a0a] hover:bg-[#b8973b] transition-colors inline-block tracking-widest"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

    </header>
  )
}
