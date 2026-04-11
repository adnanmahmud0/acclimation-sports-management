import Image from "next/image";
import Link from "next/link";
import { Search, Map, BarChart3, ShieldCheck } from "lucide-react";

export default function BookingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden flex flex-col bg-[#05070a]">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 z-[-1] h-[85vh]">
          <Image
            src="/bascatecoart_v6.png"
            alt="Booking Background"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/90 via-[#05070a]/40 to-[#05070a]" />
        </div>

        <div className="container mx-auto px-6 pt-32 pb-24 relative z-10 flex flex-col items-center text-center">
          <div className="space-y-12 max-w-6xl mx-auto">
            
            {/* Header Content */}
            <div className="space-y-6">
               <h1 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-tight drop-shadow-[0_0_30px_rgba(0,180,255,0.4)]">
                 Ready to Build Your NBA Future? <br />
                 <span className="bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent italic">
                    Let&apos;s Talk Confidentially.
                 </span>
               </h1>
               <p className="text-sm md:text-lg text-white/70 font-medium leading-relaxed max-w-4xl mx-auto italic">
                 Schedule a private 20-30 minute strategy call with Joseph Grekoski, CVA.
                 Get personalized guidance on NIL, recruiting, brand value, contract strategy, and your direct path to the NBA — whether you&apos;re elite high school talent, a college prospect, or an active player.
               </p>
               
               <Link href="#booking" className="group relative inline-block">
                  <div className="absolute inset-0 bg-primary/40 blur-3xl rounded-xl scale-75 group-hover:scale-110 transition-transform duration-500" />
                  <div className="relative bg-gradient-to-r from-primary to-blue-600 px-10 py-5 rounded-lg transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(0,210,255,0.6)] group-active:scale-[0.98]">
                    <span className="text-sm md:text-lg font-black text-black uppercase tracking-widest leading-tight block">
                      Book Your Slot Now →
                    </span>
                  </div>
               </Link>
            </div>

            {/* What to Expect Section */}
            <div className="space-y-10 pt-16">
               <div className="flex items-center justify-center gap-4 text-primary">
                  <div className="h-[1px] w-12 bg-primary/30" />
                  <span className="text-xs font-black uppercase tracking-[0.4em]">What to Expect on the Call</span>
                  <div className="h-[1px] w-12 bg-primary/30" />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <ExpectationCard 
                    icon={<Search className="w-5 h-5" />}
                    title="Honest Assessment"
                    desc="Honest assessment of your current trajectory and NBA upside."
                  />
                  <ExpectationCard 
                    icon={<Map className="w-5 h-5" />}
                    title="Custom Roadmap"
                    desc="Custom roadmap: NIL maximization, college placement, or pro contract prep."
                  />
                  <ExpectationCard 
                    icon={<BarChart3 className="w-5 h-5" />}
                    title="Proprietary Insights"
                    desc="Proprietary valuation & salary cap insights (your CVA edge)."
                  />
                  <ExpectationCard 
                    icon={<ShieldCheck className="w-5 h-5" />}
                    title="Concierge Support"
                    desc="Full concierge support overview — no pressure, 100% confidential."
                  />
               </div>
            </div>

            {/* Booking Mockup Section */}
            <div id="booking" className="pt-24 space-y-8">
               <div className="glass-premium p-8 rounded-[2rem] border-primary/20 space-y-10 shadow-2xl bg-[#0a0d12]/40">
                  <div className="flex flex-col lg:flex-row gap-12 text-left">
                     {/* Pick Your Time Side */}
                     <div className="flex-1 space-y-6">
                        <h3 className="text-2xl font-black text-white uppercase italic tracking-widest border-l-4 border-primary pl-6">Pick Your Time</h3>
                        <div className="space-y-4">
                           <div className="bg-primary/10 border border-primary/30 p-5 rounded-xl">
                              <div className="text-xs font-black text-primary uppercase tracking-widest mb-1">Elite High School Strategy Call</div>
                              <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest opacity-60">(30 min)</div>
                           </div>
                           <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] pt-4">Calendly Integrated Window</div>
                        </div>
                     </div>

                     {/* Choose Call Type Side */}
                     <div className="lg:w-2/3 space-y-6">
                        <h3 className="text-2xl font-black text-white uppercase italic tracking-widest text-center lg:text-right">Choose Your Call Type</h3>
                        <div className="flex flex-wrap justify-center lg:justify-end gap-3">
                           {["Elite High School Strategy Call (30 min)", "Active Player / Contract Review (45 min)"].map((type) => (
                              <button key={type} className="px-6 py-3 rounded-full border border-white/10 text-[10px] font-black text-white/50 uppercase tracking-widest hover:border-primary/50 hover:text-white transition-all">
                                 {type}
                              </button>
                           ))}
                        </div>

                        {/* Booking Matrix Mock */}
                        <div className="bg-[#0a0d12]/60 border border-white/5 p-4 rounded-2xl overflow-x-auto">
                           <table className="w-full min-w-[600px] text-left">
                              <tbody>
                                 <TimeRow day="Mon" time1="10:00 AM" time2="2:00 PM" time3="Aut 2:00 PM" time4="Tut 10:00 PM" />
                                 <TimeRow day="Tue" time1="10:00 AM" time2="2:00 PM" time3="Aut 2:00 PM" time4="Tut 10:00 PM" />
                              </tbody>
                           </table>
                           <div className="pt-4 flex justify-end">
                              <button className="bg-white text-black px-8 py-3 rounded-lg font-black text-[11px] uppercase tracking-widest hover:bg-primary transition-colors">Confirm Booking</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[11px] font-black text-white/30 uppercase tracking-[0.4em] italic pt-8">
                  <span>Personalized NBA pathway</span>
                  <span>NIL maximization</span>
                  <span>NCAA compliance</span>
                  <span>Family concierge</span>
               </div>
            </div>

            <div className="pt-16 text-center text-[10px] font-black tracking-[0.5em] text-white/10 uppercase italic border-t border-white/5">
               © 2026 ACCLIMATION SPORTS MANAGEMENT ALL RIGHTS RESERVED
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

function ExpectationCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-[#0a0d12]/60 border border-white/5 p-6 rounded-2xl backdrop-blur-md group hover:border-primary/40 transition-all text-left space-y-3">
       <div className="text-primary group-hover:scale-110 transition-transform w-fit mb-2">
          {icon}
       </div>
       <h4 className="text-sm font-black text-white uppercase tracking-widest leading-tight">{title}</h4>
       <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest leading-relaxed">
         {desc}
       </p>
    </div>
  );
}

function TimeRow({ day, time1, time2, time3, time4 }: { day: string, time1: string, time2: string, time3: string, time4: string }) {
  return (
    <tr className="border-b border-white/5 last:border-0 h-14">
       <td className="text-[10px] font-black text-white/80 uppercase tracking-widest pr-8">{day}</td>
       {[time1, time2, time3, time4].map((t, idx) => (
          <td key={idx} className="pr-4">
             <button className="px-4 py-2 border border-white/10 rounded-lg text-[9px] font-bold text-white uppercase tracking-widest hover:bg-white/5 hover:border-white/20 transition-all">
                {t}
             </button>
          </td>
       ))}
    </tr>
  );
}
