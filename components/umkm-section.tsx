"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Eye, Utensils, Coffee, Soup, Flame, Cookie, Sandwich, FileText } from "lucide-react"
import UmkmModal from "./umkm-modal"
import GlowFilterMenu from "./glow-filter-menu"

interface UmkmData {
  id: number
  name: string
  category: string
  description: string
  image: string
  rating: number
  address: string
  phone: string
  hours: string
  specialties: string[]
  price: string
  certificateId: string | null
  owner: string
}

const umkmData: UmkmData[] = [
  {
    id: 1,
    name: "Nasi Goreng Tegal Mas Awi '77'",
    category: "Makanan Tradisional",
    description:  
      "Nasi goreng khas Tegal dengan cita rasa autentik dan bumbu yang meresap sempurna. Dilengkapi dengan berbagai pilihan menu seperti kwetiaw, mie goreng, cap cai, dan bihun goreng. Menggunakan bahan-bahan segar dengan teknik masak tradisional Tegal.",
    image: "/images/nasgortegal.jpg",
    rating: 5.0,
    address: "Taman Kuliner Tulus Harapan, Sendangmulyo, Tembalang, Semarang",
    phone: "+62 895-3055-9160",
    hours: "10:00 - 22:00 WIB",
    specialties: ["Nasi Goreng", "Kwetiaw", "Mie Goreng", "Cap Cai", "Bihun Goreng", "Es Jeruk"],
    price: "Rp 12.000 - 22.000",
    certificateId: "ID33410025572450825",
    owner: "KHOLIDIN ILMI"
  },
  {
    id: 2,
    name: "Aero Sop Iga (Bu Roni)",
    category: "Makanan Berkuah",
    description:
      "Sop iga sapi dengan kuah bening yang segar dan daging yang empuk. Dilengkapi dengan nasi uduk ayam dan soto Betawi yang nikmat. Kuah kaldu dimasak dengan bumbu tradisional untuk menghasilkan rasa yang kaya dan bergizi.",
    image: "/images/aero.jpg",
    rating: 5.0,
    address: "Taman Kuliner Tulus Harapan, Sendangmulyo, Tembalang, Semarang",
    phone: "+62 812-2530-2123",
    hours: "11:00 - 21:00 WIB",
    specialties: ["Sop Iga", "Nasi Uduk Ayam", "Soto Betawi"],
    price: "Rp 18.000 - 35.000",
    certificateId: "ID33410025573250825",
    owner: "SARONI"
  },
  {
    id: 3,
    name: "Ayam Bakar & Kremes TULUS",
    category: "Makanan Bakar",
    description:
      "Ayam bakar dan ayam kremes dengan bumbu khas yang meresap hingga ke dalam. Dibakar dengan arang untuk menghasilkan aroma dan rasa yang khas. Ayam dipilih yang segar dan berkualitas dengan bumbu racikan sendiri.",
    image: "/images/ayamtulus.jpg",
    rating: 5.0,
    address: "Taman Kuliner Tulus Harapan, Sendangmulyo, Tembalang, Semarang",
    phone: "+62 882-2651-6134",
    hours: "16:00 - 23:00 WIB",
    specialties: ["Ayam Bakar", "Ayam Kremes"],
    price: "Rp 15.000 - 30.000",
    certificateId: "ID33410025575410825",
    owner: "ERDO WICAKSONO"
  },
  {
    id: 4,
    name: "Gado Gado dan Tahu Gimbal Bu Ir",
    category: "Makanan Tradisional",
    description:
      "Gado-gado segar dengan bumbu kacang yang gurih dan tahu gimbal khas Semarang. Sayuran segar dipilih setiap hari dan bumbu kacang dibuat dengan resep tradisional. Tahu gimbal dibuat dengan teknik khusus untuk tekstur yang pas.",
    image: "/images/gadobuir.jpg",
    rating: 5.0,
    address: "Taman Kuliner Tulus Harapan, Sendangmulyo, Tembalang, Semarang",
    phone: "+62 812-2806-561",
    hours: "13:00 - 22:00 WIB",
    specialties: ["Gado-gado", "Tahu Gimbal", "Lontong", "Ketupat"],
    price: "Rp 20.000",
    certificateId: "ID33410025723280825",
    owner: "IBU IR"
  },
  {
    id: 5,
    name: "Spesial Nasi Goreng Pak Kas",
    category: "Makanan Tradisional",
    description:
      "Nasi goreng dan gongso dengan berbagai pilihan lauk seperti ayam, babat, paru, telur, dan iso. Gongso merupakan makanan khas dengan kuah yang gurih dan bumbu yang kaya rempah. Semua dimasak dengan api besar untuk hasil yang sempurna.",
    image: "/images/nasgorkas.jpg",
    rating: 5.0,
    address: "Taman Kuliner Tulus Harapan, Sendangmulyo, Tembalang, Semarang",
    phone: "+62 816-7890-1234",
    hours: "10:00 - 22:00 WIB",
    specialties: ["Nasi Goreng Ayam", "Gongso Ayam", "Gongso Babat", "Nasi Goreng Babat", "Gongso Paru", "Nasi Goreng Iso"],
    price: "Rp 12.000 - 28.000",
    certificateId: "ID33410025573270825",
    owner: "DARNIA"
  },
  {
    id: 6,
    name: "Sate Madura Cak JUNED",
    category: "Makanan Bakar",
    description:
      "Sate ayam dan kambing dengan bumbu kacang spesial dan sambal yang pedas menggigit. Daging dipilih yang segar dan empuk, dibakar dengan arang untuk aroma yang harum. Dilengkapi dengan lontong, timun, dan bawang merah.",
    image: "/images/satecakjuned.jpg",
    rating: 5.0,
    address: "Taman Kuliner Tulus Harapan, Sendangmulyo, Tembalang, Semarang",
    phone: "+62 877-0008-0038",
    hours: "17:00 - 23:00 WIB",
    specialties: ["Sate Ayam", "Sate Kambing", "Lontong", "Sambal Kacang"],
    price: "Rp 15.000 - 35.000",
    certificateId: "ID33410025801670825",
    owner: "CAK JUNED"
  },
  {
    id: 7,
    name: "Nori House",
    category: "Makanan Tradisional",
    description:
      "Restoran Jepang yang menyajikan sushi, sashimi, ramen, dan bento dengan bahan-bahan segar dan berkualitas. Semua hidangan dibuat oleh chef berpengalaman dengan resep otentik Jepang. Suasana restoran yang nyaman dan modern.",
    image: "/images/nori.jpg",
    rating: 5.0,
    address: "Taman Kuliner Tulus Harapan, Sendangmulyo, Tembalang, Semarang",
    phone: "+62 812-3456-7890",
    hours: "11:00 - 22:00 WIB",
    specialties: ["Sushi", "Sashimi", "Ramen", "Bento"],
    price: "Rp 10.000 - 30.000",
    certificateId: "ID33110013972641223",
    owner: "NORI HOUSE"
  },
]

