import React, { useState } from 'react';
import { X, LineChart, CloudRain, Sun, Flame, Trophy, Music, Building, Sparkles, TrendingUp, AlertTriangle } from 'lucide-react';

interface ForecastSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ForecastSimulatorModal: React.FC<ForecastSimulatorModalProps> = ({ isOpen, onClose }) => {
  const [weather, setWeather] = useState<'Sunny' | 'Rainy' | 'Heatwave' | 'Cold Front'>('Sunny');
  const [event, setEvent] = useState<'None' | 'Stadium Match' | 'Music Festival' | 'Tech Conference'>('Stadium Match');
  const [dayOfWeek, setDayOfWeek] = useState<string>('Friday');

  if (!isOpen) return null;

  // Forecast simulator calculations
  let baseCovers = 320;
  if (dayOfWeek === 'Friday' || dayOfWeek === 'Saturday') baseCovers += 120;
  if (dayOfWeek === 'Sunday') baseCovers += 60;

  if (weather === 'Rainy') baseCovers -= 45;
  if (weather === 'Heatwave') baseCovers += 20;

  if (event === 'Stadium Match') baseCovers += 150;
  if (event === 'Music Festival') baseCovers += 210;
  if (event === 'Tech Conference') baseCovers += 90;

  const estimatedRicePrepKg = Math.round(baseCovers * 0.14);
  const estimatedSoupPrepL = weather === 'Rainy' || weather === 'Cold Front' ? Math.round(baseCovers * 0.18) : Math.round(baseCovers * 0.08);
  const estimatedSaladPrepKg = weather === 'Heatwave' ? Math.round(baseCovers * 0.16) : Math.round(baseCovers * 0.09);
  const wasteRiskScore = event !== 'None' ? 'High Surge Risk' : weather === 'Rainy' ? 'Moderate Risk' : 'Low Spoilage Risk';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-ivory-100 border border-warmgray-300 rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-modal relative overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-warmgray-300">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-wheat-100 border border-wheat-300 flex items-center justify-center text-wheat-600">
              <LineChart className="w-5 h-5" />
            </div>
            <div>
              <div className="inline-flex items-center space-x-1.5 text-[10px] font-mono uppercase font-bold text-wheat-700 bg-wheat-100 px-2 py-0.5 rounded">
                <Sparkles className="w-3 h-3 text-wheat-600" />
                <span>PREDICTIVE SCENARIO ENGINE</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal-900 font-sans mt-0.5">
                Demand & Prep Scenario Simulator
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-charcoal-400 hover:text-charcoal-900 p-1.5 rounded-lg hover:bg-ivory-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Simulator Controls */}
        <div className="py-5 space-y-6 overflow-y-auto flex-1 pr-1">
          
          {/* Inputs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Weather Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-charcoal-800">Weather Condition</label>
              <select
                value={weather}
                onChange={(e) => setWeather(e.target.value as any)}
                className="w-full px-3 py-2 bg-ivory-50 border border-warmgray-300 rounded-lg text-xs font-bold text-charcoal-900 focus:outline-none focus:border-wheat-400"
              >
                <option value="Sunny">☀️ Sunny / Clear</option>
                <option value="Rainy">🌧️ Heavy Rain</option>
                <option value="Heatwave">🔥 Summer Heatwave</option>
                <option value="Cold Front">❄️ Cold Front</option>
              </select>
            </div>

            {/* Event Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-charcoal-800">Nearby Local Event</label>
              <select
                value={event}
                onChange={(e) => setEvent(e.target.value as any)}
                className="w-full px-3 py-2 bg-ivory-50 border border-warmgray-300 rounded-lg text-xs font-bold text-charcoal-900 focus:outline-none focus:border-wheat-400"
              >
                <option value="None">None (Standard Service)</option>
                <option value="Stadium Match">⚽ Stadium Sports Match (+150)</option>
                <option value="Music Festival">🎵 Concert / Festival (+210)</option>
                <option value="Tech Conference">🏢 Tech Conference (+90)</option>
              </select>
            </div>

            {/* Day Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-charcoal-800">Day of Week</label>
              <select
                value={dayOfWeek}
                onChange={(e) => setDayOfWeek(e.target.value)}
                className="w-full px-3 py-2 bg-ivory-50 border border-warmgray-300 rounded-lg text-xs font-bold text-charcoal-900 focus:outline-none focus:border-wheat-400"
              >
                <option value="Monday">Monday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Friday">Friday (Peak Dinner)</option>
                <option value="Saturday">Saturday (Peak Dinner)</option>
                <option value="Sunday">Sunday (Brunch Service)</option>
              </select>
            </div>

          </div>

          {/* Forecasted Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-ivory-200/80 p-4 rounded-xl border border-warmgray-300">
            <div>
              <span className="text-[10px] font-bold text-charcoal-500 uppercase">Simulated Covers</span>
              <div className="text-2xl font-bold font-sans text-charcoal-900">{baseCovers} Guest Covers</div>
              <div className="text-[10px] text-sage-600 font-semibold mt-0.5">Model Confidence: 96.4%</div>
            </div>
            <div>
              <span className="text-[10px] font-bold text-charcoal-500 uppercase">Grains & Rice Prep</span>
              <div className="text-2xl font-bold font-mono text-wheat-700">{estimatedRicePrepKg} kg Target</div>
              <div className="text-[10px] text-charcoal-500 mt-0.5">Based on portion curve</div>
            </div>
            <div>
              <span className="text-[10px] font-bold text-charcoal-500 uppercase">Soups & Hot Prep</span>
              <div className="text-2xl font-bold font-mono text-charcoal-900">{estimatedSoupPrepL} L Target</div>
              <div className="text-[10px] text-charcoal-500 mt-0.5">Weather adjusted</div>
            </div>
            <div>
              <span className="text-[10px] font-bold text-charcoal-500 uppercase">Salads & Cold Prep</span>
              <div className="text-2xl font-bold font-mono text-charcoal-900">{estimatedSaladPrepKg} kg Target</div>
              <div className="text-[10px] text-charcoal-500 mt-0.5">Freshness optimized</div>
            </div>
          </div>

          {/* Dynamic AI Recommendation Card */}
          <div className="p-4 bg-wheat-50 border border-wheat-300 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-wheat-900 uppercase">
              <span className="flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-wheat-600" />
                <span>Simulated AI Kitchen Guidance</span>
              </span>
              <span className="bg-wheat-200 px-2 py-0.5 rounded text-[10px]">{wasteRiskScore}</span>
            </div>
            <p className="text-xs text-charcoal-800 leading-relaxed font-semibold">
              “For {dayOfWeek} service with {weather.toLowerCase()} weather and {event.toLowerCase()} crowd flow: Increase quick-serve appetizer prep by 15% and cap rice prep at {estimatedRicePrepKg} kg to prevent end-of-shift buffet overproduction.”
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-warmgray-300 flex items-center justify-between">
          <span className="text-[11px] text-charcoal-500 font-mono">Neural Forecast Engine v3.4</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-charcoal-900 text-ivory-50 text-xs font-bold rounded-lg"
          >
            Apply Scenario to Dashboard
          </button>
        </div>

      </div>
    </div>
  );
};
