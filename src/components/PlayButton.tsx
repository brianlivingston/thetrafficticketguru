'use client'

import { useState } from 'react'

type PlayButtonProps = {
  onClick?: () => void
  className?: string
}

export default function PlayButton({ onClick, className = '' }: PlayButtonProps) {
  const [ripple, setRipple] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    // Create ripple effect
    setRipple(true)
    setTimeout(() => setRipple(false), 500)

    // Call the onClick handler if provided
    if (onClick) {
      onClick()
    }
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Pulsing glow ring - subtle breathing effect */}
      <div className="absolute h-[90px] w-[90px] rounded-full bg-[#E10B0A] animate-pulse-ring-premium"></div>
      
      {/* Main button with floating animation */}
      <button
        onClick={handleClick}
        aria-label="Play video"
        className="relative h-[90px] w-[90px] rounded-full bg-[#E10B0A] flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.3),0_0_32px_rgba(225,11,10,0.4)] hover:scale-[1.06] hover:shadow-[0_6px_20px_rgba(0,0,0,0.35),0_0_40px_rgba(225,11,10,0.5)] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#E10B0A] focus:ring-opacity-30 focus:ring-offset-2 animate-float"
      >
        {/* Play icon */}
        <svg 
          className="w-10 h-10 text-white ml-1" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z"/>
        </svg>

        {/* Click ripple effect */}
        {ripple && (
          <div className="absolute inset-0 rounded-full bg-white animate-ripple-premium"></div>
        )}
      </button>
    </div>
  )
}

