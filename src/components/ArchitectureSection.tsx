import React, { useState } from 'react';
import { Database, Cpu, BrainCircuit, LayoutDashboard, ShieldCheck, ArrowDown, Sparkles } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<number>(2);

  const layers = [
    {
      id: 0,
      title: 'DATA SOURCES LAYER',
      sub: 'Multi-stream Raw Operational Data Ingestion',
      icon: Database,
      nodes: ['POS Terminal Stream', 'IoT Cold Room Sensors', 'Inventory WMS Database', 'Historical Sales Logs', 'Weather & Event APIs'],
      desc: 'Connects directly with POS, IoT temp monitors, and local event streams via encrypted SSL channels.',
      color: 'border-warmgray-300 bg-ivory-50',
    },
    {
      id: 1,
      title: 'DATA PROCESSING LAYER',
      sub: 'Ingestion, Cleaning & Recipe Decomposition',
      icon: Cpu,
      nodes: ['Real-Time Stream Processing', 'Data Normalization', 'Recipe Ingredient Mapping', 'Noise Filtering'],
      desc: 'Cleanses raw sales records and decomposes dishes into baseline ingredient weights.',
      color: 'border-warmgray-300 bg-ivory-50',
    },
    {
      id: 2,
      title: 'AI / ML ENGINE LAYER',
      sub: 'Core Predictive & Optimization Models',
      icon: BrainCircuit,
      nodes: ['Demand Forecasting ML', 'Spoilage Risk Model', 'Dynamic Pricing Engine', 'Donation Routing AI'],
      desc: 'Neural networks execute real-time probabilistic forecasts for inventory decay and cover demand.',
      color: 'border-wheat-400 bg-wheat-50/60 ring-1 ring-wheat-400',
    },
    {
      id: 3,
      title: 'DECISION LAYER',
      sub: 'Actionable Interfaces & Automated Workflows',
      icon: LayoutDashboard,
      nodes: ['Executive Dashboard', 'Kitchen KDS Prep Alerts', 'Dynamic Markdown Trigger', 'Donation Dispatch'],
      desc: 'Translates raw predictions into plain-language kitchen prep numbers and automated POS markdowns.',
      color: 'border-warmgray-300 bg-ivory-50',
    },
    {
      id: 4,
      title: 'BUSINESS OUTCOMES LAYER',
      sub: 'Quantifiable Operational & ESG Value',
      icon: ShieldCheck,
      nodes: ['Less Waste (-18%)', 'Lower Operating Cost (-12%)', 'Better Prep Planning', 'ESG Carbon Offset'],
      desc: 'Delivers immediate gross margin improvement, audit-ready carbon credits, and community food rescue.',
      color: 'border-sage-300 bg-sage-50/50',
    },
  ];

  return (
    <section id="architecture" className="py-20 md:py-28 bg-ivory-200 border-t border-warmgray-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-wheat-100 border border-wheat-300 text-wheat-600 text-xs font-bold uppercase tracking-wider">
            <span>System Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 font-sans tracking-tight">
            Built for speed, <br className="hidden sm:block" />
            <span className="font-serif italic text-wheat-500 font-normal">reliability, and scale.</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            An end-to-end technical overview showing how raw kitchen data moves from ingestion to actionable decisions.
          </p>
        </div>

        {/* Visual Architecture Diagram Stack */}
        <div className="mt-14 max-w-4xl mx-auto space-y-4">
          {layers.map((layer, idx) => {
            const IconComp = layer.icon;
            const isSelected = selectedLayer === layer.id;
            return (
              <React.Fragment key={layer.id}>
                
                {/* Layer Block */}
                <div
                  onClick={() => setSelectedLayer(layer.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer shadow-subtle hover:shadow-card ${layer.color} ${
                    isSelected ? 'ring-2 ring-wheat-400' : ''
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-ivory-100 border border-warmgray-300 flex items-center justify-center text-wheat-600 shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-[10px] uppercase font-bold text-wheat-700 bg-wheat-100 px-2 py-0.5 rounded">
                            LAYER 0{idx + 1}
                          </span>
                          <span className="text-xs text-charcoal-500 font-medium">{layer.sub}</span>
                        </div>
                        <h3 className="text-lg font-bold text-charcoal-900 font-sans mt-0.5">{layer.title}</h3>
                      </div>
                    </div>

                    <div className="text-xs text-charcoal-600 font-medium max-w-xs">
                      {layer.desc}
                    </div>

                  </div>

                  {/* Component Node Pills */}
                  <div className="mt-4 pt-4 border-t border-warmgray-200/80 flex flex-wrap gap-2">
                    {layer.nodes.map((node, nIdx) => (
                      <span
                        key={nIdx}
                        className="text-xs font-mono font-medium bg-ivory-100 border border-warmgray-300 text-charcoal-800 px-3 py-1 rounded-md"
                      >
                        {node}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Connecting Arrow Down */}
                {idx < layers.length - 1 && (
                  <div className="flex justify-center my-1">
                    <div className="w-8 h-8 rounded-full bg-ivory-100 border border-warmgray-300 flex items-center justify-center text-wheat-500 shadow-subtle">
                      <ArrowDown className="w-4 h-4 animate-pulse" />
                    </div>
                  </div>
                )}

              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
};
