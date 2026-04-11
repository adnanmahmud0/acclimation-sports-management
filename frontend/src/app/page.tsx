import { Hero } from "@/components/hero";
import { OneStopShop } from "@/components/one-stop-shop";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      <Hero />
      <OneStopShop />
      <AboutSection />
      <ContactSection />

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-white/5 text-center bg-[#05070a]">
        <p className="text-xs text-white/30 tracking-widest uppercase">
          © 2026 ACCLIMATION SPORTS MANAGEMENT. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}
