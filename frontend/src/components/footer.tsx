import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <div className="w-full flex flex-col items-center space-y-12 py-16 relative z-10">
      {/* Confidence Tags */}
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-xs font-black text-white/40 uppercase tracking-[0.4em] px-4">
        <span>100% Confidential</span>
        <span>Trusted by 50+ NBA Players & Top Prospects</span>
        <span>Litigation-Proven Strategies</span>
      </div>

      {/* Mini Footer Links */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-black text-white/20 uppercase tracking-widest border-t border-white/5 pt-8 w-full max-w-3xl px-4">
        <Link href="/#about" className="hover:text-white transition-colors">About</Link>
        <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
      </div>

      <footer className="w-full flex flex-col items-center gap-6 pt-4">
        <Logo variant="vertical" width={60} height={60} className="opacity-30 hover:opacity-100 transition-opacity" />
        <p className="text-xs font-black text-white/10 uppercase tracking-[0.3em] text-center px-4">
          © {new Date().getFullYear()} ACCLIMATION SPORTS MANAGEMENT ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
}
