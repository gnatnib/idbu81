"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Droplets,
  Recycle,
  ShieldCheck,
  Leaf,
  Factory,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Target,
  Microscope,
  ClipboardCheck,
} from "lucide-react"

const sanitasiPrinciples = [
  {
    icon: <Droplets className="h-8 w-8" />,
    title: "Pengelolaan Air",
    description: "Sistem pengelolaan air bersih dan limbah cair yang efektif untuk menjaga kualitas produk kuliner.",
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    details: [
      "Sumber air bersih yang terjamin kualitasnya",
      "Sistem filtrasi dan purifikasi air",
      "Pengelolaan air limbah dengan biofilter",
      "Monitoring kualitas air secara berkala",
    ],
  },
  {
    icon: <Recycle className="h-8 w-8" />,
    title: "Manajemen Limbah",
    description: "Pengelolaan limbah organik dan anorganik yang ramah lingkungan dan berkelanjutan.",
    color: "bg-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    details: [
      "Pemilahan sampah organik dan anorganik",
      "Pengomposan limbah organik",
      "Daur ulang kemasan dan plastik",
      "Sistem pengolahan limbah terpadu",
    ],
  },
  {
    icon: <Factory className="h-8 w-8" />,
    title: "Sanitasi Produksi",
    description: "Standar kebersihan dan sanitasi area produksi sesuai dengan protokol kesehatan.",
    color: "bg-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    details: [
      "Desain layout produksi yang higienis",
      "Sanitasi peralatan dan permukaan kerja",
      "Kontrol hama dan pest management",
      "Personal hygiene untuk pekerja",
    ],
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Lingkungan Berkelanjutan",
    description: "Menciptakan ekosistem kuliner yang ramah lingkungan dan berkelanjutan.",
    color: "bg-emerald-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    details: [
      "Penggunaan energi terbarukan",
      "Minimalisasi jejak karbon",
      "Konservasi sumber daya alam",
      "Edukasi lingkungan untuk masyarakat",
    ],
  },
]

