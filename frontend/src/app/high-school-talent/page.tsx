import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elite High School Talent NIL Representation",
  description: "Multi-million dollar NIL deal strategy and professional career planning for top-ranked prep basketball prospects.",
};
import { CheckCircle2 } from "lucide-react";

export default function HighSchoolTalentPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/player.png"
          alt="High School Players Background"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/80 via-[#05070a]/50 to-[#05070a]" />
      </div>

        <div className="container mx-auto px-6 pt-32 pb-24 relative z-10 flex flex-col items-center">
          <div className="space-y-16 max-w-7xl mx-auto text-center">
            
            {/* Header Content */}
            <div className="space-y-8">
               <h1 className="text-2xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-[1.1] drop-shadow-[0_0_30px_rgba(0,180,255,0.4)]">
                 From Elite High School to the NBA — <br />
                 <span className="bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent italic pr-12 flex">
                    Start Building Your Professional Future Now
                 </span>
               </h1>
               
               <div className="space-y-4">
                  <h2 className="text-2xl md:text-5xl font-black text-white italic tracking-tight opacity-90">
                    The Path to the Pros Begins Here
                  </h2>
                  <p className="text-sm md:text-xl text-white/50 font-medium leading-relaxed max-w-4xl mx-auto italic">
                    Join the exclusive network of elite prospects who secured multi-million dollar NIL deals and direct NBA pathways before graduation. Our proprietary system turns high school talent into professional assets.
                  </p>
               </div>
            </div>

            {/* Info Grid Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-12">
               
               {/* Why Choose Section */}
               <div className="space-y-8 text-left">
                  <h3 className="text-2xl font-black text-white uppercase italic tracking-widest border-l-4 border-primary pl-6">Why Choose <br /> Acclimation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <ChoiceItem 
                       title="Early Representation Advantage"
                       desc="Secure NIL deals before your peers even start."
                     />
                     <ChoiceItem 
                       title="Direct NBA Pathway"
                       desc="Connect with scouts and agents directly."
                     />
                     <ChoiceItem 
                       title="Proprietary Valuation"
                       desc="Maximize your market value with our exclusive algorithm."
                     />
                     <ChoiceItem 
                       title="Family-Centric Strategy"
                       desc="Guidance for you and your family every step of the way."
                     />
                  </div>
               </div>

               {/* Key Benefits Section */}
               <div className="space-y-8 text-left bg-[#0a0d12]/60 border border-white/5 p-10 rounded-[2rem] backdrop-blur-md">
                  <h3 className="text-2xl font-black text-white uppercase italic tracking-widest">Key Benefits</h3>
                  <ul className="space-y-4">
                     {[
                       "Guaranteed Scout Introductions",
                       "Exclusive NIL Contract Review",
                       "24/7 Strategy Support",
                       "Media Training Included",
                       "College & Pro Transition Plan"
                     ].map((benefit, idx) => (
                       <li key={idx} className="flex items-center gap-4 text-white/60 font-bold uppercase tracking-widest text-sm border-b border-white/5 pb-4 last:border-0 hover:text-primary transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {benefit}
                       </li>
                     ))}
                  </ul>
               </div>

            </div>

            {/* CTA Section */}
            <div className="space-y-12">
               <Link href="tel:5125186547" className="pt-6 block">
                  <div className="group relative inline-block w-full max-w-3xl px-4">
                     <div className="absolute inset-0 bg-primary/40 blur-3xl rounded-xl scale-75 group-hover:scale-110 transition-transform duration-500" />
                     <div className="relative bg-gradient-to-r from-purple-600 via-primary to-cyan-400 px-10 py-6 rounded-2xl transition-all duration-300 shadow-[0_0_50px_rgba(0,180,255,0.4)] border border-white/20 group-hover:shadow-[0_0_70px_rgba(0,180,255,0.6)]">
                       <span className="text-xs md:text-2xl font-black text-white uppercase tracking-widest leading-tight block">
                         Schedule Your Confidential Strategy Call → 512-518-6547
                       </span>
                     </div>
                  </div>
               </Link>
               
               <p className="text-white text-lg md:text-2xl font-black italic uppercase tracking-tighter opacity-80">
                  Ready to take the next step? Schedule Your <span className="text-primary">Confidential Strategy Call</span> Today
               </p>
            </div>

            <div className="pt-16 text-center text-[10px] font-black tracking-[0.4em] text-white/10 uppercase italic border-t border-white/5">
               Early Representation Advantage • Proprietary NIL Valuation • Direct NBA Pathway
            </div>

          </div>
        </div>
      </main>
    );
}

function ChoiceItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="space-y-3 group">
       <div className="flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <h4 className="text-sm md:text-base font-black text-white uppercase tracking-widest leading-tight group-hover:text-primary transition-colors">{title}</h4>
       </div>
       <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest leading-relaxed pl-8">
          {desc}
       </p>
    </div>
  );
}
