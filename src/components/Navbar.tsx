import { useState, useEffect } from 'react'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Precios', href: '#precios' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 clamp(20px, 5vw, 60px)',
        height: '72px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(250,249,247,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(26,26,26,0.08)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}
    >
      <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
        <img src="/logo.png" alt="Lina Mars" style={{ height: '32px', width: 'auto', filter: scrolled ? 'invert(1)' : 'none', transition: 'filter 0.4s' }} />
      </a>

      <nav style={{ display: 'flex', gap: 'clamp(16px, 3vw, 36px)', alignItems: 'center', flexWrap: 'wrap' }}>
        {links.map(l => (
          <button key={l.href} onClick={() => scrollTo(l.href)} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            {l.label}
          </button>
        ))}
        <button onClick={() => scrollTo('#contacto')} className="btn-outline" style={{ padding: '10px 24px', fontSize: '11px' }}>
          Reservar cita
        </button>
      </nav>
    </header>
  )
}
