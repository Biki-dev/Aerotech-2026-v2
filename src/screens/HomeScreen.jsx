import { useState } from 'react'
import { galleryItems } from '../data/gallery'
import { Navigation } from '../components/Navigation'
import { HeroSection } from '../components/HeroSection'
import { Ticker, ProofSection, AboutSection, TeamSection } from '../components/StudioSections'
import { GallerySection } from '../components/GallerySection'
import { Footer } from '../components/FeedbackAndFooter'
import { PageLoader } from '../components/PageLoader'
import { RegisterModal } from '../components/RegisterModal'
import { Toast } from '../components/Toast'
import { usePageLoad } from '../hooks/usePageLoad'
import Timeline from '../components/Timeline'

export function HomeScreen() {
  const loadPhase = usePageLoad()
  const [modalOpen, setModalOpen] = useState(false)
  const [toast, setToast] = useState('')

  const showToast = (message) => {
    setToast(message)
    window.setTimeout(() => setToast(''), 2800)
  }

  const navigateTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSignup = (event) => {
    event.preventDefault()
    setModalOpen(false)
    showToast('You’re on the list — welcome to Aerotech.')
  }

  const contentVisible = loadPhase === 'done' || loadPhase === 'exiting'

  return (
    <div id="top" className={`site-shell ${contentVisible ? 'site-shell--ready' : 'site-shell--loading'}`}>
      <PageLoader phase={loadPhase} />
      <Navigation onNavigate={navigateTo} onOpenModal={() => setModalOpen(true)} />
      <main>
        <HeroSection onOpenModal={() => setModalOpen(true)} />
        <Ticker />
        <Timeline />
        <ProofSection />
        <AboutSection />
        <TeamSection />
        <GallerySection items={galleryItems} />
      </main>
      <Footer />
      <RegisterModal open={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleSignup} />
      <Toast message={toast} />
    </div>
  )
}