const haccpSteps = [
  {
    step: "1",
    title: "Analisis Bahaya",
    description: "Identifikasi potensi bahaya biologis, kimia, dan fisik dalam proses produksi",
    icon: <AlertTriangle className="h-6 w-6" />,
  },
  {
    step: "2",
    title: "Titik Kendali Kritis",
    description: "Menentukan Critical Control Points (CCP) dalam alur produksi",
    icon: <Target className="h-6 w-6" />,
  },
  {
    step: "3",
    title: "Batas Kritis",
    description: "Menetapkan batas kritis untuk setiap CCP yang harus dipenuhi",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    step: "4",
    title: "Sistem Monitoring",
    description: "Membangun sistem pemantauan untuk mengawasi setiap CCP",
    icon: <Microscope className="h-6 w-6" />,
  },
  {
    step: "5",
    title: "Tindakan Koreksi",
    description: "Menetapkan tindakan perbaikan jika terjadi penyimpangan",
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
  {
    step: "6",
    title: "Verifikasi",
    description: "Melakukan verifikasi sistem HACCP secara berkala",
    icon: <ClipboardCheck className="h-6 w-6" />,
  },
  {
    step: "7",
    title: "Dokumentasi",
    description: "Mencatat dan mendokumentasikan seluruh proses HACCP",
    icon: <FileText className="h-6 w-6" />,
  },
]

const sanitasiImpacts = [
  {
    icon: <Droplets className="h-6 w-6" />,
    title: "Kualitas Air",
    value: "95%",
    description: "UMKM yang menggunakan air bersih berkualitas",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: <Recycle className="h-6 w-6" />,
    title: "Pengurangan Limbah",
    value: "70%",
    description: "Reduksi limbah melalui program daur ulang",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Sertifikasi HACCP",
    value: "85%",
    description: "UMKM yang menerapkan sistem HACCP",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Lingkungan Sehat",
    value: "90%",
    description: "Peningkatan kualitas lingkungan sekitar",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
]

export default function SanitasiSection() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "6285700008941" // nomor Pak Furqon tanpa +
    const message =
      "Halo Pak Furqon, saya ingin berkonsultasi mengenai program sanitasi lingkungan dan HACCP di UMKM."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }
  return (
    <section id="sanitasi" className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Program Multidisiplin</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sanitasi Lingkungan untuk UMKM</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Pemberdayaan UMKM terhadap Sanitasi Lingkungan dalam Mewujudkan Zona Kuliner Sehat melalui implementasi
            standar kebersihan, pengelolaan limbah, dan sistem HACCP yang berkelanjutan.
          </p>
        </div>

        {/* Sanitasi Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {sanitasiPrinciples.map((principle, index) => (
            <Card
              key={index}
              className={`h-full border-2 ${principle.borderColor} ${principle.bgColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 ${principle.color} rounded-full flex items-center justify-center text-white mr-4 shadow-lg`}
                  >
                    {principle.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{principle.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-6">{principle.description}</p>
                <div className="space-y-3">
                  {principle.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* HACCP Information Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <ShieldCheck className="h-10 w-10 text-blue-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">Sistem HACCP</h3>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hazard Analysis and Critical Control Points (HACCP) adalah sistem manajemen keamanan pangan yang
              mengidentifikasi, mengevaluasi, dan mengendalikan bahaya yang signifikan bagi keamanan pangan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {haccpSteps.map((step, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 text-lg font-bold">
                    {step.step}
                  </div>
                  <div className="w-8 h-8 text-blue-600 mx-auto mb-3">{step.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
            <h4 className="text-xl font-bold mb-3">Manfaat Implementasi HACCP</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">Meningkatkan keamanan produk pangan</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">Mengurangi risiko kontaminasi</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">Memenuhi standar internasional</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">Meningkatkan kepercayaan konsumen</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">Akses pasar yang lebih luas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">Efisiensi operasional</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Educational Video & Key Concepts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Video Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white mr-4">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Video Edukasi Sanitasi</h3>
            </div>
            <div
              className="relative bg-gradient-to-br from-red-500 to-pink-500 rounded-xl p-8 text-white cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => window.open("https://www.youtube.com/watch?v=0BGs1Bwi6pA", "_blank")}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-colors">
                  <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Sanitasi UMKM untuk Zona Sehat</h4>
                <p className="text-sm opacity-90 mb-4">
                  Pelajari praktik terbaik sanitasi lingkungan untuk UMKM kuliner
                </p>
                <div className="flex items-center justify-center text-sm">
                  <span className="bg-white/20 px-3 py-1 rounded-full mr-2">📺 Video Tutorial</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">⏱️ 15 menit</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Klik untuk menonton video edukasi lengkap tentang implementasi sanitasi lingkungan
            </p>
          </div>

          {/* Key Learning Points */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-white h-full">
            <h3 className="text-2xl font-bold mb-6">Poin Pembelajaran Utama</h3>
            <div className="space-y-4">
              {[
                {
                  icon: "🏭",
                  title: "Sanitasi Area Produksi",
                  desc: "Desain layout higienis dan kontrol kontaminasi silang",
                },
                {
                  icon: "💧",
                  title: "Pengelolaan Air & Limbah",
                  desc: "Sistem pengolahan air bersih dan limbah cair yang efektif",
                },
                {
                  icon: "🗑️",
                  title: "Manajemen Sampah",
                  desc: "Pemilahan, pengolahan, dan daur ulang limbah organik",
                },
                {
                  icon: "🌱",
                  title: "Praktik Berkelanjutan",
                  desc: "Implementasi green practices untuk lingkungan sehat",
                },
                {
                  icon: "📋",
                  title: "Dokumentasi & SOP",
                  desc: "Sistem pencatatan dan standar operasional yang tepat",
                },
              ].map((point, index) => (
                <div key={index} className="flex items-start p-3 bg-white/10 rounded-lg">
                  <div className="text-2xl mr-4 flex-shrink-0">{point.icon}</div>
                  <div>
                    <h4 className="font-semibold mb-1">{point.title}</h4>
                    <p className="text-sm opacity-90">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Problem & Solution Framework */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Tantangan & Solusi Sanitasi UMKM</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                problem: "Keterbatasan Pengetahuan",
                solution: "Program Edukasi Terpadu",
                icon: "📚",
                color: "bg-blue-500",
                details: [
                  "Workshop sanitasi dasar",
                  "Pelatihan HACCP praktis",
                  "Mentoring berkelanjutan",
                  "Materi edukasi visual",
                ],
              },
              {
                problem: "Infrastruktur Terbatas",
                solution: "Teknologi Tepat Guna",
                icon: "🔧",
                color: "bg-green-500",
                details: [
                  "Sistem filtrasi sederhana",
                  "Biofilter limbah cair",
                  "Komposter organik",
                  "Desain layout efisien",
                ],
              },
              {
                problem: "Biaya Implementasi",
                solution: "Bantuan & Subsidi",
                icon: "💰",
                color: "bg-orange-500",
                details: [
                  "Hibah peralatan sanitasi",
                  "Kredit lunak UMKM",
                  "Sharing cost komunitas",
                  "ROI jangka panjang",
                ],
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div
                      className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white mx-auto mb-3 text-2xl`}
                    >
                      {item.icon}
                    </div>
                    <div className="space-y-2">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <h4 className="font-bold text-red-800 text-sm">❌ TANTANGAN</h4>
                        <p className="text-red-700 text-sm">{item.problem}</p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <h4 className="font-bold text-green-800 text-sm">✅ SOLUSI</h4>
                        <p className="text-green-700 text-sm">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Dokumentasi Sanitasi UMKM Gallery */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Dokumentasi Sanitasi UMKM</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Galeri dokumentasi implementasi program sanitasi lingkungan di UMKM Klipang, Kelurahan Sendangmulyo
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                id: 1,
                title: "Sistem Filtrasi Air Bersih",
                category: "Pengelolaan Air",
                image: "/placeholder.svg?height=300&width=400",
                description: "Implementasi sistem filtrasi air untuk menjamin kualitas air bersih di Warung Bu Sari",
                location: "Warung Bu Sari",
                date: "Oktober 2024",
                status: "Selesai",
                badge: "💧 Air Bersih",
                badgeColor: "bg-blue-100 text-blue-800",
              },
              {
                id: 2,
                title: "Area Produksi Higienis",
                category: "Sanitasi Produksi",
                image: "/placeholder.svg?height=300&width=400",
                description: "Renovasi area produksi dengan standar sanitasi HACCP di Bakso Mas Joko",
                location: "Bakso Mas Joko",
                date: "September 2024",
                status: "Selesai",
                badge: "🏭 Produksi",
                badgeColor: "bg-purple-100 text-purple-800",
              },
              {
                id: 3,
                title: "Pengolahan Limbah Organik",
                category: "Manajemen Limbah",
                image: "/placeholder.svg?height=300&width=400",
                description: "Sistem komposter untuk mengolah limbah organik menjadi pupuk kompos",
                location: "Pecel Lele Bu Yanti",
                date: "November 2024",
                status: "Berlangsung",
                badge: "♻️ Limbah",
                badgeColor: "bg-green-100 text-green-800",
              },
              {
                id: 4,
                title: "Biofilter Air Limbah",
                category: "Pengelolaan Air",
                image: "/placeholder.svg?height=300&width=400",
                description: "Instalasi biofilter untuk mengolah air limbah sebelum dibuang ke lingkungan",
                location: "Sate Kambing Pak Hadi",
                date: "Oktober 2024",
                status: "Selesai",
                badge: "💧 Air Limbah",
                badgeColor: "bg-cyan-100 text-cyan-800",
              },
              {
                id: 5,
                title: "Fasilitas Cuci Tangan",
                category: "Sanitasi Produksi",
                image: "/placeholder.svg?height=300&width=400",
                description: "Instalasi wastafel dan fasilitas cuci tangan dengan sabun antiseptik",
                location: "Es Dawet Mbak Tini",
                date: "September 2024",
                status: "Selesai",
                badge: "🧼 Hygiene",
                badgeColor: "bg-pink-100 text-pink-800",
              },
              {
                id: 6,
                title: "Tempat Sampah Terpilah",
                category: "Manajemen Limbah",
                image: "/placeholder.svg?height=300&width=400",
                description: "Sistem pemilahan sampah organik dan anorganik dengan tempat sampah berwarna",
                location: "Kue Tradisional Mbak Rina",
                date: "November 2024",
                status: "Berlangsung",
                badge: "🗑️ Sampah",
                badgeColor: "bg-orange-100 text-orange-800",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === "Selesai" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-sm font-medium">{item.location}</p>
                    <p className="text-xs opacity-90">{item.date}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-emerald-600 font-medium">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Dokumentasi", value: "24", icon: "📸" },
              { label: "UMKM Terdokumentasi", value: "12", icon: "🏪" },
              { label: "Fasilitas Terbangun", value: "18", icon: "🔧" },
              { label: "Program Selesai", value: "85%", icon: "✅" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-emerald-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Before & After Showcase */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
            <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Transformasi Sanitasi UMKM</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-red-100 border-2 border-red-200 rounded-lg p-4 mb-4">
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Kondisi Sebelum"
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                  <h5 className="font-bold text-red-800 mb-2">❌ SEBELUM</h5>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Area produksi kurang higienis</li>
                    <li>• Sistem pembuangan limbah manual</li>
                    <li>• Tidak ada pemilahan sampah</li>
                    <li>• Kualitas air belum terjamin</li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-100 border-2 border-green-200 rounded-lg p-4 mb-4">
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Kondisi Sesudah"
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                  <h5 className="font-bold text-green-800 mb-2">✅ SESUDAH</h5>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Area produksi standar HACCP</li>
                    <li>• Sistem biofilter terintegrasi</li>
                    <li>• Tempat sampah terpilah</li>
                    <li>• Air bersih tersertifikasi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits for Stakeholders */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Manfaat Sanitasi Lingkungan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Untuk UMKM",
                icon: "🏪",
                benefits: [
                  "Peningkatan kualitas produk",
                  "Akses sertifikasi HACCP",
                  "Efisiensi operasional",
                  "Daya saing yang lebih tinggi",
                ],
              },
              {
                title: "Untuk Lingkungan",
                icon: "🌍",
                benefits: [
                  "Pengurangan pencemaran air",
                  "Minimalisasi limbah",
                  "Konservasi sumber daya",
                  "Ekosistem yang berkelanjutan",
                ],
              },
              {
                title: "Untuk Masyarakat",
                icon: "👥",
                benefits: [
                  "Lingkungan yang lebih sehat",
                  "Produk pangan yang aman",
                  "Kualitas hidup meningkat",
                  "Kesadaran lingkungan tinggi",
                ],
              },
            ].map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-lg p-6 h-full">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h4 className="font-bold text-lg text-gray-900">{category.title}</h4>
                </div>
                <ul className="space-y-2">
                  {category.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl p-8 text-white text-center">
  <h3 className="text-2xl font-bold mb-4">Bergabung Program Sanitasi Lingkungan</h3>
  <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
    Wujudkan UMKM yang bersih, sehat, dan berkelanjutan melalui implementasi sistem sanitasi dan HACCP yang
    tepat
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-emerald-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              onClick={handleWhatsAppClick}
            >
              Konsultasi Gratis
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              Panduan HACCP
            </Button>
          </div>
</div>
      </div>
    </section>
  )
}
