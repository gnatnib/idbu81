"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Phone, Clock, FileText } from "lucide-react"

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
  price: string
  certificateId: string | null
  owner: string
}

interface UmkmModalProps {
  umkm: UmkmData | null
  isOpen: boolean
  onClose: () => void
}

export default function UmkmModal({ umkm, isOpen, onClose }: UmkmModalProps) {
  if (!umkm) return null

  const handleViewCertificate = () => {
    if (umkm.certificateId) {
      const pdfPath = `/certificates/${umkm.certificateId}.pdf`
      window.open(pdfPath, '_blank')
    }
  }

  const handleCall = () => {
    window.open(`tel:${umkm.phone}`, '_self')
  }

  const handleViewLocation = () => {
    const encodedAddress = encodeURIComponent(umkm.address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{umkm.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Image */}
          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src={umkm.image}
              alt={umkm.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Rating and Category */}
          <div className="flex justify-between items-center">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              {umkm.category}
            </Badge>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span className="ml-2 text-lg font-medium">{umkm.rating}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-gray-700 leading-relaxed">{umkm.description}</p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Alamat</h4>
                <p className="text-gray-600">{umkm.address}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-gray-500 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Telepon</h4>
                <p className="text-gray-600">{umkm.phone}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-gray-500 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Jam Operasional</h4>
                <p className="text-gray-600">{umkm.hours}</p>
              </div>
            </div>
          </div>

          {/* Menu Unggulan */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">• Menu Unggulan</h4>
            <div className="flex flex-wrap gap-2">
              {umkm.specialties.map((specialty, index) => (
                <Badge key={index} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-1">Kisaran Harga</h4>
            <p className="text-2xl font-bold text-green-600">{umkm.price}</p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button
              onClick={handleCall}
              className="bg-green-600 hover:bg-green-700"
            >
              <Phone className="mr-2 h-4 w-4" />
              Hubungi Sekarang
            </Button>
            <Button
              onClick={handleViewLocation}
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Lihat Lokasi
            </Button>
            {umkm.certificateId && (
              <Button
                onClick={handleViewCertificate}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 sm:col-span-2"
              >
                <FileText className="mr-2 h-4 w-4" />
                Lihat Sertifikat Halal
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}