import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Reveal from './components/Reveal'

gsap.registerPlugin(ScrollTrigger)

const photos = [
  '/photos/Screenshot_2026-04-08_at_16.16.05.png',
  '/photos/Screenshot_2026-04-08_at_16.16.14.png',
  '/photos/Screenshot_2026-04-08_at_16.16.43.png',
  '/photos/Screenshot_2026-04-08_at_16.16.51.png',
  '/photos/Screenshot_2026-04-08_at_16.17.01.png',
  '/photos/Screenshot_2026-04-08_at_16.17.35.png',
  '/photos/Screenshot_2026-04-08_at_16.18.13.png',
]

const services = [
  { name: 'Extensiones Clásicas', desc: 'Pelo a pelo, efecto natural y refinado. La técnica más delicada para un look elegante.' },
  { name: 'Volumen 2D–4D', desc: 'Mayor densidad y dramatismo. Perfectas para lucir una mirada más intensa y definida.' },
  { name: 'Mega Volumen 5–8D', desc: 'La máxima expresión de densidad. Para una mirada espectacular y llena de carácter.' },
  { name: 'Lifting de Pestañas', desc: 'Realza tus pestañas naturales con un efecto curvado duradero y tinte incluido.' },
  { name: 'Laminado de Cejas', desc: 'Define y fija tus cejas con tinte y depilación. Resultado perfecto hasta 6 semanas.' },
  { name: 'Diseño de Cejas', desc: 'Estudio y diseño personalizado de la forma ideal para tu rostro, con tinte.' },
]

const extensions = [
  { name: 'Clásico (pelo a pelo)', price: '40€', refill: '35€' },
  { name: 'Volumen 2D', price: '45€', refill: '40€' },
  { name: 'Volumen 3D', price: '50€', refill: '45€' },
  { name: 'Volumen 4D', price: '55€', refill: '50€' },
  { name: 'Mega volumen (5–8D)', price: '60€', refill: '50€' },
]

const extras = [
  { name: 'Efecto Kim', price: '+5€' },
  { name: 'Efecto mojado', price: '+5€' },
  { name: 'Curvatura L', price: '+5€' },
  { name: 'Colores', price: '+5€' },
  { name: 'Retirada de pestañas', price: '+5€' },
]

