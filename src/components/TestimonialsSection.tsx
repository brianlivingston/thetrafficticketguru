'use client'

import { useCallback, useEffect, useLayoutEffect, useState } from 'react'

const testimonials = [
  {
    name: 'Tiffany M',
    text: 'Thank you for taking the time to explain the court process to me, and what I could honestly expect as a result. You really made me feel much more at ease. Most of all, thank you for getting my ticket thrown out!',
    rating: 5,
  },
  {
    name: 'Anthony S',
    text: "Throughout the years I have used Brian for all of my family's tickets. His success rate for us has been incredible and I highly recommend him.",
    rating: 5,
  },
  {
    name: 'Chad B',
    text: "Thanks so much for saving my licence and for winning my trial. I would have been suspended and lost my job if it wasn't for you. Let me know if you have any bumper stickers because I will proudly let everyone know to use you.",
    rating: 5,
  },
  {
    name: 'Karrie P',
    text: 'Thanks Brian! I was so worried about my demerits and my insurance going up, and you made my points go away! You saved me hundreds of dollars in insurance premiums!',
    rating: 5,
  },
  {
    name: 'Rae M',
    text: "Brian is the most knowledgeable person in traffic law I've met. While others were just after my money, he took the time to understand my case and listen to my concerns. He handled everything, so I didn't need to attend, and got me the result I wanted.",
    rating: 5,
  },
]

const AUTO_ADVANCE_MS = 6000
const MANUAL_PAUSE_MS = 8000

export default function TestimonialsSection() {
  const len = testimonials.length
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isManuallyPaused, setIsManuallyPaused] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  const goTo = useCallback(
    (direction: 'prev' | 'next') => {
      setCurrentIndex((prev) =>
        direction === 'next' ? (prev + 1) % len : (prev - 1 + len) % len,
      )
      setIsManuallyPaused(true)
    },
    [len],
  )

  useEffect(() => {
    if (isManuallyPaused) return
    const id = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % len),
      AUTO_ADVANCE_MS,
    )
    return () => clearInterval(id)
  }, [isManuallyPaused, len])

  useEffect(() => {
    if (!isManuallyPaused) return
    const timeout = setTimeout(() => setIsManuallyPaused(false), MANUAL_PAUSE_MS)
    return () => clearTimeout(timeout)
  }, [isManuallyPaused])

  useLayoutEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const starIcons = (rating: number) =>
    Array.from({ length: rating }).map((_, idx) => (
      <svg key={idx} viewBox="0 0 20 20" className="h-5 w-5 text-[#EF4444]" fill="currentColor">
        <path d="M10 15l-5.878 3.09L5.46 11.545 1 7.454l6.061-.909L10 1l2.939 5.545L19 7.454l-4.46 4.091 1.338 6.545z" />
      </svg>
    ))

  const offsetFor = useCallback(
    (index: number) => {
      let diff = index - currentIndex
      if (diff > len / 2) diff -= len
      if (diff < -len / 2) diff += len
      return diff
    },
    [currentIndex, len],
  )

  const visibleOffset = isDesktop ? 1 : 0

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#F7F5F4] py-12 sm:py-14 md:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[58%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(255,230,221,0.5),rgba(255,230,221,0.1),transparent)] opacity-50 blur-3xl" />
      </div>

      <div className="relative mx-auto px-4 md:px-6 text-center">
        <h2 className="mb-4 sm:mb-6 md:-mb-5 text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-medium tracking-tight text-[#0F172A] px-2">
          What Our Customers Say About Us
        </h2>

        <div 
          className="relative h-[430px] md:h-[460px] overflow-hidden px-4 sm:px-0"
          onMouseEnter={() => setIsManuallyPaused(true)}
          onMouseLeave={() => setIsManuallyPaused(false)}
        >
          <div className="relative mx-auto h-full max-w-5xl overflow-hidden">
            {testimonials.map((testimonial, index) => {
              const offset = offsetFor(index)
              
              // On desktop, show active + side cards
              if (isDesktop && Math.abs(offset) > visibleOffset) return null
              
              const isActive = offset === 0
              
              // On mobile: slide cards horizontally (100% per card) for smooth transition
              // On desktop: use the existing offset calculation
              const translateX = isDesktop 
                ? offset * 120 
                : offset * 100
              
              // On mobile: only active card is visible (opacity 1), others are hidden (opacity 0)
              // On desktop: active is full opacity, side cards are faded
              const opacityValue = isDesktop 
                ? (isActive ? 1 : 0.4)
                : (isActive ? 1 : 0)
              
              const scaleValue = isActive ? 1.04 : isDesktop ? 0.6 : 1

              const width = isDesktop
                ? isActive
                  ? '900px'
                  : '540px'
                : 'calc(100% - 32px)'

              return (
                <article
                  key={testimonial.name}
                  className="absolute left-1/2 top-1/2 rounded-[24px] sm:rounded-[28px] md:rounded-[36px] border bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-12 text-center transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                  style={{
                    width,
                    transform: `translate(-50%, -50%) translateX(${translateX}%) scale(${scaleValue})`,
                    opacity: opacityValue,
                    zIndex: isActive ? 30 : 20 - Math.abs(offset),
                    borderWidth: isActive ? 2 : 1,
                    borderColor: isActive ? '#f87171' : 'rgba(248,113,113,0.4)',
                    pointerEvents: isActive ? 'auto' : 'none',
                    boxShadow: isActive 
                      ? '0 22px 80px -35px rgba(15,23,42,0.45), 0 10px 40px -10px rgba(59,130,246,0.4)'
                      : '0 22px 80px -35px rgba(15,23,42,0.45), 0 10px 40px -10px rgba(59,130,246,0.2)',
                  }}
                >
                  <div className="flex justify-center gap-1">{starIcons(testimonial.rating)}</div>
                  <p
                    className={`mx-auto mt-4 sm:mt-6 italic leading-relaxed text-[#475569] font-normal ${
                      isActive ? 'text-base sm:text-base md:text-lg max-w-3xl' : 'text-xs sm:text-base max-w-sm'
                    }`}
                  >
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl font-semibold text-[#0f172a]">- {testimonial.name}</p>
                </article>
              )
            })}
          </div>

          {/* Arrows at bottom center, close together */}
          <div className="pointer-events-none absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => goTo('prev')}
              aria-label="Previous testimonial"
              className="pointer-events-auto flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[#fca5a5]/80 bg-white text-[#EF4444] shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)] focus:outline-none focus:ring-2 focus:ring-[#EF4444]/30 touch-manipulation"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => goTo('next')}
              aria-label="Next testimonial"
              className="pointer-events-auto flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[#fca5a5]/80 bg-white text-[#EF4444] shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)] focus:outline-none focus:ring-2 focus:ring-[#EF4444]/30 touch-manipulation"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
