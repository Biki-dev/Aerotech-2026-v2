import { ArrowUpRight, PlaneTakeoff, Plane, Rocket, Compass } from 'lucide-react'

export function Ticker() {
  // Single reusable strip component
  const BadgeGroup = () => (
    <>
      <span className="badge badge-blue"><PlaneTakeoff size={16} /> AEROMODELLING</span>
      <span className="badge badge-yellow"><Plane size={16} /> FLIGHT ENGINEERING</span>
      <span className="badge badge-pink"><Rocket size={16} /> INNOVATION</span>
      <span className="badge badge-cyan"><Compass size={16} /> PIXEL ALCHEMY</span>
    </>
  )

  return (
    <section className="ticker-wrapper">
      <div className="ticker">
        {/* Track 1: Normal Direction */}
        <div className="ticker-track">
          <div className="ticker-content">
            <BadgeGroup />
            <BadgeGroup />
          </div>
          <div className="ticker-content">
            <BadgeGroup />
            <BadgeGroup />
          </div>
        </div>

        {/* Track 2: Reverse Direction */}
        <div className="ticker-track ticker-reverse">
          <div className="ticker-content">
            <BadgeGroup />
            <BadgeGroup />
          </div>
          <div className="ticker-content">
            <BadgeGroup />
            <BadgeGroup />
          </div>
        </div>
      </div>
    </section>
  )
}
export function ProofSection() {
  return (
    <section className="proof container" id="studio">
      <div className="proof-intro">
        <p className="section-kicker">Supported by</p>
        <div className="partner-row">
          <span>◉ OpenAI</span>
          <span>✦ Midjourney</span>
          <span>◆ Adobe</span>
        </div>
      </div>
      <div className="stat-grid">
        <div><strong>1M</strong><span>users</span></div>
        <div><strong>50M</strong><span>impressions</span></div>
        <div><strong>500K</strong><span>happy clients</span></div>
      </div>
      <div className="proof-note">
        <div className="avatar-stack">
          <span>AL</span><span>JM</span><span>SK</span>
        </div>
        <div>
          <strong>Millions of happy<br />customers</strong>
          <small>AI tools to help design &amp; create</small>
        </div>
      </div>
    </section>
  )
}

export function ManifestoSection({ onNavigate }) {
  return (
    <section className="manifesto container">
      <div className="manifesto-head">
        <p className="section-kicker">001 / The manifesto</p>
        <h2>MAGICAL<br /><span>PIXEL-BASED</span><br />ART.</h2>
      </div>
      <div className="manifesto-body">
        <div className="manifesto-image">
          <div className="gradient-sphere" />
          <span>PIXEL<br />ALCHEMY</span>
        </div>
        <div className="manifesto-copy">
          <p>Creativity is no longer limited by the tools in your hands. Aerotech is a playground for the curious, the bold, and the relentlessly imaginative.</p>
          <a href="#work" onClick={(event) => { event.preventDefault(); onNavigate('work') }}>
            Explore the magic <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}