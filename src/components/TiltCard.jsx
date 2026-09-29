import { useEffect, useRef, useState } from 'react'

/* ── inlined from lab/spring ───────────────────────────────
   One spring drives the pointer position, the rotation, the
   gradients and the shadow so the card always settles as one
   physical surface instead of several effects fighting each other. */
const springOf = (tune) => ({
  /* stiffness: how hard it is pulled toward the target */
  k: 0.08 + (tune / 100) * 0.16,
  /* decay, per frame: how much of the velocity survives */
  d: 0.62 + (tune / 100) * 0.2,
})

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
const mix = (from, to, amount) => from + (to - from) * amount

function useSpring(target, tune = 50, instant = false) {
  const [at, setAt] = useState(target)
  const current = useRef(target)
  const velocity = useRef(0)
  const raf = useRef(0)

  useEffect(() => {
    if (instant) {
      current.current = target
      velocity.current = 0
      setAt(target)
      return undefined
    }

    const { k, d } = springOf(tune)
    let previous = 0
    const tick = (time) => {
      const dt = previous ? clamp((time - previous) / 16.67, 0, 2.5) : 1
      previous = time
      velocity.current += (target - current.current) * k * dt
      velocity.current *= Math.pow(d, dt)
      current.current += velocity.current * dt

      if (Math.abs(target - current.current) < 0.02 && Math.abs(velocity.current) < 0.02) {
        current.current = target
        velocity.current = 0
        setAt(target)
        raf.current = 0
        return
      }

      setAt(current.current)
      raf.current = requestAnimationFrame(tick)
    }

    raf.current = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf.current)
      raf.current = 0
    }
  }, [target, tune, instant])

  return at
}

const stillness = () =>
  typeof window !== 'undefined' &&
  !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/*
  A picture card that gives under the pointer.

  IT SINKS, IT DOES NOT LIFT. The cursor position is sprung and
  read by the rotation, dent, rim light and shadow together.
*/
export function TiltCard({
  image,
  alt = '',
  children,
  className = '',
  tilt = 10,
  corner = 5,
  shade = 60,
}) {
  const skin = useRef(null)
  const [at, setAt] = useState({ x: 0, y: 0 })
  const [on, setOn] = useState(false)
  const still = stillness()

  const sx = useSpring(on ? at.x : 0, 50, still)
  const sy = useSpring(on ? at.y : 0, 50, still)
  const lit = useSpring(on ? 1 : 0, 50, still)

  const max = clamp(tilt, 0, 20)
  const rx = -sy * max
  const ry = sx * max
  const px = ((sx + 1) / 2) * 100
  const py = ((sy + 1) / 2) * 100
  const dark = (clamp(shade, 0, 100) / 100) * 0.55 * lit
  const rim = (clamp(shade, 0, 100) / 100) * 0.34 * lit

  const track = (event) => {
    const element = skin.current
    if (!element) return
    const rect = element.getBoundingClientRect()
    setAt({
      x: clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1),
      y: clamp(((event.clientY - rect.top) / rect.height) * 2 - 1, -1, 1),
    })
    setOn(true)
  }

  return (
    <div
      className={`tlt ${className}`.trim()}
      ref={skin}
      onPointerMove={track}
      onPointerOut={(event) => {
        const element = skin.current
        const related = event.relatedTarget
        if (!element || !related || !element.contains(related)) setOn(false)
      }}
      onPointerCancel={() => setOn(false)}
    >
      <div
        className="tlt-card"
        style={{
          borderRadius: clamp(corner, 0, 40),
          transform: `translateZ(${-14 * lit}px) rotateX(${rx}deg) rotateY(${ry}deg)`,
          boxShadow: `0 ${mix(20, 9, lit)}px ${mix(44, 24, lit)}px -8px rgba(15, 23, 42, ${mix(0.22, 0.15, lit)})`,
        }}
      >
        <img className="tlt-image" src={image} alt={alt} />
        <span
          className="tlt-sheen"
          aria-hidden="true"
          style={{
            backgroundImage: `radial-gradient(42% 34% at ${px}% ${py}%, rgba(9, 14, 28, ${dark}) 0%, rgba(9, 14, 28, 0) 100%), radial-gradient(52% 42% at ${100 - px}% ${100 - py}%, rgba(255, 255, 255, ${rim}) 0%, rgba(255, 255, 255, 0) 100%)`,
          }}
        />
        {children}
      </div>
    </div>
  )
}
