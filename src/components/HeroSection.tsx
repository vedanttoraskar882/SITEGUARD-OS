import React from 'react';
import { ArrowRight, CheckCircle, ShieldCheck, ChevronRight } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

interface HeroSectionProps {
  onRequestPilot: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestPilot }) => {
  const highlights = [
    'Mobile-first construction platform',
    'Real-time site records',
    'Compliance-focused workflows',
    'Built for UK construction businesses',
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background cyber ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tagline Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium backdrop-blur-md shadow-glow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold tracking-wide">SiteGuard OS Ltd</span>
            <span className="text-emerald-500/40">•</span>
            <span className="text-slate-300">Secure Today. Protect Tomorrow.</span>
          </div>
        </div>

        {/* Main Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white tracking-tight leading-[1.12]">
            Connect Site Security, Safety &amp; Compliance in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">
              One Digital Operating System
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            SiteGuard OS helps construction and security teams capture site events once, manage compliance automatically, and create trusted digital records for clients and insurers.
          </p>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRequestPilot}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-glow hover:shadow-glow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#platform"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-base text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-emerald-500/40 backdrop-blur-md transition-all duration-300"
            >
              <span>Explore Platform</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </a>
          </div>

          {/* Feature Highlights List */}
          <div className="pt-8 pb-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/5 backdrop-blur-sm text-left"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Hero Visual Section */}
        <HeroVisual />

      </div>
    </section>
  );
};
