import { useState } from 'react'

const INPUT_CLS =
  'w-full border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', stage: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">Contact</p>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              지금 바로<br />무료 상담 신청
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              창업 아이디어가 있으신가요? 어느 단계에 계시든 환영합니다.
              RoadmapAI 팀이 여러분의 창업 여정을 함께 설계해드립니다.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: '🎯',
                  title: '맞춤 로드맵 설계',
                  desc: '아이템과 단계에 맞는 최적 경로 제안',
                  iconCls: 'bg-brand/10 text-brand',
                },
                {
                  icon: '📋',
                  title: '지원사업 매칭 리포트',
                  desc: '신청 가능한 지원사업 무료 분석',
                  iconCls: 'bg-dark-green/10 text-green-700 dark:text-green-400',
                },
                {
                  icon: '⚡',
                  title: '빠른 응답',
                  desc: '평일 기준 24시간 내 회신',
                  iconCls: 'bg-dark-red/10 text-red-700 dark:text-red-400',
                },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${item.iconCls}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm transition-colors">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 rounded-full bg-dark-green/10 flex items-center justify-center text-3xl mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">상담 신청 완료!</h3>
                <p className="text-slate-500 dark:text-slate-400">평일 24시간 내 연락드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">이름 *</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="홍길동"
                    className={INPUT_CLS}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">이메일 *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="hello@example.com"
                    className={INPUT_CLS}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">창업 단계</label>
                  <select
                    value={form.stage}
                    onChange={e => setForm({ ...form, stage: e.target.value })}
                    className={INPUT_CLS}
                  >
                    <option value="">선택해주세요</option>
                    <option>아이디어 단계</option>
                    <option>예비창업</option>
                    <option>초기창업 (3년 미만)</option>
                    <option>기타</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">문의 내용</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    placeholder="아이템 또는 궁금한 점을 간략히 적어주세요"
                    className={INPUT_CLS + ' resize-none'}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-dark-red text-white font-bold rounded-xl hover:bg-red-mid transition-colors text-sm shadow-sm hover:shadow-md"
                >
                  무료 상담 신청하기
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
