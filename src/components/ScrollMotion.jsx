import { useEffect, useRef } from 'react'
import { asset } from '../lib/assets'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

export function ScrollMotion() {
  const planeRef = useRef(null)

  useEffect(() => {
    const plane = planeRef.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const revealTargets = document.querySelectorAll(
      'main > section:not(.hero):not(.ticker-wrapper), .sponsor-row-section, .proof-metrics, .about-content, .team-profile, .gallery-card',
    )

    document.documentElement.classList.add('motion-ready')

    if (reduceMotion.matches) {
      revealTargets.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    revealTargets.forEach((element, index) => {
      element.classList.add('scroll-reveal')
      element.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 70}ms`)
      observer.observe(element)
    })

    let frame = 0
    let lastProgress = -1

    const updatePlane = () => {
      frame = 0
      const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      const progress = clamp(window.scrollY / scrollable, 0, 1)
      if (Math.abs(progress - lastProgress) < 0.001) return
      lastProgress = progress

      // A loose S-curve keeps the aircraft moving through every section rather
      // than simply sliding down one edge of the page.
      const wave = Math.sin(progress * Math.PI * 2.2)
      const x = 12 + progress * 76 + wave * 8
      const y = 14 + progress * 67 + Math.sin(progress * Math.PI * 4) * 4
      const rotation = -16 + progress * 34 + wave * 12
      const scale = 0.62 + Math.sin(progress * Math.PI) * 0.22
      const opacity = 0.16 + Math.sin(progress * Math.PI) * 0.2

      plane.style.transform = `translate3d(${x}vw, ${y}vh, 0) rotate(${rotation}deg) scale(${scale})`
      plane.style.opacity = opacity.toFixed(3)
      plane.style.setProperty('--flight-progress', progress.toFixed(3))
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updatePlane)
    }

    updatePlane()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  return (
    <div className="scroll-flight" aria-hidden="true">
      <span className="scroll-flight-line" />
      <img ref={planeRef} className="scroll-plane" src={asset('/Neonaero.png')} alt="" />
    </div>
  )
}
