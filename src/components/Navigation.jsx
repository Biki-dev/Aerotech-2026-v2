import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Logo } from './Brand'

export function Navigation({ menuOpen, onToggleMenu, onNavigate, onOpenModal }) {
  return <header className="nav-wrap">
    <nav className="nav container">
      <Logo />
      <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
        <button onClick={() => onNavigate('timeline')}>Timeline</button>
        <button onClick={() => onNavigate('Sponsors')}>Sponsors</button>
        <button onClick={() => onNavigate('About')}>About</button>
        <button onClick={() => onNavigate('Team')}>Team</button>
        <button onClick={() => onNavigate('work')}>Gallery</button>
        <button className="nav-mobile-cta" onClick={onOpenModal}>Start creating <ArrowUpRight size={15} /></button>
      </div>
      <button className="login-btn" onClick={onOpenModal}>Register <ArrowUpRight size={15} /></button>
      <button className="menu-btn" aria-label="Toggle menu" onClick={onToggleMenu}>{menuOpen ? <X /> : <Menu />}</button>
    </nav>
  </header>
}
