import React from 'react';
import { 
  ScanLine, 
  AlertTriangle, 
  FolderLock, 
  GraduationCap, 
  FileSpreadsheet, 
  Workflow, 
  LayoutGrid, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface FeatureCardData {
  id: number;
  title: string;
  description?: string;
  label?: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  gradient: string;
}

export const PlatformSection: React.FC = () => {
  const cards: FeatureCardData[] = [
    {
      id: 1,
      title: 'Unified Digital Gatehouse & Access Log',
      description: 'Replace paper visitor registers with digital access management.',
      icon: ScanLine,
      gradient: 'from-emerald-500/20 to-teal-500/5',
      features: [
        'Visitor registration',
        'Contractor verification',
        'QR/NFC/photo identification',
        'Real-time entry and exit records',
      ],
    },
    {
      id: 2,
      title: 'Digital Incident & Near-Miss Reporting',
      icon: AlertTriangle,
      gradient: 'from-amber-500/20 to-orange-500/5',
      features: [
        'Safety incidents',
        'Near misses',
        'Security events',
        'Photos/videos',
        'GPS location',
        'Site zone tracking',
      ],
    },
    {
      id: 3,
      title: 'Compliance Document & Certification Vault',
      icon: FolderLock,
      gradient: 'from-emerald-500/20 to-cyan-500/5',
      features: [
        'Risk assessments',
        'Method statements',
        'COSHH documents',
        'Insurance records',
        'Licences',
        'Training records',
      ],
    },
    {
      id: 4,
      title: 'Digital Toolbox Talks & Induction Records',
      icon: GraduationCap,
      gradient: 'from-blue-500/20 to-indigo-500/5',
      features: [
        'Digital inductions',
        'Safety briefings',
        'Employee acknowledgement',
        'Training reminders',
      ],
    },
    {
      id: 5,
      title: 'Client & Insurer Reporting',
      icon: FileSpreadsheet,
      gradient: 'from-teal-500/20 to-emerald-500/5',
      features: [
        'Attendance reports',
        'Incident summaries',
        'Compliance reports',
        'Training completion',
        'Document expiry tracking',
      ],
    },
    {
      id: 6,
      title: 'Corrective Action & Escalation Workflow',
      label: 'Coming in Year 2',
      icon: Workflow,
      gradient: 'from-purple-500/20 to-pink-500/5',
      features: [
        'Assign actions',
        'Deadlines',
        'Evidence-based closure',
        'Automated escalation',
      ],
    },
    {
      id: 7,
      title: 'Multi-Site Command Dashboard',
      label: 'Coming in Year 2',
      icon: LayoutGrid,
      gradient: 'from-cyan-500/20 to-blue-500/5',
      features: [
        'Multiple site monitoring',
        'Workforce visibility',
        'Incident overview',
        'Compliance scoring',
        'Document expiry alerts',
      ],
    },
  ];

  return (
    <section id="platform" className="py-24 relative bg-[#050811] overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4 uppercase tracking-wider">
            Enterprise Feature Suite
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Digital Operating System for Sites
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Engineered specifically to transform paper logbooks and fragmented compliance files into an integrated, auditable digital workflow.
          </p>
        </div>

        {/* 7 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isYearTwo = !!card.label;
            const isWide = idx === 6; // Card 7 spans gracefully or complements layout

            return (
              <div
                key={card.id}
                className={`relative rounded-2xl glass-panel p-6 sm:p-7 flex flex-col justify-between glass-panel-hover border transition-all duration-300 ${
                  isWide ? 'md:col-span-2 lg:col-span-1' : ''
                } ${
                  isYearTwo 
                    ? 'border-white/10 hover:border-purple-400/40 bg-gradient-to-b from-[#0a1020]/90 to-[#060a14]/90' 
                    : 'border-white/10 hover:border-emerald-400/40 bg-gradient-to-b from-[#0b1324]/90 to-[#070c18]/90'
                }`}
              >
                {/* Glow ambient inside card */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${card.gradient} rounded-bl-full pointer-events-none opacity-40`} />

                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className={`p-3 rounded-xl border ${
                      isYearTwo 
                        ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' 
                        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {card.label ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                        <Sparkles className="w-3 h-3 text-purple-400" />
                        {card.label}
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-slate-500">
                        0{card.id} // CORE
                      </span>
                    )}
                  </div>

                  {/* Title & Optional Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
                    {card.title}
                  </h3>

                  {card.description && (
                    <p className="text-sm text-slate-300 mb-4 font-normal">
                      {card.description}
                    </p>
                  )}

                  {/* Features List */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <ul className="space-y-2.5">
                      {card.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${
                            isYearTwo ? 'text-purple-400' : 'text-emerald-400'
                          }`} />
                          <span className="font-medium">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom micro indicator */}
                <div className="mt-6 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/5">
                  <span className="uppercase">SiteGuard Enterprise OS</span>
                  <span className="text-emerald-400/80 flex items-center gap-0.5">
                    Live Record <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
