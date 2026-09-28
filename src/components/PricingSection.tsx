import React from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Sparkles, Building, Layers, FileCheck } from 'lucide-react';

interface PricingSectionProps {
  onRequestPilot: (planName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onRequestPilot }) => {
  return (
    <section id="pricing" className="py-24 relative bg-[#050811] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4 uppercase tracking-wider">
            Transparent UK Construction Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Market Pricing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Simple, predictable pricing scaled per active construction site. No hidden infrastructure surcharges.
          </p>
        </div>

        {/* 3 Main Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          
          {/* PLAN 1: Gatehouse */}
          <div className="rounded-2xl glass-panel p-7 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-emerald-500/40 bg-gradient-to-b from-[#0b1324]/80 to-[#070b16]/80 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-emerald-400 font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                  Starter Fleet
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Gatehouse</h3>
              
              <div className="flex items-baseline gap-1 my-5">
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">£39</span>
                <span className="text-xs sm:text-sm font-medium text-slate-400">/ active site / month</span>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                For independent site-security providers and smaller construction teams.
              </p>

              <div className="pt-6 border-t border-white/10">
                <div className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider mb-4">
                  Includes:
                </div>
                <ul className="space-y-3">
                  {[
                    'Digital gatehouse',
                    'Access logs',
                    'Incident reporting',
                    'Compliance document vault',
                    'Digital inductions',
                    'Client reporting',
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onRequestPilot('Gatehouse (£39/site/mo)')}
                className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-emerald-400 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          </div>

          {/* PLAN 2: Site Command (Most Popular / Highlighted) */}
          <div className="relative rounded-2xl glass-panel p-7 sm:p-8 flex flex-col justify-between border-2 border-emerald-500/60 shadow-glow bg-gradient-to-b from-[#0e1933] to-[#081022] transition-all duration-300 group transform lg:-translate-y-2">
            
            {/* Popular Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
              <span>Multi-Site Operators</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-emerald-300 font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-500/20 border border-emerald-500/40">
                  Scale &amp; Command
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Site Command</h3>

              <div className="flex items-baseline gap-1 my-5">
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">£79</span>
                <span className="text-xs sm:text-sm font-medium text-slate-300">/ active site / month</span>
              </div>

              <p className="text-sm text-slate-200 mb-6 leading-relaxed">
                For multi-site operators.
              </p>

              <div className="pt-6 border-t border-emerald-500/30">
                <div className="text-xs font-mono font-bold uppercase text-emerald-400 tracking-wider mb-2">
                  Everything in Gatehouse plus:
                </div>
                <ul className="space-y-3 mt-4">
                  {[
                    'Multi-site dashboard',
                    'Corrective-action workflow',
                    'Advanced reporting',
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-white font-medium">
                      <div className="w-5 h-5 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center flex-shrink-0 font-bold">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onRequestPilot('Site Command (£79/site/mo)')}
                className="w-full py-4 px-4 rounded-xl font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-glow hover:shadow-glow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* PLAN 3: Principal */}
          <div className="rounded-2xl glass-panel p-7 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-emerald-500/40 bg-gradient-to-b from-[#0b1324]/80 to-[#070b16]/80 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20">
                  Regional &amp; Enterprise
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Principal</h3>

              <div className="flex items-baseline gap-1 my-5">
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">£149</span>
                <span className="text-xs sm:text-sm font-medium text-slate-400">/ active site / month</span>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                For regional contractors and larger construction organisations.
              </p>

              <div className="pt-6 border-t border-white/10">
                <div className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider mb-4">
                  Includes:
                </div>
                <ul className="space-y-3">
                  {[
                    'Supply chain oversight',
                    'Advanced integrations',
                    'Insurer reporting capability',
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onRequestPilot('Principal (£149/site/mo)')}
                className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-cyan-400 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>
          </div>

        </div>

        {/* Additional Pricing Cards */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Additional Professional Pricing</h3>
            <p className="text-sm text-slate-400 mt-1">Specialised services and audit-ready verification packs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* Implementation & Configuration */}
            <div className="rounded-xl glass-panel p-6 border border-white/10 bg-[#0a1020]/70 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-emerald-400 tracking-wider">
                      One-Time Service
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">
                      Implementation &amp; Configuration
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white">£450</span>
                    <span className="text-xs font-mono text-slate-400 block">one-time fee</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Includes:
                  </div>
                  <ul className="space-y-2">
                    {[
                      'Site-zone configuration',
                      'Workflow setup',
                      'Induction content migration',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <button
                  onClick={() => onRequestPilot('Implementation & Configuration (£450)')}
                  className="w-full py-2.5 rounded-lg text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-400 transition-colors"
                >
                  Enquire About Setup
                </button>
              </div>
            </div>

            {/* Client & Insurer Assurance Pack */}
            <div className="rounded-xl glass-panel p-6 border border-white/10 bg-[#0a1020]/70 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-cyan-400 tracking-wider">
                      Audit Readiness
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">
                      Client &amp; Insurer Assurance Pack
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white">£180</span>
                    <span className="text-xs font-mono text-slate-400 block">per pack</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Pre-compiled, legally defensible digital audit bundle with complete event chronology, operative qualification records, and zone compliance certificates for insurance and principal client reviews.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <button
                  onClick={() => onRequestPilot('Client & Insurer Assurance Pack (£180)')}
                  className="w-full py-2.5 rounded-lg text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400 transition-colors"
                >
                  Enquire About Assurance Pack
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
