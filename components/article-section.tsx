"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ExternalLink, Eye, Clock, ArrowRight } from "lucide-react"

const articlesData = [
  {
    id: 1,
    title: "Dorong UMKM Berlegalitas, Mahasiswa KKN Bantu UMKM Mengurus NIB dan Sertifikasi Halal",
    description:
      "Tim KKN UNDIP membantu pelaku UMKM di Klipang untuk mengurus Nomor Induk Berusaha (NIB) dan sertifikasi halal guna meningkatkan legalitas dan daya saing usaha mereka dalam program Zona KHAS.",
    image: "/images/thumbnailartikel1.jpg",
    publishDate: "23 Juli 2025",
    author: "Tim Redaksi ZCampus",
    category: "Pemberdayaan UMKM",
    readTime: "4 menit",
    url: "https://zcampus.indozone.id/news/2486146322/dorong-umkm-berlegalitas-mahasiswa-kkn-bantu-umkm-mengurus-nib-dan-sertifikasi-halal",
  },
  {
    id: 2,
    title: "Tingkatkan Keamanan, Mahasiswa UNDIP Bantu Instalasi CCTV di Kelurahan Sendangmulyo",
    description:
      "Dalam upaya meningkatkan keamanan lingkungan, mahasiswa KKN UNDIP berkolaborasi dengan pihak kelurahan untuk menginstalasi sistem CCTV di titik-titik strategis Kelurahan Sendangmulyo.",
    image: "/images/thumbnailartikel2.jpg",
    publishDate: "23 Juli 2025",
    author: "Tim Redaksi ZCampus",
    category: "Keamanan Lingkungan",
    readTime: "4 menit",
    url: "https://zcampus.indozone.id/news/2486146411/tingkatkan-keamanan-mahasiswa-undip-bantu-instalasi-cctv-di-kelurahan-sendangmulyo",
  },
  {
    id: 3,
    title: "Pujasera Tulus Harapan Kini Punya Zona Kuliner Halal, Aman dan Sehat",
    description:
      "Pujasera Tulus Harapan resmi menjadi bagian dari Zona KHAS berkat kerja sama tim KKN UNDIP dengan pelaku usaha lokal. Transformasi ini diharapkan dapat meningkatkan kualitas dan daya tarik kuliner di kawasan tersebut.",
    image: "/images/thumbnailartikel3.jpg",
    publishDate: "18 Agustus 2025",
    author: "Tim Redaksi ZCampus",
    category: "Zona KHAS",
    readTime: "5 menit",
    url: "https://zcampus.indozone.id/news/2486152256/pujasera-tulus-harapan-kini-punya-zona-kuliner-halal-aman-dan-sehat",
  },
  {
    id: 4,
    title:
      "Mahasiswa KKN-T UNDIP IDBU 81 Membantu Proses Labelisasi Higienis Guna Mendukung Kawasan Kuliner Halal, Aman dan Sehat",
    description:
      "Tim KKN-T UNDIP IDBU 81 melakukan pendampingan labelisasi higienis untuk UMKM kuliner di Klipang. Program ini bertujuan memberikan informasi yang jelas kepada konsumen tentang standar kebersihan dan kualitas produk.",
    image: "/images/thumbnailartikel4.jpg",
    publishDate: "05 Agustus 2025",
    author: "Tim Redaksi ZCampus",
    category: "Labelisasi Higienis",
    readTime: "4 menit",
    url: "https://zcampus.indozone.id/news/2486149540/mahasiswa-kkn-t-undip-idbu-81-membantu-proses-labelisasi-higienis-guna-mendukung-kawasan-kuliner-halal-aman-dan-sehat",
  },
]

const categoryColors = {
  "Pemberdayaan UMKM": "bg-green-100 text-green-800 border-green-200",
  "Keamanan Lingkungan": "bg-blue-100 text-blue-800 border-blue-200",
  "Zona KHAS": "bg-purple-100 text-purple-800 border-purple-200",
  "Labelisasi Higienis": "bg-orange-100 text-orange-800 border-orange-200",
}

export default function ArticleSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const handleReadArticle = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="articles" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">Publikasi Media</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Artikel & Berita</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Liputan media tentang program dan kegiatan KKN Zona KHAS di Klipang, Kelurahan Sendangmulyo yang telah
            dipublikasikan di berbagai platform berita.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articlesData.map((article) => (
            <Card
              key={article.id}
              className="group overflow-hidden cursor-pointer transition-all duration-700 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl"
              onMouseEnter={() => setHoveredCard(article.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleReadArticle(article.url)}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`${
                      categoryColors[article.category as keyof typeof categoryColors]
                    } font-medium shadow-lg`}
                  >
                    {article.category}
                  </Badge>
                </div>

                {/* Read Time */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {article.readTime}
                </div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    hoveredCard === article.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Button
                    size="sm"
                    className="bg-white text-gray-900 hover:bg-gray-100 transform scale-90 group-hover:scale-100 transition-transform duration-300"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Baca Artikel
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Article Meta */}
                <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{article.publishDate}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{article.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-purple-600 transition-colors duration-300">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm line-clamp-3 leading-relaxed">{article.description}</p>

                {/* Read More Button */}
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0 h-auto font-medium group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-gray-600 p-2"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleReadArticle(article.url)
                    }}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ikuti Perkembangan Program Kami</h3>
            <p className="text-lg mb-6 opacity-90">
              Dapatkan update terbaru tentang kegiatan dan pencapaian tim KKN Zona KHAS melalui publikasi media.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-purple-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open("https://zcampus.indozone.id/", "_blank")}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Kunjungi ZCampus
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300 bg-transparent"
                onClick={() => {
                  const element = document.querySelector("#contact")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Hubungi Tim Kami
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
