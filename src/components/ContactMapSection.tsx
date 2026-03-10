"use client";

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from "next/image";

function ContactInfoRow() {
  const items = [
    {
      icon: (
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
      ),
      label: "Brian@TheTrafficTicket.Guru",
    },
    {
      icon: (
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
      ),
      label: "(780) 380-5511",
    },
    {
      icon: (
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
      ),
      label: "Mon – Sun 8:00am - 10:00pm",
    },
  ];

  return (
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
      {items.map((item) => (
        <motion.div 
          key={item.label} 
          className="flex items-center gap-2 transition-all hover:-translate-y-[2px] hover:shadow-md"
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {item.icon}
          <span className="font-medium whitespace-nowrap">{item.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

function MapCard() {
  return (
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
        <Image src="/images/map.png" alt="Visit our office" fill className="object-cover" priority />
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
  );
}

function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px', amount: 0.1 })
  const [isFormLoaded, setIsFormLoaded] = useState(false)
  
  // Load script immediately on component mount
  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src*="waylott.com/js/form_embed.js"]')
    if (existingScript) {
      setIsFormLoaded(true)
      return
    }
    
    // Load the script immediately (don't wait for viewport)
    const script = document.createElement('script')
    script.src = 'https://app.waylott.com/js/form_embed.js'
    script.async = true
    script.onload = () => {
      setIsFormLoaded(true)
    }
    script.onerror = () => {
      // Even if script fails, show the form (iframe should work independently)
      setIsFormLoaded(true)
    }
    document.body.appendChild(script)
    
    // Fallback: show form after 1 second regardless
    const fallbackTimer = setTimeout(() => {
      setIsFormLoaded(true)
    }, 1000)
    
    return () => {
      clearTimeout(fallbackTimer)
    }
  }, [])
  
  // Show form when it comes into view (additional trigger)
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsFormLoaded(true)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isInView])
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      className="mt-10 flex w-full justify-center"
    >
      <div className="w-full max-w-[800px] rounded-[16px] border border-[#DDDDDD] overflow-hidden relative">
        {!isFormLoaded && (
          <div className="w-full min-h-[1189px] flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#E10B0A] border-r-transparent"></div>
              <p className="mt-4 text-base text-[#475569]">Loading form...</p>
            </div>
          </div>
        )}
        <iframe
          src="https://app.waylott.com/widget/form/lQlaCEy5o9hc5JZ1Fw0Y"
          style={{ 
            width: "100%", 
            height: "100%", 
            border: "none", 
            borderRadius: "3px",
            minHeight: "1189px"
          }}
          id="inline-lQlaCEy5o9hc5JZ1Fw0Y"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Traffic Guru Contact Us"
          data-height="1189"
          data-layout-iframe-id="inline-lQlaCEy5o9hc5JZ1Fw0Y"
          data-form-id="lQlaCEy5o9hc5JZ1Fw0Y"
          title="Traffic Guru Contact Us"
          className={`w-full min-h-[1189px] ${!isFormLoaded ? 'opacity-0 absolute pointer-events-none' : 'opacity-100 relative'}`}
          onLoad={() => {
            setIsFormLoaded(true)
          }}
          loading="eager"
          allow="forms"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
        />
      </div>
    </motion.div>
  );
}

export default function ContactMapSection() {
  const sectionRef = useRef(null)
  
  return (
    <section id="contact" className="py-10 sm:py-12 md:py-12">
      <motion.div 
        ref={sectionRef}
        className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center md:px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h2 
          className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-medium tracking-tight text-[#0F172A] px-2"
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

        <ContactInfoRow />
        <MapCard />
        <ContactForm />
      </motion.div>
    </section>
  );
}
