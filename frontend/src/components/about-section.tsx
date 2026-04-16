import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#05070a]" id="about">
      {/* Subtle Background elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
            About Acclimation Sports Management<br />
            Led by JOE GREKOSKI
          </h2>
          
          <div className="max-w-4xl mx-auto glass-premium p-6 rounded-2xl border-primary/20 bg-primary/5">
            <p className="text-sm md:text-base font-bold text-white leading-relaxed">
              The only NBA sports agency led by an intellectual property expert specializing in personal brand 
              valuation and development for elite basketball talent. <br className="hidden md:block" />
              <span className="text-primary">I am a certified agent from the National Basketball Players Association (NBPA).</span>
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Animated Ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary via-secondary to-purple-600 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700 animate-pulse" />
              
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-primary/30 p-2 glass">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#05070a]">
                  <Image
                    src="/owner/me.png"
                    alt="JOE GREKOSKI - Founder"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 glass-premium px-6 py-2 rounded-full border-primary/30">
                <span className="text-[10px] font-black tracking-widest text-primary uppercase">NBPA Certified Agent</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-white/90 leading-relaxed">
                <span className="font-black text-primary">JOE GREKOSKI</span> is the founder of Acclimation Group and <span className="font-bold">Acclimation Sports Management</span>. 
                He is a recognized economic expert who specializes in intellectual property with a particular focus on 
                personal brand valuation and development for high-profile athletes. At age 29, JOE GREKOSKI became one of the youngest economic damages experts to testify in a U.S. court.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Launched Acclimation Group and built it into a premier advisory firm serving top law firms worldwide and major global consumer brands.",
                "Advised on the sale of IP assets to professional sports teams using advanced social media sentiment analysis and esoteric brand valuation modeling.",
                "Featured on CBS News discussing college basketball economics and player valuation.",
                "Expert in determining fair market rates for endorsement deals, NIL valuation, and turning personal brands into premium, monetizable economic assets.",
                "Brings courtroom-tested economic analysis to NBA contract negotiation, reputational management, and long-term wealth building that traditional agents cannot match.",
                "His goal is clear: to help elite NBA players, college prospects, and 5-star high-school talents succeed at the highest level on the court. While making sure they are compensated what they truly deserve, both on and off the court."
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 shadow-[0_0_8px_rgba(0,210,255,1)]" />
                  <p className="text-sm md:text-base text-white/70 leading-relaxed group-hover:text-white transition-colors">
                    {bullet}
                  </p>
                </li>
              ))}
            </ul>

            <p className="text-sm font-medium text-white/50 leading-relaxed uppercase tracking-wide">
              While other agents focus only on basketball, JOE GREKOSKI built <span className="text-white">Acclimation Sports Management</span> as the true one-stop shop. 
              <span className="text-primary"> You just play basketball. We handle everything else.</span>
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 flex flex-col items-center">
          <Link href="/book" className="inline-block group relative w-full max-w-4xl">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-xl scale-95 group-hover:scale-105 transition-transform duration-500" />
            <div className="relative bg-gradient-to-r from-[#00d2ff] via-[#3adaff] to-[#00d2ff] px-6 py-3 md:py-5 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(0,210,255,0.6)] group-active:scale-[0.98] text-center">
              <span className="text-xs md:text-lg font-black text-black uppercase tracking-tight md:tracking-wider">
                Schedule your confidential strategy call with JOE GREKOSKI - 512-518-6547
              </span>
            </div>
          </Link>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
            <span>30 minutes that can add millions to your career</span>
            <span className="hidden sm:inline">•</span>
            <span>Zero obligation</span>
            <span className="hidden sm:inline">•</span>
            <span>Fort Lauderdale, FL</span>
          </div>
        </div>
      </div>

      {/* Specialty Bar (Bottom) */}
      <div className="mt-20 w-full bg-[#0a0d12]/80 backdrop-blur-sm py-6 border-y border-white/5 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-12 text-[9px] md:text-[11px] font-black tracking-[0.4em] text-white/30 uppercase">
            {[
              "Intellectual Property Expert",
              "Personal Brand Valuation Specialist",
              "Endorsement Market Rate Authority",
              "IP Asset Valuation for Professional Sports Teams",
              "Featured on CBS News",
              "You Just Play Basketball",
              "Acclimation Sports Management",
              "NBPA Certified Agent",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-12">
                <span>{text}</span>
                <span className="text-primary/20 text-lg">•</span>
              </div>
            ))}
          </div>
          {/* Duplicate for infinite loop */}
          <div className="flex items-center gap-12 text-[9px] md:text-[11px] font-black tracking-[0.4em] text-white/30 uppercase ml-12">
            {[
              "Intellectual Property Expert",
              "Personal Brand Valuation Specialist",
              "Endorsement Market Rate Authority",
              "IP Asset Valuation for Professional Sports Teams",
              "Featured on CBS News",
              "You Just Play Basketball",
              "Acclimation Sports Management",
              "NBPA Certified Agent",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-12">
                <span>{text}</span>
                <span className="text-primary/20 text-lg">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
