import React, { useState } from 'react';
import { CalendarCheck, ShoppingCart, Warehouse, ChefHat, Tag, RefreshCw, HeartHandshake, ArrowRight, Check } from 'lucide-react';

export const FoodLifecycleSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number>(0);

  const stages = [
    {
      id: 0,
      name: 'PLAN',
      title: 'Demand Prediction',
      icon: CalendarCheck,
      action: 'Machine Learning Forecasts',
      summary: 'ML algorithms predict exact covers, footfall, and ingredient requirements 3 to 7 days before service.',
      features: [
        'Historical cover analysis',
        'Weather & event correlation',
        'Menu item popularity modeling',
        'Seasonal consumption curves'
      ],
      impact: '24% Higher Forecast Accuracy',
    },
    {
      id: 1,
      name: 'PURCHASE',
      title: 'Smart Procurement',
      icon: ShoppingCart,
      action: 'Automated Purchase Orders',
      summary: 'Automated order suggestions based on current inventory levels, expected lead times, and prep forecasts.',
      features: [
        'Supplier lead-time sync',
        'Safety stock minimization',
        'Batch size optimization',
        'Price variance monitoring'
      ],
      impact: '12% Lower Holding Cost',
    },
    {
      id: 2,
      name: 'STORE',
      title: 'Expiry Monitoring',
      icon: Warehouse,
      action: 'IoT Cold Room Tracking',
      summary: 'Sensors monitor storage temperature, humidity, and remaining shelf life for high-risk perishables.',
      features: [
        'FIFO inventory rotation alerts',
        'Cold storage temp anomalies',
        'Batch expiration countdowns',
        'Degradation risk scoring'
      ],
      impact: '3.2 Days Shelf Life Ext.',
    },
    {
      id: 3,
      name: 'PREPARE',
      title: 'Production Optimization',
      icon: ChefHat,
      action: 'Real-time Prep Sheets',
      summary: 'Kitchen display systems show chefs dynamic batch preparation quantities updated continuously throughout service.',
      features: [
        'Dynamic batch scaling',
        'Prep trim loss reduction',
        'Station-by-station targets',
        'Shift handoff logs'
      ],
      impact: '18% Less Kitchen Waste',
    },
    {
      id: 4,
      name: 'SELL',
      title: 'Dynamic Pricing',
      icon: Tag,
      action: 'Targeted Markdowns',
      summary: 'Automated pricing adjustments for grab-and-go or retail items nearing shelf limit during off-peak hours.',
      features: [
        'POS markdown automation',
        'Off-peak happy hour pushes',
        'Bundle suggestions',
        'Digital menu board sync'
      ],
      impact: '+42% Surplus Sales',
    },
    {
      id: 5,
      name: 'SURPLUS',
      title: 'Redistribution Recs',
      icon: RefreshCw,
      action: 'Surplus Identification',
      summary: 'Identifies unserved, safe-to-consume food items immediately after service and routes them for recovery.',
      features: [
        'Food safety time/temp audit',
        'Packaging requirement check',
        'Internal staff meal allocation',
        'Flash sale dispatch'
      ],
      impact: 'Zero Safe Food Wasted',
    },
    {
      id: 6,
      name: 'DONATE / RECOVER',
      title: 'Community Dispatch',
      icon: HeartHandshake,
      action: 'Verified Shelter Matching',
      summary: 'Automated logistics coordination connecting surplus food with certified local hunger relief organizations.',
      features: [
        'Automated shelter pickup alert',
        'Tax-deductible donation receipt',
        'CO2e carbon offset logging',
        'ESG compliance export'
      ],
      impact: '31% Higher Recovery',
    },
  ];

  return (
    <section id="lifecycle" className="py-20 md:py-28 bg-ivory-200 border-t border-warmgray-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-wheat-100 border border-wheat-300 text-wheat-600 text-xs font-bold uppercase tracking-wider">
            <span>End-to-End Control</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 font-sans tracking-tight">
            Intelligence across the <br className="hidden sm:block" />
            <span className="font-serif italic text-wheat-500 font-normal">entire food lifecycle.</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            From farm procurement to final redistribution, AI optimizes every single transition point.
          </p>
        </div>

        {/* Horizontal Lifecycle Stages Bar */}
        <div className="mt-14 overflow-x-auto pb-4">
          <div className="flex items-center min-w-max space-x-2 p-2 bg-ivory-100 rounded-2xl border border-warmgray-300">
            {stages.map((stg, idx) => {
              const IconComponent = stg.icon;
              const isSelected = selectedStage === idx;
              return (
                <button
                  key={stg.id}
                  onClick={() => setSelectedStage(idx)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all ${
                    isSelected
                      ? 'bg-charcoal-900 text-ivory-50 shadow-sm'
                      : 'text-charcoal-700 hover:text-charcoal-900 hover:bg-ivory-200'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${isSelected ? 'text-wheat-300' : 'text-wheat-600'}`} />
                  <span className="text-xs font-bold tracking-wider">{stg.name}</span>
                  {idx < stages.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-warmgray-400 ml-1 hidden sm:inline" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Card */}
        <div className="mt-6 bg-ivory-100 rounded-2xl border border-warmgray-300 p-6 sm:p-10 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono font-bold bg-wheat-100 text-wheat-800 px-3 py-1 rounded">
                  STAGE 0{selectedStage + 1} OF 07
                </span>
                <span className="text-xs font-semibold text-sage-600 uppercase tracking-wider">
                  {stages[selectedStage].action}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-charcoal-900 font-sans">
                  {stages[selectedStage].name}: {stages[selectedStage].title}
                </h3>
                <p className="text-sm sm:text-base text-charcoal-600 mt-2 leading-relaxed">
                  {stages[selectedStage].summary}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {stages[selectedStage].features.map((feat, i) => (
                  <div key={i} className="flex items-center space-x-2.5 text-xs text-charcoal-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Metric Card */}
            <div className="lg:col-span-5 bg-ivory-50 p-6 rounded-xl border border-warmgray-300 space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-charcoal-500 uppercase tracking-widest">Stage Target Result</span>
                <div className="text-2xl font-bold font-sans text-charcoal-900 mt-1">
                  {stages[selectedStage].impact}
                </div>
                <p className="text-xs text-charcoal-600 mt-2">
                  System continuous audit verifies impact score every 24 hours against baseline operational logs.
                </p>
              </div>

              <div className="pt-4 border-t border-warmgray-200 flex items-center justify-between text-xs font-mono text-charcoal-500">
                <span>AI Module: {stages[selectedStage].name}_ENGINE</span>
                <span className="text-sage-600 font-bold">Enabled</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
