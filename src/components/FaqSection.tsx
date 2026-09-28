import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs: FaqItem[] = [
    {
      question: 'What is SiteGuard OS?',
      answer: 'A construction operating system connecting site security, safety compliance and reporting.',
    },
    {
      question: 'Who is SiteGuard OS for?',
      answer: 'Independent security providers, construction subcontractors and regional principal contractors.',
    },
    {
      question: 'Does SiteGuard OS replace existing hardware?',
      answer: 'No. It works alongside existing access-control systems.',
    },
    {
      question: 'Can SiteGuard OS work on mobile devices?',
      answer: 'Yes. It is designed as a mobile-first platform.',
    },
    {
      question: 'What information does SiteGuard OS manage?',
      answer: 'Access records, incidents, compliance documents, inspections, inductions and reports.',
    },
    {
      question: 'How does pricing work?',
      answer: 'Pricing is based on active construction sites per month starting from £39.',
    },
    {
      question: 'Can companies manage multiple sites?',
      answer: 'Yes. Higher plans support multi-site management.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#040711] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4 uppercase tracking-wider">
            Common Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Clear answers regarding architecture, deployment, hardware compatibility, and multi-site licensing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-emerald-500/50 bg-[#0a1122]/90 shadow-glow-sm'
                    : 'border-white/10 bg-[#080d1a]/60 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-xs font-semibold px-2 py-1 rounded bg-white/5 border border-white/10 text-emerald-400 flex-shrink-0">
                      Q{idx + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-lg border border-white/10 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'rotate-180 bg-emerald-500/20 text-emerald-300 border-emerald-500/40' : 'bg-white/5'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 border-t border-white/5">
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed pl-10 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
