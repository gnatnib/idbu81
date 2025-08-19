"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Phone,
  Instagram,
  MapPin,
  Users,
  Clock,
} from "lucide-react";

export default function ContactSection() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "628122885304";
    const message =
      "Halo, saya tertarik untuk bergabung dengan Zona KHAS di Klipang, Sendangmulyo. Mohon informasi lebih lanjut.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Telepon",
      value: "+628122885304",
      description: "Hubungi kami untuk informasi umum",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      title: "Instagram",
      value: "@kkn81_sendangmulyo",
      description: "Kirim pertanyaan atau saran",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Alamat",
      value: "Klipang, Kel. Sendangmulyo",
      description: "Kec. Tembalang, Kota Semarang",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Jam Layanan",
      value: "08:00 - 17:00 WIB",
      description: "Senin - Jumat",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-green-500 to-blue-500"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/20">
            Hubungi Kami
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bergabung dengan Zona KHAS
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ingin bergabung atau membutuhkan informasi lebih lanjut? Hubungi
            paguyuban UMKM Zona KHAS melalui kontak di bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form/CTA */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Hubungi Pengelola Pujasera
            </h3>
            <p className="text-gray-600 mb-8">
              Pengelola UMKM Zona KHAS siap membantu Anda untuk bergabung dalam
              program kuliner halal, aman, dan sehat. Klik tombol di bawah untuk
              langsung terhubung dengan WhatsApp kami.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center p-4 bg-green-50 rounded-lg">
                <Users className="h-6 w-6 text-green-600 mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Ketua Koperasi RW 09
                  </h4>
                  <p className="text-sm text-gray-600">
                    Koordinator: Agus Purnomo
                  </p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                <MessageCircle className="h-6 w-6 text-blue-600 mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-900">Respon Cepat</h4>
                  <p className="text-sm text-gray-600">
                    Biasanya membalas dalam 1-2 jam
                  </p>
                </div>
              </div>
            </div>

            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Hubungi via WhatsApp
            </Button>

            <p className="text-xs text-gray-500 text-center mt-4">
              Dengan menghubungi kami, Anda akan diarahkan ke aplikasi WhatsApp
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Informasi Kontak
              </h3>
              <p className="text-white/90">
                Berbagai cara untuk menghubungi tim Zona KHAS
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                        {info.icon}
                      </div>
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold mb-1">{info.value}</p>
                    <p className="text-sm text-white/80">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-bold text-white mb-3">
                Syarat Bergabung:
              </h4>
              <ul className="space-y-2 text-white/90 text-sm">
                <li>• Memiliki usaha kuliner di wilayah Klipang</li>
                <li>• Berkomitmen mengikuti standar KHAS</li>
                <li>• Bersedia mengikuti pelatihan dan sertifikasi</li>
                <li>• Aktif dalam kegiatan paguyuban</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