const filterItems = [
  {
    id: "Semua",
    label: "Semua",
    gradient: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(79,70,229,0.06) 50%, rgba(67,56,202,0) 100%)",
    iconColor: "text-indigo-500",
    icon: <Utensils className="h-4 w-4" />,
  },
  {
    id: "Makanan Tradisional",
    label: "Makanan Tradisional",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
    icon: <Utensils className="h-4 w-4" />,
  },
  {
    id: "Makanan Berkuah",
    label: "Makanan Berkuah",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
    icon: <Soup className="h-4 w-4" />,
  },
  {
    id: "Makanan Bakar",
    label: "Makanan Bakar",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
    icon: <Flame className="h-4 w-4" />,
  },
]

export default function UmkmSection() {
  const [selectedUmkm, setSelectedUmkm] = useState<UmkmData | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filter, setFilter] = useState("Semua")

  const filteredUmkm = filter === "Semua" ? umkmData : umkmData.filter((umkm) => umkm.category === filter)

  const handleViewDetails = (umkm: UmkmData) => {
    setSelectedUmkm(umkm)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedUmkm(null)
  }

  const handleViewCertificate = (certificateId: string) => {
    const pdfPath = `/certificates/${certificateId}.pdf`
    window.open(pdfPath, '_blank')
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
        <div className="flex justify-center mb-12">
            <GlowFilterMenu items={filterItems} activeFilter={filter} onFilterChange={setFilter} />
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
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleViewDetails(umkm)}
                    className="flex-1 bg-green-600 hover:bg-green-700 transition-colors duration-300"
                    size="sm"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Lihat Detail
                  </Button>
                  {umkm.certificateId && (
                    <Button
                      onClick={() => handleViewCertificate(umkm.certificateId!)}
                      variant="outline"
                      className="flex-1 border-green-600 text-green-600 hover:bg-green-50 transition-colors duration-300"
                      size="sm"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Sertifikat Halal
                    </Button>
                  )}
                </div>
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