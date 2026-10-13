import React, { useState } from 'react';
import { X, CheckCircle2, Building2, Calendar, Mail, User, Utensils, Sparkles } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    facilityType: 'Hotel / Restaurant',
    dailyMeals: '500 - 1,500 Meals/Day',
    preferredDate: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3s
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-ivory-100 border border-warmgray-300 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-modal relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-charcoal-400 hover:text-charcoal-900 transition-colors p-1 rounded-lg hover:bg-ivory-200"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            
            {/* Modal Title */}
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded bg-wheat-100 text-wheat-700 text-xs font-mono font-semibold">
                <Sparkles className="w-3 h-3 text-wheat-600" />
                <span>ENTERPRISE SYSTEM DEMO</span>
              </div>
              <h3 className="text-2xl font-bold text-charcoal-900 font-sans">
                Schedule Live System Walkthrough
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Connect with our food operations engineers to see AURA running live with your POS and inventory data models.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="space-y-1">
                <label className="text-xs font-semibold text-charcoal-800">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3 text-charcoal-400" />
                  <input
                    type="text"
                    required
                    placeholder="Chef Marcus Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-ivory-50 border border-warmgray-300 rounded-lg text-xs font-medium text-charcoal-900 focus:outline-none focus:border-wheat-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-charcoal-800">Work Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-3 text-charcoal-400" />
                  <input
                    type="email"
                    required
                    placeholder="marcus@grandbistro.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-ivory-50 border border-warmgray-300 rounded-lg text-xs font-medium text-charcoal-900 focus:outline-none focus:border-wheat-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-charcoal-800">Facility Type</label>
                  <select
                    value={formData.facilityType}
                    onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                    className="w-full px-3 py-2.5 bg-ivory-50 border border-warmgray-300 rounded-lg text-xs font-medium text-charcoal-900 focus:outline-none focus:border-wheat-400"
                  >
                    <option value="Hotel / Restaurant">Hotel / Restaurant</option>
                    <option value="Central Production Kitchen">Central Production Kitchen</option>
                    <option value="Corporate Staff Canteen">Corporate Staff Canteen</option>
                    <option value="Retail Bakery / Grab&Go">Retail Bakery / Grab&Go</option>
                    <option value="Supermarket / Food Retail">Supermarket / Food Retail</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-charcoal-800">Daily Prep Scale</label>
                  <select
                    value={formData.dailyMeals}
                    onChange={(e) => setFormData({ ...formData, dailyMeals: e.target.value })}
                    className="w-full px-3 py-2.5 bg-ivory-50 border border-warmgray-300 rounded-lg text-xs font-medium text-charcoal-900 focus:outline-none focus:border-wheat-400"
                  >
                    <option value="Under 500 Meals/Day">Under 500 Meals/Day</option>
                    <option value="500 - 1,500 Meals/Day">500 - 1,500 Meals/Day</option>
                    <option value="1,500 - 5,000 Meals/Day">1,500 - 5,000 Meals/Day</option>
                    <option value="5,000+ Enterprise">5,000+ Enterprise</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-charcoal-800">Preferred Date</label>
                <div className="relative">
                  <Calendar className="w-4 h-4 absolute left-3 top-3 text-charcoal-400" />
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-ivory-50 border border-warmgray-300 rounded-lg text-xs font-medium text-charcoal-900 focus:outline-none focus:border-wheat-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 bg-charcoal-900 hover:bg-charcoal-800 text-ivory-50 font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all"
              >
                Confirm System Demo Request
              </button>

            </form>

            <p className="text-[10px] text-center text-charcoal-500">
              No credit card required. Demo includes custom data simulation tailored to your POS menu.
            </p>

          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal-900">Demo Scheduled!</h3>
            <p className="text-xs text-charcoal-600 max-w-xs mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-charcoal-900">{formData.name}</span>. Our food operations engineering team has sent calendar invitation details to <span className="font-mono text-wheat-600 font-bold">{formData.email}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-charcoal-900 text-ivory-50 rounded-lg text-xs font-bold"
            >
              Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
