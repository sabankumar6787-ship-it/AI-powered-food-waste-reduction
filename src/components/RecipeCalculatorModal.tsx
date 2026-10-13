import React, { useState } from 'react';
import { X, ChefHat, Sparkles, CheckCircle2 } from 'lucide-react';

interface RecipeCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecipeCalculatorModal: React.FC<RecipeCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [selectedDish, setSelectedDish] = useState<string>('Royal Basmati Biryani');
  const [covers, setCovers] = useState<number>(250);
  const [synced, setSynced] = useState<boolean>(false);

  if (!isOpen) return null;

  const recipes = [
    {
      name: 'Royal Basmati Biryani',
      category: 'Main Entree',
      baseCovers: 50,
      costPerCover: 85,
      ingredients: [
        { name: 'Basmati Rice', baseQty: 10, unit: 'kg', costPerUnit: 120, risk: 'Medium' },
        { name: 'Fresh Chicken / Meat', baseQty: 12.5, unit: 'kg', costPerUnit: 240, risk: 'High' },
        { name: 'Whole Spices & Ghee', baseQty: 2.0, unit: 'kg', costPerUnit: 450, risk: 'Low' },
        { name: 'Onions & Yogurt Base', baseQty: 6.0, unit: 'kg', costPerUnit: 50, risk: 'Medium' },
      ]
    },
    {
      name: 'Atlantic Salmon Bowl',
      category: 'Seafood Entree',
      baseCovers: 50,
      costPerCover: 160,
      ingredients: [
        { name: 'Fresh Salmon Fillet', baseQty: 9.0, unit: 'kg', costPerUnit: 850, risk: 'High' },
        { name: 'Quinoa & Wild Rice', baseQty: 6.0, unit: 'kg', costPerUnit: 180, risk: 'Low' },
        { name: 'Avocado & Greens', baseQty: 5.0, unit: 'kg', costPerUnit: 220, risk: 'High' },
        { name: 'Citrus Dressing', baseQty: 3.0, unit: 'L', costPerUnit: 140, risk: 'Low' },
      ]
    },
    {
      name: 'Artisan Bakery Loaves',
      category: 'Bakery & Prep',
      baseCovers: 50,
      costPerCover: 35,
      ingredients: [
        { name: 'Organic Flour Blend', baseQty: 15.0, unit: 'kg', costPerUnit: 65, risk: 'Low' },
        { name: 'Sourdough Starter & Yeast', baseQty: 1.5, unit: 'kg', costPerUnit: 200, risk: 'Medium' },
        { name: 'Filtered Water & Salt', baseQty: 10.0, unit: 'L', costPerUnit: 10, risk: 'Low' },
      ]
    }
  ];

  const currentRecipe = recipes.find(r => r.name === selectedDish) || recipes[0];
  const scaleFactor = covers / currentRecipe.baseCovers;
  const totalCost = Math.round(currentRecipe.costPerCover * covers);

  const handleSync = () => {
    setSynced(true);
    setTimeout(() => setSynced(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-ivory-100 border border-warmgray-300 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-modal relative overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-warmgray-300">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-wheat-100 border border-wheat-300 flex items-center justify-center text-wheat-600">
              <ChefHat className="w-5 h-5" />
            </div>
            <div>
              <div className="inline-flex items-center space-x-1.5 text-[10px] font-mono uppercase font-bold text-wheat-700 bg-wheat-100 px-2 py-0.5 rounded">
                <Sparkles className="w-3 h-3 text-wheat-600" />
                <span>RECIPE PREP CALCULATOR</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal-900 font-sans mt-0.5">
                Batch Ingredient Decomposition
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

        {/* Content Body */}
        <div className="py-5 space-y-6 overflow-y-auto pr-1">
          
          {/* Dish Selector & Scale Slider */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-charcoal-800">Select Recipe / Dish</label>
              <select
                value={selectedDish}
                onChange={(e) => setSelectedDish(e.target.value)}
                className="w-full px-3 py-2.5 bg-ivory-50 border border-warmgray-300 rounded-lg text-xs font-bold text-charcoal-900 focus:outline-none focus:border-wheat-400 cursor-pointer"
              >
                {recipes.map(r => (
                  <option key={r.name} value={r.name}>{r.name} ({r.category})</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5 bg-ivory-50 p-3 rounded-lg border border-warmgray-200">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-charcoal-700">Target Portion Scale:</span>
                <span className="font-mono text-wheat-600 text-sm font-extrabold">{covers} Covers</span>
              </div>
              <input
                type="range"
                min="20"
                max="1000"
                step="10"
                value={covers}
                onChange={(e) => setCovers(Number(e.target.value))}
                className="w-full h-2 bg-warmgray-300 rounded-lg appearance-none cursor-pointer accent-wheat-500"
              />
            </div>

          </div>

          {/* Metric Summary */}
          <div className="grid grid-cols-3 gap-3 bg-ivory-200/80 p-4 rounded-xl border border-warmgray-300 text-center">
            <div>
              <span className="text-[10px] font-bold text-charcoal-500 uppercase tracking-wider">Estimated Cost / Portion</span>
              <div className="text-lg font-bold text-charcoal-900 font-sans">₹{currentRecipe.costPerCover}</div>
            </div>
            <div>
              <span className="text-[10px] font-bold text-charcoal-500 uppercase tracking-wider">Total Raw Batch Cost</span>
              <div className="text-lg font-bold text-charcoal-900 font-sans">₹{totalCost.toLocaleString()}</div>
            </div>
            <div>
              <span className="text-[10px] font-bold text-charcoal-500 uppercase tracking-wider">Scale Multiplier</span>
              <div className="text-lg font-bold text-wheat-600 font-mono">{scaleFactor.toFixed(1)}x</div>
            </div>
          </div>

          {/* Decomposed Ingredients Table */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold text-charcoal-800">
              <span>Required Raw Ingredients</span>
              <span className="text-[11px] text-charcoal-500 font-mono">Calculated for {covers} Portions</span>
            </div>

            <div className="border border-warmgray-300 rounded-xl overflow-hidden bg-ivory-50">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-ivory-200/60 border-b border-warmgray-300 text-charcoal-600 uppercase font-mono text-[10px]">
                    <th className="py-2.5 px-3 font-semibold">Ingredient</th>
                    <th className="py-2.5 px-3 font-semibold">Scaled Batch Qty</th>
                    <th className="py-2.5 px-3 font-semibold">Est. Ingredient Cost</th>
                    <th className="py-2.5 px-3 font-semibold text-right">Spoilage Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warmgray-200">
                  {currentRecipe.ingredients.map((ing, i) => {
                    const scaledQty = (ing.baseQty * scaleFactor).toFixed(1);
                    const ingCost = Math.round(Number(scaledQty) * ing.costPerUnit);
                    return (
                      <tr key={i} className="hover:bg-ivory-100 transition-colors">
                        <td className="py-2.5 px-3 font-semibold text-charcoal-900">{ing.name}</td>
                        <td className="py-2.5 px-3 font-mono font-bold text-wheat-700">{scaledQty} {ing.unit}</td>
                        <td className="py-2.5 px-3 font-mono text-charcoal-700">₹{ingCost.toLocaleString()}</td>
                        <td className="py-2.5 px-3 text-right">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            ing.risk === 'High' ? 'bg-red-100 text-red-700 border border-red-200' :
                            ing.risk === 'Medium' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                            'bg-sage-100 text-sage-700 border border-sage-200'
                          }`}>
                            {ing.risk} Risk
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {synced && (
            <div className="p-3 bg-sage-100 border border-sage-300 rounded-lg text-xs text-sage-800 flex items-center justify-between animate-fadeIn">
              <span className="font-semibold">
                ✓ Batch targets synced with Kitchen Display System (KDS) & Inventory WMS.
              </span>
              <span className="font-mono text-[10px]">Updated Just Now</span>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-warmgray-300 flex items-center justify-between">
          <span className="text-[11px] text-charcoal-500 font-mono">Auto-scaled with AI Margin Protection</span>
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-ivory-200 hover:bg-ivory-300 text-charcoal-800 text-xs font-semibold rounded-lg"
            >
              Close
            </button>
            <button
              onClick={handleSync}
              className="px-5 py-2 bg-charcoal-900 hover:bg-charcoal-800 text-ivory-50 text-xs font-bold rounded-lg shadow-sm flex items-center space-x-1.5"
            >
              <CheckCircle2 className="w-4 h-4 text-wheat-300" />
              <span>Sync Batch Targets to KDS</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
