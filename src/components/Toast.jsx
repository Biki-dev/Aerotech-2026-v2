export function Toast({ message }) {
  if (!message) return null

  return (
    <div className="site-toast" role="status" aria-live="polite">
      {message}
    </div>
  )
}
