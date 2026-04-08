import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Precios', href: '#precios' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
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

        {/* Desktop links */}
        <nav style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="hidden md:flex">
          {links.map(l => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo('#contacto')} className="btn-outline" style={{ padding: '10px 24px', fontSize: '11px' }}>
            Reservar cita
          </button>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}
          className="flex md:hidden"
          aria-label="Menú"
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }} transition={{ duration: 0.2 }} style={{ display: 'block', width: '22px', height: '1.5px', background: scrolled ? '#1a1a1a' : '#1a1a1a' }} />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} transition={{ duration: 0.15 }} style={{ display: 'block', width: '22px', height: '1.5px', background: '#1a1a1a' }} />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }} transition={{ duration: 0.2 }} style={{ display: 'block', width: '22px', height: '1.5px', background: '#1a1a1a' }} />
        </button>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', top: '72px', left: 0, right: 0, zIndex: 99,
              background: '#faf9f7',
              borderBottom: '1px solid rgba(26,26,26,0.1)',
              padding: '24px clamp(20px, 5vw, 60px) 32px',
              display: 'flex', flexDirection: 'column', gap: '24px',
            }}
          >
            {links.map((l, i) => (
              <motion.button
                key={l.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(l.href)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: 300, color: '#1a1a1a' }}
              >
                {l.label}
              </motion.button>
            ))}
            <button onClick={() => scrollTo('#contacto')} className="btn-primary" style={{ width: 'fit-content' }}>
              Reservar cita
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
