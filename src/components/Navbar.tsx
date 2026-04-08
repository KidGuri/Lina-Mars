import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Precios', href: '#precios' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Contacto', href: '#contacto' },
]

const MENU_HEIGHT = 320 // px — height of the mobile dropdown

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <>
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '0 clamp(20px, 5vw, 60px)',
          height: '72px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: scrolled || menuOpen ? 'rgba(250,249,247,0.97)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
          borderBottom: scrolled || menuOpen ? '1px solid rgba(26,26,26,0.08)' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={e => { e.preventDefault(); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}
        >
          <img
            src="/logo.png"
            alt="Lina Mars"
            style={{
              height: '32px',
              width: 'auto',
              maxWidth: 'none',
              flexShrink: 0,
              filter: scrolled || menuOpen ? 'invert(1)' : 'none',
              transition: 'filter 0.4s',
            }}
          />
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex"
          style={{ gap: 'clamp(16px, 3vw, 36px)', alignItems: 'center' }}
        >
          {links.map(l => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="nav-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contacto')}
            className="btn-outline"
            style={{ padding: '10px 24px', fontSize: '11px' }}
          >
            Reservar cita
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="flex md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}
          aria-label="Menú"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6.5 : 0 }}
            transition={{ duration: 0.22 }}
            style={{ display: 'block', width: '22px', height: '1.5px', background: '#1a1a1a' }}
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.15 }}
            style={{ display: 'block', width: '22px', height: '1.5px', background: '#1a1a1a' }}
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6.5 : 0 }}
            transition={{ duration: 0.22 }}
            style={{ display: 'block', width: '22px', height: '1.5px', background: '#1a1a1a' }}
          />
        </button>
      </header>

      {/* Mobile menu panel — sits right below the header, pushes nothing */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop — covers page content below the menu */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed',
                top: `${72 + MENU_HEIGHT}px`,
                left: 0, right: 0, bottom: 0,
                background: 'rgba(0,0,0,0.35)',
                zIndex: 98,
              }}
            />

            {/* Menu panel */}
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'fixed',
                top: '72px',
                left: 0, right: 0,
                height: `${MENU_HEIGHT}px`,
                zIndex: 99,
                background: '#faf9f7',
                borderBottom: '1px solid rgba(26,26,26,0.1)',
                padding: '28px clamp(20px, 5vw, 40px) 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {links.map((l, i) => (
                  <motion.button
                    key={l.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    onClick={() => scrollTo(l.href)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '26px', fontWeight: 300,
                      color: '#1a1a1a',
                      padding: '6px 0',
                      borderBottom: '1px solid rgba(26,26,26,0.07)',
                    }}
                  >
                    {l.label}
                  </motion.button>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28 }}
              >
                <button
                  onClick={() => scrollTo('#contacto')}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Reservar cita
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
