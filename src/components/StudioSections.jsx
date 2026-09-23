import { ArrowUpRight, PlaneTakeoff, Plane, Rocket, Compass } from 'lucide-react'

const currentSponsors = [
  { name: 'OpenAI', icon: '◉' },
  { name: 'Midjourney', icon: '✦' },
  { name: 'Adobe', icon: '◆' },
]

const previousSponsors = [
  { name: 'Runway', icon: 'R' },
  { name: 'Figma', icon: 'F' },
  { name: 'Notion', icon: 'N' },
  { name: 'Framer', icon: 'F' },
]

export function Ticker() {
  const BadgeGroup = () => <>
    <span className="badge badge-blue"><PlaneTakeoff size={16} /> AEROMODELLING</span>
    <span className="badge badge-yellow"><Plane size={16} /> FLIGHT ENGINEERING</span>
    <span className="badge badge-pink"><Rocket size={16} /> INNOVATION</span>
    <span className="badge badge-cyan"><Compass size={16} /> PIXEL ALCHEMY</span>
  </>

  return <section className="ticker-wrapper"><div className="ticker">
    <div className="ticker-track"><div className="ticker-content"><BadgeGroup /><BadgeGroup /></div><div className="ticker-content"><BadgeGroup /><BadgeGroup /></div></div>
    <div className="ticker-track ticker-reverse"><div className="ticker-content"><BadgeGroup /><BadgeGroup /></div><div className="ticker-content"><BadgeGroup /><BadgeGroup /></div></div>
  </div></section>
}

function SponsorLogo({ sponsor }) {
  return <div className="sponsor-logo-card"><span className="sponsor-logo-mark" aria-hidden="true">{sponsor.icon}</span><strong>{sponsor.name}</strong></div>
}

function SponsorGroup({ label, sponsors, current = false }) {
  return <div className={`sponsor-group ${current ? 'sponsor-group-current' : 'sponsor-group-previous'}`}>
    <div className="sponsor-group-label"><span className={current ? 'status-dot' : 'history-dot'} />{label}<small>{current ? 'active now' : 'past collaborators'}</small></div>
    <div className="sponsor-logo-row">{sponsors.map((sponsor) => <SponsorLogo sponsor={sponsor} key={sponsor.name} />)}</div>
  </div>
}

export function ProofSection() {
  return <section className="proof container" id="studio">
    <div className="sponsor-section-heading"><div><p className="section-kicker">004 / Our network</p><h2>EVENT<br /><span>TIMELINE.</span></h2></div><p>Event Timeline<br /><strong>Aero Modeling Workshop &amp; Competition</strong> — two days of learning, building, and flying.</p></div>
    <div className="sponsor-groups"><SponsorGroup label="Current sponsors" sponsors={currentSponsors} current /><SponsorGroup label="Previous sponsors" sponsors={previousSponsors} /></div>
    <div className="proof-metrics"><div className="stat-grid"><div><strong>1M</strong><span>users</span></div><div><strong>50M</strong><span>impressions</span></div><div><strong>500K</strong><span>happy clients</span></div></div><div className="proof-note"><div className="avatar-stack"><span>AL</span><span>JM</span><span>SK</span></div><div><strong>Millions of happy<br />customers</strong><small>AI tools to help design &amp; create</small></div></div></div>
  </section>
}

export function ManifestoSection({ onNavigate }) {
  return <section className="manifesto container"><div className="manifesto-head"><p className="section-kicker">001 / The manifesto</p><h2>MAGICAL<br /><span>PIXEL-BASED</span><br />ART.</h2></div><div className="manifesto-body"><div className="manifesto-image"><div className="gradient-sphere" /><span>PIXEL<br />ALCHEMY</span></div><div className="manifesto-copy"><p>Creativity is no longer limited by the tools in your hands. Aerotech is a playground for the curious, the bold, and the relentlessly imaginative.</p><a href="#work" onClick={(event) => { event.preventDefault(); onNavigate('work') }}>Explore the magic <ArrowUpRight size={17} /></a></div></div></section>
}
