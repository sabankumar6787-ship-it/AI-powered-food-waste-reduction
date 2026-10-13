import React, { useState } from 'react';
import { Database, Brain, LineChart, Sparkles, TrendingUp, ChevronRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'Collect',
      subtitle: 'Data Ingestion',
      description: 'Continuous ingestion of POS transactions, inventory logs, raw ingredient stocks, local weather forecasts, and catering event schedules.',
      icon: Database,
      details: ['POS API integration', 'Cold storage IoT sensors', 'Supplier lead times', 'Weather & holiday calendar'],
      tag: 'Real-time Ingestion',
    },
    {
      number: '02',
      title: 'Understand',
      subtitle: 'Pattern Recognition',
      description: 'Deep neural models analyze historical consumption correlations between specific dish sales and raw ingredient decay rates.',
      icon: Brain,
      details: ['Dish-to-ingredient decomposition', 'Prep batch decay curves', 'Historical loss clustering', 'Footfall anomaly detection'],
      tag: 'Machine Learning',
    },
    {
      number: '03',
      title: 'Predict',
      subtitle: 'Demand & Risk Forecast',
      description: 'Generates precision prep forecasts 24 to 72 hours in advance, quantifying spoilage risk before raw items are unsealed.',
      icon: LineChart,
      details: ['Ingredient-level demand', 'Spoilage probability score', 'Buffet surplus estimation', 'Expiry window mapping'],
      tag: 'Predictive Engine',
    },
    {
      number: '04',
      title: 'Recommend',
      subtitle: 'Actionable Workflow',
      description: 'Delivers actionable recommendations to kitchen tablets: exact prep cutbacks, automated dynamic markdowns, or donation alerts.',
      icon: Sparkles,
      details: ['Prep batch adjustment alerts', 'Flash discount suggestions', 'Automated partner donation', 'Dynamic re-order points'],
      tag: 'Decision Support',
    },
    {
      number: '05',
      title: 'Improve',
      subtitle: 'Self-Optimizing Loop',
      description: 'Tracks recommendation adoption, kitchen compliance, and actual waste outcomes to continuously refine future forecasting models.',
      icon: TrendingUp,
      details: ['Closed-loop learning', 'Kitchen compliance metrics', 'Financial ROI tracking', 'Carbon offset audit'],
      tag: 'Continuous Learning',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-ivory-100 bg-grain relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-wheat-100 border border-wheat-300 text-wheat-600 text-xs font-bold uppercase tracking-wider">
            <span>Core Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 font-sans tracking-tight">
            From raw data to <br className="hidden sm:block" />
            <span className="font-serif italic text-wheat-500 font-normal">smarter decisions.</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            A seamless 5-step intelligence loop that runs quietly in the background of your daily kitchen operations.
          </p>
        </div>

        {/* Horizontal Process Steps Bar */}
        <div className="mt-16 relative">
          
          {/* Subtle Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-[5%] right-[5%] h-[2px] bg-warmgray-300 -translate-y-6 z-0">
            <div 
              className="h-full bg-wheat-400 transition-all duration-500" 
              style={{ width: `${(activeStep / 4) * 100}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between space-y-4 ${
                    isActive
                      ? 'bg-ivory-50 border-wheat-400 shadow-card ring-1 ring-wheat-400'
                      : 'bg-ivory-200/70 border-warmgray-300 hover:border-warmgray-400 hover:bg-ivory-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isActive ? 'bg-wheat-400 text-charcoal-900' : 'bg-warmgray-300 text-charcoal-700'
                    }`}>
                      {step.number}
                    </span>
                    <IconComp className={`w-5 h-5 ${isActive ? 'text-wheat-500' : 'text-charcoal-400'}`} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-charcoal-900">{step.title}</h3>
                    <p className="text-xs text-charcoal-500 font-medium">{step.subtitle}</p>
                  </div>

                  <div className="flex items-center text-[11px] font-semibold text-wheat-600 pt-2 border-t border-warmgray-200/60">
                    <span>Explore details</span>
                    <ChevronRight className={`w-3.5 h-3.5 ml-1 transition-transform ${isActive ? 'translate-x-1' : ''}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Deep Dive Card */}
        <div className="mt-8 bg-ivory-50 rounded-2xl border border-warmgray-300 p-6 sm:p-10 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-wheat-100 text-wheat-700 text-xs font-mono font-semibold">
                <span>STEP {steps[activeStep].number}</span>
                <span>•</span>
                <span>{steps[activeStep].tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-charcoal-900 font-sans">
                {steps[activeStep].title}: {steps[activeStep].subtitle}
              </h3>

              <p className="text-charcoal-600 text-base leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {steps[activeStep].details.map((item, i) => (
                  <div key={i} className="flex items-center space-x-2.5 text-xs text-charcoal-800 font-medium bg-ivory-200/60 p-2.5 rounded-lg border border-warmgray-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-wheat-500"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step Visual Graphic */}
            <div className="lg:col-span-5 bg-ivory-200 rounded-xl p-6 border border-warmgray-300 space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold text-charcoal-600 pb-3 border-b border-warmgray-300">
                <span>System Pipeline Output</span>
                <span className="text-sage-600 font-mono">Status: Active</span>
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="bg-ivory-50 p-3 rounded border border-warmgray-300 flex justify-between items-center">
                  <span className="text-charcoal-600">INPUT STREAMS</span>
                  <span className="text-charcoal-900 font-bold">5 Connected</span>
                </div>
                <div className="bg-ivory-50 p-3 rounded border border-warmgray-300 flex justify-between items-center">
                  <span className="text-charcoal-600">PREDICTION LATENCY</span>
                  <span className="text-sage-600 font-bold">&lt; 140ms</span>
                </div>
                <div className="bg-wheat-100 p-3 rounded border border-wheat-300 flex justify-between items-center">
                  <span className="text-wheat-800 font-bold">NEXT RECOMMENDED ACTION</span>
                  <span className="text-wheat-900 font-bold">Batch Cutback -12%</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
