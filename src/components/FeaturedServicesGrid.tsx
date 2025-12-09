'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'

export default function FeaturedServicesGrid() {
  const services = [
    {
      title: 'Speeding Tickets',
      description: 'This is the most common ticket we fight (literally we have handled thousands of them). Our team consists of former police/sheriff officers who have taught Lidar(Laser) and Radar, so we know what to really look for when we examine the evidence. Nothing beats real life experience.',
      icon: '/images/services/speed.svg',
    },
    {
      title: 'Cell Phone Tickets',
      description: 'In Alberta, these tickets are 3 demerit points and will increase your insurance rates substantially. Since this law came in to effect 2011, we have handled hundreds of these successfully for our clients with only 2 person ending up with this on their record.',
      icon: '/images/services/mobile.svg',
    },
    {
      title: 'Commercial Vehicle Tickets',
      description: 'These affect your employment and also the carrier profile for the company. Our team has officers who were specially trained in commercial vehicle, light vehicle, and dangerous goods inspection.',
      icon: '/images/services/truck.svg',
    },
    {
      title: 'Careless Driving',
      description: 'This ticket is 6 demerit points and will ruin your insurance rates. We have only ever had 1 client get convicted of this charge since 2003, and we have handled hundreds successfully for our clients.',
      icon: '/images/services/careless.svg',
    },
    {
      title: 'Uninsured Tickets',
      description: 'These tickets carry huge fines with them, starting at $3000 and can go as high as $24000 depending upon prior convictions. Despite the seriousness of this charge, there are still ways to defend them, which is why you want experts that know the law.',
      icon: '/images/services/uninsured.svg',
    },
    {
      title: 'Fail To Remain / Hit & Run',
      description: 'This charge can carry up to 7 demerit points and has a huge effect on your insurance In 21 years, we have never had a client convicted as charged (and we want to keep that record going strong for you).',
      icon: '/images/services/car-crash.svg',
    },
    {
      title: 'Unauthorized Driving',
      description: 'This ticket is a mandatory 6 month license suspension, a fine of up to $2400, and possibly jail time depending upon your driving record. When your license, your job, and even your freedom is on the line, you want professionals who have saved hundreds of people from these penalties.',
      icon: '/images/services/suspended.svg',
    },
    {
      title: 'Red/Yellow/Stop Sign',
      description: '3 demerit points each and can affect your insurance rates by 25%+. Even with police now having video in most of their cars, we have successfully defended these using their own video against them in court!',
      icon: '/images/services/signal.svg',
    },
      {
        title: 'Stunting Tickets',
        description: 'Despite this ticket being only 3 demerits, its a huge hit on your insurance rates. We have never had a client incur demerits from one of these types of tickets (and we want to make sure you aren\'t the first!).',
        icon: '/images/services/activity.svg',
      },
    {
      title: 'Other Types OfTickets',
      description: "Don't see your ticket listed above? There are too many types of tickets to list them all, but we are sure that over the last 21 years we have handled many of whatever type of ticket you have received.",
      icon: '/images/services/file-text.svg',
    },
  ]

  return (
    <section id="services" className="relative py-20 md:py-24 bg-white overflow-hidden">
      {/* Center gradient glow - behind services cards */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"
        style={{ 
          zIndex: 0,
          width: '120vw',
          height: '150vh',
          background: 'radial-gradient(ellipse 85% 75% at 50% 50%, rgba(225,11,10,0.12) 0%, rgba(225,11,10,0.06) 30%, rgba(225,11,10,0.03) 55%, rgba(225,11,10,0.015) 80%, transparent 100%)'
        }}
      ></div>
      <div className="relative z-10 max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-medium text-[#0F172A] mb-3 sm:mb-4 px-2">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const ref = useRef(null)
            const isInView = useInView(ref, { once: true, margin: '-100px' })
            const [hasPulsed, setHasPulsed] = useState(false)
            
            // Stagger delay: 60-90ms between cards
            const staggerDelay = index * 0.075 // 75ms average
            
            const handleHoverStart = useCallback(() => {
              setHasPulsed(false) // Reset pulse state on hover start
            }, [])
            
            const handleHoverEnd = useCallback(() => {
              setHasPulsed(false) // Reset on hover end
            }, [])
            
            const handleIconHover = useCallback(() => {
              if (!hasPulsed) {
                setHasPulsed(true)
              }
            }, [hasPulsed])
            
            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ 
                  duration: 0.6,
                  delay: staggerDelay,
                  ease: [0.25, 0.1, 0.25, 1] // ease-out
                }}
                whileHover={{ 
                  y: -4,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  borderColor: 'rgba(225,11,10,0.2)',
                  backgroundColor: 'rgba(255,255,255,0.97)',
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                className="relative bg-white rounded-xl p-4 sm:p-6 border border-[#DEE0E4] group overflow-hidden"
                style={{ 
                  borderWidth: '0.5px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  borderColor: '#DEE0E4',
                  backgroundColor: '#FFFFFF'
                }}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
              >
                {/* Soft accent glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 0.08,
                    transition: { duration: 0.3, ease: 'easeOut' }
                  }}
                  style={{
                    background: 'radial-gradient(circle at center, rgba(225,11,10,0.25) 0%, transparent 70%)',
                    zIndex: 0
                  }}
                />
                
                {/* Card content */}
                <div className="relative z-10">
                  <div className="mb-4">
                    <motion.div 
                      className="w-14 h-14 rounded-[18px] flex items-center justify-center"
                      onHoverStart={handleIconHover}
                    >
                      <motion.div
                        animate={hasPulsed ? {
                          scale: [1, 1.1, 1],
                        } : { scale: 1 }}
                        transition={{ 
                          duration: 0.12,
                          times: [0, 0.5, 1],
                          ease: 'easeInOut'
                        }}
                      >
                        <Image
                          src={service.icon}
                          alt={`${service.title} icon`}
                          width={56}
                          height={56}
                          className="w-14 h-14 object-contain"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                  <h3 className="text-[22px] sm:text-xl font-medium text-[#0F172A] mb-2 sm:mb-3 font-sans">
                    {service.title}
                  </h3>
                  <p className="text-[16px] sm:text-sm text-[#475569] leading-relaxed font-sans font-normal">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-8 sm:mt-12 text-center px-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-[14px] bg-[#E10B0A] h-[48px] sm:h-[52px] px-6 sm:px-8 text-base sm:text-base font-semibold text-white shadow-[0_4px_14px_rgba(225,11,10,0.25)] hover:bg-[#c00a09] hover:shadow-[0_6px_20px_rgba(225,11,10,0.3)] transition-all duration-200 whitespace-nowrap"
          >
            Need Help With A Ticket?
          </a>
        </div>
      </div>
    </section>
  )
}
