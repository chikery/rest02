const STEPS = [
  { step: 1, title: '문제 발견과 솔루션', desc: 'TPCS 프레임워크로 목표 고객·문제·원인·솔루션을 정의합니다.' },
  { step: 2, title: '고객과 시장 리서치', desc: '잠재고객 프로파일을 작성하고 시장 조사 방향을 설계합니다.' },
  { step: 3, title: '고객 인터뷰 설계', desc: '9개 가설을 수립하고 심층 인터뷰 질문지를 자동 생성합니다.' },
  { step: 4, title: 'MVP 테스트 설계', desc: '핵심 가설 검증을 위한 MVP 도구와 테스트 계획을 수립합니다.' },
  { step: 5, title: '시장 및 경쟁사 분석', desc: 'TAM·SAM·SOM 산정과 SWOT 분석으로 시장 포지셔닝을 완성합니다.' },
  { step: 6, title: '비즈니스 모델 설계', desc: '비즈니스 모델 캔버스 9개 블록을 AI 피드백과 함께 완성합니다.' },
  { step: 7, title: '피치덱 완성', desc: '10개 섹션 피치덱 초안과 예상 Q&A 8문항을 자동으로 통합 생성합니다.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-slate-100 dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">7단계 창업 로드맵</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
            각 단계마다 AI가 초안을 생성하고, 사용자가 다듬어 완성도를 높입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STEPS.map((s, i) => (
            <div
              key={s.step}
              className={`relative p-6 rounded-2xl border-2 transition-all ${
                i === 6
                  ? 'border-brand bg-brand/8 dark:bg-brand/15 md:col-span-2 lg:col-span-1'
                  : 'border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-slate-300 dark:hover:border-white/20 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                    i === 6
                      ? 'bg-brand text-white'
                      : 'bg-brand/10 dark:bg-brand/20 text-brand dark:text-brand-light'
                  }`}
                >
                  {s.step}
                </span>
                {i === 6 && (
                  <span className="text-xs font-semibold text-brand dark:text-brand-light bg-brand/15 dark:bg-brand/30 px-2 py-0.5 rounded-full">
                    최종 완성
                  </span>
                )}
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 dark:text-white/50 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
