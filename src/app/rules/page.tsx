import Header from '@/components/layout/Header'

export default function RulesPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Header />
      <main className="flex flex-1 items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <p className="text-[10px] tracking-[0.5em] text-[#555] uppercase">Rules</p>
          <h1 className="font-cinzel text-4xl font-black tracking-[0.2em] text-white">RULES</h1>
          <div className="w-10 h-px bg-[#C9A84C] mx-auto" />
          <p className="text-[#555] text-sm tracking-wider mt-6">페이지 준비 중입니다.</p>
          <p className="text-[#333] text-xs tracking-widest">COMING SOON</p>
        </div>
      </main>
    </div>
  )
}
