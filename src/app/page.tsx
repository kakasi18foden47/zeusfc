import Header from '@/components/layout/Header'
import Link from 'next/link'

const gods = [
  {
    name: 'ZEUS',
    subtitle: '천공의 지배자',
    desc: '번개와 권위의 신. 링 위의 절대 강자.',
    color: 'from-yellow-900/40 to-transparent',
    border: 'border-yellow-400/30',
    accent: 'text-yellow-400',
    icon: '⚡',
  },
  {
    name: 'ARES',
    subtitle: '전쟁의 신',
    desc: '피와 전투의 신. 링 안의 불꽃.',
    color: 'from-red-900/40 to-transparent',
    border: 'border-red-500/30',
    accent: 'text-red-500',
    icon: '⚔',
  },
  {
    name: 'HADES',
    subtitle: '지하세계의 왕',
    desc: '어둠과 죽음의 신. 링 위의 침묵.',
    color: 'from-purple-900/40 to-transparent',
    border: 'border-purple-500/30',
    accent: 'text-purple-500',
    icon: '💀',
  },
]

const upcomingEvents = [
  { id: 1, title: 'ZEUS FC 12', date: '2025.05.17', venue: '서울 올림픽홀', status: 'UPCOMING' },
  { id: 2, title: 'ZEUS FC 11', date: '2025.03.22', venue: '부산 BEXCO', status: 'UPCOMING' },
  { id: 3, title: 'ZEUS FC 10', date: '2025.01.18', venue: '서울 장충체육관', status: 'COMPLETED' },
]

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-gray-950">
        {/* 히어로 섹션 */}
        <section className="relative overflow-hidden bg-black min-h-[500px] flex items-center">
          {/* 배경 그라디언트 */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/20 via-gray-950 to-black" />
          {/* 번개 라인 장식 */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-yellow-400 via-transparent to-transparent" />
            <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-yellow-400 via-transparent to-transparent" />
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-yellow-400 via-transparent to-transparent" />
          </div>

          <div className="relative max-w-screen-xl mx-auto px-6 py-20 w-full">
            <div className="max-w-2xl">
              <p className="text-yellow-400 text-xs tracking-[0.4em] font-semibold uppercase mb-4">
                ⚡ Gods At War
              </p>
              <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-6">
                <span className="text-white">ZEUS</span>
                <span className="text-yellow-400">FC</span>
              </h1>
              <p className="text-gray-400 text-lg mb-2">신들의 전쟁이 링 위에서 펼쳐진다</p>
              <p className="text-gray-600 text-sm tracking-widest uppercase mb-10">
                Who is the King?
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/events"
                  className="bg-yellow-400 text-gray-950 font-bold px-8 py-3 hover:bg-yellow-300 transition-colors tracking-wide text-sm"
                >
                  대회 일정 보기
                </Link>
                <Link
                  href="/fighters"
                  className="border border-yellow-400/50 text-yellow-400 font-bold px-8 py-3 hover:bg-yellow-400/10 transition-colors tracking-wide text-sm"
                >
                  선수 명단
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 신들의 전쟁 — 세 신 소개 */}
        <section className="max-w-screen-xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-2">Mythology</p>
            <h2 className="text-3xl font-black text-white">신들의 전쟁</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gods.map((god) => (
              <div
                key={god.name}
                className={`relative bg-gradient-to-b ${god.color} border ${god.border} p-8 text-center group hover:scale-105 transition-transform duration-300`}
              >
                <div className="text-4xl mb-4">{god.icon}</div>
                <h3 className={`text-3xl font-black ${god.accent} tracking-widest mb-1`}>
                  {god.name}
                </h3>
                <p className="text-gray-400 text-xs tracking-widest mb-4">{god.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{god.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 대회 일정 */}
        <section className="bg-gray-900/50 border-t border-gray-800">
          <div className="max-w-screen-xl mx-auto px-6 py-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-1">Schedule</p>
                <h2 className="text-2xl font-black text-white">대회 일정</h2>
              </div>
              <Link
                href="/events"
                className="text-sm text-yellow-400 hover:underline tracking-wide"
              >
                전체 보기 →
              </Link>
            </div>

            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between border border-gray-800 bg-black/40 px-6 py-4 hover:border-yellow-400/40 transition-colors group"
                >
                  <div className="flex items-center gap-6">
                    <span
                      className={`text-xs font-bold tracking-widest px-2 py-1 ${
                        event.status === 'UPCOMING'
                          ? 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/30'
                          : 'bg-gray-800 text-gray-500'
                      }`}
                    >
                      {event.status}
                    </span>
                    <div>
                      <p className="font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {event.title}
                      </p>
                      <p className="text-gray-500 text-sm">{event.venue}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm font-mono">{event.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <p className="text-yellow-400 font-black tracking-widest text-lg mb-1">ZEUS FC</p>
          <p className="text-gray-600 text-xs tracking-widest">WHO IS THE KING?</p>
        </div>
      </footer>
    </>
  )
}
