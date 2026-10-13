import React, { useState } from 'react';
import { X, HeartHandshake, Building, Download, CheckCircle2, ShieldCheck, Leaf } from 'lucide-react';

interface DonationHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationHubModal: React.FC<DonationHubModalProps> = ({ isOpen, onClose }) => {
  const [shelter, setShelter] = useState<string>('City Harvest Hunger Relief');
  const [dispatched, setDispatched] = useState<boolean>(false);

  if (!isOpen) return null;

  const surplusBatches = [
    { item: 'Unserved Vegetable Pilaf', qty: '12.5 kg', prepTime: '13:00 Today', temp: '68°C (Safe Hot Hold)' },
    { item: 'Whole Sourdough Loaves', qty: '18 Units', prepTime: '08:00 Today', temp: 'Ambient Dry' },
    { item: 'Packaged Fruit Bowls', qty: '22 Cups', prepTime: '10:30 Today', temp: '4°C Cold Storage' },
  ];

  const totalKg = 24.5;
  const co2eSavedKg = (totalKg * 2.5).toFixed(1); // 2.5kg CO2e per kg food waste avoided

  const handleDispatch = () => {
    setDispatched(true);
  };

  const handleDownloadManifest = () => {
    const manifestData = {
      manifest_id: `DON-${Date.now()}`,
      timestamp: new Date().toISOString(),
      facility: "Grand Bistro Central Kitchen",
      partner_shelter: shelter,
      donated_items: surplusBatches,
      metrics: {
        total_weight_kg: totalKg,
        co2e_offset_kg: parseFloat(co2eSavedKg),
        tax_receipt_eligible: true
      }
    };

    const blob = new Blob([JSON.stringify(manifestData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Donation_Manifest_${shelter.replace(/\s+/g, '_')}.json`;
    a.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-ivory-100 border border-warmgray-300 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-modal relative overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-warmgray-300">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-sage-100 border border-sage-300 flex items-center justify-center text-sage-600">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <div className="inline-flex items-center space-x-1.5 text-[10px] font-mono uppercase font-bold text-sage-700 bg-sage-100 px-2 py-0.5 rounded">
                <span>SURPLUS RECOVERY & ESG DISPATCH</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal-900 font-sans mt-0.5">
                Shelter Donation & Carbon Offset Hub
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

        {!dispatched ? (
          <div className="py-5 space-y-5 overflow-y-auto flex-1 pr-1">
            
            {/* Shelter Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-charcoal-800">Select Verified Local Shelter Partner</label>
              <select
                value={shelter}
                onChange={(e) => setShelter(e.target.value)}
                className="w-full px-3 py-2.5 bg-ivory-50 border border-warmgray-300 rounded-lg text-xs font-bold text-charcoal-900 focus:outline-none focus:border-wheat-400"
              >
                <option value="City Harvest Hunger Relief">City Harvest Hunger Relief (0.8 miles away)</option>
                <option value="Hope Community Food Bank">Hope Community Food Bank (1.4 miles away)</option>
                <option value="St. Jude Night Shelter">St. Jude Night Shelter (2.1 miles away)</option>
              </select>
            </div>

            {/* Impact Metric Banner */}
            <div className="grid grid-cols-2 gap-4 bg-sage-50 p-4 rounded-xl border border-sage-200">
              <div>
                <span className="text-[10px] font-bold text-sage-800 uppercase tracking-wider">Total Surplus Weight</span>
                <div className="text-2xl font-bold font-sans text-sage-700">{totalKg} kg Safe Food</div>
                <div className="text-[10px] text-sage-600">~62 Meals Provided</div>
              </div>
              <div>
                <span className="text-[10px] font-bold text-sage-800 uppercase tracking-wider">Carbon Footprint Avoided</span>
                <div className="text-2xl font-bold font-sans text-charcoal-900">{co2eSavedKg} kg CO2e</div>
                <div className="text-[10px] text-sage-600">Landfill Methane Offset</div>
              </div>
            </div>

            {/* Surplus Item Queue Table */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-charcoal-800">
                <span>Safe Unserved Surplus Queue</span>
                <span className="text-[10px] text-sage-600 font-mono">Temp & Safety Audited ✓</span>
              </div>

              <div className="border border-warmgray-300 rounded-xl overflow-hidden bg-ivory-50">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-ivory-200/60 border-b border-warmgray-300 text-charcoal-600 uppercase font-mono text-[10px]">
                      <th className="py-2.5 px-3 font-semibold">Surplus Item</th>
                      <th className="py-2.5 px-3 font-semibold">Quantity</th>
                      <th className="py-2.5 px-3 font-semibold">Prep Timestamp</th>
                      <th className="py-2.5 px-3 font-semibold text-right">Temp Safety Audit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-warmgray-200">
                    {surplusBatches.map((b, i) => (
                      <tr key={i} className="hover:bg-ivory-100">
                        <td className="py-2.5 px-3 font-semibold text-charcoal-900">{b.item}</td>
                        <td className="py-2.5 px-3 font-mono font-bold text-sage-700">{b.qty}</td>
                        <td className="py-2.5 px-3 font-mono text-charcoal-600">{b.prepTime}</td>
                        <td className="py-2.5 px-3 text-right">
                          <span className="bg-sage-100 text-sage-800 px-2 py-0.5 rounded text-[10px] font-bold border border-sage-200">
                            {b.temp}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal-900">Donation Manifest Dispatched!</h3>
            <p className="text-xs text-charcoal-600 max-w-xs mx-auto leading-relaxed">
              Driver pickup request sent to <span className="font-bold text-charcoal-900">{shelter}</span>. <span className="font-bold text-sage-600">{co2eSavedKg} kg CO2e</span> carbon credits recorded for ESG compliance.
            </p>
            <div className="pt-2 flex justify-center space-x-3">
              <button
                onClick={handleDownloadManifest}
                className="px-4 py-2 bg-wheat-400 hover:bg-wheat-500 text-charcoal-900 text-xs font-bold rounded-lg flex items-center space-x-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Manifest JSON</span>
              </button>
              <button
                onClick={() => { setDispatched(false); onClose(); }}
                className="px-4 py-2 bg-charcoal-900 text-ivory-50 text-xs font-bold rounded-lg"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        )}

        {!dispatched && (
          <div className="pt-4 border-t border-warmgray-300 flex items-center justify-between">
            <span className="text-[11px] text-charcoal-500 font-mono">Tax-Deductible ESG Audit Tracking</span>
            <div className="flex items-center space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-ivory-200 text-charcoal-800 text-xs font-semibold rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleDispatch}
                className="px-5 py-2 bg-sage-600 hover:bg-sage-700 text-ivory-50 text-xs font-bold rounded-lg shadow-sm flex items-center space-x-1.5"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Confirm & Dispatch Pickup</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
