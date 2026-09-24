import { ArrowUpRight, Sparkles, X } from 'lucide-react'

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

export function SignupModal({ onClose, onSubmit }) {
  return <div className="modal-backdrop" onClick={onClose}><div className="modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={onClose}><X size={19} /></button><Sparkles size={24} /><p className="section-kicker">Welcome to Aerotech</p><h2>Let’s make<br /><em>something strange.</em></h2><p>Drop your email and we’ll save you a seat in the studio.</p><form onSubmit={onSubmit}><input type="email" placeholder="you@example.com" required /><button className="button button-dark" type="submit">Enter the studio <ArrowUpRight size={17} /></button></form></div></div>
}

export function Toast({ message }) {
  return message ? <div className="toast">{message}</div> : null
}