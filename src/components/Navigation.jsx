import { ArrowUpRight } from 'lucide-react'
import { Logo } from './Brand'

export function Navigation({ onNavigate, onOpenModal }) {
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <Logo />
        <div className="nav-links">
          <button type="button" onClick={() => onNavigate('timeline')}>Timeline</button>
          <button type="button" onClick={() => onNavigate('Sponsors')}>Sponsors</button>
          <button type="button" onClick={() => onNavigate('About')}>About</button>
          <button type="button" onClick={() => onNavigate('Team')}>Team</button>
          <button type="button" onClick={() => onNavigate('work')}>Gallery</button>
        </div>
        <button type="button" className="login-btn" onClick={onOpenModal}>
          Register <ArrowUpRight size={15} />
        </button>
      </nav>
    </header>
  )
}
