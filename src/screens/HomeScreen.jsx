import { useMemo, useState } from 'react'
import { galleryItems } from '../data/gallery'
import { Navigation } from '../components/Navigation'
import { HeroSection } from '../components/HeroSection'
import { Ticker, ProofSection, TeamSection } from '../components/StudioSections'
import { GallerySection } from '../components/GallerySection'
import { PricingSection } from '../components/PricingSection'
import { Footer, SignupModal, Toast } from '../components/FeedbackAndFooter'
import Timeline from '../components/Timeline';
export function HomeScreen() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All work')
  const [modalOpen, setModalOpen] = useState(false)
  const [toast, setToast] = useState('')

  const filteredItems = useMemo(() => activeFilter === 'All work' ? galleryItems : galleryItems.filter((item) => item.tag === activeFilter), [activeFilter])

  const showToast = (message) => {
    setToast(message)
    window.setTimeout(() => setToast(''), 2800)
  }

  const navigateTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const handleSignup = (event) => {
    event.preventDefault()
    setModalOpen(false)
    showToast('You’re on the list — welcome to Aerotech.')
  }

  return <div id="top" className="site-shell">
    <Navigation menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((open) => !open)} onNavigate={navigateTo} onOpenModal={() => setModalOpen(true)} />
    <main>
      <HeroSection onOpenModal={() => setModalOpen(true)} onShowToast={showToast} />
      <Ticker />
      <Timeline />
      <ProofSection />
      <TeamSection />
      <GallerySection activeFilter={activeFilter} onFilterChange={setActiveFilter} items={filteredItems} />
      <PricingSection onOpenModal={() => setModalOpen(true)} />
    </main>
    <Footer />
    {modalOpen && <SignupModal onClose={() => setModalOpen(false)} onSubmit={handleSignup} />}
    <Toast message={toast} />
  </div>
}
