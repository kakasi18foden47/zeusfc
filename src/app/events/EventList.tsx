'use client'

import { useState } from 'react'

type Series = 'ZEUS' | 'HADES' | 'ARES' | 'HERACLES'

type Event = {
  no: number
  series: Series
  number: string
  venue: string
  date: string
  status: 'UPCOMING' | 'COMPLETED'
}

const allEvents: Event[] = [
  // UPCOMING
  { no: 1,  series: 'HADES',    number: 'HADES04',    venue: '올림푸스 아레나', date: '2026.07.25', status: 'UPCOMING' },
  { no: 2,  series: 'ZEUS',     number: 'ZEUS09',     venue: '청주 충청대학 컨벤션센터', date: '2026.06.13', status: 'UPCOMING' },
  { no: 3,  series: 'HERACLES', number: 'HERACLES07', venue: '올림푸스 아레나', date: '2026.05.16', status: 'UPCOMING' },
  // COMPLETED
  { no: 4,  series: 'ARES',     number: 'ARES03',     venue: '올림푸스 아레나', date: '2026.04.04', status: 'COMPLETED' },
  { no: 5,  series: 'ARES',     number: 'ARES02',     venue: '올림푸스 아레나', date: '2025.10.18', status: 'COMPLETED' },
  { no: 6,  series: 'ARES',     number: 'ARES01',     venue: '올림푸스 아레나', date: '2025.02.08', status: 'COMPLETED' },
  { no: 7,  series: 'ZEUS',     number: 'ZEUS08',     venue: '청주 충청대학 컨벤션센터', date: '2024.08.17', status: 'COMPLETED' },
  { no: 8,  series: 'HERACLES', number: 'HERACLES06', venue: '올림푸스 아레나', date: '2024.04.20', status: 'COMPLETED' },
  { no: 9,  series: 'HERACLES', number: 'HERACLES05', venue: '올림푸스 아레나', date: '2023.10.28', status: 'COMPLETED' },
  { no: 10, series: 'ZEUS',     number: 'ZEUS07',     venue: '청주 국민체육센터', date: '2023.12.09', status: 'COMPLETED' },
  { no: 11, series: 'ZEUS',     number: 'ZEUS06',     venue: '청주 국민체육센터', date: '2023.09.16', status: 'COMPLETED' },
  { no: 12, series: 'HADES',    number: 'HADES03',    venue: '올림푸스 아레나', date: '2023.06.03', status: 'COMPLETED' },
  { no: 13, series: 'HERACLES', number: 'HERACLES04', venue: '올림푸스 아레나', date: '2023.03.25', status: 'COMPLETED' },
  { no: 14, series: 'HADES',    number: 'HADES02',    venue: '올림푸스 아레나', date: '2022.11.19', status: 'COMPLETED' },
  { no: 15, series: 'HERACLES', number: 'HERACLES03', venue: '올림푸스 아레나', date: '2022.09.17', status: 'COMPLETED' },
  { no: 16, series: 'HADES',    number: 'HADES01',    venue: '올림푸스 아레나', date: '2022.05.14', status: 'COMPLETED' },
  { no: 17, series: 'HERACLES', number: 'HERACLES02', venue: '올림푸스 아레나', date: '2022.03.12', status: 'COMPLETED' },
  { no: 18, series: 'HERACLES', number: 'HERACLES01', venue: '올림푸스 아레나', date: '2021.09.04', status: 'COMPLETED' },
  { no: 19, series: 'ZEUS',     number: 'ZEUS05',     venue: '청주 그랜드플라자호텔', date: '2020.11.07', status: 'COMPLETED' },
  { no: 20, series: 'ZEUS',     number: 'ZEUS04',     venue: '서울 스위스그랜드호텔', date: '2020.02.22', status: 'COMPLETED' },
  { no: 21, series: 'ZEUS',     number: 'ZEUS03',     venue: '서울 KBS아레나홀', date: '2020.01.11', status: 'COMPLETED' },
  { no: 22, series: 'ZEUS',     number: 'ZEUS02',     venue: '충주 실내체육관', date: '2019.07.06', status: 'COMPLETED' },
  { no: 23, series: 'ZEUS',     number: 'ZEUS01',     venue: '청주 장애인 스포츠센터', date: '2019.04.13', status: 'COMPLETED' },
]

