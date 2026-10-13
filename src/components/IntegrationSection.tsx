import React, { useState } from 'react';
import { CreditCard, Server, Package, Utensils, Calendar, HeartHandshake, Code, CheckCircle, Copy } from 'lucide-react';

export const IntegrationSection: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState(false);

  const integrations = [
    {
      title: 'POS Systems',
      category: 'Sales Data Stream',
      desc: 'Real-time sales ticket ingestion from Toast, Square, Oracle Micros, and Lightspeed.',
      icon: CreditCard,
      tech: 'REST / Webhooks',
    },
    {
      title: 'ERP & Purchasing',
      category: 'Procurement Sync',
      desc: 'Seamless purchase order sync with SAP, Oracle NetSuite, and Infor Hospitality.',
      icon: Server,
      tech: 'OData / GraphQL',
    },
    {
      title: 'Inventory & WMS',
      category: 'Stock & Storage',
      desc: 'Automatic batch & shelf-life tracking via MarketMan, BlueCart, and custom ERPs.',
      icon: Package,
      tech: 'Real-time API',
    },
    {
      title: 'Kitchen Management',
      category: 'Station Display',
      desc: 'Direct station prep sheet sync with Kitchen Display Systems (KDS) and prep tablets.',
      icon: Utensils,
      tech: 'WebSocket / KDS API',
    },
    {
      title: 'HR & Scheduling',
      category: 'Labor & Footfall',
      desc: 'Correlate shift staffing patterns and meal counts via 7shifts, Deputy, and Workday.',
      icon: Calendar,
      tech: 'OAuth 2.0 Integration',
    },
    {
      title: 'Donation Platforms',
      category: 'Surplus Recovery',
      desc: 'Automated dispatch to verified food rescue organizations including Too Good To Go, Rescuing Leftover Cuisine, and local food banks.',
      icon: HeartHandshake,
      tech: 'Partner API / Dispatch',
    },
  ];

  const sampleJson = `{
  "event": "demand_prediction.generated",
  "facility_id": "FAC_BISTRO_004",
  "timestamp": "2026-09-16T11:00:00Z",
  "target_date": "2026-09-17",
  "recommendations": [
    {
      "ingredient_id": "ING_RICE_BASMATI",
      "action": "REDUCE_PREP",
      "recommended_kg": 31.0,
      "baseline_kg": 35.2,
      "estimated_waste_saved_kg": 4.2
    }
  ]
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleJson);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="py-20 md:py-28 bg-ivory-100 bg-grain border-t border-warmgray-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-wheat-100 border border-wheat-300 text-wheat-600 text-xs font-bold uppercase tracking-wider">
            <span>Seamless Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 font-sans tracking-tight">
            Fits into the systems <br className="hidden sm:block" />
            <span className="font-serif italic text-wheat-500 font-normal">you already use.</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
            “API-first architecture allows the system to connect with existing operational workflows instead of replacing them.”
          </p>
        </div>

        {/* Integration Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-ivory-50 p-6 rounded-xl border border-warmgray-300 flex flex-col justify-between space-y-4 shadow-subtle hover:border-wheat-400 hover:shadow-card transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-ivory-200 border border-warmgray-300 flex items-center justify-center text-wheat-600">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-charcoal-500 bg-warmgray-200/60 px-2 py-0.5 rounded font-medium">
                      {item.tech}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal-900 font-sans">{item.title}</h3>
                    <div className="text-[11px] font-semibold text-wheat-600 uppercase tracking-wider mt-0.5">
                      {item.category}
                    </div>
                  </div>
                  <p className="text-xs text-charcoal-600 leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-3 border-t border-warmgray-200 flex items-center text-xs font-semibold text-sage-600">
                  <CheckCircle className="w-3.5 h-3.5 mr-1.5" />
                  <span>Plug & Play Adapter Ready</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* API-First Developer Code Box */}
        <div className="mt-12 bg-charcoal-900 text-ivory-50 rounded-2xl p-6 sm:p-8 border border-charcoal-700 shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-charcoal-700 gap-3">
            <div className="flex items-center space-x-2 text-xs font-mono text-wheat-300">
              <Code className="w-4 h-4 text-wheat-400" />
              <span>API Webhook Payload Example</span>
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center space-x-1.5 text-xs font-mono bg-charcoal-800 hover:bg-charcoal-700 text-ivory-100 px-3 py-1.5 rounded border border-charcoal-600 transition-colors w-max"
            >
              {copiedCode ? <CheckCircle className="w-3.5 h-3.5 text-sage-400" /> : <Copy className="w-3.5 h-3.5 text-wheat-300" />}
              <span>{copiedCode ? 'Copied' : 'Copy JSON'}</span>
            </button>
          </div>

          <pre className="mt-4 font-mono text-xs text-wheat-200/90 overflow-x-auto p-4 bg-charcoal-950 rounded-lg border border-charcoal-800 leading-relaxed">
            <code>{sampleJson}</code>
          </pre>
        </div>

      </div>
    </section>
  );
};
