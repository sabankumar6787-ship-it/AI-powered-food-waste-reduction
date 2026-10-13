import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, ArrowRight, XCircle, Clock, Database, TrendingDown, ClipboardX, Cpu } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'painpoints'>('comparison');

  const painPoints = [
    {
      title: 'Inaccurate Demand Forecasting',
      desc: 'Kitchens rely on guesswork and historical memory, leading to chronic over-preparation.',
      icon: Clock,
      stat: '15-20% excess prep',
    },
    {
      title: 'Overproduction & Spoilage',
      desc: 'Unconsumed perishable items expire in cold storage without early warning alerts.',
      icon: AlertTriangle,
      stat: '$1,200/mo avg loss',
    },
    {
      title: 'Manual Paper Tracking',
      desc: 'Logbooks recorded on clipboard sheets are rarely analyzed in real time.',
      icon: ClipboardX,
      stat: '4.5 hrs/wk wasted',
    },
    {
      title: 'Disconnected Operational Systems',
      desc: 'POS sales, inventory databases, and shift schedules operate in isolated silos.',
      icon: Database,
      stat: 'Zero data sync',
    },
  ];

  const beforeItems = [
    { title: 'Manual logs', sub: 'Clipboard logbooks with delayed handwritten entries' },
    { title: 'Overstocking', sub: 'Ordering based on intuition instead of real demand' },
    { title: 'Spoilage risk', sub: 'Ingredients expire quietly on cold storage shelves' },
    { title: 'Uncertain demand', sub: 'Chef guesses daily volume without weather/event data' },
    { title: 'Late decisions', sub: 'Food thrown away after it has already gone bad' },
  ];

  const afterItems = [
    { title: 'AI Demand Forecast', sub: 'ML models analyze historical POS, weather, and footfall' },
    { title: 'Smart Inventory', sub: 'Automated batch tracking with real-time expiry alerts' },
    { title: 'Waste Alerts', sub: 'Early warnings before ingredients cross freshness limits' },
    { title: 'Demand Prediction', sub: 'Precision prep quantities calculated down to the ingredient' },
    { title: 'Actionable Insights', sub: 'Automated dynamic pricing or instant donation triggers' },
  ];

  return (
    <section id="problem" className="py-20 md:py-28 bg-ivory-200 border-y border-warmgray-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-wheat-100 border border-wheat-300 text-wheat-600 text-xs font-bold uppercase tracking-wider">
            <span>Operational Reality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 font-sans tracking-tight">
            Food waste is an <br className="hidden sm:block" />
            <span className="font-serif italic text-wheat-500 font-normal">operational problem.</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            Most commercial kitchens do not waste food intentionally. They lose bottom-line margin because old-fashioned operational tools cannot predict actual consumption patterns.
          </p>
        </div>

        {/* Comparison Graphic Container */}
        <div className="mt-16 bg-ivory-100 rounded-2xl border border-warmgray-300 p-6 sm:p-10 shadow-card">
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between pb-8 mb-8 border-b border-warmgray-200 gap-4">
            <div>
              <h3 className="text-xl font-bold text-charcoal-900">Operational Transformation</h3>
              <p className="text-sm text-charcoal-500">Compare traditional kitchen workflows with AURA AI intelligence</p>
            </div>
            
            {/* Mode Switcher */}
            <div className="flex items-center bg-ivory-200 p-1 rounded-lg border border-warmgray-300">
              <button
                onClick={() => setActiveTab('comparison')}
                className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
                  activeTab === 'comparison'
                    ? 'bg-charcoal-900 text-ivory-50 shadow-sm'
                    : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
              >
                Before vs After
              </button>
              <button
                onClick={() => setActiveTab('painpoints')}
                className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
                  activeTab === 'painpoints'
                    ? 'bg-charcoal-900 text-ivory-50 shadow-sm'
                    : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
              >
                Key Loss Drivers
              </button>
            </div>
          </div>

          {activeTab === 'comparison' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              
              {/* BEFORE COLUMN */}
              <div className="bg-ivory-50 rounded-xl p-6 border border-red-200/60 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-100 text-red-700 font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg">
                  TRADITIONAL PROCESS
                </div>
                <div className="flex items-center space-x-2 text-red-700 font-bold text-lg mb-6">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <span>BEFORE: Reactive & Manual</span>
                </div>
                <div className="space-y-4">
                  {beforeItems.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-ivory-100 border border-warmgray-200/80">
                      <span className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0"></span>
                      <div>
                        <div className="text-sm font-bold text-charcoal-900">{item.title}</div>
                        <div className="text-xs text-charcoal-500 mt-0.5">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AFTER COLUMN */}
              <div className="bg-sage-50/50 rounded-xl p-6 border border-sage-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-sage-500 text-ivory-50 font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg">
                  AURA AI ENABLED
                </div>
                <div className="flex items-center space-x-2 text-sage-600 font-bold text-lg mb-6">
                  <CheckCircle className="w-5 h-5 text-sage-500" />
                  <span>AFTER: Predictive & Automated</span>
                </div>
                <div className="space-y-4">
                  {afterItems.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-ivory-50 border border-sage-200 shadow-subtle">
                      <span className="w-2 h-2 rounded-full bg-sage-500 mt-2 shrink-0"></span>
                      <div>
                        <div className="text-sm font-bold text-charcoal-900">{item.title}</div>
                        <div className="text-xs text-charcoal-600 mt-0.5">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {painPoints.map((pp, idx) => {
                const IconComponent = pp.icon;
                return (
                  <div key={idx} className="bg-ivory-50 p-5 rounded-xl border border-warmgray-200 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-wheat-100 border border-wheat-200 flex items-center justify-center text-wheat-600">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-charcoal-900">{pp.title}</h4>
                      <p className="text-xs text-charcoal-600 leading-relaxed">{pp.desc}</p>
                    </div>
                    <div className="pt-3 border-t border-warmgray-200 flex items-center justify-between text-xs">
                      <span className="text-charcoal-500">Typical Impact</span>
                      <span className="font-mono font-bold text-red-600">{pp.stat}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
