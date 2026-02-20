import { Suspense } from 'react'
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
import Script from 'next/script'
//edit
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  ssr: false,
  loading: () => <div className="h-[460px] bg-[#F7F5F4]" />
})

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* <Script
        id="zweelie-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var script = document.createElement('script');
              script.src = 'https://zweelie.ngrok.app/zweelie-widget-embed.js';
              script.setAttribute('data-property-id', 'cbb1154c-8594-4082-afe2-3d54c974292e');
              script.setAttribute('data-api-url', 'https://zweelievoice.ngrok.app/api');
              document.head.appendChild(script);
            })();
          `,
        }}
      /> */}
      <HashScrollHandler />
      <HeroSection />
      <TrustBadgesRow />
      <FeaturedServicesGrid />
      <IRSSection />
      <HowWeHelpYou />
      <Suspense fallback={<div className="h-[460px] bg-[#F7F5F4]" />}>
        <TestimonialsSection />
      </Suspense>
      <AboutTheAgency />
      <FAQSection />
      <ContactMapSection />
      <Footer />
    </main>
  )
}


