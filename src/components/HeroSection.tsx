'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './Navbar'
import HeroVideo from './HeroVideo'

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Center gradient glow - behind hero content */}
      <div 
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ 
          zIndex: 0,
          width: '100vw',
          height: '80vh',
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(225,11,10,0.15) 0%, rgba(225,11,10,0.08) 30%, rgba(225,11,10,0.04) 50%, rgba(225,11,10,0.02) 70%, transparent 100%)'
        }}
      ></div>
      {/* Navigation Bar */}
      <Navbar variant="hero" heroRef={heroRef} />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-6 pt-[100px] sm:pt-[120px] pb-12 sm:pb-16 lg:pt-[120px] lg:pb-20">
        <div className="relative z-10 max-w-full mx-auto text-center">
          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[40px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] mb-3 sm:mb-4 px-2 font-sans text-center"
          >
            <span className="text-[#0F172A]">A Traffic Ticket is NOT </span>
            <span className="text-[#E10B0A]">&quot;Just a Ticket&quot;</span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[16px] sm:text-[18px] lg:text-[24px] font-regular text-[#0F172A] max-w-[860px] mx-auto mb-6 sm:mb-8 lg:mb-10 px-4 font-sans text-center"
          >
            It&apos;s a fast track to insurance spikes, demerit points, license suspension, or even job loss - all from one stop.
          </motion.h2>
          
          {/* Stat Line */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[18px] text-[#475569] max-w-[900px] mx-auto mb-6 sm:mb-8 px-4 font-sans font-light leading-relaxed text-center"
          >
            Don&apos;t gamble your future. <strong className="font-semibold text-[#111827]">Call the largest team in Western Canada to fix it BEFORE it blows up your life</strong>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-[10px] px-4"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center rounded-[14px] bg-[#E10B0A] h-[48px] sm:h-[52px] px-6 sm:px-8 text-[16px] font-semibold text-white shadow-[0_4px_14px_rgba(225,11,10,0.25)] hover:bg-[#c00a09] hover:shadow-[0_6px_20px_rgba(225,11,10,0.3)] transition-all duration-200 whitespace-nowrap"
            >
              Schedule a Consult
            </a>
            <a 
              href="#services" 
              className="!bg-white inline-flex items-center justify-center rounded-[14px] border border-[#CBD5E1] h-[48px] sm:h-[52px] px-6 sm:px-8 text-[16px] font-semibold text-[#0F172A] shadow-sm hover:shadow-md hover:!bg-white transition-all duration-200 whitespace-nowrap"
            >
              See How We Can Help
            </a>
          </motion.div>

          {/* Premium Video Section */}
          <motion.div
            style={{ y: videoY }}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.03 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <HeroVideo />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

