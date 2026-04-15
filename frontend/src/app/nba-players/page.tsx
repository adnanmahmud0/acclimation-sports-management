import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Representing Active NBA Players",
  description: "Veteran representation focused on wealth architecture, contract extensions, and post-career financial security for active NBA athletes.",
};

export default function NBAPlayersPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ground.png"
          alt="Active NBA Players Background"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/80 via-[#05070a]/40 to-[#05070a]" />
      </div>

        <div className="container mx-auto px-6 pt-32 pb-24 relative z-10 flex flex-col items-center text-center">
          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Main Header */}
            <div className="space-y-6">
               <h1 className="text-4xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-tight drop-shadow-[0_0_30px_rgba(0,210,255,0.4)]">
                 Active NBA Players
               </h1>
               <div className="space-y-6">
                  <h2 className="text-xl md:text-4xl font-black text-white uppercase italic tracking-tight opacity-90">
                    Maximize Your Off-Court Value <br className="hidden md:block" />
                    <span className="text-primary italic">and Build Real Wealth</span>
                  </h2>
                  <p className="text-sm md:text-xl text-white/60 font-medium leading-relaxed max-w-4xl mx-auto italic">
                    Your on-court talent opens doors. We turn that into serious money through world-class endorsements, smart branding, and strategic opportunities.
                  </p>
               </div>
            </div>

            {/* What We Provide Timeline Section */}
            <div className="space-y-12 py-12">
               <div className="relative">
                  <div className="flex items-center justify-center gap-4 text-primary">
                    <div className="h-[1px] w-12 bg-primary/30" />
                    <span className="text-sm font-black uppercase tracking-[0.4em]">What We Provide</span>
                    <div className="h-[1px] w-12 bg-primary/30" />
                  </div>
               </div>

               {/* 5-Point Timeline Visual */}
               <div className="relative w-full max-w-7xl mx-auto pt-10 pb-20">
                  {/* Connecting Line */}
                  <div className="absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                     <TimelinePoint 
                       number="1" 
                       text="Direct connections to world-class brands and sponsors." 
                     />
                     <TimelinePoint 
                       number="2" 
                       text="Proprietary tools to accurately value and maximize your endorsement deals." 
                     />
                     <TimelinePoint 
                       number="3" 
                       text="Booking high-profile podcast appearances and media opportunities." 
                     />
                     <TimelinePoint 
                       number="4" 
                       text="Professional publishing and promotion of your advanced statistics online." 
                     />
                     <TimelinePoint 
                       number="5" 
                       text="Expert negotiation for your next contract extension." 
                     />
                  </div>
               </div>
            </div>

            {/* Transition Copy */}
            <div className="space-y-8">
               <p className="text-white/80 text-lg md:text-2xl font-bold italic tracking-wide leading-relaxed max-w-5xl mx-auto">
                  We handle the business so you can focus on ball — and get paid <br className="hidden md:block" /> 
                  what you&apos;re truly worth off the court.
               </p>

               {/* CTA Section */}
               <div className="pt-6">
                  <Link href="/get-started" className="group relative inline-block w-full max-w-3xl px-4">
                     <div className="absolute inset-0 bg-primary/40 blur-3xl rounded-xl scale-75 group-hover:scale-110 transition-transform duration-500" />
                     <div className="relative bg-gradient-to-r from-primary via-purple-600 to-primary px-8 py-6 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(0,180,255,0.6)] group-active:scale-[0.98] border border-white/20">
                       <span className="text-xs md:text-xl font-black text-white uppercase tracking-widest leading-tight block">
                         SCHEDULE YOUR CONFIDENTIAL OFF-COURT <br className="hidden md:block" />
                         VALUE STRATEGY CALL TODAY
                       </span>
                     </div>
                  </Link>
               </div>
            </div>

            <div className="pt-12 text-center text-[10px] font-black tracking-[0.4em] text-white/10 uppercase italic border-t border-white/5">
              Acclimation Sports Management • Veteran Representation • Wealth Architecture
            </div>

          </div>
        </div>
    </main>
  );
}

function TimelinePoint({ number, text }: { number: string, text: string }) {
  return (
    <div className="flex flex-col items-center space-y-6 group">
       <div className="w-14 h-14 rounded-full bg-[#0a0d12]/80 border border-primary/40 flex items-center justify-center font-black text-xl text-white group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all shadow-[0_0_20px_rgba(0,180,255,0.2)] relative z-10">
          {number}
       </div>
       <p className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest leading-relaxed px-4 group-hover:text-white transition-colors">
          {text}
       </p>
    </div>
  );
}
