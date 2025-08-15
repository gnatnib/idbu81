"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    L: any
  }
}

interface LeafletMapProps {
  center: [number, number]
  zoom: number
  className?: string
}

export default function LeafletMap({ center, zoom, className = "" }: LeafletMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return

    // Load Leaflet CSS and JS
    const loadLeaflet = async () => {
      if (!window.L) {
        // Load CSS
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        document.head.appendChild(link)

        // Load JS
        const script = document.createElement("script")
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        script.onload = initializeMap
        document.head.appendChild(script)
      } else {
        initializeMap()
      }
    }

    const initializeMap = () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
      }

      const map = window.L.map(mapRef.current, {
        zoomControl: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        boxZoom: true,
        keyboard: true,
        dragging: true,
        touchZoom: true
      }).setView(center, zoom)

      // Ensure map container has proper z-index
      if (mapRef.current) {
        mapRef.current.style.zIndex = '1'
      }

      // Add OpenStreetMap tiles
      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      // Add marker for Klipang, Sendangmulyo with correct coordinates
      const marker = window.L.marker(center).addTo(map)
      marker.bindPopup(`
        <div class="text-center">
          <h3 class="font-bold text-lg mb-2">Klipang, Sendangmulyo</h3>
          <p class="text-sm text-gray-600 mb-2">Zona KHAS</p>
          <p class="text-xs text-gray-500">Koordinat: ${center[0]}, ${center[1]}</p>
        </div>
      `)

      // Add some sample UMKM locations around the correct area
      // const umkmLocations = [
      //   { name: "Warung Bu Sari", pos: [-7.036277, 110.472035], category: "Makanan Tradisional" },
      //   { name: "Bakso Mas Joko", pos: [-7.035277, 110.471035], category: "Makanan Berkuah" },
      //   { name: "Es Dawet Mbak Tini", pos: [-7.035777, 110.472535], category: "Minuman Tradisional" },
      //   { name: "Sate Kambing Pak Hadi", pos: [-7.037277, 110.470535], category: "Makanan Bakar" },
      //   { name: "Gudeg Yu Djum", pos: [-7.035277, 110.472035], category: "Makanan Tradisional" },
      //   { name: "Tahu Gimbal Pak Darto", pos: [-7.036777, 110.471035], category: "Makanan Khas" },
      // ]

      // umkmLocations.forEach((umkm) => {
      //   const umkmMarker = window.L.marker(umkm.pos).addTo(map)
      //   umkmMarker.bindPopup(`
      //     <div class="text-center">
      //       <h4 class="font-semibold text-green-600">${umkm.name}</h4>
      //       <p class="text-xs text-gray-500">${umkm.category}</p>
      //     </div>
      //   `)
      // })

      // Add area boundary circle to show the Klipang area
      const areaCircle = window.L.circle(center, {
        color: '#206d16ff',
        fillColor: '#206d16ff',
        fillOpacity: 0.1,
        radius: 30
      }).addTo(map)

      areaCircle.bindPopup(`
        <div class="text-center">
          <h4 class="font-semibold text-blue-600">Area Klipang</h4>
          <p class="text-xs text-gray-500">Zona KHAS Sendangmulyo</p>
        </div>
      `)

      mapInstanceRef.current = map
    }

    loadLeaflet()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
      }
    }
  }, [center, zoom])

  return <div ref={mapRef} className={`w-full h-full relative z-10 ${className}`} />
}