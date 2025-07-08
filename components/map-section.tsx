"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Phone, Clock } from "lucide-react"
import LeafletMap from "./leaflet-map"

export default function MapSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => setIsLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const locationInfo = {
    name: "Klipang, Kelurahan Sendangmulyo",
    address: "Sendangmulyo, Kec. Tembalang, Kota Semarang, Jawa Tengah",
    coordinates: "-7.035777, 110.471535",
    description: "Lokasi strategis dengan akses mudah ke berbagai fasilitas umum dan transportasi.",
  }

  const nearbyFacilities = [
    { name: "Masjid Al-Muhajirin", distance: "40 m", type: "Tempat Ibadah" },
    { name: "Taman Tulus Harapan", distance: "42 m", type: "Taman" },
    { name: "Klinik Harapan Sehat", distance: "85 m", type: "Kesehatan" },
    { name: "Rainbow GYM", distance: "70 m", type: "Olahraga" },
    { name: "AHASS Klipang", distance: "183 m", type: "Bengkel" },
    { name: "Yayasan Al Muhajirin", distance: "70 m", type: "Pendidikan" },
  ]

  return (
    <section id="map" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Lokasi</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Peta Klipang</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan lokasi Zona KHAS dan berbagai fasilitas pendukung di Klipang, Kelurahan Sendangmulyo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  {locationInfo.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-200 relative overflow-hidden rounded-lg">
                  {!isLoaded ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                  ) : (
                    <LeafletMap center={[-7.035777, 110.471535]} zoom={16} className="rounded-lg" />
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Navigation className="h-5 w-5 mr-2 text-green-600" />
                Informasi Lokasi
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Alamat Lengkap:</span>
                  <p className="text-gray-600">{locationInfo.address}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Koordinat:</span>
                  <p className="text-gray-600">{locationInfo.coordinates}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Akses Transportasi:</span>
                  <p className="text-gray-600">
                    Dapat diakses dengan angkutan umum, ojek online, dan kendaraan pribadi
                  </p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Jam Operasional UMKM:</span>
                  <p className="text-gray-600">Umumnya 06:00 - 22:00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Facilities Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Fasilitas Terdekat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nearbyFacilities.map((facility, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{facility.name}</h4>
                        <p className="text-sm text-gray-600">{facility.type}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {facility.distance}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-blue-500 text-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">Kunjungi Zona KHAS</h3>
                <p className="text-sm mb-4 opacity-90">
                  Datang langsung ke lokasi untuk merasakan pengalaman kuliner halal, aman, dan sehat di Klipang.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Buka setiap hari</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>Info: +62 812-3456-7890</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}