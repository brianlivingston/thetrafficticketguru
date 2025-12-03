'use client'

import { useEffect } from 'react'
import HeroSection from '@/components/HeroSection'
import TrustBadgesRow from '@/components/TrustBadgesRow'
import FeaturedServicesGrid from '@/components/FeaturedServicesGrid'
import IRSSection from '@/components/IRSSection'
import HowWeHelpYou from '@/components/HowWeHelpYou'
import dynamic from 'next/dynamic'
import AboutTheAgency from '@/components/AboutTheAgency'
import ContactMapSection from '@/components/ContactMapSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  ssr: false,
  loading: () => <div className="h-[460px] bg-[#F7F5F4]" />
})

export default function Home() {
  useEffect(() => {
    // Handle hash scrolling when navigating from other pages
    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash) {
        // Wait for page to fully render
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - 100 // 100px offset for navbar
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 100)
      }
    }

    handleHashScroll()
    // Also handle hash changes (in case user clicks multiple links)
    window.addEventListener('hashchange', handleHashScroll)
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll)
    }
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <TrustBadgesRow />
      <FeaturedServicesGrid />
      <IRSSection />
      <HowWeHelpYou />
      <TestimonialsSection />
      <AboutTheAgency />
      <FAQSection />
      <ContactMapSection />
      <Footer />
    </main>
  )
}


