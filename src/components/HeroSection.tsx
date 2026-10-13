import React from 'react';
import { ArrowRight, Activity, TrendingDown, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-ivory-100 bg-grain">
      {/* Subtle organic light accent background blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wheat-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-ivory-200 border border-warmgray-300 text-charcoal-700 text-xs font-semibold tracking-wide shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse"></span>
              <span className="uppercase tracking-widest text-[11px] text-charcoal-800">AI SYSTEM • LIVE</span>
              <span className="text-warmgray-400">|</span>
              <span className="text-wheat-600 font-medium">Demand & Waste Intelligence v3.4</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-900 leading-[1.08] font-sans">
              Turn Food Waste <br />
              <span className="font-serif italic font-normal text-wheat-500 underline decoration-wheat-300/40 underline-offset-8">
                Into Intelligence.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-charcoal-600 max-w-2xl font-normal leading-relaxed">
              An AI-powered food operations system that predicts demand, reduces waste, and helps every ingredient create more value across kitchens, canteens, and food service enterprises.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center space-x-2 bg-charcoal-900 hover:bg-charcoal-800 text-ivory-50 px-7 py-3.5 rounded-md font-semibold text-sm tracking-wide transition-all shadow-card hover:shadow-lg group"
              >
                <span>Explore the System</span>
                <ArrowRight className="w-4 h-4 text-wheat-300 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#dashboard"
                className="inline-flex items-center justify-center space-x-2 bg-ivory-200 hover:bg-ivory-300 text-charcoal-800 border border-warmgray-300 px-6 py-3.5 rounded-md font-semibold text-sm tracking-wide transition-all shadow-subtle"
              >
                <span>View Live Dashboard</span>
              </a>
            </div>

            {/* Live Metrics Grid */}
            <div className="pt-8 border-t border-warmgray-200/80 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-charcoal-900 font-sans">18%</span>
                <span className="text-xs text-charcoal-500 font-medium">Waste Reduction</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-charcoal-900 font-sans">12%</span>
                <span className="text-xs text-charcoal-500 font-medium">Lower Overproduction</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-charcoal-900 font-sans">24%</span>
                <span className="text-xs text-charcoal-500 font-medium">Better Forecast Acc.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-charcoal-900 font-sans">31%</span>
                <span className="text-xs text-charcoal-500 font-medium">Faster Waste Decisions</span>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Photo + Floating Dashboard Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-warmgray-300 shadow-card bg-ivory-200">
              
              {/* High-res realistic commercial kitchen / fresh food preparation photo */}
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop"
                alt="Commercial Kitchen Food Operations"
                className="w-full h-[420px] sm:h-[480px] object-cover filter brightness-[0.92] contrast-[1.03]"
              />
              
              {/* Warm gradient overlay blending photo with ivory border */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/20 to-transparent"></div>

              {/* Photo Bottom Caption Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-ivory-100 bg-charcoal-900/80 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-sage-400"></span>
                  <span className="font-medium">Grand Hotel Bistro • Main Prep Kitchen</span>
                </div>
                <span className="text-wheat-300 text-[11px] font-mono">Live Sensor Feed</span>
              </div>
            </div>

            {/* Floating Live AI Analytics Overlay Widget */}
            <div className="absolute -top-6 -left-4 sm:-left-8 bg-ivory-50/95 backdrop-blur-md p-4 rounded-xl border border-warmgray-300 shadow-lg max-w-[260px] hidden sm:block animate-float-slow">
              <div className="flex items-center justify-between pb-2 border-b border-warmgray-200">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-wheat-600" />
                  <span className="text-xs font-bold text-charcoal-800 uppercase tracking-wider">Demand Alert</span>
                </div>
                <span className="text-[10px] text-sage-600 font-semibold bg-sage-50 px-1.5 py-0.5 rounded">Optimal</span>
              </div>
              <p className="text-xs text-charcoal-600 mt-2 leading-tight">
                Recommended rice batch reduced by <span className="font-bold text-charcoal-900">12%</span> based on dinner occupancy.
              </p>
              <div className="mt-2 text-[11px] font-semibold text-wheat-600 flex items-center space-x-1">
                <Sparkles className="w-3 h-3 text-wheat-500" />
                <span>Auto-adjusted at 14:30</span>
              </div>
            </div>

            {/* Floating Live Metrics Badge (Bottom Right) */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-charcoal-900 text-ivory-50 p-4 rounded-xl shadow-xl max-w-[240px] border border-charcoal-700 hidden sm:block">
              <div className="flex items-center space-x-2 text-sage-400 text-xs font-semibold mb-1">
                <TrendingDown className="w-4 h-4" />
                <span>Daily Food Saved</span>
              </div>
              <div className="text-2xl font-bold font-sans text-ivory-50">18.4 kg</div>
              <div className="text-[11px] text-charcoal-400 mt-0.5">Equivalent to ₹8,240 saved today</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
