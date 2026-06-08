const SERVICES = [
  {
    icon: '🗺️',
    title: 'AI 창업 로드맵 코칭',
    desc: '문제 발견·시장 리서치·MVP·비즈니스 모델·피치덱까지 7단계 로드맵을 AI가 단계별로 안내합니다.',
    color: 'border-royal-blue/30 hover:border-royal-blue',
    badge: 'text-royal-light bg-royal-blue/10',
    badgeText: '핵심 서비스',
  },
  {
    icon: '🎯',
    title: '창업지원사업 자동 매칭',
    desc: '아이템·단계·지역 기반으로 적합한 정부·기관 지원사업을 RAG 엔진이 실시간으로 추천합니다.',
    color: 'border-green-mid/30 hover:border-green-mid',
    badge: 'text-green-400 bg-dark-green/20',
    badgeText: '자동 추천',
  },
  {
    icon: '✍️',
    title: '사업계획서 자동 완성',
    desc: 'STEP 7 완료 시 전 단계 내용이 피치덱 초안으로 자동 통합됩니다. 예상 Q&A 생성까지 한 번에.',
    color: 'border-red-mid/30 hover:border-red-mid',
    badge: 'text-red-400 bg-dark-red/20',
    badgeText: 'AI 자동화',
  },
  {
    icon: '💡',
    title: 'AI 초안 즉시 생성',
    desc: '아이템 키워드 하나로 TPCS 프레임, 고객 가설, 인터뷰 질문지 등 핵심 문서를 즉시 생성합니다.',
    color: 'border-royal-blue/30 hover:border-royal-light',
    badge: 'text-royal-light bg-royal-blue/10',
    badgeText: 'GPT-4o',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-royal-blue font-bold text-sm uppercase tracking-widest mb-3">Services</p>
          <h2 className="text-4xl font-bold text-dark-blue mb-4">창업의 모든 단계를 AI와 함께</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            복잡한 창업 과정을 단순하게. 검증된 프레임워크와 AI가 만나 실질적인 결과를 만듭니다.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map(s => (
            <div key={s.title}
              className={`bg-white rounded-2xl p-8 border-2 transition-all duration-200 cursor-default shadow-sm hover:shadow-md ${s.color}`}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{s.icon}</span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${s.badge}`}>
                  {s.badgeText}
                </span>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
