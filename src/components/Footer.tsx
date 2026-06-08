export default function Footer() {
  return (
    <footer className="bg-navy py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-royal-blue flex items-center justify-center text-white font-bold text-sm">R</div>
              <span className="text-white font-bold">RoadmapAI</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              AI 기반 창업 로드맵 코칭 플랫폼.<br />
              아이디어에서 사업계획서까지.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-3">서비스</p>
            <div className="space-y-2">
              {['AI 창업 로드맵', '지원사업 매칭', '사업계획서 자동화', '무료 상담'].map(l => (
                <a key={l} href="#" className="block text-sm text-white/40 hover:text-white/70 transition-colors">{l}</a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-3">회사</p>
            <div className="space-y-2">
              {['회사 소개', '문의하기'].map(l => (
                <a key={l} href="#" className="block text-sm text-white/40 hover:text-white/70 transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">© 2026 RoadmapAI. All rights reserved.</p>
          <p className="text-white/30 text-xs">설립일: 2026년 6월 2일</p>
        </div>
      </div>
    </footer>
  )
}
