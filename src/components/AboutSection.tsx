import React from 'react';
import { 
  Shield, 
  HardHat, 
  GraduationCap, 
  Briefcase, 
  ArrowRightLeft, 
  CheckCircle2, 
  Award,
  Layers,
  FileCheck
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#040711] overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4 uppercase tracking-wider">
            Operational Ground Truth
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built From Real Construction Site Experience
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            SiteGuard OS was created to solve the operational gap between construction site security teams and site management teams.
          </p>
        </div>

        {/* Operational Gap Bridge Card */}
        <div className="rounded-2xl glass-panel p-6 sm:p-8 lg:p-10 mb-16 border border-white/10 shadow-glass">
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
            
            {/* Security Teams Column (5 cols) */}
            <div className="lg:col-span-5 rounded-xl bg-gradient-to-b from-[#0b1324] to-[#070b16] border border-emerald-500/20 p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Security Teams Manage</h3>
                  <p className="text-xs text-slate-400 font-mono">Frontline Gate & Perimeter Access</p>
                </div>
              </div>

              <ul className="space-y-3 mt-5">
                {[
                  'Visitor access',
                  'Contractor movements',
                  'Entry records',
                  'Incidents',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200 text-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Middle Bridge Indicator (1 col) */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center my-2 lg:my-0">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 shadow-glow-sm">
                <ArrowRightLeft className="w-5 h-5 rotate-90 lg:rotate-0" />
              </div>
            </div>

            {/* Site Managers Column (5 cols) */}
            <div className="lg:col-span-5 rounded-xl bg-gradient-to-b from-[#0b1324] to-[#070b16] border border-blue-500/20 p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-blue-500/15 text-blue-400 border border-blue-500/30">
                  <HardHat className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Site Managers Manage</h3>
                  <p className="text-xs text-slate-400 font-mono">Health, Safety & Regulatory Compliance</p>
                </div>
              </div>

              <ul className="space-y-3 mt-5">
                {[
                  'Safety documents',
                  'Compliance records',
                  'Inspections',
                  'Reports',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200 text-sm">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Unified Outcome Banner */}
          <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 via-emerald-950/30 to-blue-500/10 border border-emerald-500/30 text-center">
            <p className="text-base sm:text-lg font-semibold text-emerald-300">
              The platform connects these workflows into one unified digital record.
            </p>
          </div>
        </div>

        {/* Founder Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-b from-[#0b1326] to-[#060a14] border border-emerald-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
            
            {/* Top founder header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-1.5">
                  <Award className="w-3.5 h-3.5" />
                  LEADERSHIP
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Ather Amin</h3>
                <p className="text-sm font-medium text-emerald-400">Founder &amp; Managing Director</p>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs font-mono text-slate-400 block">Engineering Credentialed</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300 inline-block mt-1">
                  MSc Eng. Management • BSc Civil Eng.
                </span>
              </div>
            </div>

            {/* Background & Academic Qualifications */}
            <div className="py-6 border-b border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <h4 className="text-base font-bold text-white uppercase tracking-wider text-sm">
                  Background
                </h4>
              </div>
              <p className="text-sm text-slate-300 mb-3">
                Ather Amin is a construction professional with:
              </p>
              <div className="space-y-2.5 pl-2">
                <div className="flex items-start gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-white">MSc Construction and Civil Engineering Management</strong> from Anglia Ruskin University
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-white">BSc Civil Engineering</strong> from University of Engineering and Technology, Peshawar
                  </span>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="pt-6">
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-5 h-5 text-emerald-400" />
                <h4 className="text-base font-bold text-white uppercase tracking-wider text-sm">
                  Experience
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                
                {/* Role 1 */}
                <div className="rounded-xl bg-white/[0.02] border border-white/10 p-5 hover:border-emerald-500/40 transition-colors">
                  <div className="text-xs font-mono text-emerald-400 font-semibold mb-1">
                    SITE SECURITY
                  </div>
                  <h5 className="text-base font-bold text-white">Site Surveillance Officer</h5>
                  <p className="text-xs text-slate-400 mb-4 font-medium">OLTEC Security, Salisbury</p>
                  
                  <div className="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider font-mono">
                    Responsibilities:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Site access management
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Visitor and contractor records
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Security monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Incident reporting
                    </li>
                  </ul>
                </div>

                {/* Role 2 */}
                <div className="rounded-xl bg-white/[0.02] border border-white/10 p-5 hover:border-emerald-500/40 transition-colors">
                  <div className="text-xs font-mono text-cyan-400 font-semibold mb-1">
                    SITE MANAGEMENT
                  </div>
                  <h5 className="text-base font-bold text-white">Project Manager</h5>
                  <p className="text-xs text-slate-400 mb-4 font-medium">Shehzad and Brothers Construction Company</p>
                  
                  <div className="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider font-mono">
                    Responsibilities:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Project documentation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Compliance records
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Safety reports
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Stakeholder coordination
                    </li>
                  </ul>
                </div>

                {/* Role 3 */}
                <div className="rounded-xl bg-white/[0.02] border border-white/10 p-5 hover:border-emerald-500/40 transition-colors">
                  <div className="text-xs font-mono text-emerald-400 font-semibold mb-1">
                    ENGINEERING OPERATIONS
                  </div>
                  <h5 className="text-base font-bold text-white">Site Engineer</h5>
                  <p className="text-xs text-slate-400 mb-4 font-medium">SAK Construction</p>
                  
                  <div className="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider font-mono">
                    Responsibilities:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Construction monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Site records
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Project documentation
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
