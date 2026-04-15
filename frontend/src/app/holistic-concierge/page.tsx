import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holistic Concierge Support",
  description: "Elite trainers, personal chefs, private jets, and wealth management support for the modern NBA athlete.",
};
import { Dumbbell, Utensils, PiggyBank, Plane, Tv, Headphones } from "lucide-react";
import { Logo } from "@/components/logo";

export default function HolisticConciergePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-12">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 z-[-1] h-[85vh]">
          <Image
            src="/foodsearvice.png"
            alt="Concierge Services Background"
            fill
            className="object-cover opacity-90 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/90 via-[#05070a]/40 to-[#05070a]" />
        </div>

        <div className="container mx-auto px-6 pt-32 pb-24 relative z-10 flex flex-col items-center text-center">
          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Main Header */}
            <div className="space-y-6">
               <h1 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-tight drop-shadow-[0_0_30px_rgba(0,180,255,0.4)]">
                 One-Stop Holistic <br />
                 <span className="bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent italic flex">
                    Concierge Support
                 </span>
               </h1>
               <div className="space-y-6">
                  <h2 className="text-xl md:text-3xl font-black text-white italic tracking-tight opacity-90">
                    We manage your entire off-court world so you can <br className="hidden md:block" />
                    <span className="text-primary italic">focus only on dominating the game.</span>
                  </h2>
                  <p className="text-sm md:text-lg text-white/60 font-medium leading-relaxed max-w-4xl mx-auto italic">
                    From private jets to personal chefs, from wealth planning to media training — we handle everything so you can focus on the game. One call. Everything handled. Total peace of mind.
                  </p>
               </div>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 w-full max-w-5xl mx-auto text-left">
               <ServiceCard 
                 icon={<Dumbbell className="w-6 h-6 text-primary" />}
                 title="Elite Physical Training"
                 desc="Access to world-class trainers and state-of-the-art facilities to optimize your performance."
               />
               <ServiceCard 
                 icon={<Plane className="w-6 h-6 text-primary" />}
                 title="Luxury Travel"
                 desc="Private jet charters and VIP logistics for seamless travel."
               />
               <ServiceCard 
                 icon={<Utensils className="w-6 h-6 text-primary" />}
                 title="Gourmet Nutrition"
                 desc="Personal chefs crafting meals tailored to your diet and training schedule."
               />
               <ServiceCard 
                 icon={<Tv className="w-6 h-6 text-primary" />}
                 title="Media & Brand Management"
                 desc="Strategic media training and brand partnerships to build your empire."
               />
               <ServiceCard 
                 icon={<PiggyBank className="w-6 h-6 text-primary" />}
                 title="Wealth Management"
                 desc="Expert financial advisors ensuring your money grows and lasts."
               />
               <ServiceCard 
                 icon={<Headphones className="w-6 h-6 text-primary" />}
                 title="24/7 Concierge"
                 desc="Round-the-clock support for any request, anytime, anywhere."
               />
            </div>

            {/* CTA Section */}
            <div className="space-y-6 pt-6">
               <Link href="/get-started" className="group relative inline-block w-full max-w-2xl px-4">
                  <div className="absolute inset-0 bg-primary/40 blur-3xl rounded-xl scale-75 group-hover:scale-110 transition-transform duration-500" />
                  <div className="relative bg-gradient-to-r from-primary to-blue-600 px-8 py-6 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(0,180,255,0.6)] group-active:scale-[0.98] border border-white/20">
                    <span className="text-xs md:text-xl font-black text-black uppercase tracking-widest leading-tight block">
                      Schedule your confidential Holistic <br className="md:hidden" />
                      Concierge Strategy Call today
                    </span>
                  </div>
               </Link>
               <p className="text-white/40 text-[10px] md:text-sm font-black uppercase tracking-[0.5em] italic">
                 One call. Everything handled. Total peace of mind.
               </p>
            </div>

            <footer className="pt-12 flex flex-col items-center gap-6 border-t border-white/5">
                <Logo variant="vertical" width={80} height={80} className="opacity-30 hover:opacity-100 transition-opacity" />
                <div className="text-center text-[10px] font-black tracking-[0.4em] text-white/10 uppercase italic">
                  © 2026 ACCLIMATION SPORTS MANAGEMENT ALL RIGHTS RESERVED
                </div>
            </footer>

          </div>
        </div>
      </div>
    </main>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-6 group p-6 rounded-2xl bg-[#0a0d12]/40 border border-white/5 hover:border-primary/40 hover:bg-[#0a0d12]/60 transition-all backdrop-blur-md shadow-xl">
       <div className="w-12 h-12 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
          {icon}
       </div>
       <div className="space-y-1">
          <h4 className="text-base md:text-lg font-black text-white tracking-tight leading-tight uppercase italic group-hover:text-primary transition-colors">{title}</h4>
          <p className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest leading-relaxed">
             {desc}
          </p>
       </div>
    </div>
  );
}
