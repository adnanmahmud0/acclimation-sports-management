import Image from "next/image";
import Link from "next/link";
import { BarChart3, Mic2, Handshake, Network, Trophy } from "lucide-react";
import { Logo } from "@/components/logo";


export default function MarketingEndorsementsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fullbuscatecoart.png"
          alt="Arena Background"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/90 via-[#05070a]/40 to-[#05070a]" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10 flex flex-col items-center text-center">
        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Main Header */}
          <div className="space-y-6">
             <h1 className="text-2xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-tight drop-shadow-[0_0_30px_rgba(0,210,255,0.3)]">
               Marketing & <br />
               <span className="bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent italic pr-4">
                  Endorsement Deals
               </span>
             </h1>
               <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-4xl mx-auto italic">
                 We build and monetize your personal brand so you earn maximum value from endorsements, sponsorships, and marketing opportunities. elite high school talent turn their talent into real off-court income.
               </p>
            </div>

            {/* List Section */}
            <div className="flex flex-col items-center gap-10 py-8 w-full max-w-4xl mx-auto">
               <ul className="space-y-8 text-left w-full">
                  <ListItem 
                    icon={<BarChart3 className="w-6 h-6 text-primary" />} 
                    title="Professional brand valuation and market positioning" 
                    desc="Analysis of your market value and strategic positioning"
                  />
                  <ListItem 
                    icon={<Mic2 className="w-6 h-6 text-primary" />} 
                    title="Media training and personal branding development" 
                  />
                  <ListItem 
                    icon={<Handshake className="w-6 h-6 text-primary" />} 
                    title="Targeted endorsement strategy and deal sourcing" 
                    desc="Negotiation of sponsorships, NIL deals, and long-term partnerships"
                  />
                  <ListItem 
                    icon={<Network className="w-6 h-6 text-primary" />} 
                    title="Full integration with your NBA contract for maximum career earnings" 
                    desc="Seamless alignment with your professional contract"
                  />
                  <ListItem 
                    icon={<Trophy className="w-6 h-6 text-primary" />} 
                    title="Long-term portfolio growth and legacy building" 
                    desc="Strategies to ensure sustained off-court success"
                  />
               </ul>
            </div>

            {/* Transition Copy */}
            <div className="space-y-6 max-w-4xl mx-auto">
               <p className="text-white/60 text-lg md:text-xl font-bold italic tracking-wide leading-relaxed">
                  Whether you're chasing your first major shoe deal, building your NIL portfolio, or expanding your brand as a NBA player, we make sure you're never undervalued in the marketplace.
               </p>
               <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter">
                  Ready to unlock your full earning potential off the court?
               </h2>
            </div>

            {/* CTA Section */}
            <div className="pt-6">
               <Link href="/get-started" className="group relative inline-block">
                  <div className="absolute inset-0 bg-primary/40 blur-3xl rounded-xl scale-75 group-hover:scale-110 transition-transform duration-500" />
                  <div className="relative bg-gradient-to-r from-primary to-blue-600 px-12 py-5 rounded-lg transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(0,210,255,0.6)] group-active:scale-[0.98]">
                    <span className="text-sm md:text-xl font-black text-black uppercase tracking-widest leading-tight block">
                      GET STARTED
                    </span>
                  </div>
               </Link>
            </div>

            {/* Footer Lane */}
            <div className="pt-20 space-y-12">
               <div className="bg-[#0a0d12]/60 border border-white/5 backdrop-blur-md px-8 py-6 rounded-2xl inline-flex flex-wrap items-center justify-center gap-4 shadow-2xl">
                  <p className="text-white/40 text-[10px] md:text-sm font-bold uppercase tracking-widest leading-none">
                    Schedule your confidential strategy call with <span className="text-white">Joe Grekoski</span> today.
                  </p>
                  <div className="w-[1px] h-4 bg-white/20 hidden md:block" />
                  <p className="text-white text-[10px] md:text-sm font-black uppercase tracking-widest leading-none">
                    Phone: 512-518-6547
                  </p>
               </div>

               <div className="flex flex-col items-center gap-6">
                  <Logo variant="vertical" width={80} height={80} className="opacity-30 hover:opacity-100 transition-opacity" />
                  <div className="text-center text-[10px] font-black tracking-[0.5em] text-white/10 uppercase italic">
                     © 2026 ACCLIMATION SPORTS MANAGEMENT ALL RIGHTS RESERVED
                  </div>
               </div>
            </div>

          </div>
        </div>
    </main>
  );
}

function ListItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc?: string }) {
  return (
    <li className="flex gap-6 group">
       <div className="w-12 h-12 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-all shadow-xl">
          {icon}
       </div>
       <div className="space-y-1">
          <h4 className="text-lg md:text-xl font-black text-white tracking-tight leading-tight uppercase italic">{title}</h4>
          {desc && (
            <p className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest">{desc}</p>
          )}
       </div>
    </li>
  );
}
