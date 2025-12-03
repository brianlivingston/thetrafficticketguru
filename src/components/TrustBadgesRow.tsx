'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface CounterConfig {
  endValue: number
  prefix: string
  suffix: string
  label: string
}

function AnimatedCounter({ config, delay = 0, uniqueKey }: { config: CounterConfig; delay?: number; uniqueKey: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentValue, setCurrentValue] = useState(0)
  const animationRef = useRef<number | null>(null)
  const hasStartedRef = useRef(false)
  
  const { endValue, prefix, suffix, label } = config
  
  // Format the display value
  const formatValue = (val: number): string => {
    return `${prefix}${val}${suffix}+`
  }
  
  useEffect(() => {
    // Reset when not in view
    if (!isInView) {
      setCurrentValue(0)
      hasStartedRef.current = false
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
      return
    }
    
    // Only animate once per component instance
    if (hasStartedRef.current) return
    
    // Reset to 0 when animation is about to start
    setCurrentValue(0)
    
    // Start animation after delay
    const startDelay = setTimeout(() => {
      hasStartedRef.current = true
      let startTime: number | null = null
      const duration = 1200 // 1.2 seconds
      
      const animate = (currentTime: number) => {
        if (startTime === null) {
          startTime = currentTime
          setCurrentValue(0) // Ensure we start from 0
        }
        
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation (ease-out cubic)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        const currentNum = Math.floor(endValue * easeOut)
        
        setCurrentValue(currentNum)
        
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate)
        } else {
          // Ensure final value is exact
          setCurrentValue(endValue)
          animationRef.current = null
        }
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }, delay * 1000) // Convert delay from seconds to milliseconds
    
    return () => {
      clearTimeout(startDelay)
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
    }
  }, [isInView, endValue, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
      className="text-center cursor-default rounded-lg p-4"
      style={{
        boxShadow: '0 0 0 rgba(0,0,0,0)',
        transition: 'box-shadow 0.3s ease'
      }}
      onHoverStart={(e) => {
        const target = e.currentTarget as HTMLElement
        if (target) {
          target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'
        }
      }}
      onHoverEnd={(e) => {
        const target = e.currentTarget as HTMLElement
        if (target) {
          target.style.boxShadow = '0 0 0 rgba(0,0,0,0)'
        }
      }}
    >
      <motion.div 
        className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-light text-[#0F172A] mb-2 sm:mb-3 font-sans leading-tight"
      >
        {formatValue(currentValue)}
      </motion.div>
      <div className="text-[16px] sm:text-xs md:text-sm lg:text-base font-thin text-[#0F172A] font-sans tracking-wide uppercase px-1">
        {label}
      </div>
    </motion.div>
  )
}

export default function TrustBadgesRow() {
  // Define each stat with its own independent configuration
  const stats: CounterConfig[] = [
    { endValue: 10, prefix: '$', suffix: 'M', label: 'INSURANCE SAVED' },
    { endValue: 2, prefix: '$', suffix: 'M', label: 'FINES REDUCED' },
    { endValue: 25, prefix: '', suffix: 'K', label: 'POINTS CLEARED' },
    { endValue: 2500, prefix: '', suffix: '', label: 'LICENCES SAVED' }
  ]

  return (
    <section className="bg-[#F1F1F2] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <AnimatedCounter 
              key={`stat-${index}-${stat.endValue}`}
              uniqueKey={`stat-${index}-${stat.endValue}`}
              config={stat}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
