import { ArrowUpRight, Sparkles, X } from 'lucide-react'

export function Footer() {
  return (
    <footer className="clean-footer">
      <div className="w-full flex justify-center items-center px-4">
        <h1 className="clean-footer-title">AEROTECH</h1>
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