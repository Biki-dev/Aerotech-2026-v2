import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, ChevronDown, Menu, X, Sparkles, Play, Check } from 'lucide-react'
import './styles.css'

const galleryItems = [
  { title: 'Chromatic ritual', tag: 'Portraits', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85', className: 'tall' },
  { title: 'Soft machinery', tag: 'Objects', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85', className: 'wide' },
  { title: 'Neon studies / 04', tag: 'Abstract', image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=85', className: 'square' },
  { title: 'A future in bloom', tag: 'Portraits', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85', className: 'square' },
  { title: 'The orange room', tag: 'Objects', image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=900&q=85', className: 'wide' },
  { title: 'Electric horizon', tag: 'Abstract', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85', className: 'tall' },
]

function Mark({ dark = false }) {
  return <span className={`mark ${dark ? 'mark-dark' : ''}`} aria-hidden="true"><span /><span /><span /><span /></span>
}

function Logo({ dark = false }) {
  return <a className={`logo ${dark ? 'logo-dark' : ''}`} href="#top" aria-label="Aerotech home"><Mark dark={dark} /><span>AEROTECH</span></a>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All work')
  const [modalOpen, setModalOpen] = useState(false)
  const [toast, setToast] = useState('')

  const filteredItems = useMemo(() => activeFilter === 'All work' ? galleryItems : galleryItems.filter(item => item.tag === activeFilter), [activeFilter])

  const showToast = (message) => {
    setToast(message)
    window.setTimeout(() => setToast(''), 2800)
  }

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div id="top" className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <Logo />
          <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
            <button onClick={() => scrollTo('work')}>Gallery</button>
            <button onClick={() => scrollTo('studio')}>Studio</button>
            <button onClick={() => scrollTo('plans')}>Pricing</button>
            <button className="nav-mobile-cta" onClick={() => setModalOpen(true)}>Start creating <ArrowUpRight size={15} /></button>
          </div>
          <button className="login-btn" onClick={() => setModalOpen(true)}>Log in <ArrowUpRight size={15} /></button>
          <button className="menu-btn" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> AI creative studio / 2026</p>
            <h1>TECHNOLOGY<br /><em>WITHOUT</em><br />BOUNDARIES<span className="period">.</span></h1>
            <p className="hero-dek">Where high-concept ideas become <strong>high-impact visuals.</strong> Build a new visual language with the world’s most expressive AI studio.</p>
            <div className="hero-actions">
              <button className="button button-dark" onClick={() => setModalOpen(true)}>Start animating <ArrowUpRight size={17} /></button>
              <button className="play-link" onClick={() => showToast('Showreel coming soon')}><span className="play-circle"><Play size={12} fill="currentColor" /></span> Watch showreel</button>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract AI-generated portrait artwork">
            <div className="art-sun" />
            <div className="art-orb orb-one" />
            <div className="art-orb orb-two" />
            <div className="art-person"><div className="person-head" /><div className="person-body" /><div className="person-coat" /></div>
            <div className="art-label label-top">AEROTECH<br /><span>GEN / 04</span></div>
            <div className="art-label label-bottom">PIXEL<br />POWERED</div>
            <div className="art-lines" />
          </div>
        </section>

        <section className="ticker"><div className="ticker-track"><span>MAKE THE UNIMAGINABLE</span><b>✳</b><span>MOVE AT THE SPEED OF THOUGHT</span><b>✳</b><span>MAKE THE UNIMAGINABLE</span><b>✳</b></div></section>

        <section className="proof container" id="studio">
          <div className="proof-intro"><p className="section-kicker">Supported by</p><div className="partner-row"><span>◉ OpenAI</span><span>✦ Midjourney</span><span>◆ Adobe</span></div></div>
          <div className="stat-grid"><div><strong>1M</strong><span>users</span></div><div><strong>50M</strong><span>impressions</span></div><div><strong>500K</strong><span>happy clients</span></div></div>
          <div className="proof-note"><div className="avatar-stack"><span>AL</span><span>JM</span><span>SK</span></div><div><strong>Millions of happy<br />customers</strong><small>AI tools to help design & create</small></div></div>
        </section>

        <section className="manifesto container"><div className="manifesto-head"><p className="section-kicker">001 / The manifesto</p><h2>MAGICAL<br /><span>PIXEL-BASED</span><br />ART.</h2></div><div className="manifesto-body"><div className="manifesto-image"><div className="gradient-sphere" /><span>PIXEL<br />ALCHEMY</span></div><div className="manifesto-copy"><p>Creativity is no longer limited by the tools in your hands. Aerotech is a playground for the curious, the bold, and the relentlessly imaginative.</p><a href="#work" onClick={(e) => { e.preventDefault(); scrollTo('work') }}>Explore the magic <ArrowUpRight size={17} /></a></div></div></section>

        <section className="work-section container" id="work"><div className="work-heading"><div><p className="section-kicker">002 / The gallery</p><h2>SEE WHAT'S<br /><span>POSSIBLE.</span></h2></div><div className="filter-row">{['All work', 'Portraits', 'Objects', 'Abstract'].map(filter => <button key={filter} className={activeFilter === filter ? 'active' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div></div><div className="gallery-grid">{filteredItems.map(item => <article className={`gallery-card ${item.className}`} key={item.title}><img src={item.image} alt={item.title} /><div className="card-overlay"><span>{item.tag}</span><h3>{item.title}</h3><ArrowUpRight size={19} /></div></article>)}</div></section>

        <section className="plans-section" id="plans"><div className="container plans-inner"><div><p className="section-kicker">003 / Choose your level</p><h2>MAKE MORE<br /><span>OF YOUR</span><br />IMAGINATION.</h2></div><div className="plans-card"><div className="plan-top"><span>Creator plan</span><span className="plan-price">$18<small>/mo</small></span></div><p>Everything you need to take the leap from idea to image.</p><ul><li><Check size={16} /> Unlimited canvas experiments</li><li><Check size={16} /> 4K exports, always</li><li><Check size={16} /> Commercial usage rights</li></ul><button className="button button-light" onClick={() => setModalOpen(true)}>Try Aerotech free <ArrowUpRight size={17} /></button></div></div></section>
      </main>

      <footer className="footer"><div className="container footer-top"><Logo dark /><div className="footer-links"><a href="#work">Gallery</a><a href="#studio">Studio</a><a href="#plans">Pricing</a><a href="mailto:hello@aerotech.studio">Contact</a></div><p>Built for the next<br />generation of makers.</p></div><div className="container footer-bottom"><span>© 2026 Aerotech Studio</span><span>Instagram&nbsp;&nbsp; Are.na&nbsp;&nbsp; Behance</span></div></footer>

      {modalOpen && <div className="modal-backdrop" onClick={() => setModalOpen(false)}><div className="modal" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setModalOpen(false)}><X size={19} /></button><Sparkles size={24} /><p className="section-kicker">Welcome to Aerotech</p><h2>Let’s make<br /><em>something strange.</em></h2><p>Drop your email and we’ll save you a seat in the studio.</p><form onSubmit={(e) => { e.preventDefault(); setModalOpen(false); showToast('You’re on the list — welcome to Aerotech.') }}><input type="email" placeholder="you@example.com" required /><button className="button button-dark" type="submit">Enter the studio <ArrowUpRight size={17} /></button></form></div></div>}
      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
