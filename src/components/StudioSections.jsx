import { ArrowUpRight, PlaneTakeoff, Plane, Rocket, Compass } from 'lucide-react'

const currentSponsors = [
  { name: 'OpenAI', icon: '◉', category: 'AI PARTNER', featured: true },
  { name: 'Midjourney', icon: '✦', category: 'VISUAL PARTNER' },
  { name: 'Adobe', icon: '◆', category: 'CREATIVE PARTNER' },
  { name: 'Runway', icon: 'R', category: 'MOTION PARTNER' },
  { name: 'Figma', icon: 'F', category: 'DESIGN PARTNER' },
]

const previousSponsors = [
  { name: 'Notion', icon: 'N', category: 'WORKFLOW PARTNER', featured: true },
  { name: 'Framer', icon: 'F', category: 'WEB PARTNER' },
  { name: 'Canva', icon: 'C', category: 'DESIGN PARTNER' },
  { name: 'Vercel', icon: '▲', category: 'TECH PARTNER' },
  { name: 'Linear', icon: 'L', category: 'PRODUCT PARTNER' },
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

function SponsorTile({ sponsor, index }) {
  return <article className={`sponsor-tile ${sponsor.featured ? 'sponsor-tile-featured' : ''}`}>
    <span className="sponsor-tile-number">{String(index + 1).padStart(2, '0')}</span>
    <div className="sponsor-tile-logo"><span>{sponsor.icon}</span><strong>{sponsor.name}</strong></div>
    <div className="sponsor-tile-footer"><span>{sponsor.category}</span><ArrowUpRight size={15} /></div>
    <span className="sponsor-tile-orbit" aria-hidden="true" />
  </article>
}

function SponsorMosaic({ sponsors, previous = false }) {
  return <div className={`sponsor-mosaic ${previous ? 'sponsor-mosaic-previous' : ''}`}>
    {sponsors.map((sponsor, index) => <SponsorTile sponsor={sponsor} index={index} key={sponsor.name} />)}
  </div>
}

export function ProofSection() {
  return <section className="proof container" id="studio">
    <div className="sponsor-section-heading"><div><p className="section-kicker">004 / Our network</p><h2>EVENT<br /><span>TIMELINE.</span></h2></div><p>Event Timeline<br /><strong>Aero Modeling Workshop &amp; Competition</strong> — two days of learning, building, and flying.</p></div>
    <div className="sponsor-mosaic-section"><div className="sponsor-mosaic-label"><span className="status-dot" /> Current sponsors <small>active now</small></div><SponsorMosaic sponsors={currentSponsors} /></div>
    <div className="sponsor-mosaic-section sponsor-mosaic-section-previous"><div className="sponsor-mosaic-label"><span className="history-dot" /> Previous sponsors <small>past collaborators</small></div><SponsorMosaic sponsors={previousSponsors} previous /></div>
    <div className="proof-metrics"><div className="stat-grid"><div><strong>1M</strong><span>users</span></div><div><strong>50M</strong><span>impressions</span></div><div><strong>500K</strong><span>happy clients</span></div></div><div className="proof-note"><div className="avatar-stack"><span>AL</span><span>JM</span><span>SK</span></div><div><strong>Millions of happy<br />customers</strong><small>AI tools to help design &amp; create</small></div></div></div>
  </section>
}

export function ManifestoSection({ onNavigate }) {
  return <section className="manifesto container"><div className="manifesto-head"><p className="section-kicker">001 / The manifesto</p><h2>MAGICAL<br /><span>PIXEL-BASED</span><br />ART.</h2></div><div className="manifesto-body"><div className="manifesto-image"><div className="gradient-sphere" /><span>PIXEL<br />ALCHEMY</span></div><div className="manifesto-copy"><p>Creativity is no longer limited by the tools in your hands. Aerotech is a playground for the curious, the bold, and the relentlessly imaginative.</p><a href="#work" onClick={(event) => { event.preventDefault(); onNavigate('work') }}>Explore the magic <ArrowUpRight size={17} /></a></div></div></section>
}
