'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function HowWeHelpYou() {
  const bulletPoints = [
    'Identify officer errors or missing evidence',
    "Learn what the prosecutor won't tell you",
    'Understand your strongest defence options',
    'Protect yourself from points, fines, and insurance increases',
  ]

  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isSectionInView = useInView(sectionRef, { once: true, margin: '-100px', amount: 0.3 })
  const isImageInView = isSectionInView
  const isContentInView = isSectionInView
  
  // Calculate delay for CTA buttons (after all bullets)
  const bulletsDelay = 0.12 + (bulletPoints.length * 0.07) // 120ms + (4 bullets * 70ms average)

  return (
    <section id="disclosure-review" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={sectionRef}
          className="grid lg:grid-cols-2 gap-12 lg:items-stretch"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Left side - Image */}
          <motion.div 
            ref={imageRef}
            initial={{ opacity: 0, x: -40, scale: 0.96 }}
            animate={isImageInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -40, scale: 0.96 }}
            transition={{ 
              duration: 0.7, 
              ease: [0.22, 0.61, 0.36, 1] // cubic-bezier(0.22, 0.61, 0.36, 1)
            }}
            className="hidden lg:block h-full"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg h-full">
              <Image
                src="/images/disclosure-review.png"
                alt="Disclosure Review"
                width={640}
                height={450}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            ref={contentRef}
            className="space-y-6 flex flex-col h-full"
          >
            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 12 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
              className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-medium text-[#0F172A] mb-2 sm:mb-3 px-2"
            >
              Want To Fight Your Own Ticket?
            </motion.h1>
            
            {/* Subheading */}
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 0.61, 0.36, 1] }}
              className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium text-[#0F172A] mb-3 sm:mb-4 px-2"
            >
              Get Your <span className="text-[#E10B0A]">$97</span> Disclosure Review!
            </motion.h2>
            
            {/* Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.45, delay: 0.16, ease: [0.22, 0.61, 0.36, 1] }}
              className="text-base sm:text-base md:text-lg text-[#475569] mb-4 sm:mb-6 px-4"
            >
              We go page-by-page through your disclosure package, flag procedural errors, and outline the best legal strategy before you ever step into court.
            </motion.p>
            
            {/* Bullet list items */}
            <ul className="space-y-4 mb-8">
              {bulletPoints.map((point, index) => (
                <motion.li 
                  key={point} 
                  initial={{ opacity: 0, x: -14 }}
                  animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -14 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.12 + (index * 0.07), // 120ms + stagger (70ms average)
                    ease: [0.22, 0.61, 0.36, 1] 
                  }}
                  className="flex items-start gap-3"
                >
                  <Image
                    src="/images/services/checkmark.svg"
                    alt="Checkmark"
                    width={24}
                    height={24}
                    className="mt-1 flex-shrink-0"
                    unoptimized
                  />
                  <span className="text-[#475569] text-base sm:text-base md:text-lg font-normal">{point}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA buttons */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isContentInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
              transition={{ 
                duration: 0.5, 
                delay: bulletsDelay,
                ease: [0.22, 0.61, 0.36, 1] 
              }}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              {<motion.a
                href="https://checkout.thetrafficticket.guru/buy-now"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={isContentInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
                transition={{ 
                  duration: 0.5, 
                  delay: bulletsDelay + 0.05,
                  ease: [0.22, 0.61, 0.36, 1] 
                }}
                whileInView={{ 
                  boxShadow: ['0 4px 14px rgba(225,11,10,0.25)', '0 4px 20px rgba(225,11,10,0.4)', '0 4px 14px rgba(225,11,10,0.25)'],
                  transition: { duration: 2, repeat: 0 }
                }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center rounded-[14px] bg-[#E10B0A] h-[48px] sm:h-[52px] px-6 sm:px-8 text-base sm:text-base font-semibold text-white shadow-[0_4px_14px_rgba(225,11,10,0.25)] hover:bg-[#c00a09] hover:shadow-[0_6px_20px_rgba(225,11,10,0.3)] transition-all duration-200 whitespace-nowrap"
              >
                Book Your $97 Review
              </motion.a> }
              <motion.a
                href="/evidence-review"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={isContentInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
                transition={{ 
                  duration: 0.5, 
                  delay: bulletsDelay + 0.1,
                  ease: [0.22, 0.61, 0.36, 1] 
                }}
                className="inline-flex items-center justify-center rounded-[14px] border border-[#CBD5E1] h-[48px] sm:h-[52px] px-6 sm:px-8 text-base sm:text-base font-semibold text-[#0F172A] shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap bg-white"
              >
                Read More
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

