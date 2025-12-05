'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import PlayButton from './PlayButton'

export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [showThumbnail, setShowThumbnail] = useState(true)
  const [isSeeking, setIsSeeking] = useState(false)
  const [wasPlayingBeforeSeek, setWasPlayingBeforeSeek] = useState(false)
  const [isMuted, setIsMuted] = useState(true) // Start muted for autoplay compatibility
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll reveal animation using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  // Initialize video element with proper audio settings for all devices
  useEffect(() => {
    if (videoRef.current) {
      // Set initial muted state directly on DOM element
      videoRef.current.muted = isMuted
      videoRef.current.volume = 1.0
      
      // Listen for volume changes from native controls
      const handleVolumeChange = () => {
        if (videoRef.current) {
          setIsMuted(videoRef.current.muted)
        }
      }
      
      // Listen for play events to ensure audio stays enabled
      const handlePlayEvent = () => {
        if (videoRef.current && !isMuted) {
          // Ensure audio is enabled when playing (handles browser resets)
          videoRef.current.muted = false
          videoRef.current.volume = 1.0
        }
      }
      
      videoRef.current.addEventListener('volumechange', handleVolumeChange)
      videoRef.current.addEventListener('play', handlePlayEvent)
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('volumechange', handleVolumeChange)
          videoRef.current.removeEventListener('play', handlePlayEvent)
        }
      }
    }
  }, [isMuted])

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
        setShowThumbnail(true)
      } else {
        // CRITICAL: For all devices (iOS, Android, Desktop), unmute must happen 
        // synchronously in the same user interaction before calling play()
        // This is required for audio to work on mobile devices
        
        // Step 1: Unmute and set volume BEFORE play() call (critical for mobile)
        videoRef.current.muted = false
        videoRef.current.volume = 1.0
        setIsMuted(false)
        
        // Step 2: Play video - unmute must happen before this call
        const playPromise = videoRef.current.play()
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Video is playing - verify audio is enabled
              setIsPlaying(true)
              setShowThumbnail(false)
              
              // Step 3: Force unmute after play starts (some browsers reset it)
              // This is especially important for iOS Safari and Android Chrome
              if (videoRef.current) {
                // Use requestAnimationFrame for better browser compatibility
                requestAnimationFrame(() => {
                  if (videoRef.current) {
                    videoRef.current.muted = false
                    videoRef.current.volume = 1.0
                    
                    // Double-check after a short delay (iOS Safari sometimes needs this)
                    setTimeout(() => {
                      if (videoRef.current && !videoRef.current.paused) {
                        videoRef.current.muted = false
                        videoRef.current.volume = 1.0
                      }
                    }, 100)
                  }
                })
              }
            })
            .catch((error) => {
              // Handle play promise rejection (e.g., autoplay restrictions)
              console.error('Error playing video:', error)
              setIsPlaying(false)
            })
        } else {
          // Fallback for browsers that don't return a promise
          setIsPlaying(true)
          setShowThumbnail(false)
          if (videoRef.current) {
            videoRef.current.muted = false
            videoRef.current.volume = 1.0
          }
        }
      }
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
    setShowThumbnail(true)
  }

  const handleVideoPlay = () => {
    setIsPlaying(true)
    setShowThumbnail(false)
    
    // Ensure audio is enabled when video plays (user interaction means we can unmute)
    // This handles cases where video starts playing but audio was reset
    if (videoRef.current) {
      // Force unmute on play event (works across all devices/OS)
      if (videoRef.current.muted) {
        videoRef.current.muted = false
        videoRef.current.volume = 1.0
        setIsMuted(false)
      }
      
      // Additional check for iOS Safari and Android - ensure volume is max
      videoRef.current.volume = 1.0
      
      // Sync state with actual video muted property
      setIsMuted(videoRef.current.muted)
    }
  }

  const handleVideoPause = () => {
    setIsPlaying(false)
    // Only show thumbnail if not seeking
    if (!isSeeking) {
      setShowThumbnail(true)
    }
  }

  const handleSeeking = () => {
    if (!videoRef.current) return
    
    setIsSeeking(true)
    // Hide thumbnail during seeking
    setShowThumbnail(false)
    // Remember if video was playing before seeking (check before seeking starts)
    setWasPlayingBeforeSeek(!videoRef.current.paused)
  }

  const handleSeeked = () => {
    setIsSeeking(false)
    // Always hide thumbnail after seeking - show the video frame
    setShowThumbnail(false)
    
    // If video was playing before seeking, continue playing from new position
    if (wasPlayingBeforeSeek && videoRef.current) {
      // Use setTimeout to ensure the seek operation is complete
      setTimeout(() => {
        if (videoRef.current) {
          // Ensure video is unmuted if it was playing before (user had interacted)
          // Set directly on DOM element for mobile compatibility
          if (videoRef.current.muted) {
            videoRef.current.muted = false
            videoRef.current.volume = 1.0
            setIsMuted(false)
          }
          videoRef.current.play().then(() => {
            setIsPlaying(true)
            // Double-check audio is enabled after play
            if (videoRef.current) {
              videoRef.current.muted = false
              videoRef.current.volume = 1.0
            }
          }).catch(() => {
            // Handle play promise rejection (e.g., autoplay restrictions)
            setIsPlaying(false)
          })
        }
      }, 100)
    } else {
      // If video was paused, keep it paused but don't show thumbnail
      // Show the video frame at the seeked position
      setIsPlaying(false)
    }
  }

  return (
    <div 
      ref={containerRef}
      className="relative mt-6 sm:mt-8 lg:mt-10"
    >
      {/* Radial gradient glow behind card */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-[1200px] h-[600px] lg:h-[800px] bg-[radial-gradient(circle_at_center,#FFD8D2_0%,transparent_70%)] opacity-25 blur-3xl"></div>
      </div>

      {/* Scroll reveal container */}
      <div 
        className={`transition-all duration-800 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
      >

      {/* Premium Video Card */}
      <div 
        className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] mx-auto w-full max-w-[1080px] h-[240px] sm:h-[300px] md:h-[360px] lg:h-[640px] bg-[#F3F4F6] shadow-[0_24px_60px_-16px_rgba(0,0,0,0.25)] group border border-white"
      >
        {/* Thumbnail */}
        {showThumbnail && (
          <div className="absolute inset-0 z-10 pointer-events-none">
            <Image
              src="/images/traffic-guru-thumbnail.png"
              alt="Traffic Ticket Guru Video Thumbnail"
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        
        {/* Video */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          onEnded={handleVideoEnd}
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
          playsInline
          controls
          controlsList="nodownload"
          muted={isMuted}
          loop={false}
          poster="/images/traffic-guru-thumbnail.png"
          preload="metadata"
        >
          <source src="/videos/traffic-guru-compressed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Vignette overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, transparent 0%, transparent 50%, rgba(0,0,0,0.08) 100%)'
          }}
        ></div>
        
        {/* Dark Overlay - Only show when thumbnail is visible */}
        {showThumbnail && (
          <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
        )}
        
        {/* Play/Pause Button Overlay - Only show when thumbnail is visible */}
        {showThumbnail && (
          <div 
            className="absolute inset-0 flex items-center justify-center transition-colors z-20 cursor-pointer"
            onClick={handlePlayClick}
            onTouchStart={(e) => {
              e.stopPropagation()
              handlePlayClick()
            }}
          >
            <PlayButton onClick={handlePlayClick} />
          </div>
        )}
      </div>
      </div>
    </div>
  )
}
