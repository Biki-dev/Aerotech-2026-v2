import { ArrowUpRight, PlaneTakeoff, Plane, Rocket, Compass } from 'lucide-react'
import CountUp from './CountUp';

const currentSponsors = [
  { name: 'Campa', logo: '/sponsors_logos/campa.png' },
  { name: 'Pakhtun Biriyani', logo: '/sponsors_logos/pakhtun_biriyani.png' },
  { name: 'Safar Travels', logo: '/sponsors_logos/safar_travels.png' },
  { name: 'Bazar Bakers', logo: '/sponsors_logos/Bazar_Bakers.png' },
  { name: 'The Culture', logo: '/sponsors_logos/the_culture.png' },
];

const previousSponsors = [
  { name: 'Rolls Mania', logo: '/sponsors_logos/rolls_mania.png' },
  { name: 'Decathlon', logo: '/sponsors_logos/Decathlon-Logo.png' },
  { name: 'AAI', logo: '/sponsors_logos/aai.png' },
  { name: 'Cultees', logo: '/sponsors_logos/cultees.png' },
  { name: 'Robopixel', logo: '/sponsors_logos/robopixel.png' },
];

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

function SponsorRow({ sponsors }) {
  return (
    <div className="sponsor-direct-row">
      {sponsors.map((sponsor) => (
        <div key={sponsor.name} className="sponsor-direct-item" title={sponsor.name}>
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="sponsor-direct-img"
          />
        </div>
      ))}
    </div>
  );
}

export function ProofSection() {
  return (
    <section className="proof container" id="studio">
      <div className="sponsor-section-heading">
        <div>
          <h2 className="font-space font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.02em] text-black">
            OUR SPONSORS
          </h2>
        </div>
        <p className="text-black/70 text-sm md:text-base font-space mt-4 max-w-lg font-medium leading-relaxed">
          The people and brands helping the next generation take flight.
        </p>
      </div>

      {/* 1. Current Sponsors Row */}
      <div className="sponsor-row-section">
        <div className="sponsor-mosaic-label">
          <span className="status-dot" /> Current sponsors <small>active now</small>
        </div>
        <SponsorRow sponsors={currentSponsors} />
      </div>

      {/* 2. Previous Sponsors Row */}
      <div className="sponsor-row-section sponsor-row-section-previous">
        <div className="sponsor-mosaic-label">
          <span className="history-dot" /> Past supporters <small>past collaborators</small>
        </div>
        <SponsorRow sponsors={previousSponsors} />
      </div>

   <div className="proof-metrics">
  <div className="stat-grid col-span-full w-full flex justify-between">
    <div>
      <strong>
        <CountUp from={0} to={500} separator="," duration={1.8} />+
      </strong>
      <span>Participants</span>
    </div>
    <div>
      <strong>
        <CountUp from={0} to={5} duration={1.5} />+
      </strong>
      <span>Years Legacy</span>
    </div>
    <div>
      <strong>
        <CountUp from={0} to={25} duration={1.5} />+
      </strong>
      <span>Colleges</span>
    </div>
    <div>
      <strong>
        <CountUp from={0} to={2} duration={1} />
      </strong>
      <span>Days</span>
    </div>
  </div>
</div>

    </section>
  );
}
export function ManifestoSection({ onNavigate }) {
  return <section className="manifesto container"><div className="manifesto-head"><p className="section-kicker">001 / The manifesto</p><h2>MAGICAL<br /><span>PIXEL-BASED</span><br />ART.</h2></div><div className="manifesto-body"><div className="manifesto-image"><div className="gradient-sphere" /><span>PIXEL<br />ALCHEMY</span></div><div className="manifesto-copy"><p>Creativity is no longer limited by the tools in your hands. Aerotech is a playground for the curious, the bold, and the relentlessly imaginative.</p><a href="#work" onClick={(event) => { event.preventDefault(); onNavigate('work') }}>Explore the magic <ArrowUpRight size={17} /></a></div></div></section>
}