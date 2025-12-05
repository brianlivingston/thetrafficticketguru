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
import HashScrollHandler from '@/components/HashScrollHandler'

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  ssr: false,
  loading: () => <div className="h-[460px] bg-[#F7F5F4]" />
})

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HashScrollHandler />
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


