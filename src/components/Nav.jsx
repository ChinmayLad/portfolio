import { useState, useEffect } from 'react'
import { Moon, Sun, LogoCL } from './Icons'

const NAV_SECTIONS = ['About', 'Experience', 'Projects', 'Skills', 'Writing', 'Contact']

export default function Nav({ initials, theme, onToggleTheme }) {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        {/* <span className="nav-logo">{initials}</span> */}
        <a href="#hero" className="nav-logo" aria-label="Home">
          <LogoCL size={28} />
        </a>

        <ul className="nav-links">
          {NAV_SECTIONS.map(s => (
            <li key={s}>
              <a href={`#${s.toLowerCase()}`}>{s}</a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
            <Moon />
            <Sun />
          </button>
          <button className="nav-menu-btn" onClick={() => setMenuOpen(o => !o)}>
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="nav-mobile-menu">
          {NAV_SECTIONS.map(s => (
            <a key={s} href={`#${s.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {s}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
