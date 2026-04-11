import Image from "next/image";
import Link from "next/link";
import { 
  Trophy, 
  TrendingUp, 
  Handshake, 
  ShieldCheck, 
  ChevronRight,
  ChevronDown,
  ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute top-0 left-0 w-full h-[120vh] z-[-1] overflow-hidden">
        <Image
          src="/baskateballplayer.png"
          alt="NBA Basketball Player Action"
          fill
          className="object-cover object-top opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/60 via-[#05070a]/20 to-[#05070a]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 px-6 py-4 lg:px-12 flex justify-between items-center glass border-none! bg-[#05070a]/80">
        {/* Custom Text Logo */}
        <div className="flex flex-col items-start">
          <span className="text-3xl font-bold tracking-[0.1em] text-white leading-none">ACCLIMATION</span>
          <div className="w-full h-[1px] bg-primary/50 my-1" />
          <span className="text-[10px] font-bold tracking-[0.4em] text-white/70 leading-none">SPORTS MANAGEMENT</span>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-7 text-[13px] font-semibold text-white/90">
          <Link href="/" className="text-primary hover:text-primary/80 transition-colors">Home</Link>
          <button className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
            About <ChevronDown className="w-3 h-3 opacity-50" />
          </button>
          <button className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
            Services <ChevronDown className="w-3 h-3 opacity-50" />
          </button>
          <Link href="#advantage" className="hover:text-primary transition-colors">The Acclimation Advantage</Link>
          <button className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
            For Players <ChevronDown className="w-3 h-3 opacity-50" />
          </button>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* CTA Button */}
        <Link href="/book" className="group">
          <button className="relative px-6 py-2 bg-gradient-to-br from-primary via-secondary to-purple-600 rounded-xl leading-tight text-center transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)]">
            <span className="block text-[10px] font-bold tracking-wider text-white opacity-90">SCHEDULE CONFIDENTIAL</span>
            <span className="block text-xs font-black tracking-widest text-white uppercase">STRATEGY CALL</span>
          </button>
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-20 pb-32 text-center text-balance">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
          Where Economic Precision <br className="hidden md:block" /> Meets NBA Domination
        </h1>
        
        <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-white/50 mb-12">
          A New Kind of Basketball Agency
        </p>

        {/* Feature Bar */}
        <div className="inline-flex flex-wrap justify-center items-center gap-4 md:gap-8 px-8 py-3 glass-premium rounded-full text-[10px] md:text-xs font-semibold tracking-wide border-primary/20 bg-[#00d2ff]/5 mb-24">
          <span className="flex items-center gap-2">20+ Years Economic Edge</span>
          <span className="text-primary/30 hidden sm:inline">•</span>
          <span className="flex items-center gap-2">Real-Time Salary Cap Forecasting</span>
          <span className="text-primary/30 hidden sm:inline">•</span>
          <span className="flex items-center gap-2">Litigation-Grade Strategy</span>
          <span className="text-primary/30 hidden sm:inline">•</span>
          <span className="flex items-center gap-2">In-House Analytics</span>
          <span className="text-primary/30 hidden sm:inline">•</span>
          <span className="flex items-center gap-2">Lower Fees & More In Your Pocket</span>
        </div>

        {/* Service Cards Grid */}
        <section id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32 text-left">
          <ServiceCard 
            title="NBA Contract Negotiation & Representation"
            desc="Data-driven deals with litigation-grade strategy and in-house salary-cap models."
            icon={<ShieldCheck className="w-6 h-6 text-primary" />}
          />
          <ServiceCard 
            title="Brand Development"
            desc="Turn your talent into a premium, monetizable economic asset on and off the court."
            icon={<TrendingUp className="w-6 h-6 text-primary" />}
          />
          <ServiceCard 
            title="Marketing & Endorsement Deals"
            desc="Proprietary analytics models ensure you're never underpaid for your influence."
            icon={<Handshake className="w-6 h-6 text-primary" />}
          />
          <ServiceCard 
            title="One-Stop Holistic Support"
            desc="Elite trainers, chefs, wealth advisors, CPAs & tax strategists — all coordinated."
            icon={<Trophy className="w-6 h-6 text-primary" />}
          />
        </section>
        {/* CTA Section */}
        <div className="flex flex-col items-center gap-8 mb-32">
          <Link href="/register" className="group relative">
            <div className="absolute inset-0 bg-primary/40 blur-2xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-500" />
            <button className="relative px-12 py-5 bg-primary text-background font-black text-lg tracking-widest rounded-full shadow-[0_0_30px_rgba(0,210,255,0.6)] hover:shadow-[0_0_50px_rgba(0,210,255,0.8)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3 font-sans!">
              GET STARTED
              <ArrowRight className="w-6 h-6" />
            </button>
          </Link>
        </div>

        {/* Contract Value Evolution Section */}
        <section className="relative py-24 px-6 md:px-12 rounded-[3rem] overflow-hidden mb-32">
           {/* Section Background */}
          <div className="absolute inset-0 z-[-1]">
            <Image 
              src="/graph.png" 
              alt="Background Graph" 
              fill 
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#05070a] via-transparent to-[#05070a]" />
          </div>

          <div className="max-w-6xl mx-auto text-center">


            <div className="glass-premium p-8 md:p-12 rounded-[2.5rem] relative mb-16">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 text-white">One-Stop Shop for Everything</h3>
              <p className="text-sm md:text-base text-white/60 max-w-3xl mx-auto leading-relaxed">
                We do it all — contract negotiation, salary-cap strategy, brand & endorsement deals, pre-draft 
                mastery, analytics, and full concierge support (trainers, chefs, CPAs, wealth advisors). 
                You just play basketball. Call <span className="text-primary font-bold">Acclimation Sports Management</span> and let us handle the rest.
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 text-left relative">
              {/* Vertical Connector Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 -translate-x-1/2">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(0,210,255,0.8)]" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/50" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/50" />
                <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/50" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(0,210,255,0.8)]" />
              </div>

              {/* Step 1 */}
              <div className="relative pl-8 md:pl-0 md:pr-12 md:text-right">
                <span className="text-5xl md:text-7xl font-black text-primary/20 absolute left-0 md:left-auto md:right-0 top-0">1.</span>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold mb-4 text-primary tracking-widest uppercase">PRE-DRAFT & NBA COMBINE MASTERY</h4>
                  <ul className="space-y-2 text-sm text-white/70 list-none md:list-none">
                    <li>Data-driven positioning •</li>
                    <li>Medical evaluation strategy •</li>
                    <li>Elite scouting access •</li>
                    <li>Athletic profiling that sets your entire NBA career foundation •</li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative pl-8 md:pl-12">
                <span className="text-5xl md:text-7xl font-black text-primary/20 absolute left-0 top-0">2.</span>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold mb-4 text-primary tracking-widest uppercase">PROPRIETARY SALARY CAP & ANALYTICAL MODELS</h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>• Real-time forecasting</li>
                    <li>• Luxury-tax modeling</li>
                    <li>• Endorsement valuation algorithms</li>
                    <li>• Market value simulations</li>
                    <li>Intuitive analytics that consistently put more money in your pocket than any traditional agency</li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative pl-8 md:pl-0 md:pr-12 md:text-right">
                <span className="text-5xl md:text-7xl font-black text-primary/20 absolute left-0 md:left-auto md:right-0 top-0">3.</span>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold mb-4 text-primary tracking-widest uppercase">LITIGATION-GRADE NBA CONTRACT NEGOTIATION</h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>Precision tactics •</li>
                    <li>Courtroom-proven leverage •</li>
                    <li>Unprecedented leverage •</li>
                    <li>Better deals at significantly lower fees •</li>
                    <li>Career-longevity protection •</li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative pl-8 md:pl-12">
                <span className="text-5xl md:text-7xl font-black text-primary/20 absolute left-0 top-0">4.</span>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold mb-4 text-primary tracking-widest uppercase">GENERATIONAL WEALTH & BUSINESS EMPIRE</h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>• Off-court brand architecture</li>
                    <li>• Endorsement empire building</li>
                    <li>• Private-jet concierge support</li>
                    <li>• Legacy planning</li>
                    <li>• Dramatics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-24 space-y-8">
              <Link href="/book" className="inline-block group">
                <button className="px-10 py-5 bg-gradient-to-r from-primary to-secondary text-background font-black text-sm md:text-base tracking-widest rounded-xl shadow-[0_0_30px_rgba(0,210,255,0.4)] hover:shadow-[0_0_50px_rgba(0,210,255,0.6)] hover:scale-105 transition-all uppercase">
                  SCHEDULE YOUR CONFIDENTIAL STRATEGY CALL WITH JOSEPH GREKOSKI, CVA
                </button>
              </Link>
              
              <div className="text-white/40 text-[10px] md:text-xs tracking-widest uppercase flex flex-col md:flex-row items-center justify-center gap-4">
                <span>30 minutes that can add millions to your next contract</span>
                <span className="hidden md:inline">•</span>
                <span>Zero obligation</span>
                <span className="hidden md:inline">•</span>
                <span>Call Joe Directly Now: <span className="text-primary font-bold">512-518-6547</span></span>
                <span className="hidden md:inline">•</span>
                <span>Fort Lauderdale, FL</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-24 px-6 md:px-12 mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
                About Acclimation Sports Management — Led by <span className="text-white">Joe Grekoski</span>
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-4">
                The only NBA sports agency led by an intellectual property expert specializing in 
                personal brand valuation and development for elite basketball talent.
              </p>
              <div className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold tracking-widest uppercase mb-12">
                Certified Agent — National Basketball Players Association (NBPA)
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column: Image & Mission */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="aspect-square relative rounded-[3rem] overflow-hidden border-2 border-primary/30 mb-8 max-w-md mx-auto shadow-[0_0_50px_rgba(0,0,210,0.2)]">
                    <Image 
                      src="/joe.png" 
                      alt="Joe Grekoski" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="glass-premium p-8 rounded-3xl border-primary/20 max-w-md mx-auto">
                    <p className="text-primary text-lg font-serif italic leading-relaxed">
                      "His goal is clear: to help elite players, college prospects, and 5-star high-school talents 
                      succeed at the highest level on the court. While making sure they are compensated what 
                      they truly deserve, both on and off the court."
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Experience & Bio */}
              <div className="space-y-8 text-left">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-white/90 leading-relaxed">
                    <span className="text-primary font-bold">Joe Grekoski</span> is the founder of Acclimation Group and Acclimation Sports Management. 
                    He is a recognized economic expert who specializes in intellectual property with a particular focus 
                    on personal brand valuation and development for high-profile athletes.
                  </p>
                </div>

                <ul className="space-y-4">
                  {[
                    "His goal is clear: to help elite players, college prospects, and 5-star high-school talents succeed at the highest level on the court. While making sure they are compensated what they truly deserve, both on and off the court.",
                    "Launched Acclimation Group and built it into a premier advisory firm serving top law firms worldwide and major global consumer brands.",
                    "Advised on the sale of IP assets to professional sports teams using advanced social media sentiment analysis and esoteric brand valuation modeling.",
                    "Featured on CBS News discussing college basketball economics and player valuation.",
                    "Expert in determining fair market rates for endorsement deals, NIL valuation, and turning personal brands into premium, monetizable economic assets.",
                    "Brings courtroom-tested economic analysis to NBA contract negotiation, reputational management, and long-term wealth building that traditional agents cannot match."
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-white/70 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-6 glass border-primary/10 rounded-2xl bg-primary/5">
                  <p className="text-sm md:text-base font-bold text-white leading-relaxed">
                    At age 29, Joe Grekoski became one of the youngest economic damages experts to testify in a U.S. court.
                  </p>
                </div>

                <p className="text-lg font-bold text-white tracking-tight leading-relaxed">
                  While other agents focus only on basketball, Joe Grekoski built <span className="text-primary tracking-wide">Acclimation Sports Management</span> as 
                  the true one-stop shop. You just play basketball. We handle everything else.
                </p>
              </div>
            </div>

            {/* CTA & Footer strip */}
            <div className="mt-24 text-center space-y-12">
              <Link href="/book" className="inline-block group">
                <button className="px-10 py-5 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white font-black text-sm md:text-base tracking-widest rounded-xl shadow-[0_0_30px_rgba(0,210,255,0.4)] hover:shadow-[0_0_50px_rgba(0,210,255,0.6)] hover:scale-105 transition-all uppercase">
                  SCHEDULE YOUR CONFIDENTIAL STRATEGY CALL WITH JOE GREKOSKI - 512-518-6547
                </button>
              </Link>

              <div className="text-white/40 text-[10px] md:text-xs tracking-widest uppercase flex flex-col md:flex-row items-center justify-center gap-4">
                <span>30 minutes that can add millions to your career</span>
                <span className="hidden md:inline">•</span>
                <span>Zero obligation</span>
                <span className="hidden md:inline">•</span>
                <span>Fort Lauderdale, FL</span>
              </div>

              <div className="w-full h-[1px] bg-white/10" />

              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase pb-12">
                <span>Intellectual Property Expert</span>
                <span>Personal Brand Valuation Specialist</span>
                <span>Endorsement Market Rate Authority</span>
                <span>IP Asset Valuation for Professional Sports Teams</span>
                <span>Featured on CBS News</span>
                <span>You Just Play Basketball</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-white/5 text-center">
        <p className="text-xs text-white/30 tracking-widest uppercase">
          © 2026 ACCLIMATION SPORTS MANAGEMENT. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}

function ServiceCard({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
  return (
    <div className="glass-premium p-8 rounded-[2rem] hover:border-primary/50 transition-all duration-500 group">
      <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white/5 border-white/10!">
        {icon}
      </div>
      <h4 className="text-lg font-bold mb-4 leading-snug">{title}</h4>
      <p className="text-sm text-white/60 leading-relaxed font-light">
        {desc}
      </p>
    </div>
  );
}
