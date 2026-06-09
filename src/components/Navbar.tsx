import { useState } from 'react'
import { useTheme, type Palette } from '../context/ThemeContext'

const PALETTES: { id: Palette; bg: string; label: string }[] = [
  { id: 'blue', bg: '#1D4ED8', label: '블루' },
  { id: 'green', bg: '#059669', label: '그린' },
]

function PaletteSwatcher() {
  const { palette, setPalette } = useTheme()
  return (
    <div className="flex items-center gap-1 bg-slate-100 dark:bg-white/10 rounded-lg p-1">
      {PALETTES.map(p => (
        <button
          key={p.id}
          onClick={() => setPalette(p.id)}
          title={`${p.label} 팔레트`}
          style={{ backgroundColor: p.bg }}
          className={`w-5 h-5 rounded-md transition-all ${
            palette === p.id ? 'opacity-100 shadow-md scale-110' : 'opacity-35 hover:opacity-60'
          }`}
        />
      ))}
    </div>
  )
}

function DarkToggle() {
  const { dark, toggleDark } = useTheme()
  return (
    <button
      onClick={toggleDark}
      title={dark ? '라이트 모드' : '다크 모드'}
      className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white/70 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors"
    >
      {dark
        ? <i className="fa-regular fa-sun text-base" />
        : <i className="fa-regular fa-moon text-base" />
      }
    </button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: '서비스', href: '#services' },
    { label: '이용 방법', href: '#how' },
    { label: '회사 소개', href: '#about' },
    { label: '문의하기', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-navy/95 backdrop-blur border-b border-slate-200 dark:border-white/10 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white font-bold text-sm">
            R
          </div>
          <span className="text-slate-900 dark:text-white font-bold text-lg tracking-tight">
            RoadmapAI
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-600 hover:text-slate-900 dark:text-white/70 dark:hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-3">
          <PaletteSwatcher />
          <DarkToggle />
          <a
            href="#contact"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-brand text-white text-sm font-semibold hover:bg-brand-light transition-colors"
          >
            무료 상담
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-700 dark:text-white p-2 text-lg"
        >
          {open
            ? <i className="fa-solid fa-xmark" />
            : <i className="fa-solid fa-bars" />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-navy-800 border-t border-slate-200 dark:border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}

          <div className="flex items-center gap-3 pt-2 border-t border-slate-100 dark:border-white/10">
            <span className="text-xs text-slate-400 dark:text-white/30">테마</span>
            <PaletteSwatcher />
            <DarkToggle />
          </div>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-center px-4 py-2 rounded-lg bg-brand text-white text-sm font-semibold"
          >
            무료 상담
          </a>
        </div>
      )}
    </header>
  )
}