const seriesConfig: Record<Series, { color: string; bg: string; activeBg: string; border: string; dimText: string }> = {
  ZEUS:     { color: '#C9A84C', bg: 'rgba(201,168,76,0.12)',  activeBg: '#C9A84C',  border: 'rgba(201,168,76,0.4)',  dimText: '#3a3020' },
  HADES:    { color: '#a78bdc', bg: 'rgba(167,139,220,0.12)', activeBg: '#a78bdc',  border: 'rgba(167,139,220,0.4)', dimText: '#2a2035' },
  ARES:     { color: '#5dbf80', bg: 'rgba(93,191,128,0.12)',  activeBg: '#5dbf80',  border: 'rgba(93,191,128,0.4)',  dimText: '#1a3025' },
  HERACLES: { color: '#e07050', bg: 'rgba(224,112,80,0.12)',  activeBg: '#e07050',  border: 'rgba(224,112,80,0.4)',  dimText: '#352015' },
}

const tabs = ['ALL', 'ZEUS', 'HADES', 'ARES', 'HERACLES'] as const

export default function EventList() {
  const [active, setActive] = useState<typeof tabs[number]>('ALL')

  const filtered = active === 'ALL' ? allEvents : allEvents.filter(e => e.series === active)

  return (
    <>
      {/* 탭 필터 */}
      <div className="flex gap-2 mb-12">
        {tabs.map(tab => {
          const isActive = active === tab
          const cfg = tab !== 'ALL' ? seriesConfig[tab as Series] : null

          return (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              style={
                isActive && cfg
                  ? { backgroundColor: cfg.activeBg, color: '#0a0a0a', borderColor: 'transparent' }
                  : isActive && !cfg
                  ? { backgroundColor: '#fff', color: '#0a0a0a', borderColor: 'transparent' }
                  : cfg
                  ? { backgroundColor: cfg.bg, color: cfg.color, borderColor: cfg.border }
                  : { backgroundColor: '#111', color: '#555', borderColor: '#2a2a2a' }
              }
              className="w-[140px] py-3 text-sm font-black tracking-[0.25em] transition-all duration-200 border text-center"
            >
              {tab}
            </button>
          )
        })}
      </div>

      {/* 이벤트 목록 */}
      <div className="space-y-px">
        {filtered.map((event, i) => {
          const cfg = seriesConfig[event.series]
          const isActiveSeries = active === 'ALL' || active === event.series

          return (
            <div
              key={event.number}
              style={isActiveSeries ? {} : { opacity: 0.3 }}
              className="flex items-center justify-between bg-[#0d0d0d] hover:bg-[#111] px-6 py-5 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <span className="text-[#444] text-xs font-mono w-5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={`text-[10px] font-bold tracking-[0.2em] px-2.5 py-1 shrink-0 ${
                    event.status === 'UPCOMING'
                      ? 'bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/30'
                      : 'bg-[#1a1a1a] text-[#555] border border-[#2a2a2a]'
                  }`}
                >
                  {event.status}
                </span>
                <div>
                  <p className="font-black tracking-wider transition-colors group-hover:text-white text-[#ddd]">
                    <span style={{ color: cfg.color }}>{event.series} </span>
                    {event.number.replace(event.series, '')}
                  </p>
                  <p className="text-[#555] text-xs mt-0.5 tracking-wider">{event.venue}</p>
                </div>
              </div>
              <p className="text-[#555] text-sm font-mono tracking-widest shrink-0">{event.date}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
