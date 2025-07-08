"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Eye } from "lucide-react"
import UmkmModal from "./umkm-modal"

const umkmData = [
  {
    id: 1,
    name: "Warung Bu Sari",
    category: "Makanan Tradisional",
    description:
      "Spesialis gudeg dan nasi gudeg dengan cita rasa autentik Yogyakarta. Warung yang sudah berdiri sejak 1995 ini menggunakan resep turun temurun dengan bumbu rempah pilihan dan santan kelapa segar. Setiap hari menyajikan gudeg dengan cita rasa yang konsisten dan pelayanan yang ramah.",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    address: "Jl. Klipang Raya No. 15, Sendangmulyo, Tembalang, Semarang",
    phone: "+62 812-3456-7890",
    hours: "06:00 - 22:00 WIB",
    specialties: ["Gudeg Jogja", "Nasi Gudeg Komplit", "Ayam Kampung", "Tahu Bacem"],
    certifications: ["Halal MUI", "PIRT", "Hygiene A"],
    price: "Rp 15.000 - 35.000",
  },
  {
    id: 2,
    name: "Bakso Mas Joko",
    category: "Makanan Berkuah",
    description:
      "Bakso sapi asli dengan kuah kaldu yang gurih dan daging yang kenyal. Menggunakan daging sapi pilihan tanpa bahan pengawet dan penyedap buatan. Kuah kaldu dimasak selama 8 jam untuk menghasilkan rasa yang kaya dan bergizi.",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    address: "Jl. Sendangmulyo No. 28, Sendangmulyo, Tembalang, Semarang",
    phone: "+62 813-4567-8901",
    hours: "10:00 - 21:00 WIB",
    specialties: ["Bakso Sapi Jumbo", "Bakso Urat", "Mie Ayam", "Pangsit Goreng"],
    certifications: ["Halal MUI", "PIRT"],
    price: "Rp 12.000 - 25.000",
  },
  {
    id: 3,
    name: "Es Dawet Mbak Tini",
    category: "Minuman Tradisional",
    description:
      "Es dawet segar dengan santan kelapa muda dan gula merah asli dari Jawa Tengah. Dawet dibuat fresh setiap hari dengan tepung beras berkualitas dan pewarna alami dari daun suji. Santan kelapa diperas langsung dari kelapa segar.",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    address: "Jl. Klipang Tengah No. 7, Sendangmulyo, Tembalang, Semarang",
    phone: "+62 814-5678-9012",
    hours: "08:00 - 18:00 WIB",
    specialties: ["Es Dawet Ayu", "Es Kelapa Muda", "Cendol", "Es Campur"],
    certifications: ["Halal MUI", "PIRT", "Hygiene A"],
    price: "Rp 5.000 - 15.000",
  },
  {
    id: 4,
    name: "Sate Kambing Pak Hadi",
    category: "Makanan Bakar",
    description:
      "Sate kambing muda dengan bumbu kacang spesial dan lalapan segar. Daging kambing dipilih dari kambing muda yang sehat dan segar. Bumbu kacang dibuat dengan resep rahasia keluarga yang telah turun temurun selama 3 generasi.",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    address: "Jl. Sendangmulyo Barat No. 42, Sendangmulyo, Tembalang, Semarang",
    phone: "+62 815-6789-0123",
    hours: "17:00 - 23:00 WIB",
    specialties: ["Sate Kambing", "Tongseng Kambing", "Gulai Kambing", "Sop Kambing"],
    certifications: ["Halal MUI", "PIRT"],
    price: "Rp 20.000 - 45.000",
  },
  {
    id: 5,
    name: "Pecel Lele Bu Yanti",
    category: "Makanan Goreng",
    description:
      "Pecel lele crispy dengan sambal terasi pedas dan lalapan lengkap. Lele segar dari kolam sendiri, digoreng dengan tepung bumbu rahasia hingga crispy di luar dan lembut di dalam. Sambal terasi dibuat fresh dengan cabai pilihan.",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    address: "Jl. Klipang Selatan No. 33, Sendangmulyo, Tembalang, Semarang",
    phone: "+62 816-7890-1234",
    hours: "16:00 - 22:00 WIB",
    specialties: ["Pecel Lele", "Ayam Penyet", "Tempe Mendoan", "Tahu Crispy"],
    certifications: ["Halal MUI", "PIRT", "Hygiene B"],
    price: "Rp 10.000 - 30.000",
  },
  {
    id: 6,
    name: "Kue Tradisional Mbak Rina",
    category: "Kue & Snack",
    description:
      "Aneka kue tradisional dan modern untuk oleh-oleh dan acara spesial. Dibuat dengan bahan-bahan berkualitas tinggi dan resep tradisional yang telah dimodifikasi untuk cita rasa modern. Cocok untuk berbagai acara dan sebagai oleh-oleh khas Semarang.",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    address: "Jl. Sendangmulyo Timur No. 19, Sendangmulyo, Tembalang, Semarang",
    phone: "+62 817-8901-2345",
    hours: "07:00 - 19:00 WIB",
    specialties: ["Klepon", "Onde-onde", "Kue Lapis", "Wingko Babat"],
    certifications: ["Halal MUI", "PIRT", "Hygiene A"],
    price: "Rp 3.000 - 20.000",
  },
]

export default function UmkmSection() {
  const [selectedUmkm, setSelectedUmkm] = useState<(typeof umkmData)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filter, setFilter] = useState("Semua")

  const categories = [
    "Semua",
    "Makanan Tradisional",
    "Makanan Berkuah",
    "Minuman Tradisional",
    "Makanan Bakar",
    "Makanan Goreng",
    "Kue & Snack",
  ]

  const filteredUmkm = filter === "Semua" ? umkmData : umkmData.filter((umkm) => umkm.category === filter)

  const handleViewDetails = (umkm: (typeof umkmData)[0]) => {
    setSelectedUmkm(umkm)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedUmkm(null)
  }

  return (
    <section id="umkm" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">UMKM Zona KHAS</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">UMKM Terdaftar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan berbagai UMKM kuliner yang telah tersertifikasi dalam Zona KHAS dengan jaminan halal, aman, dan
            sehat.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`transform hover:scale-105 transition-all duration-300 text-sm ${
                filter === category ? "bg-green-600 hover:bg-green-700" : ""
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* UMKM Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredUmkm.map((umkm) => (
            <Card
              key={umkm.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-fit"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={umkm.image || "/placeholder.svg"}
                  alt={umkm.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                    {umkm.category}
                  </Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-medium">{umkm.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg md:text-xl leading-tight">{umkm.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">{umkm.description}</p>
                <Button
                  onClick={() => handleViewDetails(umkm)}
                  className="w-full bg-green-600 hover:bg-green-700 transition-colors duration-300"
                  size="sm"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Lihat Detail
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ingin bergabung dengan Zona KHAS? Hubungi tim kami untuk informasi lebih lanjut.
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-300"
            onClick={() => {
              const element = document.querySelector("#contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Daftar UMKM Baru
          </Button>
        </div>
      </div>

      {/* Modal */}
      <UmkmModal umkm={selectedUmkm} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  )
}
