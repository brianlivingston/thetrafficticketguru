'use client'

import Image from 'next/image'
import Script from 'next/script'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQSection from '@/components/FAQSection'

function EvidenceReviewContent() {
  const searchParams = useSearchParams()
  const isCTASelected = searchParams.get('cta') === 'selected'

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <Navbar variant="internal" />

      {/* Hero Section */}
      <section className="relative h-[336px] flex items-center justify-center overflow-hidden bg-[#020617]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/evidence-review-img.jpg"
            alt="Evidence Review Background"
            fill
            className="object-cover object-center"
            priority
            quality={100}
            unoptimized
            style={{ objectPosition: 'center top' }}
          />
        </div>

        {/* Dark overlay to ensure text is visible even before image loads */}
        <div className="absolute inset-0 z-10 bg-black/40" />

        {/* Hero Content */}
        <motion.div 
          className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.h1 
            className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-medium text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
          Get Your $97 Disclosure Review!
          </motion.h1>
          <motion.p 
            className="text-base sm:text-base md:text-[18px] text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
          Take Control of Your Driving Record!

Claim your Traffic Ticket Disclosure Review today by filling out the form below. Our experienced traffic ticket experts are here to provide you with valuable insights, personalized guidance, and a clear strategy to help you fight your traffic tickets. Take advantage of this opportunity to protect your driving record and save money!.
          </motion.p>
        </motion.div>
      </section>

      {/* Learn More About Disclosure Reviews Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F3F3F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-[28px] sm:text-[32px] md:text-4xl lg:text-5xl font-medium text-[#0F172A] text-center mb-8 sm:mb-12 lg:mb-16 px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Learn More About Disclosure Reviews!
          </motion.h2>
          
          {/* Premium Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Card 1: Expert Guidance */}
            <motion.div 
              className="bg-white rounded-2xl border border-[#E5E7EB] p-6 sm:p-8 lg:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              <div className="mb-4 sm:mb-6">
                <div className="mb-4 sm:mb-6">
                  <Image
                    src="/images/shield.svg"
                    alt="Shield Icon"
                    width={56}
                    height={56}
                    className="w-12 h-12 sm:w-14 sm:h-14"
                  />
                </div>
                <h3 className="text-[22px] sm:text-2xl lg:text-3xl font-semibold text-[#0F172A] mb-3 sm:mb-4">
                  Expert Guidance
                </h3>
              </div>
              <p className="text-base sm:text-[16px] text-[#475569] leading-relaxed">
                Receive professional analysis of your disclosure statement, ensuring every detail aligns with regulatory requirements and best practices.
              </p>
            </motion.div>

            {/* Card 2: Personal Review */}
            <motion.div 
              className="bg-white rounded-2xl border border-[#E5E7EB] p-6 sm:p-8 lg:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <div className="mb-4 sm:mb-6">
                <div className="mb-4 sm:mb-6">
                  <Image
                    src="/images/file.svg"
                    alt="File Icon"
                    width={56}
                    height={56}
                    className="w-12 h-12 sm:w-14 sm:h-14"
                  />
                </div>
                <h3 className="text-[22px] sm:text-2xl lg:text-3xl font-semibold text-[#0F172A] mb-3 sm:mb-4">
                  Personal Review
                </h3>
              </div>
              <p className="text-base sm:text-[16px] text-[#475569] leading-relaxed">
                Get a comprehensive, personalized assessment tailored to your specific situation and disclosure needs, with actionable recommendations.
              </p>
            </motion.div>

            {/* Card 3: Clarity & Confidence */}
            <motion.div 
              className="bg-white rounded-2xl border border-[#E5E7EB] p-6 sm:p-8 lg:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            >
              <div className="mb-4 sm:mb-6">
                <div className="mb-4 sm:mb-6">
                  <Image
                    src="/images/target.svg"
                    alt="Target Icon"
                    width={56}
                    height={56}
                    className="w-12 h-12 sm:w-14 sm:h-14"
                  />
                </div>
                <h3 className="text-[22px] sm:text-2xl lg:text-3xl font-semibold text-[#0F172A] mb-3 sm:mb-4">
                  Clarity & Confidence
                </h3>
              </div>
              <p className="text-base sm:text-[16px] text-[#475569] leading-relaxed">
                Move forward with complete confidence knowing your disclosure statement has been thoroughly vetted by experienced legal professionals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits of Disclosure Review Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-[28px] sm:text-[32px] md:text-4xl lg:text-5xl font-medium text-[#0F172A] text-center mb-8 sm:mb-12 lg:mb-16 px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Benefits of Disclosure Review
          </motion.h2>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
            {/* Left Column - Benefits List */}
            <motion.div 
              className="space-y-6 sm:space-y-8 lg:space-y-10 lg:h-[440px] flex flex-col justify-between"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Benefit 1: Risk Assessment */}
              <motion.div 
                className="flex gap-4 lg:gap-6"
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#E10B0A] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#111827] mb-2 sm:mb-3">
                    Risk Assessment
                  </h3>
                  <p className="text-base sm:text-base text-[#475569] leading-relaxed">
                    We evaluate the strengths and weaknesses of your case using your disclosure.                     You&apos;ll understand the real risks before taking your next step.
                  </p>
                </div>
              </motion.div>

              {/* Benefit 2: Documentation Guidance */}
              <motion.div 
                className="flex gap-4 lg:gap-6"
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#E10B0A] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#111827] mb-2 sm:mb-3">
                    Documentation Guidance
                  </h3>
                  <p className="text-base sm:text-base text-[#475569] leading-relaxed">
                    We help you understand the documents in your disclosure and what each element means.                     This ensures you don&apos;t miss critical details that may impact your case.
                  </p>
                </div>
              </motion.div>

              {/* Benefit 3: Access to Resources */}
              <motion.div 
                className="flex gap-4 lg:gap-6"
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#E10B0A] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#111827] mb-2 sm:mb-3">
                    Access to Resources
                  </h3>
                  <p className="text-base sm:text-base text-[#475569] leading-relaxed">
                    Get expert-recommended tools, insights, and next steps based on your disclosure. You&apos;ll have the support needed to navigate your situation with confidence.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[440px] min-h-[300px] sm:min-h-[400px]">
                <Image
                  src="/images/benefits-review-img.jpg"
                  alt="Benefits of Disclosure Review"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Note */}
          <motion.p 
            className="text-center text-base text-[#475569] italic mt-8 lg:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            The exact benefits may vary depending on the individual&apos;s circumstances and the expertise of the expert providing the review.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div 
            className="text-center mt-8 lg:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            <a
              href="https://checkout.thetrafficticket.guru/buy-now"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-[14px] h-[48px] sm:h-[52px] px-6 sm:px-8 text-base sm:text-base font-semibold transition-all duration-200 whitespace-nowrap ${
                isCTASelected
                  ? 'bg-[#E10B0A] text-white shadow-[0_6px_24px_rgba(225,11,10,0.5)] ring-4 ring-[#E10B0A]/30 scale-105'
                  : 'bg-[#E10B0A] text-white shadow-[0_4px_14px_rgba(225,11,10,0.25)] hover:bg-[#c00a09] hover:shadow-[0_6px_20px_rgba(225,11,10,0.3)]'
              }`}
            >
              Book Your $97 Review
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Get In Touch Section with Form */}
      <section id="contact" className="py-10 sm:py-12 md:py-12">
        <motion.div 
          className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center md:px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.h2 
            className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-medium tracking-tight text-[#0F172A] px-2"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="mt-3 sm:mt-4 max-w-3xl text-base leading-relaxed text-[#475569] md:text-base px-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
          >
            At Traffic Ticket Guru, we go beyond fighting tickets we stand beside you when you need
            support the most. We take the time to understand your situation, your concerns, and the real
            impact on your insurance, your record, and your peace of mind.
          </motion.p>

          {/* Contact Info Row */}
          <motion.div 
            className="mt-4 sm:mt-6 flex flex-col items-center justify-center gap-3 sm:gap-4 text-xs sm:text-base text-[#111827] md:flex-row md:gap-10 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.07,
                },
              },
            }}
          >
            {/* Email */}
            <motion.div 
              className="flex items-center gap-2 transition-all hover:-translate-y-[2px] hover:shadow-md"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-[#EF4444]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4h16v16H4z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7l8 6 8-6"
                />
              </svg>
              <span className="font-medium whitespace-nowrap">Brian@TheTrafficTicket.Guru</span>
            </motion.div>

            {/* Phone */}
            <motion.div 
              className="flex items-center gap-2 transition-all hover:-translate-y-[2px] hover:shadow-md"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-[#EF4444]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.6 4.2L9 4l2 4-1.8 1.2a9 9 0 004.6 4.6L15 12l4 2  -.2 2.4a2 2 0 01-2 1.6A13 13 0 015 6.2 2 2 0 016.6 4.2z"
                />
              </svg>
              <span className="font-medium whitespace-nowrap">(780) 380-5511</span>
            </motion.div>

            {/* Hours */}
            <motion.div 
              className="flex items-center gap-2 transition-all hover:-translate-y-[2px] hover:shadow-md"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-[#EF4444]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7h8M8 11h8M8 15h6M5 4h14v16H5z"
                />
              </svg>
              <span className="font-medium whitespace-nowrap">Mon – Sun 8:00am - 10:00pm</span>
            </motion.div>
          </motion.div>

          {/* Visit Our Office Card */}
          <motion.div 
            className="mt-10 flex w-full justify-center"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.div 
              className="relative h-[320px] w-full max-w-[800px] overflow-hidden rounded-[24px] bg-[#F3F4F6] transition-all hover:shadow-lg"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <Image 
                src="/images/map.png" 
                alt="Visit our office" 
                fill 
                className="object-cover transition-transform hover:scale-105" 
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <motion.div 
                  className="w-full max-w-[480px] rounded-[20px] sm:rounded-[26px] bg-white px-6 sm:px-8 py-5 sm:py-7 text-left transition-all hover:shadow-xl"
                  whileHover={{ y: -2, transition: { duration: 0.3 } }}
                >
                  <p className="text-lg sm:text-xl md:text-[24px] font-semibold text-[#0F172A]">Visit Our Office</p>
                  <div className="mt-4 sm:mt-5 flex items-start gap-2 sm:gap-3 text-base sm:text-[18px] leading-6 sm:leading-7 text-[#475569]">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#FEE2E2] text-[#EF4444]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M12 2a7 7 0 00-7 7c0 4.08 4.38 8.86 6.18 10.68a1.17 1.17 0 001.64 0C14.62 17.86 19 13.08 19 9a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119 9a2.5 2.5 0 013 2.5z" />
                      </svg>
                    </span>
                    <p>
                      Main Office: By Appointment. 9917 97 Ave.,<br />
                      Grande Prairie
                    </p>
                  </div>
                  <motion.a
                    href="https://www.google.com/maps/search/?api=1&query=9917+97+Ave,+Grande+Prairie,+AB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 sm:mt-6 inline-flex h-[52px] sm:h-[60px] w-full items-center justify-center rounded-[16px] border border-[#E10B0A] bg-white px-6 sm:px-8 text-base sm:text-base font-semibold text-[#E10B0A] shadow-[0_12px_30px_-24px_rgba(225,11,10,0.8)] transition hover:bg-[#E10B0A] hover:text-white"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    Get Directions
                    <span className="ml-3 inline-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M9 7h8v8"
                        />
                      </svg>
                    </span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="mt-10 flex w-full justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="w-full max-w-[800px] rounded-[16px] border border-[#DDDDDD] overflow-hidden relative">
              <iframe
                src="https://app.waylott.com/widget/form/lQlaCEy5o9hc5JZ1Fw0Y"
                style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
                id="inline-lQlaCEy5o9hc5JZ1Fw0Y-evidence"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Traffic Guru Contact Us"
                data-height="1189"
                data-layout-iframe-id="inline-lQlaCEy5o9hc5JZ1Fw0Y-evidence"
                data-form-id="lQlaCEy5o9hc5JZ1Fw0Y"
                title="Traffic Guru Contact Us"
                className="w-full min-h-[1189px]"
                loading="eager"
              />
              <Script src="https://app.waylott.com/js/form_embed.js" strategy="afterInteractive" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

export default function EvidenceReviewPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white">
        <Navbar variant="internal" />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E10B0A] mx-auto mb-4"></div>
            <p className="text-[#475569]">Loading...</p>
          </div>
        </div>
        <Footer />
      </div>
    }>
      <EvidenceReviewContent />
    </Suspense>
  )
}

