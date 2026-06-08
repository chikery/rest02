export default function Hero() {
  return (
    <section className="min-h-screen bg-hero flex items-center pt-16 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand/40 bg-brand/10 text-brand-light text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-light animate-pulse" />
            AI 기반 창업 로드맵 코칭 플랫폼
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            아이디어에서<br />
            <span className="text-brand-light">사업계획서</span>까지,<br />
            AI가 함께합니다
          </h1>

          {/* Sub */}
          <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
            창업 경험 없이도 괜찮습니다. AI 코치가 7단계 로드맵으로
            문제 발견부터 피치덱 완성까지 단계별로 안내합니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-brand text-white font-bold text-base hover:bg-brand-light transition-colors shadow-lg shadow-brand/30"
            >
              무료 상담 신청
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-base hover:border-white/40 hover:bg-white/5 transition-colors"
            >
              서비스 알아보기 →
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-10">
            {[
              { value: '7단계', label: '체계적 창업 로드맵' },
              { value: 'AI', label: '자동 초안 생성' },
              { value: '실시간', label: '지원사업 매칭' },
            ].map(s => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="text-sm text-white/50 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
