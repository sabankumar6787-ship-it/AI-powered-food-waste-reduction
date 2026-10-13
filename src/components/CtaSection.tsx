import React from 'react';
import { ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';

interface CtaSectionProps {
  onOpenDemo: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-24 md:py-32 bg-charcoal-900 text-ivory-50 relative overflow-hidden">
      {/* Background Subtle Photo Overlay */}
      <div className="absolute inset-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"
          alt="Fine Dining Restaurant Environment"
          className="w-full h-full object-cover filter contrast-125"
        />
      </div>

      {/* Warm Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-wheat-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Status Tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-charcoal-800 border border-charcoal-700 text-wheat-300 text-xs font-semibold uppercase tracking-widest shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-wheat-400" />
          <span>Deploy Enterprise Intelligence</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-sans leading-[1.08]">
          Waste less. Predict better. <br />
          <span className="font-serif italic text-wheat-300 font-normal">Operate smarter.</span>
        </h2>

        {/* Text */}
        <p className="text-lg sm:text-xl text-charcoal-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Bring intelligence into every stage of your food operation. Start reducing kitchen waste and protecting bottom-line margins today.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-wheat-400 hover:bg-wheat-300 text-charcoal-900 px-8 py-4 rounded-md font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            <span>Request a Demo</span>
            <ArrowUpRight className="w-4 h-4 text-charcoal-900" />
          </button>
          
          <a
            href="#dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-charcoal-800 hover:bg-charcoal-700 text-ivory-100 border border-charcoal-600 px-7 py-4 rounded-md font-semibold text-sm uppercase tracking-wider transition-all"
          >
            <span>Explore the Platform</span>
          </a>
        </div>

        {/* Trust Pills */}
        <div className="pt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-charcoal-400 font-medium">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-sage-400" />
            <span>SOC2 Type II Compliant Security</span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-wheat-400" />
            <span>Plug-and-Play POS Integration</span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-sage-400" />
            <span>No Hardware Replacement Required</span>
          </div>
        </div>

      </div>
    </section>
  );
};
