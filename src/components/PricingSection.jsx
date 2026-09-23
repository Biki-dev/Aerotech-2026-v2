import { ArrowUpRight, Check } from 'lucide-react'

export function PricingSection({ onOpenModal }) {
  return <section className="plans-section" id="plans"><div className="container plans-inner"><div><p className="section-kicker">003 / Choose your level</p><h2>MAKE MORE<br /><span>OF YOUR</span><br />IMAGINATION.</h2></div><div className="plans-card"><div className="plan-top"><span>Creator plan</span><span className="plan-price">$18<small>/mo</small></span></div><p>Everything you need to take the leap from idea to image.</p><ul><li><Check size={16} /> Unlimited canvas experiments</li><li><Check size={16} /> 4K exports, always</li><li><Check size={16} /> Commercial usage rights</li></ul><button className="button button-light" onClick={onOpenModal}>Try Aerotech free <ArrowUpRight size={17} /></button></div></div></section>
}
