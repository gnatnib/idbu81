"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Phone, Clock, Award, ExternalLink } from "lucide-react"

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
  certifications: string[]
  price: string
}

interface UmkmModalProps {
  umkm: UmkmData | null
  isOpen: boolean
  onClose: () => void
}

export default function UmkmModal({ umkm, isOpen, onClose }: UmkmModalProps) {
  if (!umkm) return null

  const handleCallPhone = () => {
    window.open(`tel:${umkm.phone}`, "_self")
  }

  const handleOpenMaps = () => {
    const query = encodeURIComponent(`${umkm.name} ${umkm.address}`)
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              {umkm.category}
            </Badge>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span className="ml-1 text-lg font-semibold">{umkm.rating}</span>
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-left">{umkm.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image */}
          <div className="aspect-video overflow-hidden rounded-lg">
            <img src={umkm.image || "/placeholder.svg"} alt={umkm.name} className="w-full h-full object-cover" />
          </div>

          {/* Description */}
          <div>
            <p className="text-gray-600 leading-relaxed">{umkm.description}</p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <MapPin className="h-5 w-5 mr-3 text-green-600 flex-shrink-0" />
              <div className="flex-grow">
                <p className="font-medium text-gray-900">Alamat</p>
                <p className="text-sm text-gray-600">{umkm.address}</p>
              </div>
              <Button size="sm" variant="outline" onClick={handleOpenMaps}>
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Phone className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0" />
              <div className="flex-grow">
                <p className="font-medium text-gray-900">Telepon</p>
                <p className="text-sm text-gray-600">{umkm.phone}</p>
              </div>
              <Button size="sm" variant="outline" onClick={handleCallPhone}>
                <Phone className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <Clock className="h-5 w-5 mr-3 text-orange-600 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">Jam Operasional</p>
                <p className="text-sm text-gray-600">{umkm.hours}</p>
              </div>
            </div>
          </div>

          {/* Menu Unggulan */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-green-800 flex items-center">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
              Menu Unggulan
            </h4>
            <div className="flex flex-wrap gap-2">
              {umkm.specialties.map((specialty) => (
                <Badge key={specialty} variant="outline" className="bg-white border-green-200 text-green-700">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          {/* Sertifikasi */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-blue-800 flex items-center">
              <Award className="h-4 w-4 mr-2" />
              Sertifikasi & Standar
            </h4>
            <div className="flex flex-wrap gap-2">
              {umkm.certifications.map((cert) => (
                <Badge key={cert} className="bg-green-100 text-green-800 border-green-200">
                  <Award className="h-3 w-3 mr-1" />
                  {cert}
                </Badge>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg text-center border border-yellow-200">
            <p className="text-sm text-gray-600 mb-1">Kisaran Harga</p>
            <p className="text-2xl font-bold text-green-600">{umkm.price}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button onClick={handleCallPhone} className="flex-1 bg-green-600 hover:bg-green-700">
              <Phone className="h-4 w-4 mr-2" />
              Hubungi Sekarang
            </Button>
            <Button onClick={handleOpenMaps} variant="outline" className="flex-1 bg-transparent">
              <MapPin className="h-4 w-4 mr-2" />
              Lihat Lokasi
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
