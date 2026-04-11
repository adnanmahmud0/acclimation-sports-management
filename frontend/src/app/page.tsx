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
      <div className="fixed inset-0 z-[-1]">
        <Image
          src="/baskateballplayer.png"
          alt="NBA Basketball Player Action"
          fill
          className="object-cover object-center opacity-40 blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/90 via-[#05070a]/60 to-[#05070a]" />
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
          <Link href="#advantage" className="hover:text-primary transition-colors">The Acclamation Advantage</Link>
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
        <div className="flex flex-col items-center gap-8">
          <Link href="/register" className="group relative">
            <div className="absolute inset-0 bg-primary/40 blur-2xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-500" />
            <button className="relative px-12 py-5 bg-primary text-background font-black text-lg tracking-widest rounded-full shadow-[0_0_30px_rgba(0,210,255,0.6)] hover:shadow-[0_0_50px_rgba(0,210,255,0.8)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
              GET STARTED
              <ArrowRight className="w-6 h-6" />
            </button>
          </Link>
        </div>
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
