import { ArrowUpRight, Play } from 'lucide-react'

export function HeroSection({ onOpenModal, onShowToast }) {
  return <section className="hero container">
    <div className="hero-copy">
      <p className="eyebrow"><span className="eyebrow-dot" />/ 2026</p>
      <h1>WHERE<br /><em>CURIOSITY</em><br />MEETS INNOVATION<span className="period">.</span></h1>

      <div className="hero-actions">
        <button className="button button-dark" onClick={onOpenModal}>Start animating <ArrowUpRight size={17} /></button>
        <button className="play-link" onClick={() => onShowToast('Showreel coming soon')}><span className="play-circle"><Play size={12} fill="currentColor" /></span> Watch showreel</button>
      </div>
    </div>
    <div className="hero-art" aria-label="Abstract AI-generated portrait artwork">
      <img src="/Neonaero.png" alt="" />
    </div>
  </section>
}
