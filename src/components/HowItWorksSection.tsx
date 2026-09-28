import React from 'react';
import { 
  Sliders, 
  UserCheck, 
  ShieldAlert, 
  Radio, 
  FileSpreadsheet, 
  ArrowRight, 
  Check, 
  Clock, 
  MapPin, 
  User, 
  Compass,
  AlertCircle
} from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Site Setup',
      icon: Sliders,
      subtitle: 'Configure',
      items: [
        'Site zones',
        'Workflows',
        'Compliance documents',
        'Induction content',
      ],
      detail: 'Tailor rules, risk matrices, and check-in parameters before boots touch the ground.',
    },
    {
      step: '02',
      title: 'Worker Arrival',
      icon: UserCheck,
      subtitle: 'System checks',
      items: [
        'Identity',
        'Training status',
        'Permit validity',
        'Competency records',
      ],
      detail: 'NFC, QR or biometric verification matches worker against required certifications.',
    },
    {
      step: '03',
      title: 'Smart Gate Decision',
      icon: ShieldAlert,
      subtitle: 'System determines',
      items: [
        'Access approved',
        'Access restricted',
        'Escalation required',
      ],
      detail: 'Immediate logic gate ensures zero un-inducted or non-compliant operatives enter.',
    },
    {
      step: '04',
      title: 'Event Capture',
      icon: Radio,
      subtitle: 'Capture',
      items: [
        'Entry',
        'Exit',
        'Incident',
        'Inspection',
        'Near miss',
      ],
      meta: 'Every record includes: Time, Location, Person, Site zone',
      detail: 'Complete spatial and chronological audit trail logged instantly on field devices.',
    },
    {
      step: '05',
      title: 'Automated Reporting',
      icon: FileSpreadsheet,
      subtitle: 'Information flows into',
      items: [
        'Compliance records',
        'Client reports',
        'Insurance evidence',
        'Corrective workflows',
      ],
      detail: 'Self-assembling executive packs, audit logs, and insurer proof generated automatically.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-[#040711] overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-emerald-500/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4 uppercase tracking-wider">
            Operational Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How SiteGuard OS Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A frictionless, 5-step operational pipeline connecting physical site security with digital compliance and reporting.
          </p>
        </div>

        {/* 5-Step Process Pipeline */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="relative rounded-2xl glass-panel p-5 sm:p-6 flex flex-col justify-between border border-white/10 hover:border-emerald-400/40 bg-gradient-to-b from-[#0a1020]/90 to-[#050914]/90 transition-all duration-300 group"
                >
                  {/* Step connector arrow for desktop */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-emerald-400/40 group-hover:text-emerald-400 transition-colors">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}

                  <div>
                    {/* Step number badge & icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-emerald-400">
                        STEP {item.step}
                      </span>
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-emerald-400/90 mb-3">
                      {item.subtitle}:
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-1.5 mb-4">
                      {item.items.map((sub, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metadata callout for Step 4 */}
                  {item.meta && (
                    <div className="mt-3 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
                      <span className="font-bold block text-white mb-1">Audit Record Guarantee:</span>
                      Every record includes: Time, Location, Person, Site zone
                    </div>
                  )}

                  {/* Micro footer indicator */}
                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-400">
                    {item.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real-time Decision Matrix Callout */}
        <div className="mt-12 rounded-2xl glass-panel p-6 sm:p-8 border border-emerald-500/20 bg-gradient-to-r from-emerald-950/20 via-[#0a1324] to-cyan-950/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Zero Infiltration &amp; 100% Insurer Audit Trail
                </h4>
              </div>
              <p className="text-sm text-slate-300 max-w-2xl">
                Every scan, entry, near-miss, and briefing is cryptographically stamped with time, geolocation coordinates, operative ID, and specific site zone.
              </p>
            </div>
            
            <div className="flex items-center gap-3 font-mono text-xs text-slate-300 bg-black/40 px-4 py-2.5 rounded-xl border border-white/10 flex-shrink-0">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>&lt;0.8s Scan Latency</span>
              <span className="text-white/20">|</span>
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Geo-Fenced</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
