import Image from "next/image";
import Link from "next/link";
import { CircleDot, TrendingUp, Target, Mic, FileText } from "lucide-react";

export default function PreDraftPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bascetcoart_v4.png"
          alt="Pre-Draft Court Background"
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
               <h1 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-tight drop-shadow-[0_0_30px_rgba(0,210,255,0.3)]">
                 Pre-Draft and NBA <br />
                 <span className="bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent italic">
                    Combine Mastery
                 </span>
               </h1>
               <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-4xl mx-auto italic">
                 Our Pre-Draft and NBA Combine Mastery program prepares elite high school and college basketball prospects to rise on draft boards and enter the NBA with maximum value.
               </p>
            </div>

            {/* Bullet Points Section */}
            <div className="flex flex-col items-center gap-8 py-8 w-full max-w-3xl mx-auto">
               <ul className="space-y-6 text-left w-full">
                  <PointItem 
                    icon={<CircleDot className="w-6 h-6 text-primary" />} 
                    text="Professional player valuation and draft projection report" 
                  />
                  <PointItem 
                    icon={<TrendingUp className="w-6 h-6 text-primary" />} 
                    text="Customized NBA Combine and Pro Day training with top coaches" 
                  />
                  <PointItem 
                    icon={<Target className="w-6 h-6 text-primary" />} 
                    text="Targeted workouts with NBA teams that need your skill set" 
                  />
                  <PointItem 
                    icon={<Mic className="w-6 h-6 text-primary" />} 
                    text="Media training, interview preparation, and personal branding" 
                  />
                  <PointItem 
                    icon={<FileText className="w-6 h-6 text-primary" />} 
                    text="Seamless transition into aggressive rookie contract negotiation" 
                  />
               </ul>
            </div>

            {/* Transition Copy */}
            <p className="text-white/60 text-lg md:text-xl font-bold italic tracking-wide">
               From elite high school talent to college standouts, we help you turn potential into a guaranteed NBA future.
            </p>

            {/* CTA Section */}
            <div className="space-y-8 pt-6">
               <p className="text-white text-sm font-black uppercase tracking-[0.3em]">
                 Ready to elevate your draft position and long-term earnings?
               </p>
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
            <div className="pt-20">
               <div className="bg-[#0a0d12]/60 border border-white/5 backdrop-blur-md px-8 py-6 rounded-2xl inline-flex flex-wrap items-center justify-center gap-4 shadow-2xl">
                  <p className="text-white/40 text-[10px] md:text-sm font-bold uppercase tracking-widest leading-none">
                    Schedule your confidential strategy call with <span className="text-white">Joe Grekoski</span> today.
                  </p>
                  <div className="w-[1px] h-4 bg-white/20 hidden md:block" />
                  <p className="text-white text-[10px] md:text-sm font-black uppercase tracking-widest leading-none">
                    Phone: 512-518-6547
                  </p>
               </div>
            </div>
          </div>
        </div>
    </main>
  );
}

function PointItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <li className="flex items-center gap-6 group">
       <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-all shadow-xl">
          {icon}
       </div>
       <span className="text-base md:text-lg font-bold text-white tracking-tight leading-tight uppercase italic">{text}</span>
    </li>
  );
}
