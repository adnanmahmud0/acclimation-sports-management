import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NBA Salary Cap Analytics & Strategy",
  description: "Proprietary analytical models and expert salary cap strategy to optimize every contract and maximize career earnings.",
};

export default function SalaryCapPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#05070a] text-white">
      {/* Hero Background */}
      <div className="absolute inset-x-0 top-0 z-[-1] h-[85vh]">
        <Image
          src="/graph.png"
          alt="Salary Cap Analysis Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/90 via-[#05070a]/40 to-[#05070a]" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center space-y-6 max-w-5xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-2 shadow-xl">
            Salary Cap & Analytical Models
          </div>
          <h1 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-[1.1]">
            Master the Salary Cap. <br />
            <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent italic">
              Maximize Every Dollar.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-medium max-w-4xl mx-auto leading-relaxed italic">
            Proprietary analytical models and expert salary cap strategy that put more money in your pocket. 
            We deliver precise, real-time salary cap modeling and data-driven strategies to optimize every contract.
          </p>
        </div>

        {/* Engine Section */}
        <div className="w-full max-w-7xl space-y-12">
          <div className="text-center space-y-4">
             <div className="flex items-center justify-center gap-4 text-primary">
                <div className="h-[1px] w-12 bg-primary/30" />
                <span className="text-sm font-black uppercase tracking-[0.4em]">The Acclimation Salary Cap Engine</span>
                <div className="h-[1px] w-12 bg-primary/30" />
             </div>
             <div className="w-8 h-8 mx-auto relative opacity-40">
                <div className="absolute inset-0 border-2 border-primary rounded-full animate-ping" />
                <div className="relative w-full h-full bg-primary rounded-full blur-[2px]" />
             </div>
          </div>

          {/* Engine Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <EngineCard title="Live Salary Cap Forecasting">
               <div className="space-y-4">
                  <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest leading-none">Premium Growth</div>
                  <div className="text-2xl font-black text-white">$2.1M / $1.8M</div>
                  <div className="h-10 flex items-end gap-1">
                     <div className="flex-1 bg-primary/20 h-[40%] rounded-sm" />
                     <div className="flex-1 bg-primary/20 h-[60%] rounded-sm" />
                     <div className="flex-1 bg-primary/20 h-[50%] rounded-sm" />
                     <div className="flex-1 bg-primary h-full rounded-sm shadow-[0_0_10px_rgba(0,210,255,0.5)]" />
                  </div>
               </div>
            </EngineCard>

            <EngineCard title="Luxury Tax Stress Testing">
               <div className="space-y-4">
                  <div className="flex justify-between items-end h-20 gap-2 px-2">
                     <div className="w-3 bg-purple-500/80 h-full rounded-t-sm" />
                     <div className="w-3 bg-white/10 h-[40%] rounded-t-sm" />
                     <div className="w-3 bg-[#00d2ff] h-[70%] rounded-t-sm shadow-[0_0_15px_rgba(0,210,255,0.3)]" />
                     <div className="w-3 bg-white/10 h-[90%] rounded-t-sm" />
                     <div className="w-3 bg-white/10 h-[55%] rounded-t-sm" />
                  </div>
                  <div className="flex justify-between text-[8px] font-bold text-white/20 uppercase tracking-widest px-1">
                     <span>Base</span>
                     <span>Scen 1</span>
                     <span>Scen 2</span>
                     <span>Tax</span>
                  </div>
               </div>
            </EngineCard>

            <EngineCard title="Endorsement & NIL Valuation">
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                     <span className="text-white/30">Value Uplift</span>
                     <span className="text-primary">+120%</span>
                  </div>
                  <div className="bg-[#0a0d12]/60 p-4 rounded-xl border border-white/5 space-y-1">
                     <div className="text-[9px] font-bold text-white/20 uppercase tracking-widest leading-none italic">Personal Brand Delta</div>
                     <div className="text-xl font-black text-white">$2.1M / $1.2M</div>
                  </div>
               </div>
            </EngineCard>

            <EngineCard title="Contract Optimization Simulator">
               <div className="h-28 relative pt-4">
                  <svg viewBox="0 0 200 100" className="w-full h-full stroke-primary fill-none stroke-2">
                     <path d="M0,80 Q50,70 100,40 T200,10" className="opacity-40" />
                     <path d="M0,90 Q50,85 100,50 T200,20" className="stroke-white/10" />
                     <circle cx="100" cy="40" r="4" className="fill-primary" />
                     <circle cx="100" cy="40" r="8" className="fill-primary/20 animate-pulse" />
                  </svg>
                  <div className="absolute top-2 left-0 text-[10px] font-black text-white/30 tracking-[0.3em] uppercase">Value Projection</div>
               </div>
            </EngineCard>

          </div>

          {/* List Section */}
          <div className="grid md:grid-cols-2 gap-12 pt-12 items-center">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 order-2 md:order-1">
                {[
                  { id: 1, text: "In-house salary cap & luxury tax forecasts" },
                  { id: 2, text: "Custom analytical projections" },
                  { id: 3, text: "Bird Rights and exception optimization" },
                  { id: 4, text: "Trade scenario analysis" }
                ].map((item) => (
                  <div key={item.id} className="flex gap-4 items-center group">
                     <div className="w-8 h-8 rounded-full bg-[#0a0d12] border border-white/10 flex items-center justify-center font-black text-primary text-xs group-hover:bg-primary group-hover:text-black transition-all">
                        {item.id}
                     </div>
                     <p className="text-xs font-bold text-white/70 uppercase tracking-widest leading-tight">{item.text}</p>
                  </div>
                ))}
             </div>

             <div className="flex flex-col items-center md:items-end gap-8 order-1 md:order-2">
                <Link href="/book" className="group relative w-full md:w-auto">
                   <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-xl scale-95 group-hover:scale-105 transition-transform duration-500" />
                   <div className="relative bg-gradient-to-r from-primary/10 via-white/5 to-white/5 border border-white/10 px-8 py-5 rounded-xl text-center shadow-2xl backdrop-blur-md group-hover:border-primary/50 transition-all">
                      <span className="text-xs md:text-lg font-black text-white uppercase tracking-widest leading-tight block">
                        SCHEDULE YOUR CONFIDENTIAL <br className="hidden md:block" />
                        SALARY CAP STRATEGY CALL TODAY
                      </span>
                   </div>
                </Link>
             </div>
          </div>

          <div className="pt-24 text-center text-[10px] font-black tracking-[0.5em] text-white/10 uppercase italic border-t border-white/5">
            Economic Precision • Real-Time Simulations • Market Value Maximization
          </div>
        </div>
      </div>
    </main>
  );
}

function EngineCard({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="glass-premium p-6 rounded-2xl border-white/10 hover:border-primary/40 transition-all group min-h-[180px] flex flex-col justify-between">
      <h3 className="text-xs font-black text-white uppercase tracking-widest leading-tight mb-6">{title}</h3>
      {children}
    </div>
  );
}
