"use client"

import { useState, useEffect, useRef } from "react"

export function useLoading() {
  const [isLoading, setIsLoading] = useState(true)
  const [isContentReady, setIsContentReady] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const scrollPosition = useRef(0)

  useEffect(() => {
    // Prevent scroll restoration
    if (typeof window !== 'undefined') {
      // Store current scroll position
      scrollPosition.current = window.scrollY
      
      // Disable scroll restoration
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'
      }
      
      // Prevent scrolling during loading
      document.documentElement.classList.add('loading-active')
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = '0'
      document.body.style.left = '0'
      document.body.style.width = '100%'
      document.body.style.height = '100%'
      
      // Force scroll to top
      window.scrollTo(0, 0)
    }

    setIsMounted(true)

    // Check if loading has been shown in this session
    const loadingShown = sessionStorage.getItem("loadingShown")

    if (loadingShown) {
      // Skip loading screen and show content immediately
      setTimeout(() => {
        setIsLoading(false)
        setIsContentReady(true)
        restoreScrollBehavior()
      }, 100)
    } else {
      // Show loading for first visit in session
      setIsLoading(true)
      setIsContentReady(false)
    }

    return () => {
      restoreScrollBehavior()
    }
  }, [])

  const restoreScrollBehavior = () => {
    if (typeof window !== 'undefined') {
      // Restore scroll behavior
      document.documentElement.classList.remove('loading-active')
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.width = ''
      document.body.style.height = ''
      
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'auto' })
      
      // Re-enable scroll restoration
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto'
      }
    }
  }

  const handleLoadingComplete = () => {
    // Set both states together to prevent flash
    setIsLoading(false)
    setIsContentReady(true)
    sessionStorage.setItem("loadingShown", "true")
    
    // Restore scroll behavior after a brief delay
    setTimeout(() => {
      restoreScrollBehavior()
    }, 100)
  }

  // Don't render anything until mounted (prevents hydration issues)
  if (!isMounted) {
    return {
      isLoading: true,
      isContentReady: false,
      handleLoadingComplete: () => {},
    }
  }

  return {
    isLoading,
    isContentReady,
    handleLoadingComplete,
  }
}