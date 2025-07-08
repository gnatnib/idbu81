"use client"

import { ArrowLeft, Mail, ArrowRight, Users, FileText, MessageCircle, Code } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const teamData = {
  BPH: [
    {
      id: 1,
      name: "Farhan Azhar Antawirja",
      role: "Koordinator",
      university: "Universitas Diponegoro",
      major: "Akuntansi Perpajakan",
      email: "farhan.azhar@students.undip.ac.id",
      image: "/images/BPH/Farhan Azhar Antawirja_Ketua_Akuntansi Perpajakan.jpg",
    },
    {
      id: 2,
      name: "Bagas Setiyawan",
      role: "Wakil Koordinator",
      university: "Universitas Diponegoro",
      major: "Ilmu Pemerintahan",
      email: "bagas.setiyawan@students.undip.ac.id",
      image: "/images/BPH/Bagas Setiyawan_Wakil Ketua_Ilmu Pemerintah_.jpg",
    },
    {
      id: 3,
      name: "Davyna Amalia P.",
      role: "Sekretaris I",
      university: "Universitas Diponegoro",
      major: "Akuntansi",
      email: "davyna.amalia@students.undip.ac.id",
      image: "/images/BPH/Davyna Amalia Putri_Sekretaris_Akuntansi.jpg",
    },
    {
      id: 4,
      name: "Mikhael C. L. Panjaitan",
      role: "Sekretaris II",
      university: "Universitas Diponegoro",
      major: "Akuakultur",
      email: "mikhael.panjaitan@students.undip.ac.id",
      image: "/images/BPH/Mikhael Panjaitan_Sekretaris II_Akuakultur.jpg",
    },
    {
      id: 5,
      name: "Farisha Normadina",
      role: "Sekretaris III",
      university: "Universitas Diponegoro",
      major: "Sistem Informasi",
      email: "farisha.normadina@students.undip.ac.id",
      image: "/images/BPH/farisha.png",
    },
    {
      id: 6,
      name: "Nisrina Sarwahita",
      role: "Bendahara I",
      university: "Universitas Diponegoro",
      major: "Akuntansi Perpajakan",
      email: "nisrina.sarwahita@students.undip.ac.id",
      image: "/images/BPH/Nisrina Sarwahita_Bendahara I_Akuntansi Perpajakan.png",
    },
    {
      id: 7,
      name: "Lydia Patricia",
      role: "Bendahara II",
      university: "Universitas Diponegoro",
      major: "Hukum",
      email: "lydia.patricia@students.undip.ac.id",
      image: "/images/BPH/Lydia Patricia_Bendahara II_Hukum.png",
    },
  ],
  "Divisi Dokumen": [
    {
      id: 8,
      name: "Andi Pratama",
      role: "Kepala Divisi Dokumen",
      university: "Universitas Diponegoro",
      major: "Administrasi Bisnis",
      email: "andi.pratama@students.undip.ac.id",
      image: "/images/Dokumen/Andi Pratama_Kepala Divisi Dokumen_Administrasi Bisnis.jpg",
    },
    {
      id: 9,
      name: "Sari Dewi Lestari",
      role: "Anggota Divisi Dokumen",
      university: "Universitas Diponegoro",
      major: "Ilmu Perpustakaan",
      email: "sari.dewi@students.undip.ac.id",
      image: "/images/Dokumen/Sari Dewi Lestari_Anggota Divisi Dokumen_Ilmu Perpustakaan.jpg",
    },
    {
      id: 10,
      name: "Reza Firmansyah",
      role: "Anggota Divisi Dokumen",
      university: "Universitas Diponegoro",
      major: "Sastra Indonesia",
      email: "reza.firmansyah@students.undip.ac.id",
      image: "/images/Dokumen/Reza Firmansyah_Anggota Divisi Dokumen_Sastra Indonesia.jpg",
    },
    {
      id: 11,
      name: "Maya Sari Indah",
      role: "Anggota Divisi Dokumen",
      university: "Universitas Diponegoro",
      major: "Administrasi Publik",
      email: "maya.sari@students.undip.ac.id",
      image: "/images/Dokumen/Maya Sari Indah_Anggota Divisi Dokumen_Administrasi Publik.jpg",
    },
    {
      id: 12,
      name: "Dimas Aditya",
      role: "Anggota Divisi Dokumen",
      university: "Universitas Diponegoro",
      major: "Sejarah",
      email: "dimas.aditya@students.undip.ac.id",
      image: "/images/Dokumen/Dimas Aditya_Anggota Divisi Dokumen_Sejarah.jpg",
    },
  ],
  "Divisi Humas": [
    {
      id: 13,
      name: "Putri Maharani",
      role: "Kepala Divisi Humas",
      university: "Universitas Diponegoro",
      major: "Ilmu Komunikasi",
      email: "putri.maharani@students.undip.ac.id",
      image: "/images/Humas/Putri Maharani_Kepala Divisi Humas_Ilmu Komunikasi.jpg",
    },
    {
      id: 14,
      name: "Arif Rahman Hakim",
      role: "Anggota Divisi Humas",
      university: "Universitas Diponegoro",
      major: "Jurnalistik",
      email: "arif.rahman@students.undip.ac.id",
      image: "/images/Humas/Arif Rahman Hakim_Anggota Divisi Humas_Jurnalistik.jpg",
    },
    {
      id: 15,
      name: "Indira Sari Putri",
      role: "Anggota Divisi Humas",
      university: "Universitas Diponegoro",
      major: "Public Relations",
      email: "indira.sari@students.undip.ac.id",
      image: "/images/Humas/Indira Sari Putri_Anggota Divisi Humas_Public Relations.jpg",
    },
    {
      id: 16,
      name: "Budi Santoso",
      role: "Anggota Divisi Humas",
      university: "Universitas Diponegoro",
      major: "Broadcasting",
      email: "budi.santoso@students.undip.ac.id",
      image: "/images/Humas/Budi Santoso_Anggota Divisi Humas_Broadcasting.jpg",
    },
    {
      id: 17,
      name: "Dewi Kartika Sari",
      role: "Anggota Divisi Humas",
      university: "Universitas Diponegoro",
      major: "Advertising",
      email: "dewi.kartika@students.undip.ac.id",
      image: "/images/Humas/Dewi Kartika Sari_Anggota Divisi Humas_Advertising.jpg",
    },
    {
      id: 18,
      name: "Rizki Pratama",
      role: "Anggota Divisi Humas",
      university: "Universitas Diponegoro",
      major: "Media Digital",
      email: "rizki.pratama@students.undip.ac.id",
      image: "/images/Humas/Rizki Pratama_Anggota Divisi Humas_Media Digital.jpg",
    },
  ],
  "Divisi IT": [
    {
      id: 19,
      name: "Ahmad Fauzi Rahman",
      role: "Kepala Divisi IT",
      university: "Universitas Diponegoro",
      major: "Teknik Informatika",
      email: "ahmad.fauzi@students.undip.ac.id",
      image: "/images/IT/Ahmad Fauzi Rahman_Kepala Divisi IT_Teknik Informatika.jpg",
    },
    {
      id: 20,
      name: "Sinta Dewi Lestari",
      role: "Anggota Divisi IT",
      university: "Universitas Diponegoro",
      major: "Sistem Informasi",
      email: "sinta.dewi@students.undip.ac.id",
      image: "/images/IT/Sinta Dewi Lestari_Anggota Divisi IT_Sistem Informasi.jpg",
    },
    {
      id: 21,
      name: "Eko Prasetyo",
      role: "Anggota Divisi IT",
      university: "Universitas Diponegoro",
      major: "Teknik Komputer",
      email: "eko.prasetyo@students.undip.ac.id",
      image: "/images/IT/Eko Prasetyo_Anggota Divisi IT_Teknik Komputer.jpg",
    },
    {
      id: 22,
      name: "Rina Safitri",
      role: "Anggota Divisi IT",
      university: "Universitas Diponegoro",
      major: "Informatika",
      email: "rina.safitri@students.undip.ac.id",
      image: "/images/IT/Rina Safitri_Anggota Divisi IT_Informatika.jpg",
    },
    {
      id: 23,
      name: "Doni Setiawan",
      role: "Anggota Divisi IT",
      university: "Universitas Diponegoro",
      major: "Teknik Elektro",
      email: "doni.setiawan@students.undip.ac.id",
      image: "/images/IT/Doni Setiawan_Anggota Divisi IT_Teknik Elektro.jpg",
    },
  ],
}

