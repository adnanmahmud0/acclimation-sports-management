import Image from "next/image";
import { Search, TrendingUp, Handshake, Trophy } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started | NBA Player Profile Submission",
  description: "Take the first step toward your professional basketball career. Submit your player profile for exclusive valuation and draft strategy.",
};

export default function GetStartedPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden flex flex-col">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bascatecoart_v6.png"
          alt="Basketball Arena Background"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/90 via-[#05070a]/40 to-[#05070a]" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase italic tracking-tight">
            Take the First Step Toward Your <br />
            Professional Basketball Career
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-medium italic">
            Your direct path to the NBA starts here.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl mb-12">
          <ProcessCard 
            icon={<Search className="w-6 h-6 text-primary" />}
            title="Deep Discovery"
            desc="We analyze your current standing, potential, and draft trajectory."
          />
          <ProcessCard 
            icon={<TrendingUp className="w-6 h-6 text-primary" />}
            title="Exclusive Valuation"
            desc="Access our proprietary algorithm to maximize your market value."
          />
          <ProcessCard 
            icon={<Handshake className="w-6 h-6 text-primary" />}
            title="Scout Introductions"
            desc="Connect with top agents and scouts via our exclusive network."
          />
          <ProcessCard 
            icon={<Trophy className="w-6 h-6 text-primary" />}
            title="Draft Strategy"
            desc="Personalized planning for the NBA Draft and beyond."
          />
        </div>

        {/* Form Section */}
        <div className="w-full max-w-5xl space-y-8">
          {/* Form Header / Action Button Placeholder */}
          <div className="relative w-full group">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-xl scale-95" />
            <div className="relative bg-gradient-to-r from-purple-500 via-primary to-cyan-400 py-4 rounded-xl text-center shadow-[0_0_30px_rgba(0,210,255,0.4)]">
               <span className="text-xl md:text-2xl font-black text-white uppercase tracking-widest">
                 Submit Your Player Profile
               </span>
            </div>
          </div>

          <div className="glass-premium p-8 md:p-12 rounded-3xl border-primary/20 space-y-10">
             <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-white tracking-widest uppercase">Simple modern player profile form</h3>
                <div className="h-1 w-20 bg-primary/30 mx-auto rounded-full" />
             </div>

             <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormInput label="Name" type="text" />
                <FormInput label="Age/Grade" type="text" />
                <FormInput label="Position" type="text" />
                
                <div className="md:col-span-2">
                   <FormInput label="School/Team" type="text" />
                </div>
                <FormInput label="Highlight Link" type="url" />

                <div className="md:col-span-2">
                   <FormInput label="Email" type="email" />
                </div>
                <FormInput label="Phone" type="tel" />
             </form>

             <div className="text-center pt-6">
                <p className="text-white/60 text-lg md:text-xl font-medium italic tracking-wide">
                   Or call us directly at <a href="tel:5125186547" className="text-white font-bold hover:text-primary transition-colors">512-518-6547</a> to speak with Joe Grekoski right away.
                </p>
             </div>
          </div>
        </div>

        {/* Branding Footer In Page */}
        <div className="mt-20 text-center space-y-4 opacity-40 hover:opacity-100 transition-opacity">
           <h4 className="text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
             Led by Joe Grekoski • Representing Active NBA Players • College Prospects • Elite High School Talent
           </h4>
           <div className="h-[1px] w-full max-w-md bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
           <div className="flex justify-between items-center text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] pt-4 px-4 w-full">
              <span>Acclimation Sports Management</span>
              <div className="flex gap-6">
                 <span>Privacy</span>
                 <span>Terms</span>
                 <span>Contact</span>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}

function ProcessCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-[#0a0d12]/80 backdrop-blur-md border border-white/10 p-8 rounded-2xl space-y-4 hover:border-primary/40 transition-all group">
      <div className="bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="text-primary font-black uppercase text-sm tracking-widest">{title}</h4>
        <p className="text-white/70 text-xs font-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function FormInput({ label, type }: { label: string, type: string }) {
  return (
    <div className="space-y-1">
      <div className="relative group">
        <input 
          placeholder={label}
          type={type}
          className="w-full bg-transparent border border-white/10 px-6 py-4 rounded-xl text-white font-bold placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/5 transition-all text-sm"
        />
      </div>
    </div>
  );
}
