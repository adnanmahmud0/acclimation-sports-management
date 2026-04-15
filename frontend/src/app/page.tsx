import { Hero } from "@/components/hero";
import { OneStopShop } from "@/components/one-stop-shop";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Logo } from "@/components/logo";


export default function Home() {
  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      <Hero />
      <OneStopShop />
      <AboutSection />
      <ContactSection />

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-white/5 flex flex-col items-center gap-6 bg-[#05070a]">
        <Logo variant="vertical" width={100} height={100} className="opacity-50 hover:opacity-100 transition-opacity" />
        <p className="text-xs text-white/30 tracking-widest uppercase text-center">
          © 2026 ACCLIMATION SPORTS MANAGEMENT. ALL RIGHTS RESERVED.
        </p>
      </footer>

    </div>
  );
}
