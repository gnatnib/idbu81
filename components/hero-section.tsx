"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"

export default function HeroSection() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bgkhas.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <MapPin className="h-6 w-6 mr-2" />
          <span className="text-lg font-medium">Klipang, Kelurahan Sendangmulyo</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-xl sm:text-2xl md:text-3xl font-normal mb-2 text-yellow-300">
            Selamat Datang di
          </span>
          ZONA KHAS
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Kuliner <span className="text-yellow-300 font-semibold">Halal</span>,
          <span className="text-green-300 font-semibold"> Aman</span>, dan
          <span className="text-blue-300 font-semibold"> Sehat</span> untuk Masyarakat Sendangmulyo
        </p>

        <div className="flex flex-col gap-4 justify-center max-w-sm sm:max-w-none sm:flex-row mx-auto">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transform hover:scale-105 transition-all duration-300"
            onClick={() => handleScrollToSection("#khas")}
          >
            Jelajahi Program
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent transform hover:scale-105 transition-all duration-300"
            onClick={() => handleScrollToSection("#umkm")}
          >
            Lihat UMKM
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
