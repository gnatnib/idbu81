import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Building, Leaf } from "lucide-react"

export default function VillageProfileSection() {
  const villageStats = [
    { icon: <Users className="h-6 w-6" />, label: "Jumlah Penduduk", value: "8,542 Jiwa" },
    { icon: <Building className="h-6 w-6" />, label: "Jumlah UMKM", value: "127 Unit" },
    { icon: <MapPin className="h-6 w-6" />, label: "Luas Wilayah", value: "4.2 km²" },
    { icon: <Leaf className="h-6 w-6" />, label: "Zona Hijau", value: "65%" },
  ]

  return (
    <section id="village" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Profil Desa</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Klipang, Kelurahan Sendangmulyo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sebuah kelurahan yang kaya akan potensi kuliner dan UMKM, terletak strategis di jantung kota dengan akses
            yang mudah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Kelurahan Sendangmulyo"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Tentang Kelurahan Sendangmulyo</h3>
            <p className="text-gray-600 leading-relaxed">
              Kelurahan Sendangmulyo merupakan salah satu kelurahan yang terletak di wilayah strategis dengan potensi
              ekonomi yang besar. Klipang sebagai salah satu area di kelurahan ini memiliki karakteristik unik dengan
              banyaknya pelaku UMKM yang bergerak di bidang kuliner.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dengan dukungan masyarakat yang antusias dan pemerintah daerah yang progresif, Klipang menjadi lokasi
              ideal untuk pengembangan Zona KHAS yang dapat menjadi model bagi daerah lain.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Kuliner Tradisional", "UMKM Berkembang", "Masyarakat Aktif", "Lokasi Strategis"].map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-green-100 text-green-800">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {villageStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h4>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Visi Kelurahan Sendangmulyo</h3>
          <p className="text-lg max-w-3xl mx-auto">
            "Menjadi kelurahan yang mandiri, sejahtera, dan berkelanjutan dengan mengoptimalkan potensi lokal untuk
            kesejahteraan masyarakat"
          </p>
        </div>
      </div>
    </section>
  )
}
