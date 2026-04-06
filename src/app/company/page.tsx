import Header from '@/components/layout/Header'

export default function CompanyPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Header />

      {/* 히어로 — 배경 이미지 영역 */}
      <section className="relative overflow-hidden bg-[#080808] min-h-[480px] flex items-center justify-center">
        {/* 어두운 배경 오버레이 (이미지 업로드 전 placeholder) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        {/* 배경 텍스처 */}
        <div className="absolute inset-0 opacity-[0.03]">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-px bg-white"
              style={{ left: `${(i + 1) * 10}%` }} />
          ))}
        </div>

        <div className="relative text-center px-6 py-20">
          <h1 className="font-cinzel text-6xl md:text-8xl font-black tracking-[0.05em] text-white leading-none mb-4">
            ZEUS
          </h1>
          <h2 className="font-cinzel text-3xl md:text-5xl font-black tracking-[0.15em] text-white mb-10">
            FIGHTING CHAMPIONSHIP
          </h2>
          <p className="text-[#aaa] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            (이하 제우스 FC)은 유망주 발굴 및 기량이 검증된 선수에게<br />
            출전 기회를 준다는 취지에서 2019년 4월 출범하였다.
          </p>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto px-8 py-20">
          <h2 className="text-center text-2xl font-black tracking-[0.3em] text-white mb-20">
            OUR <span className="font-black">MISSION</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#2a2a2a]">
            {/* VISION */}
            <div className="px-10 py-8 text-center">
              <h3 className="text-sm font-black tracking-[0.4em] text-white mb-8">VISION</h3>
              <p className="text-[#999] text-sm leading-8">
                제우스 FC는 세계적인 파이터를 꿈꾸는{' '}
                <span className="text-[#4a7fc1] font-semibold">선수들의 등용문</span>이 되고 있고,{' '}
                선수들의 성장을 목표로 시작한 단체
              </p>
            </div>

            {/* GOAL */}
            <div className="px-10 py-8 text-center">
              <h3 className="text-sm font-black tracking-[0.4em] text-white mb-8">GOAL</h3>
              <p className="text-[#999] text-sm leading-8">
                설립 당시 한국 MMA 1세대 파이터<br />
                전용재 대표가 세운 신생 단체로<br />
                <span className="text-[#4a7fc1] font-semibold">연 4회 대회 개최</span>를 목표
              </p>
            </div>

            {/* AFFILIATE */}
            <div className="px-10 py-8 text-center">
              <h3 className="text-sm font-black tracking-[0.4em] text-white mb-8">AFFILIATE</h3>
              <p className="text-[#999] text-sm leading-8">
                <span className="text-[#4a7fc1] font-semibold">RUBY SPORTS</span>와<br />
                중동의 MMA 단체{' '}
                <span className="text-[#4a7fc1] font-semibold">UAE Warriors</span>와 제휴
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR HISTORY */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto px-8 py-20">
          <h2 className="text-2xl font-black tracking-[0.3em] text-white mb-16">
            OUR <span className="font-black">HISTORY</span>
          </h2>

          <div className="relative">
            {/* 세로 타임라인 선 */}
            <div className="absolute left-[140px] top-0 bottom-0 w-px bg-[#2a2a2a]" />

            <div className="space-y-0">
              {[
                {
                  year: '2025', highlight: true, events: [
                    { month: '03', text: "ZFC09대회 개최예정 '청주 충청대학 컨벤션센터'" },
                  ]
                },
                {
                  year: '2024', highlight: false, events: [
                    { month: '08', text: "ZFC08대회 개최 '청주 충청대학 컨벤션센터'" },
                  ]
                },
                {
                  year: '2023', highlight: false, events: [
                    { month: '12', text: "ZFC07대회 개최 '청주 국민체육센터 및 스쿼시장'" },
                    { month: '09', text: "ZFC06대회 개최 '청주 국민체육센터 및 스쿼시장'" },
                    { month: '08', text: '제우스FC 2대 박시영 대표 취임' },
                  ]
                },
                {
                  year: '2020', highlight: false, events: [
                    { month: '11', text: "ZFC05대회 개최 '청주 그랜드플라자호텔'" },
                    { month: '02', text: "ZFC04대회 개최 '서울 스위스그랜드호텔'" },
                    { month: '01', text: "ZFC03대회 개최 '서울 KBS아레나홀'" },
                  ]
                },
                {
                  year: '2019', highlight: false, events: [
                    { month: '07', text: "ZFC02대회 개최 '충주 실내체육관'" },
                    { month: '04', text: "ZFC01대회 개최 '청주 장애인 스포츠센터'" },
                    { month: '02', text: '제우스FC 출범 및 1대 전용재 대표 취임' },
                  ]
                },
              ].map((group) => (
                <div key={group.year} className="flex gap-0 pb-12">
                  {/* 연도 */}
                  <div className="w-[140px] shrink-0 pt-1">
                    <span className={`text-4xl font-black ${group.highlight ? 'text-[#4a7fc1]' : 'text-[#555]'}`}>
                      {group.year}
                    </span>
                  </div>

                  {/* 이벤트 목록 */}
                  <div className="flex-1 space-y-6">
                    {group.events.map((event, i) => (
                      <div key={i} className="flex items-center gap-6">
                        {/* 점 */}
                        <div className="w-3 h-3 rounded-full bg-[#4a7fc1] border-2 border-[#0a0a0a] shrink-0 -ml-[6px] mt-0.5" />
                        {/* 월 */}
                        <span className="text-white font-black text-lg w-8 shrink-0">{event.month}</span>
                        {/* 내용 */}
                        <span className="text-[#999] text-sm">{event.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#050505] border-t border-[#1a1a1a] py-12">
        <div className="max-w-screen-xl mx-auto px-8 text-center">
          <p className="text-[#C9A84C] font-black tracking-[0.4em] text-xl mb-2">ZEUS FC</p>
          <p className="text-[#333] text-[10px] tracking-[0.5em] uppercase">Who Is The King?</p>
        </div>
      </footer>
    </div>
  )
}
