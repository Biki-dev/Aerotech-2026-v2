import { ArrowUpRight, Play } from 'lucide-react'

export function HeroSection({ onOpenModal, onShowToast }) {
  return <section className="hero container">
    <div className="hero-copy">
      <p className="eyebrow"><span className="eyebrow-dot" /> AI creative studio / 2026</p>
      <h1>TECHNOLOGY<br /><em>WITHOUT</em><br />BOUNDARIES<span className="period">.</span></h1>
      <p className="hero-dek">Where high-concept ideas become <strong>high-impact visuals.</strong> Build a new visual language with the world’s most expressive AI studio.</p>
      <div className="hero-actions">
        <button className="button button-dark" onClick={onOpenModal}>Start animating <ArrowUpRight size={17} /></button>
        <button className="play-link" onClick={() => onShowToast('Showreel coming soon')}><span className="play-circle"><Play size={12} fill="currentColor" /></span> Watch showreel</button>
      </div>
    </div>
    <div className="hero-art" aria-label="Abstract AI-generated portrait artwork">
      <div className="art-sun" /><div className="art-orb orb-one" /><div className="art-orb orb-two" />
      <div className="art-person"><div className="person-head" /><div className="person-body" /><div className="person-coat" /></div>
      <div className="art-label label-top">AEROTECH<br /><span>GEN / 04</span></div><div className="art-label label-bottom">PIXEL<br />POWERED</div><div className="art-lines" />
    </div>
  </section>
}
