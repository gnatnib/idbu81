"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  ArrowRight,
  GraduationCap,
  Heart,
  Target,
  Calendar,
  MapPin,
  Play,
  Video,
  Clock,
  Eye,
} from "lucide-react";

interface EventInfo {
  title: string;
  description: string;
  type: "start" | "end";
}

interface HoveredDate {
  day: number;
  month: number;
  eventInfo: EventInfo;
  index: number;
  x: number;
  y: number;
}

export default function TeamSection() {
  const teamHighlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Multi Disiplin",
      description: "Mahasiswa dari berbagai jurusan",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "46 Anggota Aktif",
      description: "Mahasiswa dari Universitas Diponegoro",
    },
    {
      icon: <ArrowRight className="h-6 w-6" />,
      title: "Fokus Pada Implementasi",
      description: "Mengutamakan solusi praktis dan berkelanjutan",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [hoveredDate, setHoveredDate] = useState<HoveredDate | null>(null);

  // Calendar logic for July-August 2025
  const generateCalendar = (month: number, year: number): (number | null)[] => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];

    // Add empty cells for days before the first day of month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const getEventInfo = (
    day: number | null,
    month: number
  ): EventInfo | null => {
    if (!day) return null;
    if (month === 6 && day === 8) {
      // July 8, 2025 (month is 0-indexed)
      return {
        title: "Upacara & Pemberangkatan KKN",
        description: "Upacara pembukaan dan pemberangkatan peserta KKN UNDIP",
        type: "start",
      };
    }
    if (month === 7 && day === 20) {
      // August 20, 2025
      return {
        title: "Upacara Penarikan KKN",
        description: "Upacara penutupan dan penarikan peserta KKN UNDIP",
        type: "end",
      };
    }
    return null;
  };

  const isHighlightedDate = (day: number | null, month: number): boolean => {
    if (!day) return false;
    return (
      (month === 6 && day === 8) ||
      (month === 7 && day === 20) ||
      (month === 6 && day >= 8) ||
      (month === 7 && day <= 20)
    );
  };

  const isEventDate = (day: number | null, month: number): boolean => {
    if (!day) return false;
    return (month === 6 && day === 8) || (month === 7 && day === 20);
  };

  const handleVideoClick = (): void => {
    window.open("https://youtu.be/zkvNECC1qvk?si=pgvc243IoaAQyrT2", "_blank");
  };

  const CalendarMonth = ({
    month,
    year,
    monthName,
  }: {
    month: number;
    year: number;
    monthName: string;
  }) => {
    const days = generateCalendar(month, year);
    const dayNames = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 relative">
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
          {monthName} 2025
        </h3>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map((day) => (
            <div
              key={day}
              className="text-center text-xs font-medium text-gray-500 p-2"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            const eventInfo = getEventInfo(day, month);
            const isHighlighted = isHighlightedDate(day, month);
            const isEvent = isEventDate(day, month);

            return (
              <div
                key={index}
                className={`
                  relative aspect-square flex items-center justify-center text-sm cursor-pointer rounded-lg transition-all duration-200
                  ${
                    !day
                      ? ""
                      : isEvent
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold shadow-lg transform hover:scale-110"
                      : isHighlighted
                      ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                      : "text-gray-400 hover:bg-gray-100"
                  }
                `}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  if (eventInfo && day) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setHoveredDate({
                      day,
                      month,
                      eventInfo,
                      index,
                      x: rect.left + rect.width / 2,
                      y: rect.top,
                    });
                  }
                }}
                onMouseLeave={() => setHoveredDate(null)}
              >
                {day}
                {isEvent && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tooltip for this calendar */}
        {hoveredDate && hoveredDate.month === month && (
          <div
            className="fixed z-50 bg-gray-900 text-white p-4 rounded-lg shadow-2xl max-w-xs pointer-events-none transform -translate-x-1/2 -translate-y-full"
            style={{
              left: `${hoveredDate.x}px`,
              top: `${hoveredDate.y - 10}px`,
            }}
          >
            <div className="flex items-center mb-2">
              {hoveredDate.eventInfo.type === "start" ? (
                <MapPin className="h-4 w-4 text-green-400 mr-2" />
              ) : (
                <Calendar className="h-4 w-4 text-blue-400 mr-2" />
              )}
              <h4 className="font-bold text-sm">
                {hoveredDate.eventInfo.title}
              </h4>
            </div>
            <p className="text-xs text-gray-300">
              {hoveredDate.eventInfo.description}
            </p>
            <div className="absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">
            Tim KKN
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tentang Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami adalah tim mahasiswa dari berbagai jurusan yang tergabung dalam
            program Kuliah Kerja Nyata (KKN). Dengan keahlian yang beragam, kami
            bersatu untuk memberi dampak nyata melalui teknologi dan edukasi.
          </p>
        </div>

        {/* Team Description with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Tim KKN UNDIP Sendangmulyo
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Tim KKN kami terdiri dari mahasiswa-mahasiswa pilihan dari
              berbagai fakultas di Universitas Diponegoro yang memiliki komitmen
              tinggi untuk mengembangkan potensi masyarakat lokal melalui
              program Zona KHAS.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dengan latar belakang pendidikan yang beragam, kami menghadirkan
              pendekatan multidisiplin dalam setiap program yang dijalankan.
              Mulai dari aspek teknis, manajemen, komunikasi, hingga kesehatan
              dan gizi.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Selama program KKN berlangsung, kami tidak hanya memberikan
              kontribusi kepada masyarakat, tetapi juga belajar banyak dari
              kearifan lokal dan semangat gotong royong masyarakat Sendangmulyo.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Kolaboratif", "Inovatif", "Berdedikasi", "Berpengalaman"].map(
                (tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-purple-100 text-purple-800"
                  >
                    {tag}
                  </Badge>
                )
              )}
            </div>
          </div>
          <div>
            <img
              src="/images/timkkn.jpg"
              alt="Tim KKN UNDIP Sendangmulyo"
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer rounded-2xl shadow-lg w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            />
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
              <div className="relative">
                <button
                  className="absolute top-2 right-2 bg-white text-gray-800 rounded-full p-2 shadow hover:bg-gray-100 transition"
                  onClick={() => setIsModalOpen(false)}
                >
                  ✕
                </button>
                <img
                  src="/images/timkkn.jpg"
                  alt="Tim KKN Full View"
                  className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          )}
        </div>

        {/* Video Documentation Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-100">
              Video Dokumentasi
            </Badge>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Dokumentasi Perjalanan KKN
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Saksikan dokumentasi lengkap perjalanan tim KKN dari awal hingga
              akhir program
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl"
              onClick={handleVideoClick}
            >
              {/* Video Thumbnail Background */}
              <div className="aspect-video relative overflow-hidden">
                {/* Actual Thumbnail Image */}
                <img
                  src="/images/thumbnail.jpg"
                  alt="Mewujudkan Harapan yang Tulus - KKN UNDIP Thumbnail"
                  className="w-full h-full object-cover"
                />

                {/* Video Thumbnail Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300 group-hover:bg-opacity-100">
                    <Play className="h-10 w-10 text-red-600 ml-1 group-hover:text-red-700" />
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
                  <div className="text-white">
                    <h4 className="text-2xl font-bold mb-2">
                      Mewujudkan Harapan yang Tulus
                    </h4>
                    <p className="text-gray-200 mb-3">
                      KKN-T IDBU 81 Universitas Diponegoro
                    </p>

                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>06:20</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        <span>Dokumentasi Lengkap</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* YouTube Logo */}
                <div className="absolute top-4 right-4">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    YouTube
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-blue-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:via-blue-600/10 group-hover:to-purple-600/10 transition-all duration-500"></div>
              </div>
            </div>

            {/* Video Description */}
            <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Video className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h5 className="text-lg font-bold text-gray-900 mb-2">
                    Tentang Video Ini
                  </h5>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Video dokumentasi ini merupakan hasil karya tim KKN yang
                    dibuat untuk memenuhi tugas Multi Disiplin 3. Video ini
                    menghadirkan perjalanan lengkap tim KKN UNDIP mulai dari
                    persiapan, pelaksanaan program Zona KHAS, hingga dampak
                    nyata yang telah dicapai di Kelurahan Sendangmulyo.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-red-100 text-red-800"
                    >
                      Dokumentasi
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      KKN UNDIP
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-purple-100 text-purple-800"
                    >
                      Zona KHAS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800"
                    >
                      Sendangmulyo
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {teamHighlights.map((highlight, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* KKN Calendar Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">
                Jadwal Program KKN
              </h3>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Program KKN UNDIP berlangsung selama 6 minggu, dari upacara
              pemberangkatan hingga penarikan
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <CalendarMonth month={6} year={2025} monthName="Juli" />
              <CalendarMonth month={7} year={2025} monthName="Agustus" />
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-6 flex-wrap">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Event Penting</span>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-purple-100 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Periode KKN</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 md:p-12 text-white text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 mr-3" />
            <h3 className="text-3xl font-bold">Misi Kami</h3>
          </div>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Memberdayakan UMKM lokal melalui program Zona KHAS untuk menciptakan
            ekosistem kuliner yang halal, aman, dan sehat, serta meningkatkan
            kesejahteraan masyarakat Klipang, Kelurahan Sendangmulyo.
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

        {/* Team Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Visi Kami</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Menjadi katalisator perubahan positif dalam pengembangan ekonomi
              kreatif dan pemberdayaan masyarakat melalui implementasi Zona KHAS
              yang berkelanjutan dan berdampak luas.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                Nilai-Nilai Tim
              </h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Integritas dalam setiap tindakan</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Kolaborasi yang saling menguatkan</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span>Inovasi untuk solusi berkelanjutan</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span>Empati terhadap kebutuhan masyarakat</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            { number: "46", label: "Anggota Tim" },
            { number: "6", label: "Minggu Program" },
            { number: "30+", label: "UMKM Terjangkau" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
