import React, { useState } from 'react';
import { Activity, CheckCircle2, Sparkles, Building2, ChefHat, PackageCheck, LineChart, HeartHandshake, Download } from 'lucide-react';

interface LiveDashboardSectionProps {
  onOpenInventory?: () => void;
  onOpenRecipe?: () => void;
  onOpenForecast?: () => void;
  onOpenDonation?: () => void;
}

export const LiveDashboardSection: React.FC<LiveDashboardSectionProps> = ({
  onOpenInventory,
  onOpenRecipe,
  onOpenForecast,
  onOpenDonation,
}) => {
  const [timeframe, setTimeframe] = useState<'today' | 'week' | 'month'>('week');
  const [facility, setFacility] = useState<string>('Grand Bistro & Kitchen');
  const [recApplied, setRecApplied] = useState<boolean>(false);
  const [showAnalysisModal, setShowAnalysisModal] = useState<boolean>(false);

  // Dynamic state based on recommendation application
  const wasteToday = recApplied ? '37.5 kg' : '42.6 kg';
  const wasteAvoided = recApplied ? '23.5 kg' : '18.4 kg';
  const estimatedSavings = recApplied ? '₹10,500' : '₹8,240';
  const forecastAccuracy = recApplied ? '96.1%' : '94.2%';

  // Weekly data points for chart rendering
  const weeklyData = [
    { day: 'Mon', waste: 54, forecast: 50 },
    { day: 'Tue', waste: 48, forecast: 46 },
    { day: 'Wed', waste: 42, forecast: 42 },
    { day: 'Thu', waste: 39, forecast: 40 },
    { day: 'Fri', waste: 62, forecast: 65 },
    { day: 'Sat', waste: 58, forecast: 60 },
    { day: 'Sun', waste: recApplied ? 37.5 : 42.6, forecast: 44 },
  ];

  const categoryBreakdown = [
    { category: 'Prep Trimmings', pct: 35, weight: '14.9 kg', color: 'bg-wheat-400' },
    { category: 'Overproduction', pct: 28, weight: '11.9 kg', color: 'bg-charcoal-700' },
    { category: 'Expired Inventory', pct: 22, weight: '9.3 kg', color: 'bg-red-400' },
    { category: 'Unserved Buffet', pct: 15, weight: '6.5 kg', color: 'bg-sage-500' },
  ];

  const expiryRiskItems = [
    { name: 'Organic Basmati Rice (Prep)', qty: '14.2 kg', shelf: '24 Hours', risk: 'High Risk', action: 'Reduce Prep 12%' },
    { name: 'Fresh Dairy Cream (Unsealed)', qty: '8.5 L', shelf: '36 Hours', risk: 'Medium Risk', action: 'Use in Soup Special' },
    { name: 'Heirloom Tomatoes', qty: '12.0 kg', shelf: '48 Hours', risk: 'Medium Risk', action: 'Apply 15% Markdown' },
    { name: 'Sourdough Loaves', qty: '16 Units', shelf: '18 Hours', risk: 'High Risk', action: 'Route to Shelter' },
  ];

  const handleExportCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," +
      "Day,Waste_Kg,Forecast_Kg\n" +
      weeklyData.map(e => `${e.day},${e.waste},${e.forecast}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `AURA_Waste_Audit_Report_${facility.replace(/\s+/g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="dashboard" className="py-20 md:py-28 bg-ivory-100 bg-grain relative border-t border-warmgray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sage-50 border border-sage-200 text-sage-600 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse"></span>
            <span>Interactive SaaS System Console</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 font-sans tracking-tight">
            Food Operations <span className="font-serif italic text-wheat-500 font-normal">Intelligence</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            Test the live kitchen control console. Launch operational tools, simulate scenarios, and track waste audit logs in real time.
          </p>
        </div>

        {/* Quick Launch Interactive Tools Bar */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button
            onClick={onOpenRecipe}
            className="p-3 bg-ivory-50 hover:bg-wheat-50 border border-warmgray-300 hover:border-wheat-400 rounded-xl flex items-center space-x-2.5 transition-all text-left shadow-subtle group"
          >
            <div className="w-8 h-8 rounded-lg bg-wheat-100 text-wheat-700 flex items-center justify-center shrink-0">
              <ChefHat className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-charcoal-900 group-hover:text-wheat-800">Recipe Calculator</div>
              <div className="text-[10px] text-charcoal-500">Portion Scaling</div>
            </div>
          </button>

          <button
            onClick={onOpenInventory}
            className="p-3 bg-ivory-50 hover:bg-sage-50 border border-warmgray-300 hover:border-sage-400 rounded-xl flex items-center space-x-2.5 transition-all text-left shadow-subtle group"
          >
            <div className="w-8 h-8 rounded-lg bg-sage-100 text-sage-700 flex items-center justify-center shrink-0">
              <PackageCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-charcoal-900 group-hover:text-sage-800">Inventory WMS</div>
              <div className="text-[10px] text-charcoal-500">Batch Stock Manager</div>
            </div>
          </button>

          <button
            onClick={onOpenForecast}
            className="p-3 bg-ivory-50 hover:bg-wheat-50 border border-warmgray-300 hover:border-wheat-400 rounded-xl flex items-center space-x-2.5 transition-all text-left shadow-subtle group"
          >
            <div className="w-8 h-8 rounded-lg bg-wheat-100 text-wheat-700 flex items-center justify-center shrink-0">
              <LineChart className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-charcoal-900 group-hover:text-wheat-800">Scenario Simulator</div>
              <div className="text-[10px] text-charcoal-500">Weather & Crowd Engine</div>
            </div>
          </button>

          <button
            onClick={onOpenDonation}
            className="p-3 bg-ivory-50 hover:bg-sage-50 border border-warmgray-300 hover:border-sage-400 rounded-xl flex items-center space-x-2.5 transition-all text-left shadow-subtle group"
          >
            <div className="w-8 h-8 rounded-lg bg-sage-100 text-sage-700 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-charcoal-900 group-hover:text-sage-800">Donation Dispatch</div>
              <div className="text-[10px] text-charcoal-500">Shelter & CO2e Offset</div>
            </div>
          </button>
        </div>

        {/* Dashboard Frame Wrapper */}
        <div className="mt-8 bg-ivory-50 rounded-2xl border border-warmgray-300 shadow-card overflow-hidden">
          
          {/* Dashboard Header Bar */}
          <div className="bg-ivory-200 px-6 py-4 border-b border-warmgray-300 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-sage-500"></div>
              <h3 className="text-lg font-bold text-charcoal-900 font-sans">Food Operations Console</h3>
              <span className="text-xs font-mono bg-ivory-100 border border-warmgray-300 px-2 py-0.5 rounded text-charcoal-600">
                v3.4 • Enterprise
              </span>
            </div>

            {/* Interactive Filters & Export */}
            <div className="flex flex-wrap items-center gap-3">
              
              <div className="flex items-center space-x-2 bg-ivory-100 border border-warmgray-300 rounded-lg px-3 py-1.5 text-xs font-medium text-charcoal-800">
                <Building2 className="w-3.5 h-3.5 text-wheat-600" />
                <select
                  value={facility}
                  onChange={(e) => setFacility(e.target.value)}
                  className="bg-transparent font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="Grand Bistro & Kitchen">Grand Bistro & Kitchen</option>
                  <option value="Central Kitchen Unit 02">Central Kitchen Unit 02</option>
                  <option value="Corporate Staff Canteen">Corporate Staff Canteen</option>
                  <option value="Banquet & Event Center">Banquet & Event Center</option>
                </select>
              </div>

              <div className="flex items-center bg-ivory-100 border border-warmgray-300 rounded-lg p-1 text-xs font-semibold">
                {(['today', 'week', 'month'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTimeframe(t)}
                    className={`px-3 py-1 rounded capitalize transition-all ${
                      timeframe === t
                        ? 'bg-charcoal-900 text-ivory-50 shadow-sm'
                        : 'text-charcoal-600 hover:text-charcoal-900'
                    }`}
                  >
                    {t === 'today' ? 'Today' : t === 'week' ? 'This Week' : 'This Month'}
                  </button>
                ))}
              </div>

              <button
                onClick={handleExportCSV}
                className="p-1.5 bg-ivory-100 hover:bg-ivory-200 border border-warmgray-300 text-charcoal-800 rounded-lg text-xs font-bold flex items-center space-x-1"
                title="Export Waste Audit CSV"
              >
                <Download className="w-3.5 h-3.5 text-wheat-600" />
                <span className="hidden sm:inline">Export CSV</span>
              </button>

            </div>

          </div>

          {/* Top Metric Cards */}
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-ivory-100 border-b border-warmgray-300">
            
            <div className="bg-ivory-50 p-4 rounded-xl border border-warmgray-300 space-y-1">
              <div className="flex items-center justify-between text-xs text-charcoal-500 font-medium">
                <span>Waste Today</span>
                <span className="text-sage-600 text-[11px] font-bold">↓ 14% vs avg</span>
              </div>
              <div className="text-2xl font-bold font-sans text-charcoal-900">{wasteToday}</div>
              <div className="text-[11px] text-charcoal-500">Target limit: 50.0 kg</div>
            </div>

            <div className="bg-ivory-50 p-4 rounded-xl border border-warmgray-300 space-y-1">
              <div className="flex items-center justify-between text-xs text-charcoal-500 font-medium">
                <span>Waste Avoided</span>
                <span className="text-sage-600 text-[11px] font-bold">Today</span>
              </div>
              <div className="text-2xl font-bold font-sans text-sage-600">{wasteAvoided}</div>
              <div className="text-[11px] text-charcoal-500">Prevented at prep stage</div>
            </div>

            <div className="bg-ivory-50 p-4 rounded-xl border border-warmgray-300 space-y-1">
              <div className="flex items-center justify-between text-xs text-charcoal-500 font-medium">
                <span>Estimated Savings</span>
                <span className="text-wheat-600 text-[11px] font-bold">Direct ROI</span>
              </div>
              <div className="text-2xl font-bold font-sans text-charcoal-900">{estimatedSavings}</div>
              <div className="text-[11px] text-charcoal-500">Cost of avoided overstock</div>
            </div>

            <div className="bg-ivory-50 p-4 rounded-xl border border-warmgray-300 space-y-1">
              <div className="flex items-center justify-between text-xs text-charcoal-500 font-medium">
                <span>Forecast Accuracy</span>
                <span className="text-wheat-600 text-[11px] font-bold">ML Model</span>
              </div>
              <div className="text-2xl font-bold font-sans text-charcoal-900">{forecastAccuracy}</div>
              <div className="text-[11px] text-charcoal-500">Based on last 30 daily runs</div>
            </div>

          </div>

          {/* AI Recommendation Banner */}
          <div className="p-6 bg-wheat-50 border-b border-wheat-200">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-wheat-400 text-charcoal-900 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-wheat-900 uppercase tracking-wider">AI Recommendation</span>
                    <span className="text-[10px] bg-wheat-200 text-wheat-900 font-mono px-2 py-0.5 rounded font-semibold">HIGH IMPACT</span>
                  </div>
                  <p className="text-sm font-semibold text-charcoal-900 mt-1">
                    “Reduce tomorrow’s rice production by 12%. Expected demand is lower based on recent sales, weekday patterns and current inventory.”
                  </p>
                  <p className="text-xs text-charcoal-600 mt-0.5">
                    Estimated savings from applying: <span className="font-bold text-sage-600">5.1 kg waste avoided (₹2,260)</span>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 shrink-0">
                <button
                  onClick={() => setShowAnalysisModal(true)}
                  className="px-4 py-2 bg-ivory-100 hover:bg-ivory-200 text-charcoal-800 border border-warmgray-300 rounded-md text-xs font-semibold transition-colors"
                >
                  View Analysis
                </button>
                <button
                  onClick={() => setRecApplied(!recApplied)}
                  className={`px-5 py-2 rounded-md text-xs font-bold transition-all shadow-sm flex items-center space-x-1.5 ${
                    recApplied
                      ? 'bg-sage-600 text-ivory-50'
                      : 'bg-charcoal-900 hover:bg-charcoal-800 text-ivory-50'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-wheat-300" />
                  <span>{recApplied ? 'Recommendation Applied ✓' : 'Apply Recommendation'}</span>
                </button>
              </div>

            </div>

            {recApplied && (
              <div className="mt-3 p-2.5 bg-sage-100 border border-sage-300 rounded-md text-xs text-sage-800 flex items-center justify-between animate-fadeIn">
                <span className="font-medium">
                  ✓ Target kitchen batch schedule synced with Kitchen POS. Tomorrow's rice allocation set to 31.0 kg.
                </span>
                <span className="font-mono text-[10px] text-sage-700">Refreshed Just Now</span>
              </div>
            )}
          </div>

          {/* Charts & Breakdown Grid */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-ivory-50">
            
            {/* Chart 1: Weekly Waste & Demand Trend (SVG) */}
            <div className="lg:col-span-8 bg-ivory-100 p-5 rounded-xl border border-warmgray-300 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-warmgray-200">
                <div>
                  <h4 className="text-sm font-bold text-charcoal-900">Weekly Food Waste Trend & Demand Forecast</h4>
                  <p className="text-xs text-charcoal-500">Actual Waste (kg) vs AI Forecasted Demand Target</p>
                </div>
                <div className="flex items-center space-x-4 text-xs font-medium">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded bg-wheat-400 inline-block"></span>
                    <span className="text-charcoal-600">Waste (kg)</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-0.5 bg-charcoal-900 inline-block"></span>
                    <span className="text-charcoal-600">Demand Target</span>
                  </div>
                </div>
              </div>

              {/* Custom SVG Bar & Line Chart */}
              <div className="h-56 relative flex items-end justify-between pt-6 px-4 pb-6 bg-ivory-50 rounded-lg border border-warmgray-200">
                {weeklyData.map((d, i) => {
                  const maxVal = 80;
                  const barHeightPct = (d.waste / maxVal) * 100;
                  const targetHeightPct = (d.forecast / maxVal) * 100;

                  return (
                    <div key={i} className="flex-1 flex flex-col items-center h-full justify-end group relative">
                      
                      <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-charcoal-900 text-ivory-50 text-[10px] py-1 px-2 rounded font-mono pointer-events-none z-20 whitespace-nowrap">
                        {d.day}: {d.waste} kg waste | Forecast {d.forecast} kg
                      </div>

                      <div 
                        className="absolute w-8 h-[2px] bg-charcoal-900 z-10 transition-all duration-300"
                        style={{ bottom: `${targetHeightPct}%` }}
                      ></div>

                      <div
                        className={`w-6 rounded-t transition-all duration-500 ${
                          i === 6 && recApplied ? 'bg-sage-500' : 'bg-wheat-400 group-hover:bg-wheat-500'
                        }`}
                        style={{ height: `${barHeightPct}%` }}
                      ></div>

                      <span className="mt-2 text-xs font-bold text-charcoal-600 font-mono">{d.day}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-xs text-charcoal-500 pt-1">
                <span>Peak waste day: Friday (62 kg)</span>
                <span className="text-sage-600 font-semibold">Average daily reduction: -18%</span>
              </div>
            </div>

            {/* Chart 2: Waste Category Distribution */}
            <div className="lg:col-span-4 bg-ivory-100 p-5 rounded-xl border border-warmgray-300 space-y-4 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-charcoal-900">Waste Category Distribution</h4>
                <p className="text-xs text-charcoal-500">Breakdown of total waste logs today</p>

                <div className="mt-6 space-y-3.5">
                  {categoryBreakdown.map((cat, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-charcoal-800">{cat.category}</span>
                        <span className="font-mono text-charcoal-900 font-bold">{cat.weight} ({cat.pct}%)</span>
                      </div>
                      <div className="h-2 w-full bg-warmgray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${cat.color} transition-all duration-500`}
                          style={{ width: `${cat.pct}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-ivory-50 rounded-lg border border-warmgray-200 text-xs text-charcoal-600">
                <span className="font-bold text-charcoal-900">Key Insight:</span> Prep trimmings constitute 35% of waste. Consider ingredient repurposing recipes.
              </div>
            </div>

          </div>

          {/* Bottom Table: Expiry-Risk Inventory Watchlist */}
          <div className="p-6 bg-ivory-100 border-t border-warmgray-300">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-charcoal-900">Expiry-Risk Inventory Watchlist</h4>
              <button
                onClick={onOpenInventory}
                className="text-xs text-wheat-700 font-bold hover:underline"
              >
                Manage Full WMS Inventory →
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-warmgray-300 text-charcoal-500 uppercase font-mono text-[10px]">
                    <th className="pb-2 font-semibold">Ingredient / Product</th>
                    <th className="pb-2 font-semibold">Current Stock</th>
                    <th className="pb-2 font-semibold">Remaining Shelf Life</th>
                    <th className="pb-2 font-semibold">Risk Level</th>
                    <th className="pb-2 font-semibold text-right">AI Suggested Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warmgray-200">
                  {expiryRiskItems.map((item, i) => (
                    <tr key={i} className="hover:bg-ivory-50 transition-colors">
                      <td className="py-3 font-semibold text-charcoal-900">{item.name}</td>
                      <td className="py-3 font-mono text-charcoal-700">{item.qty}</td>
                      <td className="py-3 font-mono text-charcoal-700">{item.shelf}</td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          item.risk === 'High Risk'
                            ? 'bg-red-100 text-red-700 border border-red-200'
                            : 'bg-amber-100 text-amber-800 border border-amber-200'
                        }`}>
                          {item.risk}
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        <button
                          onClick={onOpenInventory}
                          className="text-wheat-700 font-semibold bg-wheat-50 px-2.5 py-1 rounded border border-wheat-200 hover:bg-wheat-100 transition-colors"
                        >
                          {item.action}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>

      {/* Analysis Modal */}
      {showAnalysisModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-sm">
          <div className="bg-ivory-100 rounded-2xl border border-warmgray-300 max-w-lg w-full p-6 shadow-modal space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-warmgray-200">
              <h3 className="text-lg font-bold text-charcoal-900">Recommendation Analysis Breakdown</h3>
              <button
                onClick={() => setShowAnalysisModal(false)}
                className="text-charcoal-500 hover:text-charcoal-900 font-bold"
              >
                ✕
              </button>
            </div>
            
            <p className="text-xs text-charcoal-600">
              Detailed machine learning model weights evaluated for Rice & Grains prep (Tomorrow, Thursday):
            </p>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-3 bg-ivory-50 rounded border border-warmgray-200 flex justify-between">
                <span>Recent 14-Day Sales Trend:</span>
                <span className="font-bold text-red-600">-8.4% Demand</span>
              </div>
              <div className="p-3 bg-ivory-50 rounded border border-warmgray-200 flex justify-between">
                <span>Weather Forecast Correlation:</span>
                <span className="font-bold text-charcoal-800">Clear / High Temp (+2% cold salads)</span>
              </div>
              <div className="p-3 bg-ivory-50 rounded border border-warmgray-200 flex justify-between">
                <span>Current Cold Room Stock:</span>
                <span className="font-bold text-sage-600">14.2 kg raw unbagged</span>
              </div>
              <div className="p-3 bg-wheat-100 rounded border border-wheat-300 flex justify-between">
                <span className="font-bold">Confidence Score:</span>
                <span className="font-bold text-wheat-900">98.4%</span>
              </div>
            </div>

            <button
              onClick={() => setShowAnalysisModal(false)}
              className="w-full py-2.5 bg-charcoal-900 text-ivory-50 font-semibold text-xs rounded-md"
            >
              Close Analysis
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
