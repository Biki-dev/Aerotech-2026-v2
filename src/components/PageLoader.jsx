export function PageLoader({ phase }) {
  if (phase === 'done') return null

  return (
    <div
      className={`page-loader ${phase === 'exiting' ? 'page-loader--exiting' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Aerotech"
    >
      <div className="page-loader__inner">
        <div className="page-loader__mark" aria-hidden="true">
          <span /><span /><span /><span />
        </div>
        <p className="page-loader__label">AEROTECH</p>
        <div className="page-loader__bar">
          <span className="page-loader__bar-fill" />
        </div>
      </div>
    </div>
  )
}
