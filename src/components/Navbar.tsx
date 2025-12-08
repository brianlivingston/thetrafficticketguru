'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  variant?: 'hero' | 'internal'
  heroRef?: React.RefObject<HTMLElement>
}

export default function Navbar({ variant = 'internal', heroRef }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPastHero, setIsPastHero] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (variant === 'hero') {
      const handleScroll = () => {
        const scrollPosition = window.scrollY
        
        if (heroRef?.current) {
          // Get the hero section and find the heading
          const heroSection = heroRef.current
          const heroHeading = heroSection.querySelector('h1')
          
          if (heroHeading) {
            const headingRect = heroHeading.getBoundingClientRect()
            // Fix navbar when heading scrolls past the top of viewport
            setIsPastHero(headingRect.top < 100)
          } else {
            // Fallback: fix after scrolling 200px
            setIsPastHero(scrollPosition > 200)
          }
        } else {
          // If no heroRef, fix after small scroll
          setIsPastHero(scrollPosition > 100)
        }
      }

      window.addEventListener('scroll', handleScroll)
      handleScroll() // Check initial state
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [variant, heroRef])

  const isFixed = variant === 'hero' && isPastHero
  const isAbsolute = variant === 'hero' && !isPastHero
  const isRelative = variant === 'internal'
  // Show border only when scrolled past hero (for hero variant) or always for internal pages
  const showBorder = variant === 'internal' || (variant === 'hero' && isPastHero)

  return (
    <motion.nav
      layout
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`z-50 py-2 lg:py-3 bg-[#FFFFFF] ${
        showBorder ? 'border-b border-neutral-200' : ''
      } ${
        isFixed ? 'fixed top-0 left-0 right-0' : isAbsolute ? 'absolute top-0 left-0 right-0' : 'relative'
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-[60px]">
        <div className="flex items-center justify-between h-[56px] lg:h-[60px] min-w-0">
          {/* Logo and Menu Links - Left Aligned */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-[28px] min-w-0 flex-1">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <Image
                src="/images/nav-logo.png"
                alt="Traffic Ticket Guru Logo"
                width={180}
                height={60}
                className="h-[40px] sm:h-[48px] lg:h-[52px] w-auto"
                priority
              />
            </a>
            
            {/* Navigation Links - Desktop Only (hidden below xl to prevent overlap) */}
            <div className="hidden xl:flex flex-nowrap gap-10 2xl:gap-12 whitespace-nowrap flex-shrink-0 overflow-hidden ml-8 lg:ml-8">
              <a href="/" className="text-[14px] text-[#0F172A] hover:text-[#E10B0A] transition-colors font-normal whitespace-nowrap flex-shrink-0">Home</a>
              <a href="/#irs" className="text-[14px] text-[#0F172A] hover:text-[#E10B0A] transition-colors font-normal whitespace-nowrap flex-shrink-0">Roadside Suspension</a>
              <a href="/#disclosure-review" className="text-[14px] text-[#0F172A] hover:text-[#E10B0A] transition-colors font-normal whitespace-nowrap flex-shrink-0">Evidence Review</a>
              <a href="/#about" className="text-[14px] text-[#0F172A] hover:text-[#E10B0A] transition-colors font-normal whitespace-nowrap flex-shrink-0">About Us</a>
              <a href="/#about" className="text-[14px] text-[#0F172A] hover:text-[#E10B0A] transition-colors font-normal whitespace-nowrap flex-shrink-0">Our Guarantee</a>
              <a href="/#contact" className="text-[14px] text-[#0F172A] hover:text-[#E10B0A] transition-colors font-normal whitespace-nowrap flex-shrink-0">Contact</a>
            </div>
          </div>
          
          {/* CTA Button and Mobile Menu - Right */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* CTA Button - Responsive sizing to prevent overlap */}
            <a 
              href="tel:+17803805511"
              className="hidden sm:inline-flex items-center justify-center rounded-[14px] bg-[#E10B0A] h-[40px] sm:h-[42px] lg:h-[44px] text-xs sm:text-xs lg:text-sm xl:text-base font-semibold text-white hover:bg-[#c00a09] transition-all duration-200 whitespace-nowrap flex-shrink-0"
              style={{ paddingLeft: '24px', paddingRight: '24px' }}
            >
              <span className="hidden xl:inline">Call for a Free Consultation</span>
              <span className="hidden lg:inline xl:hidden">Call Us</span>
              <span className="hidden sm:inline lg:hidden">Call US</span>
            </a>
            
            {/* Mobile/Tablet Menu Button - Hidden on xl+ when menu links are visible */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#0F172A] hover:bg-gray-100 transition-colors flex-shrink-0"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3 border-t border-neutral-200 mt-3">
                <a 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-base text-[#0F172A] hover:text-[#E10B0A] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Home
                </a>
                <a 
                  href="/#irs" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-base text-[#0F172A] hover:text-[#E10B0A] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Roadside Suspension
                </a>
                <a 
                  href="/#disclosure-review" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-base text-[#0F172A] hover:text-[#E10B0A] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Evidence Review
                </a>
                <a 
                  href="/#about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-base text-[#0F172A] hover:text-[#E10B0A] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  About Us
                </a>
                <a 
                  href="/#about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-base text-[#0F172A] hover:text-[#E10B0A] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Our Guarantee
                </a>
                <a 
                  href="/#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-base text-[#0F172A] hover:text-[#E10B0A] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Contact
                </a>
                <a 
                  href="tel:+17803805511"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mt-4 mx-4 px-4 py-3 text-center rounded-[14px] bg-[#E10B0A] text-base font-semibold text-white hover:bg-[#c00a09] transition-all duration-200"
                >
                  Call for a Free Consultation
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

