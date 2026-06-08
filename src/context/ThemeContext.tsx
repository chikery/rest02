import { createContext, useContext, useState, type ReactNode } from 'react'

export type Palette = 'blue' | 'green'

interface ThemeCtx {
  dark: boolean
  palette: Palette
  toggleDark: () => void
  setPalette: (p: Palette) => void
}

const Ctx = createContext<ThemeCtx>({
  dark: false,
  palette: 'blue',
  toggleDark: () => {},
  setPalette: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false)
  const [palette, setPalette] = useState<Palette>('blue')

  return (
    <Ctx.Provider value={{ dark, palette, toggleDark: () => setDark(d => !d), setPalette }}>
      <div className={[dark ? 'dark' : '', `palette-${palette}`].filter(Boolean).join(' ')}>
        {children}
      </div>
    </Ctx.Provider>
  )
}

export const useTheme = () => useContext(Ctx)
