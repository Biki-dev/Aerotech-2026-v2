import { ArrowUpRight } from 'lucide-react'

export function HeroSection({ onOpenModal }) {
  return (
    <section className="hero container">
      <div className="hero-copy">

        {/* Top Heading */}
        <h1 className="tech-heading">
          <span className="line-1">CURI</span>
          <span className="line-2">
            <span className="letter-img img-1"></span>
            SITY
          </span>
        </h1>

        {/* Sub-heading & Action Button Wrapper */}
        {/* Sub-heading & Content Wrapper */}
        <div className="approach-row">
          {/* Left Column */}
          <div className="left-content">
            <h2 className="approach-heading">MEETS</h2>
            <button className="button button-animate" onClick={onOpenModal}>
              <span className="animate-icon-wrapper">
                <ArrowUpRight size={18} />
              </span>
              Start Animating
            </button>
            <div className="hero-text-block">
              <span className="hero-tag">// Welcome</span>
              <p>The ultimate aeromodelling workshop and competition. Pushing the boundaries of flight, engineering, and innovation.</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-content">
            <h2 className="approach-heading">INNOVATION</h2>
            <div className="hero-text-block text-right">
              <span className="hero-tag">// Ignite your</span>
              <p className="highlight-text">AEROMODELLING<br />JOURNEY</p>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Hero Artwork */}
      <div className="hero-art" aria-label="Abstract AI-generated artwork">
        <img src="/Neonaero.png" alt="Hero visual artwork" />
      </div>
    </section>
  )
}