const otherServices = [
  { name: 'Lifting de pestañas + tinte', price: '30€' },
  { name: 'Laminado de cejas + tinte + depilación', price: '30€' },
  { name: 'Diseño de cejas + tinte', price: '17€' },
  { name: 'Depilación de cejas', price: '8€' },
  { name: 'Tinte de cejas / pestañas', price: '10€' },
]

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo('.hero-line-1', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', delay: 0.3 })
      .fromTo('.hero-line-2', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.7')
      .fromTo('.hero-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo('.hero-cta', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])

  return (
    <div style={{ background: '#faf9f7' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        style={{
          minHeight: '100svh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
          paddingBottom: 'clamp(60px, 10vh, 100px)',
          paddingLeft: 'clamp(20px, 6vw, 80px)',
          paddingRight: 'clamp(20px, 6vw, 80px)',
        }}
      >
        {/* Background image — first photo */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src={photos[0]}
            alt="Lina Mars"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
          <div className="hero-line-1 eyebrow" style={{ color: '#c9a98a', marginBottom: '20px', opacity: 0 }}>
            Alicante · 10+ años de experiencia
          </div>
          <h1
            className="hero-line-2"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 300,
              fontSize: 'clamp(48px, 9vw, 110px)',
              color: '#faf9f7',
              lineHeight: '0.95',
              letterSpacing: '-0.02em',
              marginBottom: '28px',
              opacity: 0,
            }}
          >
            La mirada<br />
            <em>que mereces</em>
          </h1>
          <p
            className="hero-sub"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(13px, 1.4vw, 16px)',
              color: 'rgba(250,249,247,0.7)',
              maxWidth: '420px',
              lineHeight: '1.8',
              marginBottom: '36px',
              opacity: 0,
            }}
          >
            Extensiones de pestañas profesionales y tratamientos de belleza personalizados para realzar tu mirada natural.
          </p>
          <div className="hero-cta flex flex-wrap gap-4" style={{ opacity: 0 }}>
            <a href="https://www.instagram.com/lina.mars_/" target="_blank" rel="noopener noreferrer" className="btn-light">
              Reservar cita
            </a>
            <button onClick={() => document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' })} className="btn-light" style={{ border: '1px solid rgba(250,249,247,0.25)', background: 'none', cursor: 'pointer' }}>
              Ver servicios
            </button>
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section style={{ background: '#1a1a1a', padding: 'clamp(40px, 6vw, 64px) clamp(20px, 6vw, 80px)' }}>
        <Reveal>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between', alignItems: 'center' }}>
            {[
              { num: '10+', label: 'Años de experiencia' },
              { num: '2.000+', label: 'Clientas satisfechas' },
              { num: '5', label: 'Técnicas especializadas' },
              { num: '100%', label: 'Productos certificados' },
            ].map(s => (
              <div key={s.num} style={{ textAlign: 'center', flex: '1 1 120px' }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(36px, 4vw, 52px)', color: '#faf9f7', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(250,249,247,0.4)', marginTop: '8px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── SERVICES ── */}
      <section id="servicios" className="section">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>Especialidades</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(32px, 5vw, 60px)', lineHeight: 1.1, letterSpacing: '-0.01em', marginBottom: '60px' }}>
              Servicios de<br /><em>alta precisión</em>
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1px', background: 'rgba(26,26,26,0.1)' }}>
            {services.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.07}>
                <div
                  style={{ background: '#faf9f7', padding: '36px 28px', transition: 'background 0.3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#f3ede6' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#faf9f7' }}
                >
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400, marginBottom: '12px', color: '#1a1a1a' }}>{s.name}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 300, color: 'rgba(26,26,26,0.55)', lineHeight: '1.7' }}>{s.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="galeria" style={{ background: '#f3ede6', padding: 'clamp(60px, 10vw, 120px) 0' }}>
        <div style={{ padding: '0 clamp(20px, 6vw, 80px)', marginBottom: '48px' }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>Galería</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(32px, 5vw, 60px)', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
              Cada mirada,<br /><em>una obra de arte</em>
            </h2>
          </Reveal>
        </div>

        {/* Scrolling gallery grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '3px', padding: '0 clamp(20px, 6vw, 80px)' }}>
          {photos.map((src, i) => (
            <Reveal key={src} delay={i * 0.05}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
                <img
                  src={src}
                  alt={`Trabajo ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  onMouseEnter={e => { (e.target as HTMLImageElement).style.transform = 'scale(1.04)' }}
                  onMouseLeave={e => { (e.target as HTMLImageElement).style.transform = 'scale(1)' }}
                />
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px', padding: '0 clamp(20px, 6vw, 80px)' }}>
          <Reveal>
            <a href="https://www.instagram.com/lina.mars_/" target="_blank" rel="noopener noreferrer" className="btn-outline">
              Ver más en Instagram
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── PRICES ── */}
      <section id="precios" className="section">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>Tarifas</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(32px, 5vw, 60px)', lineHeight: 1.1, letterSpacing: '-0.01em', marginBottom: '60px' }}>
              Precios<br /><em>transparentes</em>
            </h2>
          </Reveal>

          {/* Extensions */}
          <Reveal delay={0.1}>
            <div style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px', paddingBottom: '16px', borderBottom: '1px solid rgba(26,26,26,0.15)' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400 }}>Extensiones de pestañas</span>
                <div style={{ display: 'flex', gap: '40px' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.45)' }}>Nuevo</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.45)' }}>Relleno</span>
                </div>
              </div>
              {extensions.map((e, i) => (
                <motion.div
                  key={e.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="price-row"
                >
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 300, color: '#1a1a1a' }}>{e.name}</span>
                  <div style={{ display: 'flex', gap: '40px' }}>
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: 400, minWidth: '36px', textAlign: 'right' }}>{e.price}</span>
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: 400, minWidth: '36px', textAlign: 'right', color: '#c9a98a' }}>{e.refill}</span>
                  </div>
                </motion.div>
              ))}
              <div style={{ marginTop: '24px', padding: '16px 0', borderTop: '1px dashed rgba(26,26,26,0.1)' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.4)', marginBottom: '12px' }}>Extras · +5€ cada uno</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {extras.map(ex => (
                    <span key={ex.name} style={{ padding: '6px 14px', border: '1px solid rgba(201,169,138,0.4)', fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 300, color: '#1a1a1a' }}>
                      {ex.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Other services */}
          <Reveal delay={0.15}>
            <div>
              <div style={{ paddingBottom: '16px', marginBottom: '4px', borderBottom: '1px solid rgba(26,26,26,0.15)' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400 }}>Otros tratamientos</span>
              </div>
              {otherServices.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="price-row"
                >
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 300 }}>{s.name}</span>
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: 400 }}>{s.price}</span>
                </motion.div>
              ))}
            </div>
          </Reveal>

          {/* Combo */}
          <Reveal delay={0.2}>
            <div style={{ marginTop: '32px', background: '#1a1a1a', padding: '28px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a98a', marginBottom: '8px' }}>Oferta combinada</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 300, color: 'rgba(250,249,247,0.75)', lineHeight: '1.6' }}>
                  Lifting de pestañas + tinte<br />+ Laminado de cejas + tinte + depilación
                </div>
              </div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '48px', fontWeight: 300, color: '#faf9f7', lineHeight: 1 }}>55€</div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p style={{ marginTop: '20px', fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 300, color: 'rgba(26,26,26,0.4)', fontStyle: 'italic' }}>
              * Relleno válido hasta 21 días. Precios en euros, IVA incluido.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── COURSE ── */}
      <section id="cursos" style={{ background: '#1a1a1a', padding: 'clamp(60px, 10vw, 120px) clamp(20px, 6vw, 80px)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <Reveal>
              <div className="eyebrow" style={{ color: '#c9a98a', marginBottom: '16px' }}>Formación</div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(32px, 5vw, 60px)', lineHeight: 1.1, letterSpacing: '-0.01em', color: '#faf9f7', marginBottom: '24px' }}>
                Aprende el arte<br /><em>de las extensiones</em>
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 300, color: 'rgba(250,249,247,0.6)', lineHeight: '1.85', marginBottom: '36px', maxWidth: '460px' }}>
                Forma parte de nuestra escuela profesional y domina todas las técnicas de extensiones de pestañas de la mano de una experta con más de 10 años de experiencia. Al finalizar recibirás un <strong style={{ color: '#faf9f7', fontWeight: 400 }}>certificado oficial</strong> que acredita tu formación.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
                {[
                  'Técnicas clásicas y volumen',
                  'Materiales y herramientas profesionales',
                  'Salud y seguridad ocular',
                  'Práctica real con modelo',
                  'Certificado oficial al finalizar',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '4px', height: '4px', background: '#c9a98a', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 300, color: 'rgba(250,249,247,0.7)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <a href="https://www.instagram.com/lina.mars_/" target="_blank" rel="noopener noreferrer" className="btn-light">
                Solicitar información
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </a>
            </Reveal>
          </div>

          {/* Course visual */}
          <Reveal delay={0.1}>
            <div style={{ position: 'relative' }}>
              <img
                src={photos[4]}
                alt="Formación extensiones"
                style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top' }}
              />
              <div style={{ position: 'absolute', bottom: '-1px', left: '0', right: '0', height: '40%', background: 'linear-gradient(to top, #1a1a1a, transparent)' }} />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ background: '#c9a98a', padding: '10px 18px' }}>
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400, color: '#faf9f7' }}>Certificado oficial</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ padding: 'clamp(60px, 10vw, 120px) clamp(20px, 6vw, 80px)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '60px', alignItems: 'center' }}>
          <Reveal>
            <div style={{ position: 'relative' }}>
              <img src={photos[1]} alt="Lina Mars" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top' }} />
              <div style={{ position: 'absolute', top: '24px', right: '-1px', background: '#faf9f7', padding: '16px 20px', borderLeft: '3px solid #c9a98a' }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '32px', fontWeight: 300, lineHeight: 1 }}>10+</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.5)', marginTop: '4px' }}>años</div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: '16px' }}>Sobre mí</div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1, letterSpacing: '-0.01em', marginBottom: '28px' }}>
                Pasión por la<br /><em>belleza natural</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 300, color: 'rgba(26,26,26,0.65)', lineHeight: '1.85', marginBottom: '20px' }}>
                Soy Lina, especialista en extensiones de pestañas con más de 10 años de experiencia en el sector. Mi trabajo se basa en la precisión, el cuidado y la belleza que realza lo mejor de cada mirada.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 300, color: 'rgba(26,26,26,0.65)', lineHeight: '1.85', marginBottom: '36px' }}>
                Ubicada en Alicante, ofrezco un servicio completamente personalizado y con los mejores productos del mercado. Cada clienta es única y su mirada lo merece.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a href="https://www.instagram.com/lina.mars_/" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Sígueme en Instagram
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contacto" style={{ background: '#f3ede6', padding: 'clamp(60px, 10vw, 120px) clamp(20px, 6vw, 80px)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>Contacto</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: '20px' }}>
              Tu nueva mirada<br /><em>te espera</em>
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 300, color: 'rgba(26,26,26,0.6)', lineHeight: '1.8', maxWidth: '420px', margin: '0 auto 40px' }}>
              Reserva tu cita a través de Instagram o envíame un mensaje directo. Estoy en Alicante y encantada de atenderte.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              <a href="https://www.instagram.com/lina.mars_/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
                @lina.mars_
              </a>
              <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" className="btn-outline">
                WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(26,26,26,0.1)', fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 300, color: 'rgba(26,26,26,0.45)', letterSpacing: '0.08em' }}>
              Alicante, España
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#1a1a1a', padding: '32px clamp(20px, 6vw, 80px)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
        <img src="/logo.png" alt="Lina Mars" style={{ height: '24px', width: 'auto' }} />
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 300, color: 'rgba(250,249,247,0.3)', letterSpacing: '0.08em' }}>
          © {new Date().getFullYear()} Lina Mars · Alicante
        </div>
        <a href="https://www.instagram.com/lina.mars_/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(250,249,247,0.4)', transition: 'color 0.2s', display: 'flex' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#faf9f7' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(250,249,247,0.4)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
        </a>
      </footer>
    </div>
  )
}
