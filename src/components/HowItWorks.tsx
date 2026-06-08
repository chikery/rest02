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
    <section id="how" className="py-24 bg-dark-blue">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-royal-light font-bold text-sm uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-4xl font-bold text-white mb-4">7단계 창업 로드맵</h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            각 단계마다 AI가 초안을 생성하고, 사용자가 다듬어 완성도를 높입니다.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STEPS.map((s, i) => (
            <div key={s.step}
              className={`relative p-6 rounded-2xl border transition-all ${
                i === 6
                  ? 'border-royal-blue bg-royal-blue/15 md:col-span-2 lg:col-span-1'
                  : 'border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20'
              }`}>
              <div className="flex items-center gap-3 mb-3">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                  i === 6 ? 'bg-royal-blue text-white' : 'bg-royal-blue/20 text-royal-light'
                }`}>
                  {s.step}
                </span>
                {i === 6 && (
                  <span className="text-xs font-semibold text-royal-light bg-royal-blue/30 px-2 py-0.5 rounded-full">
                    최종 완성
                  </span>
                )}
              </div>
              <h3 className="font-bold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
