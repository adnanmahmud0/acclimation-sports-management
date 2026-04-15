import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/logo";


export default function ContractNegotiationPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/effect.png"
          alt="Contract Negotiation Background"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/90 via-transparent to-[#05070a]" />
      </div>

      <div className="container mx-auto px-6 pt-24 relative z-10 ">
        <div className="space-y-8">
          <h1 className="text-2xl md:text-6xl font-black tracking-tight text-white uppercase italic leading-tight text-center">
            NBA Contract Negotiation & <br />
            <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent italic pr-4">
              Representation
            </span>
          </h1>

            <p className="text-lg md:text-2xl text-white/90 font-medium leading-relaxed italic">
              Data-driven contract deals with proprietary in-house salary-cap models. Expert representation that maximizes guaranteed money, incentives, and long-term player for active NBA players, college prospects, and elite high-school talent.
            </p>

            <div className="flex flex-col md:flex-row">
              <ul className="text-left">
                {[
                  "Salary Cap Mastery & Analytical Modeling",
                  "Rookie Scale & Veteran Extension Negotiation",
                  "Multi-Team Bidding War Strategy",
                  "Full CBA Compliance & Contract Structuring",
                  "Pre-Draft & Combine Contract Positioning"
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/80 group">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,210,255,1)] group-hover:scale-125 transition-transform" />
                    <span className="text-base md:text-lg font-bold tracking-tight">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="container mx-auto px-6 pb-24 relative z-10">
        <div className="space-y-20">

          {/* Horizontal Timeline */}
          <div className="relative pt-12">
            {/* Connecting Line */}
            <div className="absolute top-[4.5rem] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              {[
                { step: 1, title: "Maximum", subtitle: "Guaranteed Money" },
                { step: 2, title: "Performance", subtitle: "Incentives & Escalators" },
                { step: 3, title: "Trade & Buyout", subtitle: "Negotiation" },
                { step: 4, title: "Post-Contract", subtitle: "Wealth Coordination" }
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-full bg-[#0a0d12] border border-primary/40 flex items-center justify-center font-black text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,210,255,0.2)]">
                    {item.step}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white text-sm font-black uppercase tracking-widest">{item.title}</h3>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center pt-8">
            <Link href="/book" className="group relative">
              <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-xl scale-95 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative bg-[#0a0d12] border border-white/10 px-8 py-5 rounded-lg transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,210,255,0.3)]">
                <span className="text-xs md:text-xl font-black text-white uppercase tracking-widest leading-tight block">
                  SCHEDULE YOUR <span className="text-primary italic">CONFIDENTIAL</span> CONTRACT STRATEGY CALL
                </span>
              </div>
            </Link>
          </div>

          <footer className="pt-12 flex flex-col items-center gap-6 border-t border-white/5">
              <Logo variant="vertical" width={80} height={80} className="opacity-30 hover:opacity-100 transition-opacity" />
              <div className="text-center text-[10px] font-black tracking-[0.5em] text-white/10 uppercase italic">
                Elite Advocacy • Data Centric Identification • Strategic Market Positioning
              </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
