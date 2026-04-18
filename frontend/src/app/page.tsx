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
    </div>
  );
}