const divisionIcons = {
  BPH: <Users className="h-5 w-5" />,
  "Divisi Dokumen": <FileText className="h-5 w-5" />,
  "Divisi Humas": <MessageCircle className="h-5 w-5" />,
  "Divisi IT": <Code className="h-5 w-5" />,
}

const divisionColors = {
  BPH: "bg-purple-100 text-purple-800 border-purple-200",
  "Divisi Dokumen": "bg-blue-100 text-blue-800 border-blue-200",
  "Divisi Humas": "bg-green-100 text-green-800 border-green-200",
  "Divisi IT": "bg-orange-100 text-orange-800 border-orange-200",
}

export default function TeamPage() {
  const totalMembers = Object.values(teamData).flat().length

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" className="mb-6 hover:bg-white/50 transition-all duration-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tim KKN Zona KHAS</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berkenalan dengan tim mahasiswa yang berdedikasi untuk mengembangkan Zona KHAS di Klipang, Kelurahan
              Sendangmulyo
            </p>
          </div>
        </div>

        {/* Team Divisions */}
        {Object.entries(teamData).map(([divisionName, members]) => (
          <div key={divisionName} className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Badge
                className={`px-4 py-2 text-lg font-semibold ${divisionColors[divisionName as keyof typeof divisionColors]}`}
              >
                {divisionIcons[divisionName as keyof typeof divisionIcons]}
                <span className="ml-2">{divisionName}</span>
                <span className="ml-2 bg-white/50 px-2 py-1 rounded-full text-sm">{members.length} anggota</span>
              </Badge>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
              {members.map((member) => (
                <Card
                  key={member.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 right-2 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <p className="text-xs font-medium truncate">{member.role}</p>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-bold text-sm text-gray-900 mb-1 line-clamp-2 leading-tight">{member.name}</h3>
                    <p className="text-xs text-green-600 font-semibold mb-1">{member.role}</p>
                    <p className="text-xs text-gray-500 mb-2 line-clamp-1">{member.major}</p>

                    <div className="flex items-center justify-center">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 px-2 text-xs hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        onClick={() => window.open(`mailto:${member.email}`, "_blank")}
                      >
                        <Mail className="h-3 w-3 mr-1" />
                        Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: totalMembers.toString(), label: "Total Anggota", icon: "👥" },
            { number: "4", label: "Divisi", icon: "🏛️" },
            { number: "8", label: "Fakultas", icon: "🎓" },
            { number: "1", label: "Bulan Program", icon: "📅" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Division Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(teamData).map(([divisionName, members]) => (
            <div
              key={divisionName}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:shadow-lg text-center"
            >
              <div className="text-4xl mb-3">{divisionIcons[divisionName as keyof typeof divisionIcons]}</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{divisionName}</h3>
              <p className="text-2xl font-bold text-purple-600 mb-1">{members.length}</p>
              <p className="text-sm text-gray-600">Anggota</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Bergabung dengan Program Zona KHAS</h3>
          <p className="text-lg mb-6 opacity-90">
            Ingin berkolaborasi atau mengetahui lebih lanjut tentang program kami?
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-green-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            onClick={() => (window.location.href = "/#contact")}
          >
            Hubungi Kami
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
