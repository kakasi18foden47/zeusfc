import Header from '@/components/layout/Header'
import EventList from './EventList'

export default function EventsPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Header />

      {/* 페이지 타이틀 */}
      <section className="border-b border-[#1a1a1a] bg-[#080808]">
        <div className="max-w-screen-xl mx-auto px-8 py-14 text-center">
          <p className="text-[10px] tracking-[0.5em] text-[#555] uppercase mb-3">Schedule</p>
          <h1 className="font-cinzel text-5xl font-black tracking-[0.15em] text-white">EVENT</h1>
          <div className="w-10 h-px bg-[#C9A84C] mx-auto mt-5" />
        </div>
      </section>

      {/* 이벤트 목록 */}
      <section className="max-w-screen-xl mx-auto px-8 py-16">
        <EventList />
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
