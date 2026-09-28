import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onRequestPilot: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestPilot }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Platform', href: '#platform' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050811]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Tagline */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-950/60 border border-emerald-500/40 group-hover:border-emerald-400 group-hover:shadow-glow transition-all">
              <Shield className="w-5 h-5 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 rounded-xl bg-emerald-500/10 animate-pulse-slow pointer-events-none" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  SITEGUARD<span className="text-emerald-400 ml-1 font-mono font-medium text-base">OS</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                  LTD
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-tight hidden sm:block">
                Secure Today. Protect Tomorrow.
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] px-4 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onRequestPilot}
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-glow hover:shadow-glow-lg transition-all duration-200 active:scale-95"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070c18]/98 border-b border-white/10 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <p className="text-xs font-mono text-emerald-400/90 uppercase tracking-widest px-2 pt-1">
            Secure Today. Protect Tomorrow.
          </p>
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-white/5 hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestPilot();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-glow"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
