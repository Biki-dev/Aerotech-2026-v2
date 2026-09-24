import { useEffect } from 'react'
import { ArrowUpRight, X } from 'lucide-react'

export function RegisterModal({ open, onClose, onSubmit }) {
  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="register-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close registration">
          <X size={20} />
        </button>
        <p className="section-kicker">Aerotech 2026</p>
        <h2 id="register-modal-title" className="modal-title">Join the waitlist</h2>
        <p className="modal-copy">
          Register your interest for workshops, competitions, and updates from Aerotech.
        </p>
        <form className="modal-form" onSubmit={onSubmit}>
          <label className="modal-field">
            <span>Email</span>
            <input type="email" name="email" required placeholder="you@college.edu" autoComplete="email" />
          </label>
          <button type="submit" className="button-animate modal-submit">
            <span className="animate-icon-wrapper">
              <ArrowUpRight size={18} />
            </span>
            Confirm registration
          </button>
        </form>
      </div>
    </div>
  )
}
