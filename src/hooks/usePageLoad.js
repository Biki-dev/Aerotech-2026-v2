import { useEffect, useState } from 'react'
import { asset } from '../lib/assets'

const PRELOAD_IMAGES = [
  asset('/Aerotech.png'),
  asset('/Neonaero.png'),
  asset('/aerotech_logo.png'),
]

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => resolve()
    img.src = src
  })
}

export function usePageLoad() {
  const [phase, setPhase] = useState('loading')

  useEffect(() => {
    let cancelled = false
    const started = Date.now()
    const minDisplayMs = 850
    const maxWaitMs = 3200
    let finished = false

    const beginExit = () => {
      if (cancelled || finished) return
      finished = true
      const elapsed = Date.now() - started
      const delay = Math.max(0, minDisplayMs - elapsed)
      window.setTimeout(() => {
        if (!cancelled) setPhase('exiting')
      }, delay)
    }

    const preload = Promise.all(PRELOAD_IMAGES.map(preloadImage))
    const fontsReady = document.fonts?.ready ?? Promise.resolve()

    Promise.all([preload, fontsReady]).finally(beginExit)
    window.addEventListener('load', beginExit, { once: true })
    const fallback = window.setTimeout(beginExit, maxWaitMs)

    return () => {
      cancelled = true
      window.clearTimeout(fallback)
      window.removeEventListener('load', beginExit)
    }
  }, [])

  useEffect(() => {
    if (phase !== 'exiting') return undefined
    const timer = window.setTimeout(() => setPhase('done'), 480)
    return () => window.clearTimeout(timer)
  }, [phase])

  return phase
}
