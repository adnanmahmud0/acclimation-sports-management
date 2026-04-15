import Image from "next/image";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-[#05070a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bascatecoart_v6.png"
          alt="Contact Background"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/95 via-[#05070a]/60 to-[#05070a]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic tracking-tighter drop-shadow-[0_0_30px_rgba(0,180,255,0.4)]">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg md:text-2xl text-white/70 font-medium italic">
            Schedule a Confidential Strategy Call with Joe Grekoski
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="w-full max-w-5xl glass-premium p-8 md:p-12 rounded-[2.5rem] border-primary/20 space-y-10 shadow-2xl relative">
           
           <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <input type="text" placeholder="Full Name" className="w-full bg-[#0a0d12]/60 border border-white/10 px-6 py-5 rounded-2xl text-white placeholder:text-white/20 focus:border-primary/50 outline-none transition-all shadow-inner" />
                 <input type="text" placeholder="Phone" className="w-full bg-[#0a0d12]/60 border border-white/10 px-6 py-5 rounded-2xl text-white placeholder:text-white/20 focus:border-primary/50 outline-none transition-all shadow-inner" />
              </div>

              <div className="space-y-4">
                 <label className="text-[10px] font-black text-white/50 uppercase tracking-[0.4em] block">Player Type / Eligibility</label>
                 <div className="flex flex-wrap gap-x-10 gap-y-4">
                    {["Active NBA Player", "College Prospect", "Elite High School Talent", "Parent/Guardian", "Other"].map((type) => (
                       <label key={type} className="flex items-center gap-3 cursor-pointer group">
                          <input type="radio" name="playerType" className="w-4 h-4 accent-primary" />
                          <span className="text-xs font-black text-white/60 group-hover:text-white transition-colors uppercase italic tracking-widest">{type}</span>
                       </label>
                    ))}
                 </div>
              </div>

              <textarea placeholder="Message" rows={5} className="w-full bg-[#0a0d12]/60 border border-white/10 px-8 py-6 rounded-2xl text-white placeholder:text-white/20 focus:border-primary/50 outline-none transition-all shadow-inner" />

              <button className="relative w-full group">
                 <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-xl scale-95 transition-transform duration-500 group-hover:scale-105" />
                 <div className="relative bg-gradient-to-r from-[#00d2ff] via-purple-600 to-[#e100ff] py-6 rounded-2xl text-center shadow-[0_0_40px_rgba(0,210,255,0.4)] hover:shadow-[0_0_70px_rgba(0,210,255,0.6)] transition-all active:scale-[0.98] border border-white/10">
                    <span className="text-lg md:text-2xl font-black text-white uppercase tracking-[0.2em] leading-none drop-shadow-md">
                      Schedule Confidential Strategy Call
                    </span>
                 </div>
              </button>
           </form>

           {/* Direct Contact Footer Block */}
           <div className="pt-12 flex flex-col md:flex-row gap-12 items-center border-t border-white/5">
              <div className="flex-1 flex gap-6 items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 relative shrink-0 shadow-2xl">
                     <Image src="/owner/me.png" alt="Joe Grekoski" fill className="object-cover" />
                  </div>
                 <div className="text-left">
                     <div className="text-white font-black text-xl tracking-[0.05em] uppercase leading-tight">Joe Grekoski</div>
                     <div className="text-primary/60 text-xs font-black tracking-widest uppercase mb-3">Founding Principal</div>
                     <p className="text-[10px] font-bold text-white/40 leading-relaxed uppercase max-w-md hidden lg:block">
                        Joe Grekoski — specialized in NBA contract negotiation, economic valuation, and advanced salary-cap forecasting. Delivering courtroom-proven strategy for elite professional athletes.
                     </p>
                 </div>
              </div>

              <div className="flex flex-col items-center md:items-end gap-6 shrink-0">
                 <div className="bg-[#0a0d12]/80 border border-primary/40 p-1.5 rounded-2xl flex overflow-hidden shadow-2xl">
                    <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4 flex items-center justify-center">
                       <span className="text-[11px] font-black text-black uppercase leading-tight text-center">Call Joe<br />Directly</span>
                    </div>
                    <div className="bg-[#0a0d12] px-10 py-4 flex items-center justify-center group cursor-pointer">
                        <span className="text-2xl font-black text-white tracking-[0.1em] group-hover:text-primary transition-colors">512-518-6547</span>
                    </div>
                 </div>
                 <div className="text-center md:text-right space-y-2">
                    <a href="mailto:Joseph.Grekoski@AcclimationGroup.com" className="text-white hover:text-primary transition-all text-sm font-bold tracking-widest block underline decoration-primary/20 underline-offset-8">
                       Joseph.Grekoski@AcclimationGroup.com
                    </a>
                    <span className="text-[11px] font-bold text-white/20 uppercase tracking-[0.4em] block">Fort Lauderdale, FL</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Confidence Tags */}
        <div className="mt-20 text-center space-y-12 w-full">
           <div className="flex flex-wrap justify-center gap-x-16 gap-y-6 text-xs font-black text-white/30 uppercase tracking-[0.5em] italic">
              <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-primary" /> 100% Confidential</span>
              <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-primary" /> Trusted by 50+ NBA Players & Top Prospects</span>
              <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-primary" /> Litigation-Proven Strategies</span>
           </div>
        </div>
      </div>
    </section>
  );
}
