import { ArrowUpRight, PlaneTakeoff, Plane, Rocket, Compass } from 'lucide-react'

const currentSponsors = [
  { name: 'OpenAI', icon: '◉', detail: 'AI partner' },
  { name: 'Midjourney', icon: '✦', detail: 'Visual engine' },
  { name: 'Adobe', icon: '◆', detail: 'Creative suite' },
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

function SponsorIcon({ sponsor }) {
  return <span className="sponsor-icon" aria-hidden="true">{sponsor.icon}</span>
}

function SponsorRow({ sponsors, previous = false }) {
  return <div className={`sponsor-row ${previous ? 'sponsor-row-previous' : 'sponsor-row-current'}`}>
    {sponsors.map((sponsor) => <div className="sponsor-card" key={sponsor.name}>
      <SponsorIcon sponsor={sponsor} />
      <div><strong>{sponsor.name}</strong>{sponsor.detail && <small>{sponsor.detail}</small>}</div>
      {!previous && <ArrowUpRight className="sponsor-arrow" size={15} />}
    </div>)}
  </div>
}

export function ProofSection() {
  return <section className="proof container" id="studio">
    <div className="sponsor-timeline-head"><div><p className="section-kicker">004 / Our network</p><h2>BUILT WITH<br /><span>THE BEST.</span></h2></div><p className="sponsor-intro">A growing constellation of tools, teams, and ideas shaping what comes next.</p></div>
    <div className="sponsor-timeline"><div className="timeline-line" aria-hidden="true"><span className="timeline-progress" /></div>
      <div className="timeline-stage timeline-stage-current"><div className="timeline-marker">01</div><div className="timeline-stage-content"><div className="timeline-label"><span className="status-dot" /> Current sponsors <small>active / 2026</small></div><SponsorRow sponsors={currentSponsors} /></div></div>
      <div className="timeline-stage timeline-stage-previous"><div className="timeline-marker">02</div><div className="timeline-stage-content"><div className="timeline-label">Previous sponsors <small>past collaborators</small></div><SponsorRow sponsors={previousSponsors} previous /></div></div>
    </div>
    <div className="proof-metrics"><div className="stat-grid"><div><strong>1M</strong><span>users</span></div><div><strong>50M</strong><span>impressions</span></div><div><strong>500K</strong><span>happy clients</span></div></div><div className="proof-note"><div className="avatar-stack"><span>AL</span><span>JM</span><span>SK</span></div><div><strong>Millions of happy<br />customers</strong><small>AI tools to help design &amp; create</small></div></div></div>
  </section>
}

export function ManifestoSection({ onNavigate }) {
  return <section className="manifesto container"><div className="manifesto-head"><p className="section-kicker">001 / The manifesto</p><h2>MAGICAL<br /><span>PIXEL-BASED</span><br />ART.</h2></div><div className="manifesto-body"><div className="manifesto-image"><div className="gradient-sphere" /><span>PIXEL<br />ALCHEMY</span></div><div className="manifesto-copy"><p>Creativity is no longer limited by the tools in your hands. Aerotech is a playground for the curious, the bold, and the relentlessly imaginative.</p><a href="#work" onClick={(event) => { event.preventDefault(); onNavigate('work') }}>Explore the magic <ArrowUpRight size={17} /></a></div></div></section>
}
