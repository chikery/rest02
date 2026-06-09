const SERVICES = [
  {
    iconClass: 'fa-regular fa-compass',
    iconColor: 'text-brand',
    iconBg: 'bg-brand/10',
    title: 'AI 창업 로드맵 코칭',
    desc: '문제 발견·시장 리서치·MVP·비즈니스 모델·피치덱까지 7단계 로드맵을 AI가 단계별로 안내합니다.',
    border: 'border-brand/30 hover:border-brand',
    badge: 'text-brand bg-brand/10',
    badgeText: '핵심 서비스',
  },
  {
    iconClass: 'fa-solid fa-magnifying-glass',
    iconColor: 'text-green-600 dark:text-green-400',
    iconBg: 'bg-dark-green/10 dark:bg-dark-green/20',
    title: '창업지원사업 자동 매칭',
    desc: '아이템·단계·지역 기반으로 적합한 정부·기관 지원사업을 RAG 엔진이 실시간으로 추천합니다.',
    border: 'border-green-mid/30 hover:border-green-mid',
    badge: 'text-green-600 dark:text-green-400 bg-dark-green/10 dark:bg-dark-green/20',
    badgeText: '자동 추천',
  },
  {
    iconClass: 'fa-regular fa-file-lines',
    iconColor: 'text-red-600 dark:text-red-400',
    iconBg: 'bg-dark-red/10 dark:bg-dark-red/20',
    title: '사업계획서 자동 완성',
    desc: 'STEP 7 완료 시 전 단계 내용이 피치덱 초안으로 자동 통합됩니다. 예상 Q&A 생성까지 한 번에.',
    border: 'border-red-mid/30 hover:border-red-mid',
    badge: 'text-red-600 dark:text-red-400 bg-dark-red/10 dark:bg-dark-red/20',
    badgeText: 'AI 자동화',
  },
  {
    iconClass: 'fa-regular fa-lightbulb',
    iconColor: 'text-brand',
    iconBg: 'bg-brand/10',
    title: 'AI 초안 즉시 생성',
    desc: '아이템 키워드 하나로 TPCS 프레임, 고객 가설, 인터뷰 질문지 등 핵심 문서를 즉시 생성합니다.',
    border: 'border-brand/30 hover:border-brand-light',
    badge: 'text-brand bg-brand/10',
    badgeText: 'GPT-4o',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">Services</p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            창업의 모든 단계를 AI와 함께
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
            복잡한 창업 과정을 단순하게. 검증된 프레임워크와 AI가 만나 실질적인 결과를 만듭니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map(s => (
            <div
              key={s.title}
              className={`bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 transition-all duration-200 cursor-default shadow-sm hover:shadow-md ${s.border}`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${s.iconBg}`}>
                  <i className={`${s.iconClass} text-xl ${s.iconColor}`} />
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${s.badge}`}>
                  {s.badgeText}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{s.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
