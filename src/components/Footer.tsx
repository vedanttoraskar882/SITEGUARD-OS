import React from 'react';
import { Shield, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Platform', href: '#platform' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="relative bg-[#03060d] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white">
                  SiteGuard OS Ltd
                </span>
              </div>
            </div>
            <p className="text-sm font-medium text-emerald-400 tracking-wide font-mono">
              Secure Today. Protect Tomorrow.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Scroll to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>

        </div>

        {/* Copyright & Subtext */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © SiteGuard OS Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Digital Construction Operating System • Built for UK Sites</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
