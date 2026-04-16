import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WNBA Representation & CBA Advocacy",
  description: "Capitalize on the historic new WNBA CBA. Expert negotiation and representation that maximizes earnings and brand value for WNBA athletes.",
};

export default function WNBAPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/wnba_player.png"
          alt="WNBA Background"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/90 via-transparent to-[#05070a]" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="text-center space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
              <span className="   drop-shadow-[0_0_30px_rgba(0,210,255,0.5)]">
                WNBA
              </span>
            </h1>

            <div className="space-y-4 text-center">
              <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-white leading-tight max-w-4xl mx-auto">
                Capitalize on the Historic New CBA — <br/><span className="text-primary">Maximize Your Earnings Now</span>
              </h2>
              <p className="text-sm md:text-lg text-white/80 font-medium leading-relaxed max-w-3xl mx-auto">
                The new 7-year WNBA CBA (2026–2032) explodes salaries: salary cap jumps to $7M in 2026, 
                average pay rises to $583K, and max contracts reach $1.4M+.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-8">
            <div className="flex flex-col items-center gap-6">
              <Link href="/book" className="group relative">
                <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-xl scale-95 group-hover:scale-110 transition-transform duration-500" />
                <div className="relative bg-gradient-to-r from-[#00d2ff] via-[#3adaff] to-[#00d2ff] px-6 py-4 md:py-6 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(0,210,255,0.6)] group-active:scale-[0.98]">
                  <span className="text-xs md:text-xl font-black text-black uppercase tracking-wider">
                    SCHEDULE YOUR CONFIDENTIAL WNBA STRATEGY CALL TODAY
                  </span>
                </div>
              </Link>

              <div className="text-white/40 text-[9px] md:text-xs font-bold tracking-widest uppercase flex flex-col md:flex-row items-center gap-2 md:gap-4">
                <span>30 minutes that can add hundreds of thousands</span>
                <span className="hidden md:inline">•</span>
                <span>Zero obligation</span>
                <span className="hidden md:inline">•</span>
                <span>Fort Lauderdale, FL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="hidden lg:block h-32" />

          {/* "What We Provide" Card */}
          <div className="relative group w-full lg:-ml-[100px]">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00d2ff] via-purple-500 to-primary rounded-[2rem] opacity-70" />

            <div className="relative bg-[#0a0d12]/90 h-full p-8 md:p-12 rounded-[2rem] shadow-2xl space-y-6 md:space-y-8">
              <h3 className="text-xl md:text-3xl font-black text-white leading-tight uppercase">
                What We Provide:
              </h3>

              <ul className="space-y-4 md:space-y-5">
                {[
                  "Expert negotiation under the new CBA",
                  "High-value endorsement & brand deals",
                  "Podcast appearances and media opportunities",
                  "Personal brand development",
                  "Full holistic concierge support (trainers, chefs, travel, taxes)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(0,210,255,0.5)]" />
                    <span className="text-sm md:text-xl font-medium tracking-tight leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

