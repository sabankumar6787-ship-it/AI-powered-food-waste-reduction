import React from 'react';
import { Leaf, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo }) => {
  return (
    <footer className="bg-charcoal-950 text-charcoal-300 border-t border-charcoal-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-charcoal-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-wheat-400/20 border border-wheat-400/40 flex items-center justify-center text-wheat-400">
                <Leaf className="w-4 h-4" />
              </div>
              <span className="font-bold tracking-tight text-xl text-ivory-50 font-sans">
                AURA
              </span>
            </div>

            <p className="text-sm text-charcoal-400 max-w-sm leading-relaxed">
              AI-Powered Food Waste Reduction System. Helping restaurants, hotels, canteens, and food retailers optimize operations and eliminate waste.
            </p>

            <p className="text-xs font-serif italic text-wheat-400 font-normal">
              “Building smarter food operations for a more sustainable future.”
            </p>
          </div>

          {/* Navigation Links Column 1 */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase font-bold text-ivory-100 tracking-wider">
              System Modules
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#modules" className="hover:text-wheat-300 transition-colors">Demand Forecasting</a></li>
              <li><a href="#modules" className="hover:text-wheat-300 transition-colors">Inventory Intelligence</a></li>
              <li><a href="#modules" className="hover:text-wheat-300 transition-colors">Waste Prediction</a></li>
              <li><a href="#modules" className="hover:text-wheat-300 transition-colors">Dynamic Pricing Engine</a></li>
              <li><a href="#modules" className="hover:text-wheat-300 transition-colors">Smart Donation Workflow</a></li>
              <li><a href="#modules" className="hover:text-wheat-300 transition-colors">Operations Analytics</a></li>
            </ul>
          </div>

          {/* Navigation Links Column 2 */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase font-bold text-ivory-100 tracking-wider">
              Platform & Architecture
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#problem" className="hover:text-wheat-300 transition-colors">Operational Problem</a></li>
              <li><a href="#how-it-works" className="hover:text-wheat-300 transition-colors">5-Step Process Workflow</a></li>
              <li><a href="#dashboard" className="hover:text-wheat-300 transition-colors">Live Dashboard Console</a></li>
              <li><a href="#lifecycle" className="hover:text-wheat-300 transition-colors">Food Lifecycle Management</a></li>
              <li><a href="#impact" className="hover:text-wheat-300 transition-colors">Impact & ROI Calculator</a></li>
              <li><a href="#architecture" className="hover:text-wheat-300 transition-colors">API Architecture Diagram</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-500 gap-4">
          <div>
            © {new Date().getFullYear()} AURA AI Food Waste Reduction System. All rights reserved.
          </div>

          <div className="flex items-center space-x-6 text-charcoal-400">
            <a href="#" className="hover:text-wheat-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-wheat-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-wheat-300 transition-colors">Security Audit</a>
            <button onClick={onOpenDemo} className="text-wheat-400 font-semibold hover:underline">
              Book System Demo
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
