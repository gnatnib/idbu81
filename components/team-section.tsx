"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, ArrowRight, GraduationCap } from "lucide-react"

export default function TeamSection() {
  const teamHighlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Multi Disiplin",
      description: "Tim dari berbagai jurusan: Teknik, Gizi, Manajemen, Komunikasi",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "6 Anggota Aktif",
      description: "Mahasiswa berpengalaman dari Universitas Diponegoro",
    },
    {
      icon: <ArrowRight className="h-6 w-6" />,
      title: "Fokus Implementasi",
      description: "Mengutamakan solusi praktis dan berkelanjutan",
    },
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">Tim KKN</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tentang Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami adalah tim mahasiswa dari berbagai jurusan yang tergabung dalam program Kuliah Kerja Nyata (KKN).
            Dengan keahlian yang beragam, kami bersatu untuk memberi dampak nyata melalui teknologi dan edukasi.
          </p>
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

        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Misi Kami</h3>
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

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: "6", label: "Anggota Tim" },
            { number: "3", label: "Bulan Program" },
            { number: "127", label: "UMKM Terjangkau" },
            { number: "8,542", label: "Masyarakat Terlayani" },
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
