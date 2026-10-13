import React, { useState } from 'react';
import { TrendingDown, ArrowDownRight, ArrowUpRight, Calculator, Sparkles, AlertCircle } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const [dailyMeals, setDailyMeals] = useState<number>(800);

  // Interactive impact calculations
  const annualMeals = dailyMeals * 365;
  const estimatedAnnualWasteKg = Math.round(dailyMeals * 0.18 * 365); // 0.18kg waste per meal avg
  const wasteSavedTons = ((estimatedAnnualWasteKg * 0.18) / 1000).toFixed(1); // 18% reduction
  const estimatedAnnualSavingsINR = Math.round(estimatedAnnualWasteKg * 0.18 * 180); // ~ ₹180 per kg food cost
  const formattedSavingsINR = `₹${(estimatedAnnualSavingsINR / 100000).toFixed(2)} Lakhs`;
  const formattedSavingsUSD = `$${Math.round(estimatedAnnualSavingsINR / 83).toLocaleString()}`;

  const metrics = [
    {
      title: 'Food Waste',
      value: '↓ 18%',
      desc: 'Average reduction in total kitchen waste volume across prep and storage.',
      trend: 'down',
      accent: 'text-sage-600',
    },
    {
      title: 'Operating Cost',
      value: '↓ 12%',
      desc: 'Direct bottom-line savings from reduced ingredient over-purchasing.',
      trend: 'down',
      accent: 'text-sage-600',
    },
    {
      title: 'Forecast Accuracy',
      value: '↑ 24%',
      desc: 'Improvement in daily prep prediction over traditional chef estimates.',
      trend: 'up',
      accent: 'text-wheat-600',
    },
    {
      title: 'Surplus Recovery',
      value: '↑ 31%',
      desc: 'Increase in unserved safe food successfully routed to donation channels.',
      trend: 'up',
      accent: 'text-wheat-600',
    },
  ];

  return (
    <section id="impact" className="py-20 md:py-28 bg-ivory-200 border-t border-warmgray-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sage-50 border border-sage-200 text-sage-600 text-xs font-bold uppercase tracking-wider">
            <span>Quantifiable Performance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 font-sans tracking-tight">
            Measure <span className="font-serif italic text-wheat-500 font-normal">what changes.</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            Clear operational benchmarks that turn environmental stewardship into measurable bottom-line performance.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="bg-ivory-100 p-7 rounded-xl border border-warmgray-300 flex flex-col justify-between space-y-4 shadow-subtle hover:shadow-card transition-all"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-charcoal-500">{m.title}</span>
                <div className={`text-4xl sm:text-5xl font-extrabold font-sans mt-3 tracking-tight ${m.accent}`}>
                  {m.value}
                </div>
              </div>
              <p className="text-xs text-charcoal-600 leading-relaxed pt-3 border-t border-warmgray-200">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Impact & Savings Estimator Calculator */}
        <div className="mt-12 bg-ivory-100 rounded-2xl border border-warmgray-300 p-6 sm:p-10 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-wheat-600">
                <Calculator className="w-4 h-4" />
                <span>Interactive ROI Estimator</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-charcoal-900 font-sans">
                  Calculate Your Facility's Potential Savings
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
                  Adjust daily meal production to project annual food waste avoided and direct financial cost savings.
                </p>
              </div>

              {/* Slider Input */}
              <div className="space-y-3 bg-ivory-50 p-5 rounded-xl border border-warmgray-200">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-charcoal-800">Daily Meals Prepared:</span>
                  <span className="font-mono text-wheat-600 text-lg">{dailyMeals.toLocaleString()} Meals/Day</span>
                </div>
                
                <input
                  type="range"
                  min="200"
                  max="5000"
                  step="100"
                  value={dailyMeals}
                  onChange={(e) => setDailyMeals(Number(e.target.value))}
                  className="w-full h-2 bg-warmgray-300 rounded-lg appearance-none cursor-pointer accent-wheat-500"
                />

                <div className="flex justify-between text-[11px] text-charcoal-500 font-mono">
                  <span>200 (Bistro)</span>
                  <span>1,500 (Canteen)</span>
                  <span>5,000+ (Enterprise)</span>
                </div>
              </div>
            </div>

            {/* Calculated Output Box */}
            <div className="lg:col-span-6 bg-charcoal-900 text-ivory-50 p-7 rounded-xl border border-charcoal-700 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-charcoal-700">
                <span className="text-xs font-mono text-wheat-300 uppercase tracking-widest">Projected Annual Impact</span>
                <span className="text-[10px] bg-charcoal-800 text-sage-400 px-2.5 py-1 rounded font-mono font-bold">Target Model</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-charcoal-400">Annual Food Waste Saved</div>
                  <div className="text-3xl font-bold font-sans text-sage-400 mt-1">{wasteSavedTons} Tons</div>
                  <div className="text-[10px] text-charcoal-400 mt-0.5">Prevented from landfill</div>
                </div>

                <div>
                  <div className="text-xs text-charcoal-400">Estimated Cost Savings</div>
                  <div className="text-3xl font-bold font-sans text-wheat-300 mt-1">{formattedSavingsINR}</div>
                  <div className="text-[10px] text-charcoal-400 mt-0.5">Approx. {formattedSavingsUSD}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-charcoal-800 flex items-center justify-between text-xs text-charcoal-300">
                <span>Based on 18% target reduction benchmark</span>
                <span className="text-wheat-300 font-bold">AURA System Target</span>
              </div>
            </div>

          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 flex items-center justify-center space-x-2 text-xs text-charcoal-500 max-w-2xl mx-auto text-center">
          <AlertCircle className="w-4 h-4 text-warmgray-400 shrink-0" />
          <span>
            Impact values shown are illustrative system targets for demonstration and vary depending on facility baseline data.
          </span>
        </div>

      </div>
    </section>
  );
};
