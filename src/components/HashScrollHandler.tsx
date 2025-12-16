'use client'

import { useEffect } from 'react'

export default function HashScrollHandler() {
  useEffect(() => {
    // Handle hash scrolling when navigating from other pages
    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash) {
        // Wait for page to fully render
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - 100 // 100px offset for navbar
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 100)
      }
    }

    handleHashScroll()
    // Also handle hash changes (in case user clicks multiple links)
    window.addEventListener('hashchange', handleHashScroll)
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll)
    }
  }, [])

  return null
}


