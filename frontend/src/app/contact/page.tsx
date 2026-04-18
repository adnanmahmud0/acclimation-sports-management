import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { GradientHeader } from "@/components/gradient-header";
import { CtaButton } from "@/components/cta-button";
import { Logo } from "@/components/logo";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
   title: "Confidential Engagement",
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
               <GradientHeader tag="h1" size="lg" className="mb-4">
                  Ready to Take the Next Step?
               </GradientHeader>
            </div>

            {/* Contact Form Container */}
            <div className="w-full max-w-6xl glass-premium p-8 md:p-12 rounded-[2.5rem] border-primary/20 space-y-8 shadow-2xl relative">

               <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <input type="text" placeholder="Full Name" className="w-full bg-[#0a0d12]/60 border border-white/10 px-6 py-4 rounded-xl text-white placeholder:text-white/20 focus:border-primary/50 outline-none transition-all" />
                     <input type="text" placeholder="Phone" className="w-full bg-[#0a0d12]/60 border border-white/10 px-6 py-4 rounded-xl text-white placeholder:text-white/20 focus:border-primary/50 outline-none transition-all" />
                  </div>

                  <div className="space-y-4">
                     <label className="text-xs font-black text-white/50 uppercase tracking-[0.3em] block">Player Type</label>
                     <div className="flex flex-wrap gap-x-8 gap-y-4">
                        {["Active NBA Player", "College Prospect", "Elite High School Talent", "Parent/Guardian", "Other"].map((type) => (
                           <label key={type} className="flex items-center gap-3 cursor-pointer group">
                              <input type="radio" name="playerType" className="w-4 h-4 accent-primary" />
                              <span className="text-sm font-bold text-white/70 group-hover:text-white transition-colors uppercase">{type}</span>
                           </label>
                        ))}
                     </div>
                  </div>

                  <textarea placeholder="Message" rows={4} className="w-full bg-[#0a0d12]/60 border border-white/10 px-6 py-4 rounded-xl text-white placeholder:text-white/20 focus:border-primary/50 outline-none transition-all" />

                  <CtaButton type="submit" fullWidth>
                     SCHEDULE YOUR CONFIDENTIAL CONTRACT STRATEGY CALL
                  </CtaButton>
               </form>

               {/* Direct Contact Footer Block */}
               <div className="pt-8 flex flex-col md:flex-row gap-8 items-center border-t border-white/5">
                  <div className="flex-1 flex gap-4 items-center">
                     <div className="w-16 h-16 rounded-full overflow-hidden border border-primary/30 relative shrink-0 shadow-xl">
                        <Image src="/owner/me.jpg" alt="Joe Grekoski" fill className="object-cover" />
                     </div>
                     <div className="text-left">
                        <div className="text-white font-black text-lg tracking-widest uppercase leading-tight">Joe Grekoski</div>
                        <div className="text-white/30 text-xs font-black tracking-widest ">Founding Principal</div>
                        <p className="text-[11px] text-white/40 leading-relaxed uppercase mt-2 max-w-sm hidden md:block">
                           Led by Joe Grekoski — the NBA contract negotiation expert who testified in U.S. courts at age 29 — delivering litigation-grade strategy, proprietary salary-cap models, and NIL-to-NBA valuation that traditional agents simply can&apos;t match.
                        </p>
                     </div>
                  </div>

                  <div className="flex flex-col items-center md:items-end gap-4 shrink-0">
                     <a href="tel:512-518-6547" className="bg-[#0a0d12]/80 border border-primary/40 p-1.5 rounded-xl flex overflow-hidden shadow-2xl group hover:border-primary transition-all">
                        <div className="bg-gradient-to-r from-primary to-primary/80 px-4 py-2 flex items-center justify-center rounded-lg">
                           <span className="text-xs font-black text-black uppercase leading-tight text-center ">Call Joe<br />Directly</span>
                        </div>
                        <div className="bg-[#0a0d12] px-6 py-3 flex items-center justify-center">
                           <span className="text-xl font-black text-white tracking-widest group-hover:text-primary transition-colors">512-518-6547</span>
                        </div>
                     </a>
                     <div className="text-center md:text-right space-y-1">
                        <a href="mailto:Joseph.Grekoski@AcclimationGroup.com" className="text-white/60 hover:text-primary transition-colors text-xs font-bold tracking-widest block">
                           Joseph.Grekoski@AcclimationGroup.com
                        </a>
                        <span className="text-xs font-bold text-white/20 uppercase tracking-widest block">Fort Lauderdale, FL</span>
                     </div>
                  </div>
               </div>
            </div>

            <Footer />
         </div>
      </main>
   );
}

