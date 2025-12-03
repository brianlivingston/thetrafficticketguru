'use client'

import Image from 'next/image'
import Script from 'next/script'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQSection from '@/components/FAQSection'

export default function OnRoadSuspensionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <Navbar variant="internal" />

      {/* Hero Section */}
      <section className="relative h-[336px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/irs-hero-img.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={100}
            unoptimized
          />
        </div>

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
            Immediate Roadside Suspension
          </motion.h1>
          <motion.p 
            className="text-base sm:text-base md:text-[18px] text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Being charged under the Alberta Saferoads Program with a Notice of Administrative Penalty (NAP), also known as an Immediate Roadside Sanction (IRS), can lead to severe legal consequences. Which will include licence suspension, hefty fines, mandatory rehabilitation programs, and potentially jail time.
          </motion.p>
        </motion.div>
      </section>

      {/* Why You Need A Professional Section */}
      <section className="py-12 sm:py-16 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-[28px] sm:text-[32px] md:text-4xl lg:text-5xl font-medium text-[#0F172A] text-center mb-6 sm:mb-8 lg:mb-12 px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Why You Need A Professional
          </motion.h2>
          
          {/* Intro Text */}
          <motion.div 
            className="max-w-4xl mx-auto mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
          >
            <p className="text-base lg:text-lg text-[#475569] mb-6 leading-relaxed font-normal text-center">
            These charges can cause long-term damage to personal and professional reputation, increased insurance premiums, and job loss.
            </p>
            <p className="text-base lg:text-lg text-[#475569] leading-relaxed font-normal text-center">
            Facing this charge can be overwhelming, but having the proper legal representation can make all the difference. A skilled professional specializing in impaired driving can navigate the law's procedural complexities, helping you build the best possible defense.
            </p>
          </motion.div>

          {/* Two Column Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Left Card - The Consequences */}
            <motion.div 
              className="bg-[#FDF3F3] rounded-2xl p-5 sm:p-6 lg:p-8"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h3 className="text-[22px] sm:text-2xl lg:text-3xl font-semibold text-[#0F172A] mb-4 sm:mb-6">
                The Consequences
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#E10B0A] mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-[16px] text-[#475569] font-normal">Drivers Licence suspension for 90 days</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#E10B0A] mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-[16px] text-[#475569] font-normal">A minimum fine of $1,200</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#E10B0A] mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-[16px] text-[#475569] font-normal">Mandatory paid out of pocket enrollment in a provincial counselling program, such as Alberta&apos;s &quot;Planning Ahead&quot;</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#E10B0A] mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-[16px] text-[#475569] font-normal">Ignition interlock system installation at your expense in your vehicle for one year</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#E10B0A] mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-[16px] text-[#475569] font-normal">30 days of towing/storage costs of your vehicle (roughly $2000-$3000)</span>
                </li>
              </ul>
            </motion.div>

            {/* Right Card - Additional Costs */}
            <motion.div 
              className="bg-[#F3F3F4] rounded-2xl p-5 sm:p-6 lg:p-8"
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h3 className="text-[22px] sm:text-2xl lg:text-3xl font-semibold text-[#0F172A] mb-4 sm:mb-6">
                Additional Costs
              </h3>
              <p className="text-base sm:text-base lg:text-lg text-[#111827] mb-4 sm:mb-6 leading-relaxed">
                These costs do not include increased insurance premiums, lost wages, or long-term career impact.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E10B0A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-[16px] text-[#475569] font-normal">Participation in mandatory counselling programs like &quot;Planning Ahead&quot; often involve medical and psychological assessments, and regular attendance is required.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E10B0A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-[16px] text-[#475569] font-normal">With our experienced legal professionals on your side, you&apos;ll be equipped to fight the charges effectively and protect your future.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Contact Us Today Button */}
          <motion.div 
            className="text-center mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center rounded-[14px] bg-[#E10B0A] h-[48px] sm:h-[52px] px-6 sm:px-8 text-base sm:text-base font-semibold text-white shadow-[0_4px_14px_rgba(225,11,10,0.25)] hover:bg-[#c00a09] hover:shadow-[0_6px_20px_rgba(225,11,10,0.3)] transition-all duration-200 whitespace-nowrap"
            >
              Contact Us Today!
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
                id="inline-lQlaCEy5o9hc5JZ1Fw0Y-onroad"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Traffic Guru Contact Us"
                data-height="1189"
                data-layout-iframe-id="inline-lQlaCEy5o9hc5JZ1Fw0Y-onroad"
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
