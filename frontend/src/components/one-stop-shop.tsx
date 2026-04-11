import Image from "next/image";
import Link from "next/link";

export function OneStopShop() {
  return (
    <section className="relative overflow-hidden" id="services">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/graph.png"
          alt="Analysis background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070a] via-transparent to-[#05070a]" />
      </div>

      <div className="container mx-auto px-6  relative text-balance">
        {/* Header Section */}
        <div className="mb-8">
          <div className="glass-premium p-8 md:p-12 rounded-3xl border-white/5 shadow-2xl text-center space-y-4">
            <h2 className="text-xl md:text-5xl font-black tracking-tight text-white uppercase leading-tight">
              One-Stop Shop for <span className="text-primary">Everything</span>
            </h2>
            <p className="max-w-4xl mx-auto text-white/80 text-sm md:text-lg leading-relaxed">
              We do it all — contract negotiation, salary-cap strategy, brand & endorsement deals, pre-draft mastery,
              analytics, and full concierge support (trainers, chefs, CPAs, wealth advisors).
              You just play basketball. Call <span className="text-primary font-bold">Acclimation Sports Management</span> and let us handle the rest.
            </p>
          </div>
        </div>

        {/* Process Points Grid */}
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 md:gap-y-8 relative">
            {/* Point 1 */}
            <div className="relative group h-full">
              <div className="flex items-stretch gap-4 h-full">
                <span className="text-6xl font-black text-primary/30 leading-none select-none pt-2">1.</span>
                <div className="flex-1 glass-premium p-6 md:p-8 rounded-2xl border-white/5 hover:border-primary/40 transition-all duration-500 hover:translate-y-[-4px] shadow-2xl flex flex-col">
                  <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-wider mb-4 leading-tight">
                    Pre-Draft & NBA Combine Mastery
                  </h3>
                  <ul className="space-y-2 text-sm text-white/60 font-medium list-none flex-1">
                    {["Data-driven positioning", "Medical evaluation strategy", "Elite scouting access", "Athletic profiling that sets your entire NBA career foundation."].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Point 2 */}
            <div className="relative group h-full">
              <div className="flex items-stretch gap-4 h-full">
                <span className="text-6xl font-black text-primary/30 leading-none select-none pt-2">2.</span>
                <div className="flex-1 glass-premium p-6 md:p-8 rounded-2xl border-white/5 hover:border-primary/40 transition-all duration-500 hover:translate-y-[-4px] shadow-2xl flex flex-col">
                  <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-wider mb-4 leading-tight">
                    Proprietary Salary Cap & Analytical Models
                  </h3>
                  <ul className="space-y-2 text-sm text-white/60 font-medium list-none flex-1">
                    {["Real-time forecasting", "Luxury-tax modeling", "Endorsement valuation algorithms", "Market value simulations", "In-house analytics that consistently put more money in your pocket."].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Point 3 */}
            <div className="relative group h-full">
              <div className="flex items-stretch gap-4 h-full">
                <span className="text-6xl font-black text-primary/30 leading-none select-none pt-2">3.</span>
                <div className="flex-1 glass-premium p-6 md:p-8 rounded-2xl border-white/5 hover:border-primary/40 transition-all duration-500 hover:translate-y-[-4px] shadow-2xl flex flex-col">
                  <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-wider mb-4 leading-tight">
                    Litigation-Grade NBA Contract Negotiation
                  </h3>
                  <ul className="space-y-2 text-sm text-white/60 font-medium list-none flex-1">
                    {["Precision tactics", "Courtroom-proven leverage", "Unprecedented leverage", "Better deals at significantly lower fees", "Career-longevity protection"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Point 4 */}
            <div className="relative group h-full">
              <div className="flex items-stretch gap-4 h-full">
                <span className="text-6xl font-black text-primary/30 leading-none select-none pt-2">4.</span>
                <div className="flex-1 glass-premium p-6 md:p-8 rounded-2xl border-white/5 hover:border-primary/40 transition-all duration-500 hover:translate-y-[-4px] shadow-2xl flex flex-col">
                  <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-wider mb-4 leading-tight">
                    Generational Wealth & Business Empire
                  </h3>
                  <ul className="space-y-2 text-sm text-white/60 font-medium list-none flex-1">
                    {["Off-court brand architecture", "Endorsement empire building", "Private-jet concierge support", "Elite trainers, CPAs & wealth advisors", "Legacy planning", "Dynamics"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 text-center">
          <Link href="/book" className="inline-block group relative">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-xl scale-95 group-hover:scale-105 transition-transform duration-500" />
            <div className="relative bg-gradient-to-r from-[#00d2ff] via-[#3adaff] to-[#00d2ff] px-6 py-4 md:py-6 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(0,210,255,0.6)] group-active:scale-[0.98]">
              <span className="text-xs md:text-lg font-black text-black uppercase tracking-tight md:tracking-wider">
                Schedule your confidential strategy call with Joseph Grekoski, CVA
              </span>
            </div>
          </Link>

          <div className="pt-8 border-t border-white/5 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
              <span className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> 30 minutes that can add millions</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Zero obligation</span>
              <span className="flex items-center gap-2 text-white italic">
                Call Joe Directly Now: <a href="tel:512-518-6547" className="text-primary hover:underline underline-offset-4 decoration-primary/30 font-black">512-518-6547</a>
              </span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Fort Lauderdale, FL</span>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-8 text-[9px] font-black tracking-[0.5em] text-white/10 uppercase italic">
              <span>100% Confidential</span>
              <span>Litigation-Proven Strategies</span>
              <span>Zero Conflict of Interest</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
