import Link from "next/link";
import { MapPin, Phone, Instagram, Youtube, Music3 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logokknbgerase.png"
                alt="Logo KKN UNDIP"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg">KKN IDBU-81</span>
                <span className="text-xs text-gray-400">
                  UNDIP Sendangmulyo
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Program Kuliah Kerja Nyata untuk pengembangan Zona KHAS (Kuliner
              Halal, Aman, dan Sehat) di Klipang, Kelurahan Sendangmulyo.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/kkn81_sendangmulyo?igsh=MWU5Ym1oZWg1aXNoZw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@kkn81_sendangmulyo?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Music3 className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Menu Utama</h3>
            <ul className="space-y-2">
              {[
                { name: "Beranda", href: "#hero" },
                { name: "Program Kami", href: "#khas" },
                { name: "Profil Kelurahan", href: "#village" },
                { name: "UMKM", href: "#umkm" },
                { name: "Tim Kami", href: "#team" },
                { name: "Peta", href: "#map" },
                { name: "Kontak", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Program Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Program</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Pembuatan NIB UMKM</li>
              <li>Pembuatan dan Penerbitan Sertifikat Halal</li>
              <li>Pembuatan Labelisasi Higienis</li>
              <li>Pembuatan Tugu Zona KHAS</li>
              <li>Revitalisasi Pujasera</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-400">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>
                  Klipang, Kel. Sendangmulyo, Kec. Tembalang, Semarang
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>+628122885304</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Instagram className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>@kkn81_sendangmulyo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {" "}
              © {new Date().getFullYear()} KKN IDBU-81. Universitas Diponegoro.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
