'use client'

import { useState } from 'react'

type Fighter = {
  name: string
  gym: string
  style: string
  w: number
  l: number
  d: number
}

type WeightClassData = {
  name: string
  champion: Fighter | null
  fighters: Fighter[]
}

function Record({ w, l, d }: { w: number; l: number; d: number }) {
  return (
    <span className="font-mono text-sm shrink-0">
      <span className="text-[#5dbf80]">{w}</span>
      <span className="text-[#444]">/</span>
      <span className="text-[#e07050]">{l}</span>
      <span className="text-[#444]">/</span>
      <span className="text-[#555]">{d}</span>
    </span>
  )
}

export default function RankingCard({ data }: { data: WeightClassData }) {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? data.fighters : data.fighters.slice(0, 10)

  return (
    <div className="border border-[#2a2a2a] bg-[#0d0d0d] flex flex-col">
      {/* 카드 헤더 */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-[#2a2a2a]">
        <span className="bg-[#C9A84C] text-[#0a0a0a] text-xs font-black px-2.5 py-1 tracking-wider shrink-0">
          {data.name}
        </span>
        <span className="text-[#888] text-xs font-bold tracking-[0.3em]">CHAMPION</span>
      </div>

      {/* 챔피언 */}
      {data.champion ? (
        <div className="flex items-center justify-between px-4 py-3 bg-[#1a1500] border-b border-[#C9A84C]/20">
          <div className="flex items-center gap-3">
            <span className="bg-[#C9A84C]/20 text-[#C9A84C] text-[10px] font-black px-2 py-0.5 tracking-wider shrink-0">
              챔피언
            </span>
            <div>
              <p className="text-white font-bold text-sm">{data.champion.name}</p>
              <p className="text-[#666] text-[11px] mt-0.5">
                {data.champion.gym} · {data.champion.style}
              </p>
            </div>
          </div>
          <Record w={data.champion.w} l={data.champion.l} d={data.champion.d} />
        </div>
      ) : (
        <div className="px-4 py-4 border-b border-[#1a1a1a]">
          <p className="text-[#444] text-sm tracking-wider">챔피언 공석</p>
        </div>
      )}

      {/* 랭킹 목록 */}
      <div className="flex-1">
        {visible.map((f, i) => (
          <div
            key={f.name}
            className="flex items-center justify-between px-4 py-3 border-b border-[#1a1a1a] hover:bg-[#111] transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="text-[#555] text-xs font-mono w-4 shrink-0">{i + 1}</span>
              <div>
                <p className="text-[#ddd] text-sm font-bold">{f.name}</p>
                <p className="text-[#555] text-[11px] mt-0.5">
                  {f.gym} · {f.style}
                </p>
              </div>
            </div>
            <Record w={f.w} l={f.l} d={f.d} />
          </div>
        ))}
      </div>

      {/* 더보기 */}
      {data.fighters.length > 10 && (
        <button
          onClick={() => setExpanded(v => !v)}
          className="w-full py-3 text-[#555] text-xs tracking-widest hover:text-[#C9A84C] hover:bg-[#111] transition-colors border-t border-[#1a1a1a]"
        >
          {expanded ? '▲ 접기 ▲' : '▼ 더보기 ▼'}
        </button>
      )}
    </div>
  )
}
