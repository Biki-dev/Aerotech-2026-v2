export function Mark({ dark = false }) {
  return <span className={`mark ${dark ? 'mark-dark' : ''}`} aria-hidden="true"><span /><span /><span /><span /></span>
}

export function Logo({ dark = false }) {
  return <img className="logo" src="./aerotech_logo.png" alt="Aerotech Logo" />
}
