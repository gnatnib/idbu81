import HeroSection from "@/components/hero-section";
import AboutKhasSection from "@/components/about-khas-section";
import SanitasiSection from "@/components/sanitasi-section";
import VillageProfileSection from "@/components/village-profile-section";
import UmkmSection from "@/components/umkm-section";
import TeamSection from "@/components/team-section";
import MapSection from "@/components/map-section";
import ContactSection from "@/components/contact-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutKhasSection />
      <VillageProfileSection />
      <UmkmSection />
      <TeamSection />
      <MapSection />
      <ContactSection />
    </main>
  );
}
