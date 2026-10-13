import React, { useState } from 'react';
import { TrendingUp, PackageCheck, AlertCircle, Tag, HeartHandshake, BarChart3, ArrowRight } from 'lucide-react';

export const AiModulesSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const modules = [
    {
      id: 1,
      title: 'Demand Forecasting',
      desc: 'Predict precise ingredient and portion demand based on POS sales, weather, local events, and day-of-week trends.',
      icon: TrendingUp,
      metricLabel: 'Accuracy Rate',
      metricValue: '94.2%',
      metricChange: '+24% vs manual',
      bgClass: 'hover:border-wheat-400',
    },
    {
      id: 2,
      title: 'Inventory Intelligence',
      desc: 'Real-time stock monitoring with shelf-life degradation tracking and automated re-ordering thresholds.',
      icon: PackageCheck,
      metricLabel: 'Shelf Life Extension',
      metricValue: '+3.2 Days',
      metricChange: 'Avg storage gain',
      bgClass: 'hover:border-sage-400',
    },
    {
      id: 3,
      title: 'Waste Prediction',
      desc: 'Algorithmic early-warning engine that flags perishable ingredients at risk of spoilage 48 hours prior.',
      icon: AlertCircle,
      metricLabel: 'Spoilage Risk',
      metricValue: '-18%',
      metricChange: 'Waste avoided',
      bgClass: 'hover:border-wheat-400',
    },
    {
      id: 4,
      title: 'Dynamic Pricing',
      desc: 'Automated discount recommendations for surplus baked goods and prepared items nearing shelf limits.',
      icon: Tag,
      metricLabel: 'Surplus Recovery',
      metricValue: '+42%',
      metricChange: 'Revenue recaptured',
      bgClass: 'hover:border-sage-400',
    },
    {
      id: 5,
      title: 'Smart Donation',
      desc: 'Seamless matching engine that routes high-quality unserved surplus to verified local hunger relief shelters.',
      icon: HeartHandshake,
      metricLabel: 'Food Recovered',
      metricValue: '1.4 Tons',
      metricChange: 'Monthly community impact',
      bgClass: 'hover:border-wheat-400',
    },
    {
      id: 6,
      title: 'Operations Analytics',
      desc: 'Comprehensive executive dashboards converting waste logs into financial ROI and ESG sustainability metrics.',
      icon: BarChart3,
      metricLabel: 'Cost Savings',
      metricValue: '12%',
      metricChange: 'Bottom-line margin boost',
      bgClass: 'hover:border-sage-400',
    },
  ];

  return (
    <section id="modules" className="py-20 md:py-28 bg-ivory-200 border-t border-warmgray-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-wheat-100 border border-wheat-300 text-wheat-600 text-xs font-bold uppercase tracking-wider">
            <span>Modular Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 font-sans tracking-tight">
            One system. <br className="hidden sm:block" />
            <span className="font-serif italic text-wheat-500 font-normal">Multiple intelligence layers.</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            Deploy individually or as an integrated operational stack across single kitchens or multi-location restaurant chains.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m) => {
            const IconComp = m.icon;
            const isHovered = hoveredCard === m.id;
            return (
              <div
                key={m.id}
                onMouseEnter={() => setHoveredCard(m.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-ivory-100 rounded-xl p-7 border border-warmgray-300 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-subtle hover:shadow-card hover:-translate-y-1 ${m.bgClass}`}
              >
                <div className="space-y-4">
                  
                  {/* Minimal Icon Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-lg bg-ivory-200 border border-warmgray-300 flex items-center justify-center text-charcoal-800 transition-colors group-hover:bg-wheat-100">
                      <IconComp className="w-5 h-5 text-wheat-600" />
                    </div>
                    <span className="font-mono text-[10px] text-charcoal-500 uppercase tracking-widest bg-warmgray-200/50 px-2 py-0.5 rounded">
                      MODULE 0{m.id}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 font-sans">{m.title}</h3>
                    <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mt-2">{m.desc}</p>
                  </div>

                </div>

                {/* Micro Metric Footer */}
                <div className="pt-4 border-t border-warmgray-200 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-charcoal-500 uppercase tracking-wider font-semibold">
                      {m.metricLabel}
                    </div>
                    <div className="text-lg font-bold text-charcoal-900 font-sans">{m.metricValue}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-semibold text-sage-600 bg-sage-50 px-2 py-0.5 rounded border border-sage-200">
                      {m.metricChange}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
