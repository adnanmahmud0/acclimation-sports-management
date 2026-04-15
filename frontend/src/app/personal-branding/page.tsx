import Image from "next/image";
import Link from "next/link";

export default function PersonalBrandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/glove.png"
          alt="Personal Branding Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10 flex flex-col items-center">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-8 md:mb-12">
           <span className="text-primary font-black tracking-[0.5em] uppercase text-xs drop-shadow-md">Brand Equity</span>
           <div className="text-3xl md:text-4xl font-black text-white drop-shadow-md">$1.2M</div>
           <h1 className="text-2xl md:text-7xl font-black text-white leading-tight uppercase italic tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
             Turn Your Talent Into a <br />
             <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent pr-6">
               Premium, Monetizable
             </span> <br />

             Economic Asset
           </h1>
           <p className="text-white/60 text-xs md:text-sm font-bold max-w-2xl mx-auto italic drop-shadow-md">
             Personal Brand Development: the art of truly identifying the unique value, data-backed and scaling strategically and carefully, then to view the potential.
           </p>
        </div>

        {/* Central Visual Section - Mobile Optimized */}
        <div className="relative w-full max-w-5xl mb-12">
           {/* Mobile view: Stacked Data Points */}
           <div className="grid grid-cols-1 md:hidden gap-4 w-full">
              <DataPoint title="Brand Equity" value="$1.2M" />
              <DataPoint title="Social Reach" value="2.4M" />
              <DataPoint title="Endorsement Value" value="$850K" />
           </div>

           {/* Desktop view: Orbiting Data Points */}
           <div className="hidden md:flex relative w-full aspect-[16/9] items-center justify-center">
              <div className="absolute top-10 left-10 md:top-20 md:left-20 bg-[#0a0d12]/95 border border-primary/30 p-5 rounded-2xl backdrop-blur-xl shadow-2xl z-20">
                 <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Brand Equity</div>
                 <div className="text-xl font-black text-white">$1.2M</div>
              </div>

              <div className="absolute top-1/2 -right-10 md:-right-20 -translate-y-1/2 bg-[#0a0d12]/95 border border-primary/30 p-5 rounded-2xl backdrop-blur-xl shadow-2xl z-20">
                 <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Social Reach</div>
                 <div className="text-xl font-black text-white">2.4M</div>
              </div>

              <div className="absolute bottom-10 left-5 md:bottom-20 md:left-5 lg:-left-20 bg-[#0a0d12]/95 border border-primary/30 p-5 rounded-2xl backdrop-blur-xl shadow-2xl z-20">
                 <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Endorsement Value</div>
                 <div className="text-xl font-black text-white">$850K</div>
              </div>
           </div>
        </div>

        {/* Info & Results Section */}
        <div className="w-full max-w-7xl space-y-12 bg-gradient-to-t from-[#05070a] via-[#05070a]/80 to-transparent p-8 md:p-12 rounded-[3rem] border border-white/5 backdrop-blur-sm">
           <div className="flex flex-col lg:flex-row gap-12 items-end">
              
              {/* Strategy Details */}
              <div className="flex-1 space-y-8">
                 <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tight drop-shadow-lg">
                    Personal Brand Strategy | <span className="text-primary">Negotiation:</span>
                 </h2>
                 <div className="grid md:grid-cols-3 gap-6">
                    <ServiceBox 
                       title="Personal Brand Strategy"
                       desc="Personal brand strategy to guarantee and optimize valuation and monetization."
                    />
                    <ServiceBox 
                       title="Endorsement Deal"
                       desc="Endorsement negotiation and contract review sent to the highest value."
                    />
                    <ServiceBox 
                       title="Media Training Programs"
                       desc="Media training programs to ensure you are ready and strategic and confident."
                    />
                 </div>
              </div>

              {/* Results Highlight */}
              <div className="lg:w-1/3 space-y-6">
                 <div className="flex justify-between items-center bg-white/10 border border-white/20 px-8 py-3 rounded-xl backdrop-blur-md">
                    <span className="text-sm font-black text-white uppercase tracking-widest">Potential Results</span>
                    <span className="text-primary text-xl">→</span>
                 </div>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="bg-[#0a0d12]/95 border border-primary/20 p-8 rounded-2xl shadow-2xl">
                       <div className="text-4xl font-black text-white mb-2">$8.2M</div>
                       <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest leading-relaxed">Average Uplift in <br /> Endorsement Value</div>
                    </div>
                    <div className="bg-[#0a0d12]/95 border border-primary/20 p-8 rounded-2xl shadow-2xl">
                       <div className="text-4xl font-black text-white mb-2">340%</div>
                       <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest leading-relaxed">Brand <br /> Growth</div>
                    </div>
                 </div>
              </div>

           </div>

           {/* CTA Section */}
           <div className="pt-8">
             <Link href="/book" className="group relative w-full">
                <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-xl scale-95 group-hover:scale-105 transition-transform duration-500" />
                <div className="relative bg-gradient-to-r from-[#00d2ff] via-purple-600 to-[#e100ff] px-8 py-6 rounded-2xl text-center shadow-[0_0_60px_rgba(0,210,255,0.5)] transition-all group-active:scale-[0.98]">
                   <span className="text-xs md:text-lg font-black text-white uppercase tracking-[0.2em] leading-tight block">
                     SCHEDULE YOUR CONFIDENTIAL PERSONAL BRAND VALUATION STRATEGY CALL TODAY
                   </span>
                </div>
             </Link>
           </div>
        </div>

        {/* Footer Bio In Page */}
        <div className="mt-16 w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-12">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/50 relative shadow-2xl">
                 <Image src="/owner/me.png" alt="Joe Grekoski" fill className="object-cover" />
              </div>
              <div className="text-left">
                 <div className="text-white font-black text-lg tracking-widest uppercase leading-tight">Joe Grekoski</div>
                 <div className="text-primary/60 text-xs font-bold tracking-widest uppercase">Founding Principal</div>
              </div>
           </div>
           <div className="text-center md:text-right">
              <a href="mailto:josephgrekoski@acclimationgroup.com" className="text-white hover:text-primary transition-colors text-sm font-bold tracking-widest underline decoration-primary/30 underline-offset-4">
                josephgrekoski@acclimationgroup.com
              </a>


           </div>
        </div>
      </div>
    </main>
  );
}

function ServiceBox({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="bg-[#0a0d12]/95 border border-white/10 p-8 rounded-2xl space-y-4 hover:border-primary/40 transition-all flex flex-col justify-between shadow-xl min-h-[160px]">
       <div className="space-y-4">
          <div className="flex gap-3 items-center">
             <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_rgba(0,210,255,1)]" />
             <h4 className="text-white font-black uppercase text-xs tracking-widest leading-tight">{title}</h4>
          </div>
          <p className="text-white/60 text-[10px] font-bold leading-relaxed uppercase tracking-wider">
             {desc}
          </p>
       </div>
    </div>
  );
}

function DataPoint({ title, value }: { title: string, value: string }) {
  return (
    <div className="bg-[#0a0d12]/95 border border-primary/30 p-5 rounded-2xl backdrop-blur-xl shadow-2xl flex justify-between items-center">
      <div className="text-[10px] font-bold text-primary uppercase tracking-widest">{title}</div>
      <div className="text-xl font-black text-white">{value}</div>
    </div>
  );
}

