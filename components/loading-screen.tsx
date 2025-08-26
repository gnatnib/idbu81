"use client"

import { useEffect, useState } from "react"
import { Utensils, Shield, Heart } from "lucide-react"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  const steps = [
    { icon: <Utensils className="h-8 w-8" />, label: "Halal", color: "text-green-500" },
    { icon: <Shield className="h-8 w-8" />, label: "Aman", color: "text-blue-500" },
    { icon: <Heart className="h-8 w-8" />, label: "Sehat", color: "text-red-500" },
  ]

  useEffect(() => {
    // Prevent any scrolling during loading
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = '0'
    document.body.style.left = '0'
    document.body.style.width = '100%'
    
    const duration = 2500 // 2.5 seconds
    const interval = 50
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment

        // Update current step based on progress
        if (newProgress >= 33 && currentStep === 0) {
          setCurrentStep(1)
        } else if (newProgress >= 66 && currentStep === 1) {
          setCurrentStep(2)
        }

        if (newProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setIsExiting(true)
            setTimeout(() => {
              onLoadingComplete()
            }, 500)
          }, 200)
          return 100
        }
        return newProgress
      })
    }, interval)

    return () => {
      clearInterval(timer)
      // Cleanup will be handled by the parent component
    }
  }, [currentStep, onLoadingComplete])

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 transition-all duration-500 ${
        isExiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8 transform transition-all duration-1000">
          <div className="relative">
            <img
              src="/images/logokknbgerase.png"
              alt="Logo KKN UNDIP"
              className={`w-20 h-20 mx-auto mb-4 transition-all duration-1000 ${
                isExiting ? "scale-0 rotate-180" : "scale-100 rotate-0"
              }`}
            />

            {/* Rotating Ring */}
            <div className="absolute inset-0 w-20 h-20 mx-auto">
              <div className="w-full h-full border-4 border-transparent border-t-green-500 border-r-blue-500 rounded-full animate-spin" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1
            className={`text-4xl font-bold text-gray-800 mb-2 transition-all duration-1000 ${
              isExiting ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">ZONA KHAS</span>
          </h1>
          <p
            className={`text-lg text-gray-600 transition-all duration-1000 delay-200 ${
              isExiting ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            Kuliner Halal, Aman, dan Sehat
          </p>
        </div>

        {/* KHAS Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center transition-all duration-500 ${
                currentStep >= index ? "opacity-100 scale-100" : "opacity-30 scale-90"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-all duration-500 ${
                  currentStep >= index ? "bg-white shadow-lg transform scale-110" : "bg-gray-100"
                } ${step.color}`}
              >
                {step.icon}
              </div>
              <span className={`text-sm font-medium ${step.color} transition-all duration-500`}>{step.label}</span>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>Memuat...</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-float opacity-60`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}