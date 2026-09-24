import { ArrowUpRight, PlaneTakeoff, Plane, Rocket, Compass } from 'lucide-react'
import CountUp from './CountUp'
import Lanyard from './lanyard/Lanyard'

const currentSponsors = [
  { name: 'Campa', logo: '/sponsors_logos/campa.png' },
  { name: 'Pakhtun Biriyani', logo: '/sponsors_logos/pakhtun_biriyani.png' },
  { name: 'Safar Travels', logo: '/sponsors_logos/safar_travels.png' },
  { name: 'Bazar Bakers', logo: '/sponsors_logos/Bazar_Bakers.png' },
  { name: 'The Culture', logo: '/sponsors_logos/the_culture.png' },
]

const previousSponsors = [
  { name: 'Rolls Mania', logo: '/sponsors_logos/rolls_mania.png' },
  { name: 'Decathlon', logo: '/sponsors_logos/Decathlon-Logo.png' },
  { name: 'AAI', logo: '/sponsors_logos/aai.png' },
  { name: 'Cultees', logo: '/sponsors_logos/cultees.png' },
  { name: 'Robopixel', logo: '/sponsors_logos/robopixel.png' },
]

const coreTeam = [
  { name: 'Aarav Mehta', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85' },
  { name: 'Maya Chen', role: 'Experience Lead', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=85' },
  { name: 'Rohan Kapoor', role: 'Tech Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=85' },
  { name: 'Nia Williams', role: 'Visual Artist', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=85' },
  { name: 'Samir Patel', role: 'Motion Designer', image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=500&q=85' },
  { name: 'Elena Rossi', role: 'Product Strategist', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=500&q=85' },
  { name: 'Theo Brooks', role: 'Creative Technologist', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=85' },
  { name: 'Iris Okafor', role: 'Community Lead', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=85' },
]

export function Ticker() {
  const BadgeGroup = () => <>
    <span className="badge badge-blue"><PlaneTakeoff size={16} /> AEROMODELLING</span><span className="badge badge-yellow"><Plane size={16} /> FLIGHT ENGINEERING</span><span className="badge badge-pink"><Rocket size={16} /> INNOVATION</span><span className="badge badge-cyan"><Compass size={16} /> PIXEL ALCHEMY</span>
  </>
  return <section className="ticker-wrapper"><div className="ticker"><div className="ticker-track"><div className="ticker-content"><BadgeGroup /><BadgeGroup /></div><div className="ticker-content"><BadgeGroup /><BadgeGroup /></div></div><div className="ticker-track ticker-reverse"><div className="ticker-content"><BadgeGroup /><BadgeGroup /></div><div className="ticker-content"><BadgeGroup /><BadgeGroup /></div></div></div></section>
}

function SponsorRow({ sponsors }) {
  return <div className="sponsor-direct-row">{sponsors.map((sponsor) => <div key={sponsor.name} className="sponsor-direct-item" title={sponsor.name}><img src={sponsor.logo} alt={sponsor.name} className="sponsor-direct-img" /></div>)}</div>
}

export function ProofSection() {
  return <section className="proof container" id="studio"><div className="sponsor-section-heading"><div><h2 className="font-space font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.02em] text-black">OUR SPONSORS</h2></div><p className="text-black/70 text-sm md:text-base font-space mt-4 max-w-lg font-medium leading-relaxed">The people and brands helping the next generation take flight.</p></div><div className="sponsor-row-section"><div className="sponsor-mosaic-label"><span className="status-dot" /> Current sponsors <small>active now</small></div><SponsorRow sponsors={currentSponsors} /></div><div className="sponsor-row-section sponsor-row-section-previous"><div className="sponsor-mosaic-label"><span className="history-dot" /> Past supporters <small>past collaborators</small></div><SponsorRow sponsors={previousSponsors} /></div><div className="proof-metrics"><div className="stat-grid col-span-full w-full flex justify-between"><div><strong><CountUp from={0} to={500} separator="," duration={1.8} />+</strong><span>Participants</span></div><div><strong><CountUp from={0} to={5} duration={1.5} />+</strong><span>Years Legacy</span></div><div><strong><CountUp from={0} to={25} duration={1.5} />+</strong><span>Colleges</span></div><div><strong><CountUp from={0} to={2} duration={1} /></strong><span>Days</span></div></div></div></section>
}

function TeamCard({ member, index }) {
  return <article className="team-card"><div className="team-card-meta"><span>CORE TEAM / 0{index + 1}</span><span>{member.role}</span></div><div className="team-lanyard"><Lanyard position={[0, 0, 24]} gravity={[0, -40, 0]} frontImage={member.image} backImage={member.image} imageFit="cover" /></div><div className="team-card-name"><strong>{member.name}</strong><span>AEROTECH / CREATIVE UNIT</span></div></article>
}

export function TeamSection() {
  return <section className="team-section container" id="team"><div className="team-heading"><div><p className="section-kicker">001 / The people</p><h2>MEET THE<br /><span>CORE TEAM.</span></h2></div><p>Eight minds, one shared obsession: building a more imaginative future.</p></div><div className="team-grid">{coreTeam.map((member, index) => <TeamCard member={member} index={index} key={member.name} />)}</div></section>
}
