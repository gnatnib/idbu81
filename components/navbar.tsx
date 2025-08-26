"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const pathname = usePathname()
  const isTeamPage = pathname === "/team"

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Beranda", href: "#hero" },
    { name: "Program Kami", href: "#khas" },
    { name: "Profil Kelurahan", href: "#village" },
    { name: "UMKM", href: "#umkm" },
    { name: "Tim Kami", href: "#team" },
    { name: "Artikel", href: "#articles" },
    { name: "Peta", href: "#map" },
    { name: "Kontak", href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)

    // Check if we're on the home page
    const isHomePage = window.location.pathname === "/"

    if (isHomePage) {
      // If on home page, scroll to section
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If on other pages, navigate to home page with hash
      window.location.href = `/${href}`
    }
  }

  const handleHomeClick = () => {
    setIsOpen(false)
    window.location.href = "/"
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isTeamPage
          ? "bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg"
          : isScrolled
            ? "bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg"
            : "bg-transparent border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14 md:h-16">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={handleHomeClick}>
            <img
              src="/images/logokknbgerase.png"
              alt="Logo KKN UNDIP"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <div className="flex flex-col">
              <span
                className={`font-bold text-base md:text-lg leading-tight transition-colors duration-300 ${
                  isTeamPage || isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                KKN-T IDBU 81 Sendangmulyo
              </span>
              <span
                className={`text-xs hidden sm:block transition-colors duration-300 ${
                  isTeamPage || isScrolled ? "text-gray-600" : "text-white/80"
                }`}
              >
                Universitas Diponegoro
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`font-medium transition-colors duration-300 ${
                  isTeamPage || isScrolled ? "text-gray-700 hover:text-green-600" : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 ${
                isTeamPage || isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm border-t border-gray-200 rounded-b-lg mx-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
