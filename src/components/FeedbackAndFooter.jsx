import { ArrowUpRight, Sparkles, X } from 'lucide-react'
import { Logo } from './Brand'

export function Footer() {
  return <footer className="footer"><div className="container footer-top"><Logo dark /><div className="footer-links"><a href="#work">Gallery</a><a href="#studio">Studio</a><a href="#plans">Pricing</a><a href="mailto:hello@aerotech.studio">Contact</a></div><p>Built for the next<br />generation of makers.</p></div><div className="container footer-bottom"><span>© 2026 Aerotech Studio</span><span>Instagram&nbsp;&nbsp; Are.na&nbsp;&nbsp; Behance</span></div></footer>
}

export function SignupModal({ onClose, onSubmit }) {
  return <div className="modal-backdrop" onClick={onClose}><div className="modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={onClose}><X size={19} /></button><Sparkles size={24} /><p className="section-kicker">Welcome to Aerotech</p><h2>Let’s make<br /><em>something strange.</em></h2><p>Drop your email and we’ll save you a seat in the studio.</p><form onSubmit={onSubmit}><input type="email" placeholder="you@example.com" required /><button className="button button-dark" type="submit">Enter the studio <ArrowUpRight size={17} /></button></form></div></div>
}

export function Toast({ message }) {
  return message ? <div className="toast">{message}</div> : null
}
