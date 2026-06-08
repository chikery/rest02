export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-royal-blue font-bold text-sm uppercase tracking-widest mb-3">About Us</p>
            <h2 className="text-4xl font-bold text-dark-blue mb-6 leading-tight">
              창업의 첫 걸음,<br />
              올바른 방향으로
            </h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              저희는 창업 아이디어를 가진 예술인, 초기 창업자, 사이드 프로젝트 도전자들이
              혼자서도 체계적으로 창업을 준비할 수 있도록 돕는 AI 기반 코칭 스타트업입니다.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              검증된 린스타트업 방법론과 최신 AI 기술을 결합하여, 누구나 전문 창업 코치의
              도움 없이도 사업계획서를 완성할 수 있는 환경을 만들고 있습니다.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {[
                { color: 'bg-royal-blue', text: '검증된 창업 방법론 기반' },
                { color: 'bg-dark-green', text: '지원사업 최적 매칭 시스템' },
                { color: 'bg-dark-red', text: 'AI 자동화로 시간 절약' },
              ].map(v => (
                <div key={v.text} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${v.color}`} />
                  <span className="text-slate-700 font-medium">{v.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {/* Founding Info */}
            <div className="bg-dark-blue rounded-2xl p-8 text-white">
              <p className="text-white/50 text-sm mb-2">회사 정보</p>
              <p className="text-2xl font-bold mb-1">RoadmapAI</p>
              <p className="text-royal-light text-sm mb-6">AI 사업 로드맵 코칭 스타트업</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-white/40 mb-1">설립일</p>
                  <p className="font-semibold">2026년 6월 2일</p>
                </div>
                <div>
                  <p className="text-white/40 mb-1">서비스</p>
                  <p className="font-semibold">AI 창업 코칭</p>
                </div>
                <div>
                  <p className="text-white/40 mb-1">대상</p>
                  <p className="font-semibold">예비·초기 창업자</p>
                </div>
                <div>
                  <p className="text-white/40 mb-1">기술</p>
                  <p className="font-semibold">GPT-4o + RAG</p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="border-2 border-dark-green/30 bg-dark-green/5 rounded-2xl p-6">
              <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-2">Mission</p>
              <p className="text-dark-blue font-semibold leading-relaxed">
                "모든 창업자가 아이디어에서 사업계획서까지, 혼자서도 해낼 수 있도록"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
