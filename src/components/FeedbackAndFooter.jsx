import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="clean-footer">
      <div className="w-full flex flex-col justify-center items-center px-4">
        
        {/* Instagram Social Badge Link */}
        <a 
          href="https://www.instagram.com/aerotech_aec/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="insta-link-badge"
        >
          <div className="insta-icon-wrapper">
            <img 
              src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" 
              alt="Instagram" 
              className="insta-icon-img" 
            />
          </div>
          <span className="insta-handle">@aerotech_aec</span>
          <ArrowUpRight className="insta-arrow" size={16} />
        </a>

        {/* Big Stylized Typography */}
        <h1 className="clean-footer-title">AEROTECH</h1>

        {/* Bottom copyright line */}
        <div className="clean-footer-bottom">
          <span>© 2026 Aerotech Studio. All rights reserved.</span>
        </div>

      </div>
    </footer>
  )
}