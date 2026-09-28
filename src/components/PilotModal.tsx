import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight, Building, User, Phone, Mail, AlertCircle } from 'lucide-react';
import { savePilotSubmission } from '../utils/storage';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

interface FormState {
  fullName: string;
  phoneNumber: string;
  email: string;
  organisationName: string;
}

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
  organisationName?: string;
}

export const PilotModal: React.FC<PilotModalProps> = ({ isOpen, onClose, initialPlan }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phoneNumber: '',
    email: '',
    organisationName: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setErrors({});
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: FormErrors = {};

    // Required check
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }

    if (!formData.organisationName.trim()) {
      errs.organisationName = 'Organisation Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    // Phone validation
    // Accepts UK and international formats: digits, +, spaces, hyphens, parentheses, minimum 7 digits
    const phoneDigits = formData.phoneNumber.replace(/\D/g, '');
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone Number is required';
    } else if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      errs.phoneNumber = 'Please enter a valid phone number (e.g. +44 7123 456789)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Store in browser localStorage
    savePilotSubmission({
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      organisationName: formData.organisationName,
    });

    setIsSubmitted(true);
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      organisationName: '',
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg rounded-2xl glass-panel border border-emerald-500/30 bg-[#070c18] p-6 sm:p-8 shadow-2xl z-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Exact required success state: "Thank you. Your pilot request has been submitted." */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-glow">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Request Received
              </h3>
              <p className="text-base sm:text-lg text-emerald-400 font-semibold px-4 py-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                Thank you. Your pilot request has been submitted.
              </p>
              <p className="text-xs text-slate-400 pt-2">
                Our site deployment team will review your project parameters and get in touch within one business day.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl font-semibold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <ShieldCheck className="w-4 h-4" />
                </span>
                <span className="font-mono text-xs uppercase text-emerald-400 tracking-wider font-semibold">
                  Pilot Deployment
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Request a Pilot
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Experience SiteGuard OS live on your active construction project.
              </p>
              {initialPlan && (
                <div className="mt-3 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-emerald-300 inline-block">
                  Selected Tier: {initialPlan}
                </div>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Full Name <span className="text-emerald-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Ather Amin"
                    className={`w-full pl-9 pr-4 py-2.5 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                      errors.fullName
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-white/15 focus:border-emerald-400 focus:ring-emerald-400'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Organisation Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Organisation Name <span className="text-emerald-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Building className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={formData.organisationName}
                    onChange={(e) => {
                      setFormData({ ...formData, organisationName: e.target.value });
                      if (errors.organisationName) setErrors({ ...errors, organisationName: undefined });
                    }}
                    placeholder="e.g. Apex Construction Ltd"
                    className={`w-full pl-9 pr-4 py-2.5 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                      errors.organisationName
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-white/15 focus:border-emerald-400 focus:ring-emerald-400'
                    }`}
                  />
                </div>
                {errors.organisationName && (
                  <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.organisationName}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Phone Number <span className="text-emerald-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneNumber: e.target.value });
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                    }}
                    placeholder="e.g. +44 7123 456789"
                    className={`w-full pl-9 pr-4 py-2.5 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                      errors.phoneNumber
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-white/15 focus:border-emerald-400 focus:ring-emerald-400'
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Email Address <span className="text-emerald-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. a.amin@example.co.uk"
                    className={`w-full pl-9 pr-4 py-2.5 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                      errors.email
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-white/15 focus:border-emerald-400 focus:ring-emerald-400'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-glow transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Pilot Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400 pt-1">
                Zero infrastructure lock-in. Stored locally on this browser session.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
