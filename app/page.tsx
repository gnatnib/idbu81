"use client"

import { useLoading } from "@/hooks/use-loading"
import LoadingScreen from "@/components/loading-screen"
import HeroSection from "@/components/hero-section"
import AboutKhasSection from "@/components/about-khas-section"
import VillageProfileSection from "@/components/village-profile-section"
import UmkmSection from "@/components/umkm-section"
import TeamSection from "@/components/team-section"
import ArticleSection from "@/components/article-section"
import MapSection from "@/components/map-section"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  const { isLoading, isContentReady, handleLoadingComplete } = useLoading()

  // Show loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-green-50 to-blue-50">
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      </div>
    )
  }

  // Show content loading state if content is not ready
  if (!isContentReady) {
    return (
      <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat konten...</p>
        </div>
      </div>
    )
  }

  // Show main content with smooth transition
  return (
    <main className="min-h-screen">
      <div className="animate-fade-in">
        <HeroSection />
        <AboutKhasSection />
        <VillageProfileSection />
        <UmkmSection />
        <TeamSection />
        <ArticleSection />
        <MapSection />
        <ContactSection />
      </div>
    </main>
  )
}