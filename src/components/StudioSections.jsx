import { ArrowUpRight, PlaneTakeoff, Plane, Rocket, Compass } from 'lucide-react'
import CountUp from './CountUp'
import { asset } from '../lib/assets'

const currentSponsors = [
  { name: 'Campa', logo: asset('/sponsors_logos/campa.png') },
  { name: 'Pakhtun Biriyani', logo: asset('/sponsors_logos/pakhtun_biriyani.png') },
  { name: 'Safar Travels', logo: asset('/sponsors_logos/safar_travels.png') },
  { name: 'Bazar Bakers', logo: asset('/sponsors_logos/Bazar_Bakers.png') },
  { name: 'The Culture', logo: asset('/sponsors_logos/the_culture.png') },
]

const previousSponsors = [
  { name: 'Rolls Mania', logo: asset('/sponsors_logos/rolls_mania.png') },
  { name: 'Decathlon', logo: asset('/sponsors_logos/Decathlon-Logo.png') },
  { name: 'AAI', logo: asset('/sponsors_logos/aai.png') },
  { name: 'Cultees', logo: asset('/sponsors_logos/cultees.png') },
  { name: 'Robopixel', logo: asset('/sponsors_logos/robopixel.png') },
]

const coreTeam = [
  { name: 'Amlanjyoti', role: 'Aerotech Head', image: 'https://res.cloudinary.com/dnmobechs/image/upload/v1790091019/IMG_20260628_105813.jpg_2_-removebg-preview_fk1bgy.png' },
  { name: 'Biki', role: 'Technical', image: 'https://res.cloudinary.com/dnmobechs/image/upload/v1790091182/ChatGPT_Image_Sep_21_2026_01_03_58_PM_fpgswf.png' },
  { name: 'Ipshita', role: 'PR', image: 'https://res.cloudinary.com/dnmobechs/image/upload/v1790092212/IMG_20260913_135616.jpg_1_-Photoroom_gnajgs.png' },
  { name: 'Tushar', role: 'Motion', image: 'https://res.cloudinary.com/dnmobechs/image/upload/v1790092148/IMG_20260913_135743.jpg_3_-Photoroom_obhudj.png' },
  { name: 'Akashdeep', role: 'Finance', image: 'https://res.cloudinary.com/dnmobechs/image/upload/v1790091046/IMG_1114_1_-Photoroom_u0oywd.png' },
  { name: 'Himanshu', role: 'Management', image: 'https://res.cloudinary.com/dnmobechs/image/upload/v1790091120/ChatGPT_Image_Sep_21_2026_02_08_34_PM_xqg3r5.png' },
  { name: 'Swapnali', role: 'Graphics', image: 'https://res.cloudinary.com/dnmobechs/image/upload/v1790092261/IMG_20260913_140201.jpg_2_-removebg-preview_fiqkk2.png' },
  { name: 'Mung Chung', role: 'Content Manager', image: 'https://res.cloudinary.com/dnmobechs/image/upload/v1790090973/EVENT_HEAD-removebg-preview_tluflu.png' },
];

export function Ticker() {
  const BadgeGroup = () => <>
    <span className="badge badge-blue"><PlaneTakeoff size={16} /> AEROMODELLING</span><span className="badge badge-yellow"><Plane size={16} /> FLIGHT ENGINEERING</span><span className="badge badge-pink"><Rocket size={16} /> INNOVATION</span><span className="badge badge-cyan"><Compass size={16} /> PIXEL ALCHEMY</span>
  </>
  return <section className="ticker-wrapper"><div className="ticker"><div className="ticker-track"><div className="ticker-content"><BadgeGroup /><BadgeGroup /></div><div className="ticker-content"><BadgeGroup /><BadgeGroup /></div></div><div className="ticker-track ticker-reverse"><div className="ticker-content"><BadgeGroup /><BadgeGroup /></div><div className="ticker-content"><BadgeGroup /><BadgeGroup /></div></div></div></section>
}

function SponsorRow({ sponsors }) {
  return <div className="sponsor-direct-row" id="Sponsors">{sponsors.map((sponsor) => <div key={sponsor.name} className="sponsor-direct-item" title={sponsor.name}><img src={sponsor.logo} alt={sponsor.name} className="sponsor-direct-img" /></div>)}</div>
}

export function ProofSection() {
  return <section className="proof container" id="studio"><div className="sponsor-section-heading"><div><h2 className="font-space font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.02em] text-black">OUR SPONSORS</h2></div></div><div className="sponsor-row-section"><div className="sponsor-mosaic-label"><span className="status-dot" /> Current sponsors <small>active now</small></div><SponsorRow sponsors={currentSponsors} /></div><div className="sponsor-row-section sponsor-row-section-previous"><div className="sponsor-mosaic-label"><span className="history-dot" /> Past supporters <small>past collaborators</small></div><SponsorRow sponsors={previousSponsors} /></div><div className="proof-metrics"><div className="stat-grid col-span-full w-full flex justify-between"><div><strong><CountUp from={0} to={500} separator="," duration={1.8} />+</strong><span>Participants</span></div><div><strong><CountUp from={0} to={5} duration={1.5} />+</strong><span>Years Legacy</span></div><div><strong><CountUp from={0} to={25} duration={1.5} />+</strong><span>Colleges</span></div><div><strong><CountUp from={0} to={2} duration={1} /></strong><span>Days</span></div></div></div></section>
}
export function AboutSection() {
  return <section className="about-section container" id="About">
    <div className="about-heading"><h2 className="font-space font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.02em] text-black">ABOUT<br /><span className="tracking-[0.02em]">AEROTECH.</span></h2></div>
    <div className="about-content"><div className="about-copy"><p className="about-lead">Aerotech is the flagship aeromodelling workshop and competition — a convergence of innovation, engineering, and the boundless sky.</p><p>From hands-on aeromodelling workshops to building and flying model aircraft, from keynote sessions by chief guests from the industry to exciting competitions — Aerotech brings together the brightest minds who dare to take flight.</p>
    <p>Now in its 2026 edition, Aerotech continues to grow as a platform where future aeromodelling enthusiasts are born, ideas take flight, and innovation is celebrated.</p>
    </div>
   <img className="imgaero" src={asset('/Aerotech.png')} alt="Aerotech 2026 event photo" />
    </div>
  </section>
}
function TeamCard({ member, index }) {
  return <article className="team-profile"><div className="team-profile-image"><img src={member.image} alt={`${member.name}, ${member.role}`} /><span className="team-profile-index">0{index + 1}</span></div><div className="team-profile-copy"><h3>{member.name}</h3><span className="team-profile-role">{member.role}</span></div></article>
}

export function TeamSection() {
  return (
    <section className="team-section w-full bg-black text-white" id="Team">
      <div className="container">
        <div className="team-heading">
          <h2 className="font-space font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.02em] text-white">
            CORE TEAM
          </h2>
        </div>
        <div className="team-grid">
          {coreTeam.map((member, index) => (
            <TeamCard member={member} index={index} key={member.name} />
          ))}
        </div>
      </div>
    </section>
  )
}