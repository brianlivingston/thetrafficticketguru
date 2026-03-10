'use client'

import { useState, useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [iframeHeight, setIframeHeight] = useState(1400)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const isScriptLoadedRef = useRef(false)
  const hasTriggeredRef = useRef(false)

  // Load GHL script only when popup opens
  const loadScript = () => {
    if (isScriptLoadedRef.current) return
    
    const existingScript = document.querySelector('script[src*="waylott.com/js/form_embed.js"]')
    if (existingScript) {
      isScriptLoadedRef.current = true
      return
    }

    const script = document.createElement('script')
    script.src = 'https://app.waylott.com/js/form_embed.js'
    script.async = true
    script.onload = () => {
      isScriptLoadedRef.current = true
    }
    document.body.appendChild(script)
  }

  // Trigger popup (only once per session)
  const triggerPopup = () => {
    if (hasTriggeredRef.current) return
    if (isDisabled) return
    
    const alreadyShown = sessionStorage.getItem('exit-intent-shown')
    if (alreadyShown === '1') {
      hasTriggeredRef.current = true
      return
    }

    hasTriggeredRef.current = true
    sessionStorage.setItem('exit-intent-shown', '1')
    setIsOpen(true)
    loadScript()
  }

  // Initial check on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const formSubmitted = sessionStorage.getItem('exit-form-submitted')
      if (formSubmitted === '1') {
        setIsDisabled(true)
      }
    }
  }, [])

  // Main popup trigger logic - exit intent only
  useEffect(() => {
    // If disabled, don't set up any listeners
    if (isDisabled) return

    // Check if form was already submitted
    if (typeof window !== 'undefined') {
      const formSubmitted = sessionStorage.getItem('exit-form-submitted')
      if (formSubmitted === '1') {
        setIsDisabled(true)
        return
      }
    }

    // Check if already shown in this session
    const alreadyShown = sessionStorage.getItem('exit-intent-shown')
    if (alreadyShown === '1') {
      return
    }

    // Exit intent detection - mouse moves above top viewport boundary
    const handleMouseMove = (e: MouseEvent) => {
      if (hasTriggeredRef.current || isDisabled) return
      if (e.clientY <= 0) {
        triggerPopup()
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseout', handleMouseOut)
      }
    }

    // Alternative exit intent detection - mouse leaves document at top
    const handleMouseOut = (e: MouseEvent) => {
      if (hasTriggeredRef.current || isDisabled) return
      if (!e.relatedTarget && e.clientY <= 0) {
        triggerPopup()
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseout', handleMouseOut)
      }
    }

    // Listen for form submission
    const handleMessage = (event: MessageEvent) => {
      // Check if message is from the form iframe
      if (typeof event.data === 'string' && event.data.includes('submitted')) {
        sessionStorage.setItem('exit-form-submitted', '1')
        setIsDisabled(true)
        setIsOpen(false)
        // Clean up all listeners
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseout', handleMouseOut)
        window.removeEventListener('message', handleMessage)
      }
      
      // Listen for iframe height changes from GHL form
      if (event.data && typeof event.data === 'object') {
        if (event.data.type === 'resize' && typeof event.data.height === 'number') {
          setIframeHeight(event.data.height)
        }
      }
    }

    // Set up event listeners - exit intent only
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseout', handleMouseOut)
    window.addEventListener('message', handleMessage)

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseout', handleMouseOut)
      window.removeEventListener('message', handleMessage)
    }
  }, [isDisabled])
  
  // Monitor iframe content and resize when Thank You page loads
  useEffect(() => {
    if (!isOpen || !iframeRef.current) return
    
    const checkIframeHeight = () => {
      if (!iframeRef.current) return
      
      try {
        const iframe = iframeRef.current
        if (iframe.contentWindow && iframe.contentDocument) {
          const iframeDoc = iframe.contentDocument
          const bodyText = iframeDoc.body?.innerText || ''
          const hasThankYou = /thank\s*you|submitted|success|thank\s*you\s*for/i.test(bodyText)
          
          if (hasThankYou) {
            const contentHeight = Math.max(
              iframeDoc.body?.scrollHeight || 0,
              iframeDoc.body?.offsetHeight || 0,
              iframeDoc.documentElement?.scrollHeight || 0,
              iframeDoc.documentElement?.offsetHeight || 0
            )
            
            if (contentHeight > 0 && contentHeight < 1400) {
              setIframeHeight(contentHeight + 60)
            }
          }
        }
      } catch (e) {
        // Cross-origin restrictions
      }
    }
    
    const timeout1 = setTimeout(checkIframeHeight, 1000)
    const timeout2 = setTimeout(checkIframeHeight, 2000)
    const interval = setInterval(checkIframeHeight, 1000)
    
    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      clearInterval(interval)
    }
  }, [isOpen])

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      
      return () => {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        window.scrollTo(0, scrollY)
      }
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
  }

  // Don't render if disabled or not open
  if (isDisabled || !isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Dark translucent backdrop - fixed */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />
      
      {/* Centered white card */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] flex flex-col overflow-hidden">
        {/* Close button - fixed at top */}
        <div className="flex-shrink-0 flex justify-end pt-4 pr-4 pb-2 bg-white border-gray-100">
          <button
            onClick={handleClose}
            className="p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Title and Logo - centered at top */}
        <div className="flex-shrink-0 flex flex-col justify-center items-center pt-2 pb-2 px-6 bg-white border-gray-100">
          <h2 className="text-[32px] font-semibold text-[#0F172A] mb-8">Contact Us</h2>
          <div className="relative w-[100px] h-auto">
            <Image
              src="/images/nav-logo.png"
              alt="Traffic Ticket Guru Logo"
              width={180}
              height={60}
              className="w-full h-auto object-contain"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Form iframe container - scrollable */}
        <div className="flex-1 overflow-y-auto bg-white">
          <div className="">
            <iframe
              ref={iframeRef}
              src="https://app.waylott.com/widget/form/lQlaCEy5o9hc5JZ1Fw0Y"
              id="popup-lQlaCEy5o9hc5JZ1Fw0Y"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Traffic Guru Contact Us"
              data-height={iframeHeight.toString()}
              data-layout-iframe-id="popup-lQlaCEy5o9hc5JZ1Fw0Y"
              data-form-id="lQlaCEy5o9hc5JZ1Fw0Y"
              title="Traffic Guru Contact Us"
              className="w-full rounded-xl border-0 block"
              style={{ 
                borderRadius: '12px',
                height: `${iframeHeight}px`,
                minHeight: 'auto',
                transition: 'height 0.3s ease-out'
              }}
              allow="forms"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
              loading="eager"
              onLoad={() => {
                setTimeout(() => {
                  if (iframeRef.current) {
                    try {
                      const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document
                      if (iframeDoc) {
                        const bodyText = iframeDoc.body?.innerText || ''
                        const hasThankYou = /thank\s*you|submitted|success/i.test(bodyText)
                        
                        if (hasThankYou) {
                          const contentHeight = Math.max(
                            iframeDoc.body?.scrollHeight || 0,
                            iframeDoc.body?.offsetHeight || 0,
                            iframeDoc.documentElement?.scrollHeight || 0,
                            iframeDoc.documentElement?.offsetHeight || 0
                          )
                          
                          if (contentHeight > 0) {
                            setIframeHeight(contentHeight + 60)
                          }
                        }
                      }
                    } catch (e) {
                      // Cross-origin restrictions
                    }
                  }
                }, 500)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
