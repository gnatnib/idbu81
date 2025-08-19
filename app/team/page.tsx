"use client";

import {
  ArrowLeft,
  Users,
  FileText,
  MessageCircle,
  Code,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const teamData = {
  BPH: [
    {
      id: 1,
      name: "Farhan Azhar Antawirja",
      role: "Koordinator",
      university: "Universitas Diponegoro",
      major: "Akuntansi Perpajakan",
      email: "farhan.azhar@students.undip.ac.id",
      image:
        "/images/BPH/Farhan Azhar Antawirja_Ketua_Akuntansi Perpajakan.jpg",
    },
    {
      id: 2,
      name: "Bagas Setiyawan",
      role: "Wakil Koordinator",
      university: "Universitas Diponegoro",
      major: "Ilmu Pemerintahan",
      email: "bagas.setiyawan@students.undip.ac.id",
      image: "/images/BPH/bagas.jpg",
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
      image:
        "/images/BPH/Nisrina Sarwahita_Bendahara I_Akuntansi Perpajakan.png",
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
      name: "Myla Jovena W.",
      role: "Divisi Dokumen",
      university: "Universitas Diponegoro",
      major: "Akuntansi",
      email: "andi.pratama@students.undip.ac.id",
      image: "/images/Dokumen/Myla Jovena_Divisi Dokumen_Akuntansi.png",
    },
    {
      id: 9,
      name: "Elfio Adistya P.",
      role: "Divisi Dokumen",
      university: "Universitas Diponegoro",
      major: "Sejarah",
      email: "sari.dewi@students.undip.ac.id",
      image:
        "/images/Dokumen/Elfio Adistya Putri Ardani_Divisi Dokumen_Sejarah.jpg",
    },
    {
      id: 10,
      name: "Dinda Eprilia P.",
      role: "Divisi Dokumen",
      university: "Universitas Diponegoro",
      major: "Statistika",
      email: "reza.firmansyah@students.undip.ac.id",
      image:
        "/images/Dokumen/Dinda Eprilia Permatasari_Divisi Dokumen_Statistika.JPG",
    },
    {
      id: 11,
      name: "Aisiya Febrinia P.",
      role: "Divisi Dokumen",
      university: "Universitas Diponegoro",
      major: "Agroekoteknologi",
      email: "maya.sari@students.undip.ac.id",
      image:
        "/images/Dokumen/Aisiya Febrinia Putri_Divisi Dokumen_Agroekoteknologi.png",
    },
    {
      id: 12,
      name: "Wong, Maria K. M.",
      role: "Divisi Dokumen",
      university: "Universitas Diponegoro",
      major: "Peternakan",
      email: "dimas.aditya@students.undip.ac.id",
      image:
        "/images/Dokumen/Wong, Maria Kristina Martono_Divisi Dokumen_Peternakan.jpg",
    },
    {
      id: 13,
      name: "Sekar Aruming T.",
      role: "Divisi Dokumen",
      university: "Universitas Diponegoro",
      major: "Keperawatan",
      email: "maya.sari@students.undip.ac.id",
      image: "/images/Dokumen/Sekar Aruming Tyas_Divisi Dokumen.jpg",
    },
    {
      id: 14,
      name: "Salsabila Yuniar",
      role: "Divisi Dokumen",
      university: "Universitas Diponegoro",
      major: "Teknik Lingkungan",
      email: "maya.sari@students.undip.ac.id",
      image:
        "/images/Dokumen/Salsabila Yuniar_Divisi Dokumen_Teknik Lingkungan.jpg",
    },
    {
      id: 15,
      name: "Restu Widiyatmoko",
      role: "Divisi Dokumen",
      university: "Universitas Diponegoro",
      major: "Teknik Lingkungan",
      email: "maya.sari@students.undip.ac.id",
      image:
        "/images/Dokumen/Restu Widiyatmoko_Divisi Dokumen_Teknik Lingkungan_.png",
    },
    {
      id: 16,
      name: "Nisrina Salma",
      role: "Divisi Dokumen",
      university: "Universitas Diponegoro",
      major: "Akuntansi Perpajakan",
      email: "maya.sari@students.undip.ac.id",
      image:
        "/images/Dokumen/Nisrina Salma_Divisi Dokumen_Akuntansi Perpajakan.jpg",
    },
    {
      id: 17,
      name: "Nayla Rohadatul",
      role: "Divisi Dokumen",
      university: "Universitas Diponegoro",
      major: "Ilmu Perpustakaan",
      email: "maya.sari@students.undip.ac.id",
      image:
        "/images/Dokumen/Nayla Rohadatul_Divisi Dokumen_Ilmu Perpustakaan.jpg",
    },
    {
      id: 18,
      name: "Imah Nur Aini",
      role: "Divisi Dokumen",
      university: "Universitas Diponegoro",
      major: "Kimia",
      email: "maya.sari@students.undip.ac.id",
      image: "/images/Dokumen/Imah Nur Aini_Divisi Dokumen_Kimia.png",
    },
    {
      id: 19,
      name: "Fendy Romadhon H. S.",
      role: "Divisi Dokumen",
      university: "Universitas Diponegoro",
      major: "Statistika",
      email: "maya.sari@students.undip.ac.id",
      image: "/images/Dokumen/fendy.png",
    },
  ],
  "Divisi Humas": [
    {
      id: 20,
      name: "Fanny Safitry",
      role: "Divisi Humas",
      university: "Universitas Diponegoro",
      major: "Kimia",
      email: "putri.maharani@students.undip.ac.id",
      image: "/images/Humas/fanny.jpg",
    },
    {
      id: 21,
      name: "Vita Afrilisa",
      role: "Divisi Humas",
      university: "Universitas Diponegoro",
      major: "Administrasi Publik",
      email: "putri.maharani@students.undip.ac.id",
      image: "/images/Humas/Vita Afrilisa_Divisi Humas_Administrasi Publik.PNG",
    },
    {
      id: 22,
      name: "Siti Sarah",
      role: "Divisi Humas",
      university: "Universitas Diponegoro",
      major: "Informasi dan Humas",
      email: "putri.maharani@students.undip.ac.id",
      image: "/images/Humas/Siti Sarah_Divisi Humas_Informasi & Humas.png",
    },
    {
      id: 23,
      name: "Salma Najwa",
      role: "Divisi Humas",
      university: "Universitas Diponegoro",
      major: "Biologi",
      email: "putri.maharani@students.undip.ac.id",
      image: "/images/Humas/Salma Najwa_Divisi Humas_Biologi.jpg",
    },
    {
      id: 24,
      name: "Arrayna Octavia Rakhman",
      role: "Divisi Humas",
      university: "Universitas Diponegoro",
      major: "Teknik Perkapalan",
      email: "putri.maharani@students.undip.ac.id",
      image:
        "/images/Humas/Arrayna Octavia Rakhman_Divisi Humas_Teknik Perkapalan.jpg",
    },
    {
      id: 25,
      name: "Chiara Nursaputri Faustine",
      role: "Divisi Humas",
      university: "Universitas Diponegoro",
      major: "Bahasa Asing Terapan",
      email: "putri.maharani@students.undip.ac.id",
      image:
        "/images/Humas/Chiara Nursaputri Faustine_Divisi Humas_Bahasa Asing Terapan.jpg",
    },
    {
      id: 26,
      name: "Ghina Puan",
      role: "Divisi Humas",
      university: "Universitas Diponegoro",
      major: "Bahasa dan Kebudayaan Jepang",
      email: "putri.maharani@students.undip.ac.id",
      image: "/images/Humas/Ghina Puan_Bahasa dan Kebudayaan Jepang.png",
    },
    {
      id: 27,
      name: "Hanifah Medina Syahputri",
      role: "Divisi Humas",
      university: "Universitas Diponegoro",
      major: "Teknik Industri",
      email: "putri.maharani@students.undip.ac.id",
      image:
        "/images/Humas/Hanifah Medina Syahputri_Divisi Humas_Teknik Industri.png",
    },
    {
      id: 28,
      name: "Kalista Ladeano M.",
      role: "Divisi Humas",
      university: "Universitas Diponegoro",
      major: "Hukum",
      email: "putri.maharani@students.undip.ac.id",
      image: "/images/Humas/Kalista Ladeano M_Divisi Humas_Hukum.png",
    },
    {
      id: 29,
      name: "Kanesha Hafiza Z.",
      role: "Divisi Humas",
      university: "Universitas Diponegoro",
      major: "Hukum",
      email: "putri.maharani@students.undip.ac.id",
      image: "/images/Humas/Kanesha hafiza z_Divisi Humas_Hukum.jpg",
    },
    {
      id: 30,
      name: "Muhammad Ihsan Syarkawi",
      role: "Divisi Humas",
      university: "Universitas Diponegoro",
      major: "Teknik Mesin",
      email: "putri.maharani@students.undip.ac.id",
      image:
        "/images/Humas/Muhammad Ihsan Syarkawi_Divisi Humas_Teknik Mesin.jpg",
    },
    {
      id: 31,
      name: "Nafisa Nur A.",
      role: "Divisi Humas",
      university: "Universitas Diponegoro",
      major: "Informasi & Humas",
      email: "putri.maharani@students.undip.ac.id",
      image: "/images/Humas/Nafisa Nur A_Divisi Humas_Informasi & Humas.png",
    },
    {
      id: 32,
      name: "Naila Putri Wijaya",
      role: "Divisi Humas",
      university: "Universitas Diponegoro",
      major: "Hukum",
      email: "putri.maharani@students.undip.ac.id",
      image: "/images/Humas/Naila Putri Wijaya_Divisi Humas_Hukum.jpg",
    },
    {
      id: 33,
      name: "Naila Ula Faiza",
      role: "Divisi Humas",
      university: "Universitas Diponegoro",
      major: "Psikologi",
      email: "putri.maharani@students.undip.ac.id",
      image: "/images/Humas/Naila Ula Faiza_Divisi Humas_Psikologi.jpg",
    },
  ],
  "Divisi IT": [
    {
      id: 34,
      name: "Bintang Syafrian Rizal",
      role: "Divisi IT",
      university: "Universitas Diponegoro",
      major: "Informatika",
      email: "putri.maharani@students.undip.ac.id",
      image: "/images/IT/bintang.png",
    },
    {
      id: 35,
      name: "Rifki Roboth",
      role: "Divisi IT",
      university: "Universitas Diponegoro",
      major: "Teknik Komputer",
      email: "",
      image: "/images/IT/rifkirobot.jpg",
    },
    {
      id: 36,
      name: "Dewi Melisa",
      role: "Divisi IT",
      university: "Universitas Diponegoro",
      major: "Manajemen",
      email: "putri.maharani@students.undip.ac.id",
      image: "/images/IT/melisa.png",
    },
    {
      id: 37,
      name: "Dhea Auliya",
      role: "Divisi IT",
      university: "Universitas Diponegoro",
      major: "Manajemen Sumberdaya Perairan",
      email: "putri.maharani@students.undip.ac.id",
      image: "/images/IT/Dhea Auliya_IT_Manajemen Sumberdaya Perairan.jpg",
    },
    {
      id: 38,
      name: "Dicky Erlangga Darmawan",
      role: "Divisi IT",
      university: "Universitas Diponegoro",
      major: "Ilmu Komunikasi",
      email: "putri.maharani@students.undip.ac.id",
      image:
        "/images/IT/Dicky Erlangga Darmawan_Anggota IT_Ilmu Komunikasi.png",
    },
    {
      id: 39,
      name: "Muhammad Ramzy Alfaridzy",
      role: "Divisi IT",
      university: "Universitas Diponegoro",
      major: "Administrasi Publik",
      email: "putri.maharani@students.undip.ac.id",
      image:
        "/images/IT/Muhammad Ramzy Alfaridzy_Anggota IT_Administrasi Publik.png",
    },
    {
      id: 40,
      name: "Muhammad Rizal Romadhon",
      role: "Divisi IT",
      university: "Universitas Diponegoro",
      major: "Teknik Infrastruktur Sipil dan Perancangan Arsitektur",
      email: "putri.maharani@students.undip.ac.id",
      image:
        "/images/IT/Muhammad Rizal Romadhon_Divisi IT_Teknik Infrastruktur Sipil dan Perancangan Arsitektur.png",
    },
    {
      id: 41,
      name: "Natasya Amanda",
      role: "Divisi IT",
      university: "Universitas Diponegoro",
      major: "Sastra Inggris",
      email: "putri.maharani@students.undip.ac.id",
      image: "/images/IT/Natasya Amanda_Divisi IT_Sastra Inggris.png",
    },
    {
      id: 42,
      name: "Raditya Aglar Nuswantoro",
      role: "Divisi IT",
      university: "Universitas Diponegoro",
      major: "Psikologi",
      email: "putri.maharani@students.undip.ac.id",
      image: "/images/IT/Raditya Aglar Nuswantoro_Divisi IT_Psikologi.jpg",
    },
    {
      id: 43,
      name: "Sekar Ave Rahayuningtyas",
      role: "Divisi IT",
      university: "Universitas Diponegoro",
      major: "Ekonomi",
      email: "putri.maharani@students.undip.ac.id",
      image: "/images/IT/sekarave.jpg",
    },
    {
      id: 44,
      name: "Yoga Reksandiko Rasyidin",
      role: "Divisi IT",
      university: "Universitas Diponegoro",
      major: "Teknologi Rekayasa Otomasi",
      email: "putri.maharani@students.undip.ac.id",
      image:
        "/images/IT/Yoga Reksandiko Rasyidin_IT_Teknologi Rekayasa Otomasi.jpg",
    },
    {
      id: 45,
      name: "Achmy Nor At Tas Thari",
      role: "Divisi IT",
      university: "Universitas Diponegoro",
      major: "Teknik Geologi",
      email: "putri.maharani@students.undip.ac.id",
      image: "/images/IT/Achmy Nor At Tas Thari_Divisi IT_Teknik Geologi.png",
    },
    {
      id: 46,
      name: "Bagas Arya Yudha Atmoko Putro",
      role: "Divisi IT",
      university: "Universitas Diponegoro",
      major: "Kedokteran",
      email: "putri.maharani@students.undip.ac.id",
      image:
        "/images/IT/pakdok.png",
    },
  ],
};

const divisionIcons = {
  BPH: <Users className="h-5 w-5" />,
  "Divisi Dokumen": <FileText className="h-5 w-5" />,
  "Divisi Humas": <MessageCircle className="h-5 w-5" />,
  "Divisi IT": <Code className="h-5 w-5" />,
};

const divisionColors = {
  BPH: "bg-purple-100 text-purple-800 border-purple-200",
  "Divisi Dokumen": "bg-blue-100 text-blue-800 border-blue-200",
  "Divisi Humas": "bg-green-100 text-green-800 border-green-200",
  "Divisi IT": "bg-orange-100 text-orange-800 border-orange-200",
};

export default function TeamPage() {
  const totalMembers = Object.values(teamData).flat().length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <Link href="/">
            <Button
              variant="ghost"
              className="mb-6 hover:bg-white/50 transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tim KKN IDBU-81
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berkenalan dengan tim mahasiswa yang berdedikasi untuk
              mengembangkan Zona KHAS di Klipang, Kelurahan Sendangmulyo
            </p>
          </div>
        </div>

        {/* Team Divisions */}
        {Object.entries(teamData).map(([divisionName, members]) => (
          <div key={divisionName} className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Badge
                className={`px-4 py-2 text-lg font-semibold ${
                  divisionColors[divisionName as keyof typeof divisionColors]
                }`}
              >
                {divisionIcons[divisionName as keyof typeof divisionIcons]}
                <span className="ml-2">{divisionName}</span>
                <span className="ml-2 bg-white/50 px-2 py-1 rounded-full text-sm">
                  {members.length} anggota
                </span>
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
                      <p className="text-xs font-medium truncate">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-bold text-sm text-gray-900 mb-1 line-clamp-2 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs text-green-600 font-semibold mb-1">
                      {member.role}
                    </p>
                    <p className="text-xs text-gray-500 mb-2 line-clamp-1">
                      {member.major}
                    </p>

                    <div className="flex items-center justify-center mt-auto">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 px-3 text-xs hover:bg-pink-50 hover:text-[#E4405F] transition-all duration-200 flex items-center justify-center min-w-[80px]"
                        onClick={() =>
                          window.open(
                            "https://www.instagram.com/kkn81_sendangmulyo",
                            "_blank"
                          )
                        }
                      >
                        <Instagram className="h-3 w-3 mr-1" />
                        Instagram
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
            {
              number: totalMembers.toString(),
              label: "Total Anggota",
              icon: "👥",
            },
            { number: "4", label: "Divisi", icon: "🏛️" },
            { number: "10", label: "Fakultas", icon: "🎓" },
            { number: "1", label: "Bulan Program", icon: "📅" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ikuti Kegiatan Kami</h3>
          <p className="text-lg mb-6 opacity-90">
            Dapatkan informasi terbaru dan dokumentasi kegiatan melalui
            Instagram resmi KKN 81 Sendangmulyo.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-green-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            onClick={() =>
              window.open(
                "https://www.instagram.com/kkn81_sendangmulyo",
                "_blank"
              )
            }
          >
            Instagram Kami
            <Instagram className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
