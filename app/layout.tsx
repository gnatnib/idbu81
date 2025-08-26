import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "@/components/client-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KKN Zona KHAS - Kuliner Halal, Aman, dan Sehat",
  description:
    "Program KKN untuk pengembangan Zona KHAS di Klipang, Kelurahan Sendangmulyo. Memberdayakan UMKM kuliner dengan standar halal, aman, dan sehat.",
  keywords: "KKN, Zona KHAS, UMKM, Kuliner Halal, Sendangmulyo, Klipang",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
