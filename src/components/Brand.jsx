export function Mark({ dark = false }) {
  return <span className={`mark ${dark ? 'mark-dark' : ''}`} aria-hidden="true"><span /><span /><span /><span /></span>
}

export function Logo({ dark = false }) {
  return <a className={`logo ${dark ? 'logo-dark' : ''}`} href="#top" aria-label="Aerotech home"><Mark dark={dark} /><span>AEROTECH</span></a>
}
