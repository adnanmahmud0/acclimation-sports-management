import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Acclimation Sports Management",
  description: "Connect with Joe Grekoski and the Acclimation team for elite NBA representation and data-driven career advocacy.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden flex flex-col bg-[#05070a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/bascatecoart_v6.png"
          alt="Contact Background"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/90 via-[#05070a]/40 to-[#05070a]" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-12 relative z-10 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic tracking-tighter drop-shadow-[0_0_30px_rgba(0,180,255,0.4)]">
            Ready to Take the Next Step?
          </h1>
          <p className="text-lg md:text-2xl text-white/70 font-medium italic">
            Schedule a Confidential Strategy Call with Joe Grekoski
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="w-full max-w-4xl glass-premium p-8 md:p-12 rounded-[2.5rem] border-primary/20 space-y-8 shadow-2xl relative">
           
           <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <input type="text" placeholder="Full Name" className="w-full bg-[#0a0d12]/60 border border-white/10 px-6 py-4 rounded-xl text-white placeholder:text-white/20 focus:border-primary/50 outline-none transition-all" />
                 <input type="text" placeholder="Phone" className="w-full bg-[#0a0d12]/60 border border-white/10 px-6 py-4 rounded-xl text-white placeholder:text-white/20 focus:border-primary/50 outline-none transition-all" />
              </div>

              <div className="space-y-4">
                 <label className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em] block">Player Type</label>
                 <div className="flex flex-wrap gap-x-8 gap-y-4">
                    {["Active NBA Player", "College Prospect", "Elite High School Talent", "Parent/Guardian", "Other"].map((type) => (
                       <label key={type} className="flex items-center gap-3 cursor-pointer group">
                          <input type="radio" name="playerType" className="w-4 h-4 accent-primary" />
                          <span className="text-sm font-bold text-white/70 group-hover:text-white transition-colors uppercase italic">{type}</span>
                       </label>
                    ))}
                 </div>
              </div>

              <textarea placeholder="Message" rows={4} className="w-full bg-[#0a0d12]/60 border border-white/10 px-6 py-4 rounded-xl text-white placeholder:text-white/20 focus:border-primary/50 outline-none transition-all" />

              <button className="relative w-full group">
                 <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-xl scale-95" />
                 <div className="relative bg-gradient-to-r from-[#00d2ff] to-[#e100ff] py-5 rounded-xl text-center shadow-[0_0_40px_rgba(0,210,255,0.4)] hover:shadow-[0_0_60px_rgba(0,210,255,0.6)] transition-all active:scale-[0.98]">
                    <span className="text-lg md:text-xl font-black text-white uppercase tracking-[0.2em]">
                      Schedule Confidential Strategy Call
                    </span>
                 </div>
              </button>
           </form>

           {/* Direct Contact Footer Block */}
           <div className="pt-8 flex flex-col md:flex-row gap-8 items-center border-t border-white/5">
              <div className="flex-1 flex gap-4 items-center">
                 <div className="w-16 h-16 rounded-full overflow-hidden border border-primary/30 relative shrink-0 shadow-xl">
                    <Image src="/owner/me.png" alt="Joseph Grekoski" fill className="object-cover" />
                 </div>
                 <div className="text-left">
                    <div className="text-white font-black text-lg tracking-widest uppercase leading-tight">Joe Grekoski</div>
                    <div className="text-white/30 text-[10px] font-black tracking-widest uppercase">Founding Principal</div>
                    <p className="text-[9px] text-white/40 leading-relaxed uppercase mt-2 max-w-sm hidden md:block">
                       Led by Joe Grekoski — the NBA contract negotiation expert who testified in U.S. courts at age 29 — delivering litigation-grade strategy, proprietary salary-cap models, and NIL-to-NBA valuation that traditional agents simply can&apos;t match.
                    </p>
                 </div>
              </div>

              <div className="flex flex-col items-center md:items-end gap-4 shrink-0">
                 <div className="bg-[#0a0d12]/80 border border-primary/40 p-1.5 rounded-2xl flex overflow-hidden shadow-2xl">
                    <div className="bg-gradient-to-r from-primary to-primary/80 px-4 py-2 flex items-center justify-center">
                       <span className="text-[10px] font-black text-black uppercase leading-tight text-center">Call Joe<br />Directly</span>
                    </div>
                    <div className="bg-[#0a0d12] px-6 py-3 flex items-center justify-center group cursor-pointer">
                       <span className="text-xl font-black text-white tracking-widest group-hover:text-primary transition-colors">512-518-6547</span>
                    </div>
                 </div>
                 <div className="text-center md:text-right space-y-1">
                    <a href="mailto:josephgrekoski@acclimationgroup.com" className="text-white/60 hover:text-primary transition-colors text-xs font-bold tracking-widest block">
                       josephgrekoski@acclimationgroup.com
                    </a>
                    <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest block">Fort Lauderdale, FL</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Confidence Tags */}
        <div className="mt-12 text-center space-y-8">
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[11px] font-black text-white/40 uppercase tracking-[0.4em] italic">
              <span>100% Confidential</span>
              <span>Trusted by 50+ NBA Players & Top Prospects</span>
              <span>Litigation-Proven Strategies</span>
           </div>

           {/* Mini Footer Links */}
           <div className="flex justify-center gap-8 text-[10px] font-black text-white/20 uppercase tracking-widest border-t border-white/5 pt-8 w-full max-w-3xl">
              <Link href="/#about" className="hover:text-white transition-colors">About</Link>
              <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
           </div>
           
           <footer className="mt-8 flex flex-col items-center gap-6">
              <Logo variant="vertical" width={60} height={60} className="opacity-30 hover:opacity-100 transition-opacity" />
              <p className="text-[9px] font-black text-white/10 uppercase tracking-[0.3em]">
                 © 2026 ACCLIMATION SPORTS MANAGEMENT ALL RIGHTS RESERVED
              </p>
           </footer>

        </div>
      </div>
    </main>
  );
}
