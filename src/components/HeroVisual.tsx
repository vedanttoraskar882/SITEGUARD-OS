import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Smartphone, 
  FileCheck2, 
  Cloud, 
  CheckCircle2, 
  Activity, 
  Lock, 
  QrCode, 
  MapPin,
  Clock,
  HardHat,
  Cpu
} from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'gate' | 'mobile' | 'compliance' | 'cloud'>('all');

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 lg:mt-16">
      {/* Background glow layers */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-cyan-500/10 to-emerald-600/20 rounded-3xl blur-2xl opacity-60 pointer-events-none -z-10" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-emerald-500/15 blur-3xl pointer-events-none -z-10" />

      {/* Main Glass Container */}
      <div className="relative rounded-2xl border border-white/10 bg-[#080d1a]/85 backdrop-blur-xl shadow-2xl overflow-hidden p-4 sm:p-6 lg:p-8">
        
        {/* Terminal Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-2 pl-3 border-l border-white/10">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs font-medium text-emerald-400">
                SITEGUARD OS CORE // ACTIVE MONITORING
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-md border border-white/5">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>UK Sovereign Cloud (AES-256)</span>
          </div>
        </div>

        {/* 5 Architecture Pillar Badges required in Hero visual */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-5">
          <div className={`p-2.5 rounded-lg border text-center transition-all ${
            activeTab === 'all' || activeTab === 'gate' 
              ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300' 
              : 'bg-white/[0.02] border-white/5 text-slate-400'
          }`}>
            <Building2 className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
            <div className="text-[11px] font-semibold uppercase tracking-wider">Construction Site</div>
            <div className="text-[10px] text-slate-400 font-mono">Zone 01 - London</div>
          </div>

          <div className="p-2.5 rounded-lg border border-emerald-500/30 bg-emerald-950/20 text-center text-emerald-300">
            <ShieldCheck className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
            <div className="text-[11px] font-semibold uppercase tracking-wider">Security Gate</div>
            <div className="text-[10px] text-emerald-400 font-mono">Smart Gatehouse</div>
          </div>

          <div className="p-2.5 rounded-lg border border-emerald-500/30 bg-emerald-950/20 text-center text-emerald-300">
            <Smartphone className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
            <div className="text-[11px] font-semibold uppercase tracking-wider">Mobile App</div>
            <div className="text-[10px] text-emerald-400 font-mono">Field Operational</div>
          </div>

          <div className="p-2.5 rounded-lg border border-emerald-500/30 bg-emerald-950/20 text-center text-emerald-300">
            <FileCheck2 className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
            <div className="text-[11px] font-semibold uppercase tracking-wider">Digital Compliance</div>
            <div className="text-[10px] text-emerald-400 font-mono">Auto Validated</div>
          </div>

          <div className="col-span-2 sm:col-span-1 p-2.5 rounded-lg border border-emerald-500/30 bg-emerald-950/20 text-center text-emerald-300">
            <Cloud className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
            <div className="text-[11px] font-semibold uppercase tracking-wider">Cloud Platform</div>
            <div className="text-[10px] text-emerald-400 font-mono">99.99% Live Sync</div>
          </div>
        </div>

        {/* Visual Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column: Security Gatehouse & Site Live Status (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Live Gatehouse Feed Card */}
            <div className="rounded-xl bg-[#0b1324] border border-white/10 p-4 sm:p-5 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      Digital Gatehouse Terminal #01
                    </h4>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      Main Vehicle & Turnstile Access Gate
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  GATE OPEN
                </span>
              </div>

              {/* Verified Contractor Card Stream */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-emerald-500/30 hover:border-emerald-400/60 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-emerald-400/40 flex items-center justify-center text-emerald-300 font-bold text-sm">
                      JD
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">James Davies</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          CSCS VALID
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">Apex Structural Steelworks • Induction #UK-9821</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-medium text-emerald-400 block">08:14:22 GMT</span>
                    <span className="text-[10px] text-slate-400">Access Granted (Zone B)</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-cyan-400/30 flex items-center justify-center text-cyan-300 font-bold text-sm">
                      MR
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">Marcus Reid</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          VISITOR PERMIT
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">HSE Inspectorate • Escort: Site Safety Manager</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-medium text-cyan-400 block">08:12:05 GMT</span>
                    <span className="text-[10px] text-slate-400">Escort Verified</span>
                  </div>
                </div>
              </div>

              {/* Live gate telemetry bar */}
              <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-center font-mono">
                <div className="bg-black/20 p-2 rounded border border-white/5">
                  <span className="text-[10px] text-slate-400 block">ON-SITE TODAY</span>
                  <span className="text-sm font-bold text-emerald-400">148 Personnel</span>
                </div>
                <div className="bg-black/20 p-2 rounded border border-white/5">
                  <span className="text-[10px] text-slate-400 block">INSPECTIONS</span>
                  <span className="text-sm font-bold text-cyan-400">100% Cleared</span>
                </div>
                <div className="bg-black/20 p-2 rounded border border-white/5">
                  <span className="text-[10px] text-slate-400 block">INCIDENTS</span>
                  <span className="text-sm font-bold text-emerald-400">0 Open</span>
                </div>
              </div>
            </div>

            {/* Cloud & Digital Compliance Sync bar */}
            <div className="rounded-xl bg-[#0b1324] border border-white/10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">UK Insurer-Ready Digital Ledger</div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    All gate events cryptographically hashed & synced in real-time
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-emerald-400 font-semibold">SYNCED</span>
              </div>
            </div>

          </div>

          {/* Right Column: Simulated Mobile Application in the Field (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="rounded-2xl bg-gradient-to-b from-[#0e172a] to-[#070b15] border-2 border-emerald-500/40 p-4 shadow-2xl relative">
              {/* Phone notch */}
              <div className="w-28 h-4 bg-slate-900 rounded-full mx-auto mb-3 flex items-center justify-center gap-2 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-slate-700" />
                <div className="w-8 h-1 rounded-full bg-slate-800" />
              </div>

              {/* Mobile App Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-white">SiteGuard Mobile</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                  ONLINE
                </span>
              </div>

              {/* Mobile Screen Body */}
              <div className="mt-3 space-y-3">
                
                {/* QR Access Card */}
                <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30 text-center">
                  <div className="w-16 h-16 mx-auto bg-white rounded-lg p-1.5 flex items-center justify-center shadow-lg">
                    <QrCode className="w-full h-full text-slate-950" />
                  </div>
                  <p className="text-[11px] font-mono text-emerald-300 mt-2 font-semibold">
                    SCAN AT GATEHOUSE / ZONE ENTRANCE
                  </p>
                  <p className="text-[10px] text-slate-400">Digital Induction ID: #SG-7890-UK</p>
                </div>

                {/* Compliance checklist in mobile */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                  <div className="text-[11px] font-bold text-white uppercase tracking-wider flex items-center justify-between">
                    <span>Pre-Entry Safety Verification</span>
                    <span className="text-emerald-400 font-mono">100% PASS</span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-300 py-1 border-b border-white/5">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Site Induction 2026
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">Completed</span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-300 py-1 border-b border-white/5">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      RAMS & Method Statement
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">Signed</span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-300 py-1">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      PPE & Competency Check
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">Verified</span>
                  </div>
                </div>

                {/* Instant Action Button */}
                <div className="pt-1">
                  <div className="w-full py-2 px-3 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-center text-xs font-semibold text-emerald-300 flex items-center justify-center gap-2">
                    <HardHat className="w-4 h-4 text-emerald-400" />
                    <span>One-Tap Incident / Near-Miss Log</span>
                  </div>
                </div>

              </div>

              {/* Bottom Mobile Home indicator */}
              <div className="w-20 h-1 bg-slate-700 rounded-full mx-auto mt-4" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
