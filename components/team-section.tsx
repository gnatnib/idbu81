"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, ArrowRight, GraduationCap, Heart, Target } from "lucide-react"

export default function TeamSection() {
  const teamHighlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Multi Disiplin",
      description: "Mahasiswa dari berbagai jurusan",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "46 Anggota Aktif",
      description: "Mahasiswa dari Universitas Diponegoro",
    },
    {
      icon: <ArrowRight className="h-6 w-6" />,
      title: "Fokus Pada Implementasi",
      description: "Mengutamakan solusi praktis dan berkelanjutan",
    },
  ]
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">Tim KKN</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tentang Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami adalah tim mahasiswa dari berbagai jurusan yang tergabung dalam program Kuliah Kerja Nyata (KKN).
            Dengan keahlian yang beragam, kami bersatu untuk memberi dampak nyata melalui teknologi dan edukasi.
          </p>
        </div>

        {/* Team Description with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Tim KKN UNDIP Sendangmulyo</h3>
            <p className="text-gray-600 leading-relaxed">
              Tim KKN kami terdiri dari mahasiswa-mahasiswa pilihan dari berbagai fakultas di Universitas Diponegoro
              yang memiliki komitmen tinggi untuk mengembangkan potensi masyarakat lokal melalui program Zona KHAS.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dengan latar belakang pendidikan yang beragam, kami menghadirkan pendekatan multidisiplin dalam setiap
              program yang dijalankan. Mulai dari aspek teknis, manajemen, komunikasi, hingga kesehatan dan gizi.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Selama program KKN berlangsung, kami tidak hanya memberikan kontribusi kepada masyarakat, tetapi juga
              belajar banyak dari kearifan lokal dan semangat gotong royong masyarakat Sendangmulyo.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Kolaboratif", "Inovatif", "Berdedikasi", "Berpengalaman"].map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-purple-100 text-purple-800">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <img
  src="/images/timkkn.jpg"
  alt="Tim KKN UNDIP Sendangmulyo"
  onClick={() => setIsModalOpen(true)}
  className="cursor-pointer rounded-2xl shadow-lg w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105 hover:shadow-xl"
/>

          </div>
          {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
    <div className="relative">
      <button
        className="absolute top-2 right-2 bg-white text-gray-800 rounded-full p-2 shadow hover:bg-gray-100 transition"
        onClick={() => setIsModalOpen(false)}
      >
        ✕
      </button>
      <img
        src="/images/timkkn.jpg"
        alt="Tim KKN Full View"
        className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border-4 border-white"
      />
    </div>
  </div>
)}

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {teamHighlights.map((highlight, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 md:p-12 text-white text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 mr-3" />
            <h3 className="text-3xl font-bold">Misi Kami</h3>
          </div>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Memberdayakan UMKM lokal melalui program Zona KHAS untuk menciptakan ekosistem kuliner yang halal, aman, dan
            sehat, serta meningkatkan kesejahteraan masyarakat Klipang, Kelurahan Sendangmulyo.
          </p>

          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-purple-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            onClick={() => (window.location.href = "/team")}
          >
            Lihat Anggota Tim
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Team Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Visi Kami</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Menjadi katalisator perubahan positif dalam pengembangan ekonomi kreatif dan pemberdayaan masyarakat
              melalui implementasi Zona KHAS yang berkelanjutan dan berdampak luas.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Nilai-Nilai Tim</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Integritas dalam setiap tindakan</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Kolaborasi yang saling menguatkan</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span>Inovasi untuk solusi berkelanjutan</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span>Empati terhadap kebutuhan masyarakat</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            { number: "46", label: "Anggota Tim" },
            { number: "1", label: "Bulan Program" },
            { number: "127", label: "UMKM Terjangkau" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
