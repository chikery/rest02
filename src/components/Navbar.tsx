import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: '서비스', href: '#services' },
    { label: '이용 방법', href: '#how' },
    { label: '회사 소개', href: '#about' },
    { label: '문의하기', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-blue/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-royal-blue flex items-center justify-center text-white font-bold text-sm">R</div>
          <span className="text-white font-bold text-lg tracking-tight">RoadmapAI</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-royal-blue text-white text-sm font-semibold hover:bg-royal-light transition-colors">
          무료 상담
        </a>

        {/* Mobile menu toggle */}
        <button onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-dark-blue border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm text-white/80 hover:text-white">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="mt-2 text-center px-4 py-2 rounded-lg bg-royal-blue text-white text-sm font-semibold">
            무료 상담
          </a>
        </div>
      )}
    </header>
  )
}
