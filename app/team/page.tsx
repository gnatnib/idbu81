import { ArrowLeft, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    id: 1,
    name: "Ahmad Rizki Pratama",
    role: "Ketua Tim KKN",
    university: "Universitas Diponegoro",
    major: "Teknik Informatika",
    email: "ahmad.rizki@students.undip.ac.id",
    phone: "+62 812-3456-7890",
    image: "/placeholder.svg?height=300&width=300",
    description: "Mahasiswa semester 7 yang berpengalaman dalam pengembangan web dan manajemen proyek.",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    role: "Koordinator Edukasi",
    university: "Universitas Diponegoro",
    major: "Gizi",
    email: "siti.nurhaliza@students.undip.ac.id",
    phone: "+62 813-4567-8901",
    image: "/placeholder.svg?height=300&width=300",
    description: "Ahli gizi yang fokus pada edukasi keamanan pangan dan sertifikasi halal.",
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Koordinator UMKM",
    university: "Universitas Diponegoro",
    major: "Manajemen",
    email: "budi.santoso@students.undip.ac.id",
    phone: "+62 814-5678-9012",
    image: "/placeholder.svg?height=300&width=300",
    description: "Mahasiswa manajemen yang berpengalaman dalam pemberdayaan UMKM.",
  },
  {
    id: 4,
    name: "Dewi Kartika",
    role: "Koordinator Dokumentasi",
    university: "Universitas Diponegoro",
    major: "Ilmu Komunikasi",
    email: "dewi.kartika@students.undip.ac.id",
    phone: "+62 815-6789-0123",
    image: "/placeholder.svg?height=300&width=300",
    description: "Mahasiswa komunikasi yang bertanggung jawab atas dokumentasi dan publikasi kegiatan.",
  },
  {
    id: 5,
    name: "Eko Prasetyo",
    role: "Koordinator Teknologi",
    university: "Universitas Diponegoro",
    major: "Sistem Informasi",
    email: "eko.prasetyo@students.undip.ac.id",
    phone: "+62 816-7890-1234",
    image: "/placeholder.svg?height=300&width=300",
    description: "Mahasiswa sistem informasi yang mengembangkan solusi teknologi untuk UMKM.",
  },
  {
    id: 6,
    name: "Fitri Ramadhani",
    role: "Koordinator Keuangan",
    university: "Universitas Diponegoro",
    major: "Akuntansi",
    email: "fitri.ramadhani@students.undip.ac.id",
    phone: "+62 817-8901-2345",
    image: "/placeholder.svg?height=300&width=300",
    description: "Mahasiswa akuntansi yang mengelola keuangan program dan pelatihan pembukuan UMKM.",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tim KKN Zona KHAS</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Berkenalan dengan tim mahasiswa yang berdedikasi untuk mengembangkan Zona KHAS di Klipang, Kelurahan
            Sendangmulyo. Setiap anggota membawa keahlian unik untuk kesuksesan program ini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-1">{member.university}</p>
                <p className="text-sm text-gray-600 mb-4">{member.major}</p>
                <p className="text-sm text-gray-700 mb-4">{member.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
