"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Shield,
  Heart,
  Utensils,
  Download,
  BookOpen,
  Users,
  Target,
  Award,
  TrendingUp,
} from "lucide-react"

const khasFeatures = [
  {
    icon: <Utensils className="h-8 w-8" />,
    title: "Halal",
    description: "Semua produk kuliner telah tersertifikasi halal dan mengikuti standar syariah yang ketat.",
    color: "bg-green-500",
    borderColor: "border-green-200",
    bgColor: "bg-green-50",
    details: [
      "Sertifikasi halal resmi dari BPJPH",
      "Bahan baku terjamin kehalalannya",
      "Proses produksi sesuai standar halal",
      "Pengawasan berkala oleh tim ahli",
    ],
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Aman",
    description: "Keamanan pangan terjamin dengan standar kebersihan dan sanitasi yang tinggi.",
    color: "bg-blue-500",
    borderColor: "border-blue-200",
    bgColor: "bg-blue-50",
    details: [
      "Standar kebersihan HACCP",
      "Pelatihan hygiene untuk pelaku UMKM",
      "Monitoring kualitas produk berkala",
      "Sertifikasi keamanan pangan",
    ],
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Sehat",
    description: "Produk kuliner yang bergizi dan mendukung gaya hidup sehat masyarakat.",
    color: "bg-red-500",
    borderColor: "border-red-200",
    bgColor: "bg-red-50",
    details: [
      "Kandungan gizi seimbang",
      "Penggunaan bahan alami",
      "Rendah pengawet buatan",
      "Konsultasi ahli gizi",
    ],
  },
]

const khasSteps = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Identifikasi UMKM",
    step: "1",
    description: "Mengidentifikasi minimal 10 UMKM kuliner di wilayah target untuk bergabung dalam zona KHAS",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Pengurusan NIB",
    step: "2",
    description: "Membantu pembuatan Nomor Induk Berusaha (NIB) untuk seluruh pelaku usaha yang terlibat",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Sertifikasi Halal",
    step: "3",
    description: "Pembuatan dan penerbitan sertifikat halal melalui website siHalal untuk semua produk kuliner",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Labelisasi Higienis",
    step: "4",
    description: "Proses cek sample makanan oleh puskesmas daerah dan pemberian label higienis",
  },
]

export default function AboutKhasSection() {
  const handleDownloadPedoman = () => {
    window.open(
      "https://kneks.go.id/storage/upload/1672398676-Buku%20Saku%20Zona%20KHAS_KNEKS_rev.pdf",
      "_blank"
    )
  }

  return (
    <section id="khas" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Program Multidisiplin 1</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Apa itu Zona KHAS?</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Zona KHAS adalah inisiatif strategis untuk menciptakan ekosistem kuliner yang
            <span className="font-semibold text-green-600"> Halal</span>,
            <span className="font-semibold text-blue-600"> Aman</span>, dan
            <span className="font-semibold text-red-600"> Sehat</span> di Klipang, Kelurahan Sendangmulyo melalui
            pemberdayaan UMKM lokal yang berkelanjutan.
          </p>

          <Button
            onClick={handleDownloadPedoman}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-300"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Pedoman Zona KHAS
          </Button>
        </div>

        {/* KHAS Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {khasFeatures.map((feature, index) => (
            <Card
              key={index}
              className={`h-full border-2 ${feature.borderColor} ${feature.bgColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}
                >
                  {feature.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-center mb-6">{feature.description}</p>
                <div className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Educational Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
            <div className="flex items-center mb-6">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Mengapa Zona KHAS Penting?</h3>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong className="text-gray-900">Zona KHAS</strong> merupakan konsep pengembangan kawasan kuliner yang
                mengintegrasikan nilai-nilai halal, keamanan pangan, dan kesehatan dalam satu ekosistem yang terstruktur.
              </p>
              <p>
                Program ini tidak hanya fokus pada aspek ekonomi, tetapi juga memperhatikan aspek sosial, budaya, dan
                lingkungan untuk menciptakan pembangunan yang berkelanjutan.
              </p>
              <p>
                Melalui pendekatan holistik, Zona KHAS membantu UMKM lokal meningkatkan kualitas produk, daya saing, dan
                akses pasar yang lebih luas.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl p-8 text-white h-full">
            <h3 className="text-2xl font-bold mb-6">Prinsip Dasar Zona KHAS</h3>
            <div className="space-y-4">
              {[
                { title: "Partisipatif", desc: "Melibatkan seluruh stakeholder dalam perencanaan dan implementasi" },
                { title: "Berkelanjutan", desc: "Memperhatikan aspek ekonomi, sosial, dan lingkungan jangka panjang" },
                { title: "Inovatif", desc: "Menggunakan teknologi dan metode terkini untuk efisiensi maksimal" },
                { title: "Inklusif", desc: "Memberikan kesempatan yang sama bagi semua pelaku UMKM" },
              ].map((principle, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{principle.title}</h4>
                    <p className="text-sm opacity-90">{principle.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Langkah-langkah Pewujudan Zona KHAS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {khasSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
                {index < khasSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-6 border-t-2 border-dashed border-gray-300 transform -translate-x-3"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Community Benefits */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Manfaat Zona KHAS untuk Masyarakat</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Untuk Konsumen",
                benefits: [
                  "Jaminan produk halal dan aman",
                  "Kualitas gizi yang terjamin",
                  "Harga yang kompetitif",
                  "Kemudahan akses informasi produk",
                ],
              },
              {
                title: "Untuk UMKM",
                benefits: [
                  "Peningkatan kapasitas produksi",
                  "Akses ke pasar yang lebih luas",
                  "Bantuan sertifikasi dan perizinan",
                  "Pelatihan dan pendampingan berkelanjutan",
                ],
              },
              {
                title: "Untuk Daerah",
                benefits: [
                  "Peningkatan PAD dari sektor kuliner",
                  "Branding positif sebagai zona kuliner",
                  "Peningkatan kunjungan wisatawan",
                  "Penciptaan lapangan kerja baru",
                ],
              },
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 h-full">
                <h4 className="font-bold text-lg text-gray-900 mb-4 text-center">{category.title}</h4>
                <ul className="space-y-2">
                  {category.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
