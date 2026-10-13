import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, ArrowUpRight, Wrench } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenInventory?: () => void;
  onOpenRecipe?: () => void;
  onOpenForecast?: () => void;
  onOpenDonation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDemo,
  onOpenInventory,
  onOpenRecipe,
  onOpenForecast,
  onOpenDonation,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Problem', href: '#problem' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'AI Modules', href: '#modules' },
    { name: 'Console', href: '#dashboard' },
    { name: 'Lifecycle', href: '#lifecycle' },
    { name: 'Impact', href: '#impact' },
    { name: 'Architecture', href: '#architecture' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory-100/95 backdrop-blur-md border-b border-warmgray-200 py-3 shadow-subtle'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Status */}
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center space-x-2.5 group">
              <div className="w-9 h-9 rounded-full bg-wheat-400/15 border border-wheat-400/40 flex items-center justify-center text-wheat-600 transition-transform group-hover:scale-105">
                <Leaf className="w-5 h-5 text-wheat-600" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-xl text-charcoal-900 font-sans">
                  AURA
                </span>
                <span className="text-[10px] uppercase tracking-widest text-charcoal-500 font-semibold -mt-1">
                  Food Waste Intelligence
                </span>
              </div>
            </a>

            {/* AI SYSTEM LIVE Indicator */}
            <div className="hidden md:flex items-center space-x-2 bg-sage-50 border border-sage-200 text-sage-600 px-2.5 py-1 rounded-full text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-500"></span>
              </span>
              <span className="tracking-wider text-[11px] font-semibold">AI SYSTEM • LIVE</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-charcoal-600 hover:text-charcoal-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Launch Tools & CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            {onOpenInventory && (
              <button
                onClick={onOpenInventory}
                className="text-xs font-bold text-charcoal-800 bg-ivory-200 hover:bg-wheat-100 border border-warmgray-300 px-3 py-2 rounded-md transition-colors"
              >
                WMS Stock
              </button>
            )}

            <button
              onClick={onOpenDemo}
              className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider bg-charcoal-900 text-ivory-50 px-4 py-2.5 rounded-md hover:bg-charcoal-800 transition-all shadow-sm hover:shadow active:scale-[0.98]"
            >
              <span>Request Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-wheat-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenDemo}
              className="text-xs font-bold bg-wheat-400 text-charcoal-900 px-3 py-1.5 rounded-md"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal-800 hover:text-charcoal-900 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-ivory-100 border-b border-warmgray-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex items-center justify-between pb-3 border-b border-warmgray-200">
            <div className="flex items-center space-x-2 bg-sage-50 border border-sage-200 text-sage-600 px-2.5 py-1 rounded-full text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse"></span>
              <span className="text-[11px] font-semibold uppercase tracking-wider">AI System Live</span>
            </div>
          </div>
          <div className="flex flex-col space-y-2.5 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-charcoal-700 hover:text-charcoal-900 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-warmgray-200">
            {onOpenRecipe && (
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenRecipe(); }}
                className="p-2 bg-ivory-200 text-charcoal-900 text-xs font-bold rounded"
              >
                Recipe Prep
              </button>
            )}
            {onOpenInventory && (
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenInventory(); }}
                className="p-2 bg-ivory-200 text-charcoal-900 text-xs font-bold rounded"
              >
                Inventory WMS
              </button>
            )}
            {onOpenForecast && (
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenForecast(); }}
                className="p-2 bg-ivory-200 text-charcoal-900 text-xs font-bold rounded"
              >
                Forecast Sim
              </button>
            )}
            {onOpenDonation && (
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenDonation(); }}
                className="p-2 bg-ivory-200 text-charcoal-900 text-xs font-bold rounded"
              >
                Donation Hub
              </button>
            )}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full text-center text-sm font-bold bg-charcoal-900 text-ivory-50 py-3 rounded-md shadow-sm"
            >
              Request System Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
