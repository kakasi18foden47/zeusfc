import Header from '@/components/layout/Header'
import RankingCard from './RankingCard'

const weightClasses = [
  {
    name: '플라이급',
    champion: { name: '장찬우', gym: '팀피니셔 본관', style: '특공무술/타격', w: 6, l: 2, d: 0 },
    fighters: [
      { name: '정원희', gym: '킹덤 복현', style: '무에타이/주짓수', w: 9, l: 9, d: 0 },
      { name: '살만칸', gym: '양주 투혼정심관', style: 'MMA', w: 5, l: 3, d: 0 },
      { name: '박성관', gym: '팀파시', style: '올라운더/복싱', w: 3, l: 1, d: 0 },
      { name: '최현규', gym: '하바스MMA', style: '복싱', w: 2, l: 1, d: 0 },
      { name: '권세원', gym: '크광짐', style: '복싱', w: 2, l: 4, d: 0 },
      { name: '하태근', gym: '대한민국', style: '주짓수/킥복싱', w: 2, l: 1, d: 0 },
      { name: '이중호', gym: '안성 팀컨트롤', style: 'MMA', w: 1, l: 1, d: 0 },
      { name: '이재환', gym: '팀피니셔 팀재환', style: '킥복싱', w: 1, l: 1, d: 0 },
      { name: '김종관', gym: '고트본관', style: '복슬링', w: 1, l: 1, d: 0 },
      { name: '노재현', gym: '블랙컴벳 대전', style: 'MMA', w: 1, l: 0, d: 0 },
    ],
  },
  {
    name: '밴텀급',
    champion: null,
    fighters: [
      { name: '신창헌', gym: '솔리드짐', style: 'MMA', w: 3, l: 1, d: 0 },
      { name: '김성진', gym: '팀매드', style: '올라운더', w: 3, l: 2, d: 0 },
      { name: '김태형', gym: '다이어MMA', style: 'MMA/주짓수', w: 2, l: 1, d: 0 },
      { name: '정지수', gym: '신촌 팀 아차', style: '스트라이커/킥복싱', w: 1, l: 1, d: 0 },
      { name: '박상빈', gym: 'MMA스토리', style: '복싱/주짓수', w: 2, l: 2, d: 0 },
      { name: '김민중', gym: 'MMA스토리', style: 'MMA', w: 2, l: 2, d: 0 },
      { name: '문성관', gym: '팀루키', style: 'MMA/스트라이커', w: 1, l: 0, d: 0 },
      { name: '박병민', gym: '타우로스짐', style: '레슬러/주짓수', w: 1, l: 0, d: 0 },
      { name: '임유홍', gym: '윌드MMA', style: '그래플러/MMA베이스', w: 1, l: 0, d: 0 },
      { name: '박영상', gym: '김대한MMA', style: 'MMA', w: 1, l: 0, d: 0 },
    ],
  },
  {
    name: '페더급',
    champion: { name: '박병혁', gym: '안성 팀컨트롤', style: '그래플러', w: 4, l: 2, d: 0 },
    fighters: [
      { name: '이준형', gym: '더짐랩', style: '올라운더', w: 6, l: 1, d: 0 },
      { name: '강연우', gym: '전무관', style: 'MMA', w: 3, l: 0, d: 0 },
      { name: '강대훈', gym: '열정훈련소', style: '프리스타일', w: 1, l: 0, d: 0 },
      { name: '유동현', gym: '훈짐', style: 'MMA/유도', w: 1, l: 0, d: 0 },
      { name: '문병일', gym: '팀영', style: 'MMA', w: 0, l: 6, d: 0 },
      { name: '권형준', gym: '어퍼컷MMA', style: 'MMA', w: 1, l: 2, d: 1 },
      { name: '송영준', gym: '리본MMA', style: 'MMA', w: 0, l: 1, d: 0 },
      { name: '배지훈', gym: '팀매드', style: '스트라이킹', w: 0, l: 1, d: 0 },
      { name: '유성준', gym: '파라에스트라', style: '복싱', w: 1, l: 1, d: 0 },
      { name: '주형지', gym: '하바스MMA', style: '레슬링', w: 0, l: 1, d: 0 },
    ],
  },
  {
    name: '라이트급',
    champion: null,
    fighters: [
      { name: '서재환', gym: '블랙컴벳 본관', style: '올라운더', w: 3, l: 1, d: 0 },
      { name: '왕주원', gym: '팀피니셔', style: '주짓수', w: 2, l: 0, d: 0 },
      { name: '이정한', gym: '더짐랩', style: 'MMA', w: 2, l: 3, d: 0 },
      { name: '정호원', gym: '파라에스트라', style: '가라테', w: 1, l: 5, d: 0 },
      { name: '김수흔', gym: '하바스MMA', style: 'MMA', w: 1, l: 0, d: 0 },
      { name: '샤크 그로즈니', gym: '포항 팀매드', style: 'MMA', w: 1, l: 2, d: 0 },
      { name: '김성엽', gym: '팀파시', style: 'MMA', w: 0, l: 1, d: 0 },
      { name: '원재현', gym: '빅토리짐', style: '킥복싱/MMA', w: 0, l: 1, d: 0 },
      { name: '김경헌', gym: '전무관', style: 'MMA/실전격술도', w: 0, l: 1, d: 0 },
    ],
  },
  {
    name: '웰터급',
    champion: { name: '박지환', gym: '군포 본주짓수', style: '레슬링', w: 4, l: 1, d: 0 },
    fighters: [
      { name: '임용주', gym: '팀솔리드', style: '쇼토칸 가라테', w: 4, l: 11, d: 0 },
      { name: '권지호', gym: '타이탄짐', style: '스트라이커', w: 1, l: 0, d: 0 },
      { name: '백주한', gym: '팀헌터', style: 'MMA/타격', w: 0, l: 1, d: 0 },
    ],
  },
  {
    name: '미들급',
    champion: null,
    fighters: [],
  },
]

export default function RankingPage() {
  const today = new Date()
  const ver = `${String(today.getFullYear()).slice(2)}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Header />

      {/* 페이지 타이틀 */}
      <section className="bg-[#080808] border-b border-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto px-8 py-14 text-center">
          <h1 className="font-cinzel text-6xl md:text-7xl font-black tracking-[0.2em] text-white">RANKING</h1>
          <p className="mt-4 text-[#555] text-xs tracking-[0.35em] uppercase">
            ZEUS FC · FIGHTER RANKINGS · ALL WEIGHT CLASSES (VER.{ver})
          </p>
          <div className="w-10 h-px bg-[#C9A84C] mx-auto mt-5" />
        </div>
      </section>

      {/* 랭킹 그리드 */}
      <section className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {weightClasses.map(wc => (
            <RankingCard key={wc.name} data={wc} />
          ))}
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
