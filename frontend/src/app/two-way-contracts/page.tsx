import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { GradientHeader } from "@/components/gradient-header";
import { CtaButton } from "@/components/cta-button";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Strategic Two-Way Advantage",
  description: "Maximize the strategic value and progression of Two-Way agreements. Expert negotiation for undrafted gems and rising prospects.",
};

export default function TwoWayContractsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 z-[-1] h-[85vh]">
          <Image
            src="/auraplayer.png"
            alt="Two-Way Background"
            fill
            className="object-cover opacity-90 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/80 via-[#05070a]/40 to-[#05070a]" />
        </div>

        <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
          <div className="space-y-12">
            <div className="flex flex-col items-center text-center gap-12">
              <div className="space-y-8 max-w-5xl mx-auto">
                <GradientHeader tag="h1" size="lg" className="mb-4">
                  NBA Two-Way Contracts
                  2026: Rules, Salaries and
                  The Fast Track from
                    G League to Millions
                </GradientHeader>
              </div>
            </div>

            <div className="text-center space-y-8">
              <div className="flex flex-col items-center gap-4">
                <CtaButton href="/book">
                  SCHEDULE YOUR CONFIDENTIAL TWO-WAY STRATEGY CALL WITH Joe Grekoski
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logic Grid Section */}
      <div className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="glass-premium p-8 rounded-3xl border-primary/20 space-y-6">
            <h3 className="text-xl font-black text-white uppercase tracking-wider">
              What Is a Two-Way Contract?
            </h3>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/baskatecoart.png"
                alt="Court"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-white/80 uppercase">NBA x G League</span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed font-medium">
              Hybrid deal allowing players to split time between the NBA team and its G League affiliate while receiving occasional call-ups to the main roster.
            </p>
          </div>

          <div className="glass-premium p-8 rounded-3xl border-primary/20 space-y-6">
            <h3 className="text-xl font-black text-white uppercase tracking-wider">
              2025-26 / 2026-27 Key Rules
            </h3>
            <div className="space-y-4">
              {[
                { id: 1, text: "May be active on either the NBA roster or inactive list." },
                { id: 2, text: "Unlimited travel days and G League assignments." },
                { id: 3, text: "Contract deal converted at any time from G League to NBA." }
              ].map((rule) => (
                <div key={rule.id} className="flex gap-4 items-start group">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-black flex-shrink-0 group-hover:bg-primary group-hover:text-black transition-colors">
                    {rule.id}
                  </div>
                  <p className="text-sm text-white/80 leading-snug font-medium pt-1">
                    {rule.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-premium p-8 rounded-3xl border-primary/20 space-y-6">
            <h3 className="text-xl font-black text-white uppercase tracking-wider">
              Salary Breakdown 2025-26
            </h3>
            <div className="space-y-6">
              <p className="text-xs text-white/50 uppercase font-black tracking-widest">Total Value</p>
              <div className="text-5xl font-black text-primary drop-shadow-[0_0_15px_rgba(0,210,255,0.4)]">
                $636,435
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-white/40 uppercase tracking-widest">
                    <span>Higher NBA Days</span>
                    <span>Daily Rate G League</span>
                  </div>
                  <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden flex border border-white/5">
                    <div className="h-full bg-primary w-[70%] shadow-[0_0_10px_rgba(0,210,255,0.5)]" />
                    <div className="h-full bg-blue-600 w-[30%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-premium p-8 rounded-3xl border-primary/20 space-y-6">
            <h3 className="text-xl font-black text-white uppercase tracking-wider">
              How Conversions Work
            </h3>
            <div className="flex flex-col gap-6">
              {[
                "UDFA or second-round pick",
                "Strong performance & call-ups",
                "Team converts to standard"
              ].map((step, i) => (
                <div key={i} className="relative group">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs font-bold text-white/90 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                    {step}
                  </div>
                  {i < 2 && (
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-primary/30 group-hover:text-primary transition-colors">
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        <Footer />
      </div>
    </main>
  );
}
