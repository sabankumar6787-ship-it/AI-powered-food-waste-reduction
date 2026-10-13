import React from 'react';
import { Users, Target, Lightbulb, Smartphone, Award, Quote } from 'lucide-react';

export const DesignThinkingSection: React.FC = () => {
  const steps = [
    {
      phase: 'EMPATHIZE',
      title: 'Understand Kitchen Teams',
      desc: 'Deep interviews and shift shadowing with head chefs, line cooks, station managers, and sustainability directors.',
      icon: Users,
    },
    {
      phase: 'DEFINE',
      title: 'Pinpoint Loss Hotspots',
      desc: 'Map exact friction points where over-prep occurs during chaotic service rushes or banquet shift transitions.',
      icon: Target,
    },
    {
      phase: 'IDEATE',
      title: 'AI-Assisted Workflows',
      desc: 'Develop non-intrusive notifications that present clear binary prep decisions without complex dashboard clutter.',
      icon: Lightbulb,
    },
    {
      phase: 'PROTOTYPE',
      title: 'Test Kitchen Tablets',
      desc: 'Field-test rugged kitchen display system (KDS) interfaces directly on hot-line prep counters with active cooks.',
      icon: Smartphone,
    },
    {
      phase: 'TEST',
      title: 'Measure Adoption & Impact',
      desc: 'Verify kitchen compliance speed, operator trust in recommendations, and net waste reduction performance.',
      icon: Award,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-ivory-100 bg-grain border-t border-warmgray-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-wheat-100 border border-wheat-300 text-wheat-600 text-xs font-bold uppercase tracking-wider">
            <span>Human-Centered Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 font-sans tracking-tight">
            Designed around people, <br className="hidden sm:block" />
            <span className="font-serif italic text-wheat-500 font-normal">not just data.</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            Technology only succeeds in commercial food service if it respects the speed, heat, and intensity of real kitchen operations.
          </p>
        </div>

        {/* Highlight Statement Box */}
        <div className="mt-12 bg-ivory-200 rounded-2xl border border-warmgray-300 p-8 text-center max-w-4xl mx-auto shadow-subtle relative overflow-hidden">
          <Quote className="w-12 h-12 text-wheat-300/40 absolute -top-2 left-6 pointer-events-none" />
          <p className="text-xl sm:text-2xl font-serif italic text-charcoal-900 font-normal leading-relaxed relative z-10">
            “AI should support decisions — not make the kitchen harder to run.”
          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-wheat-600 mt-4">
            AURA Product Design Philosophy
          </p>
        </div>

        {/* 5-Phase Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((st, i) => {
            const IconComp = st.icon;
            return (
              <div
                key={i}
                className="bg-ivory-50 p-5 rounded-xl border border-warmgray-300 flex flex-col justify-between space-y-4 shadow-subtle hover:border-wheat-400 transition-all hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold bg-wheat-100 text-wheat-800 px-2 py-0.5 rounded">
                      {st.phase}
                    </span>
                    <IconComp className="w-4 h-4 text-wheat-600" />
                  </div>
                  <h3 className="text-base font-bold text-charcoal-900 font-sans">{st.title}</h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed">{st.desc}</p>
                </div>

                <div className="pt-2 border-t border-warmgray-200 text-[10px] font-mono text-charcoal-500">
                  Phase 0{i + 1} • Complete
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
