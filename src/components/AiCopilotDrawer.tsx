import React, { useState } from 'react';
import { Sparkles, X, Send, ArrowRight } from 'lucide-react';

interface ChatMessage {
  sender: string;
  text: string;
  action?: { label: string; trigger: () => void } | null;
}

interface AiCopilotDrawerProps {
  onOpenInventory: () => void;
  onOpenRecipe: () => void;
  onOpenForecast: () => void;
  onOpenDonation: () => void;
}

export const AiCopilotDrawer: React.FC<AiCopilotDrawerProps> = ({
  onOpenInventory,
  onOpenRecipe,
  onOpenForecast,
  onOpenDonation,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: 'Hello Chef! I am your AURA AI Kitchen Assistant. How can I help optimize your food operations today?',
      action: null,
    }
  ]);

  const quickPrompts = [
    { label: 'Check Expiring Items Today', actionType: 'inventory' },
    { label: 'Optimize Tomorrow Prep', actionType: 'recipe' },
    { label: 'Test Rain Scenario', actionType: 'forecast' },
    { label: 'Dispatch Surplus Donation', actionType: 'donation' },
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: ChatMessage = { sender: 'user', text, action: null };
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');

    setTimeout(() => {
      let aiText = '';
      let actionObj: { label: string; trigger: () => void } | null = null;

      if (text.toLowerCase().includes('expire') || text.toLowerCase().includes('expiring')) {
        aiText = 'I scanned cold storage sensors. You have 3 items expiring within 24-48 hours: Poultry Breast (18.5kg), Whipping Cream (12L), and Sourdough (16 units). Would you like to open the Inventory Manager to apply dynamic discounts or route them to donation?';
        actionObj = { label: 'Open Inventory Manager', trigger: onOpenInventory };
      } else if (text.toLowerCase().includes('prep') || text.toLowerCase().includes('recipe')) {
        aiText = 'Based on Friday cover predictions (320 guests), I recommend cutting rice prep by 12% (target: 31.0 kg). Open the Recipe Prep Calculator to scale portion ingredients.';
        actionObj = { label: 'Launch Recipe Calculator', trigger: onOpenRecipe };
      } else if (text.toLowerCase().includes('scenario') || text.toLowerCase().includes('rain')) {
        aiText = 'Rainy weather forecast detected for tomorrow. High-temp entree demand is expected to drop by 8%, while soup & stew demand increases by 18%. Test this scenario in the Predictive Simulator.';
        actionObj = { label: 'Open Scenario Simulator', trigger: onOpenForecast };
      } else if (text.toLowerCase().includes('donation') || text.toLowerCase().includes('esg')) {
        aiText = 'You currently have 24.5 kg of unserved safe surplus ready for recovery. Routing this will save ~61.2 kg CO2e carbon emissions. Open the Donation Hub to dispatch driver pickup.';
        actionObj = { label: 'Launch Donation Hub', trigger: onOpenDonation };
      } else {
        aiText = `I have analyzed your query "${text}". System models indicate optimal kitchen performance. Would you like to inspect live cold storage inventory or run a prep forecast?`;
        actionObj = { label: 'Open Inventory WMS', trigger: onOpenInventory };
      }

      setMessages(prev => [...prev, { sender: 'ai', text: aiText, action: actionObj }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Trigger Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-charcoal-900 hover:bg-charcoal-800 text-ivory-50 p-3.5 rounded-full shadow-2xl border border-charcoal-700 flex items-center space-x-2 transition-all hover:scale-105 active:scale-95 group"
      >
        <div className="w-8 h-8 rounded-full bg-wheat-400 text-charcoal-900 flex items-center justify-center font-bold">
          <Sparkles className="w-4 h-4 text-charcoal-900" />
        </div>
        <span className="text-xs font-bold font-sans tracking-wide pr-1 hidden sm:inline">AURA AI Assistant</span>
        <span className="w-2 h-2 rounded-full bg-sage-400 animate-pulse"></span>
      </button>

      {/* Slide-out Drawer */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-full max-w-sm sm:max-w-md bg-ivory-100 border border-warmgray-300 rounded-2xl shadow-modal overflow-hidden flex flex-col h-[520px] animate-fadeIn">
          
          {/* Header */}
          <div className="bg-charcoal-900 text-ivory-50 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-7 h-7 rounded-full bg-wheat-400 text-charcoal-900 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-sans">AURA Kitchen Copilot</h4>
                <span className="text-[10px] text-sage-400 font-mono">Connected • Real-time AI</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-charcoal-400 hover:text-ivory-50">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Stream */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 bg-ivory-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex flex-col space-y-1 ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-xl text-xs max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-charcoal-900 text-ivory-50 rounded-br-none font-medium'
                      : 'bg-ivory-100 border border-warmgray-300 text-charcoal-900 rounded-bl-none shadow-subtle'
                  }`}
                >
                  {m.text}
                </div>

                {m.action && (
                  <button
                    onClick={() => {
                      if (m.action) {
                        m.action.trigger();
                        setIsOpen(false);
                      }
                    }}
                    className="mt-1 text-xs font-bold text-wheat-800 bg-wheat-100 hover:bg-wheat-200 border border-wheat-300 px-3 py-1.5 rounded-lg flex items-center space-x-1 transition-all"
                  >
                    <span>{m.action.label}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Quick Action Chips */}
          <div className="p-2.5 bg-ivory-200/80 border-t border-warmgray-300 flex flex-wrap gap-1.5">
            {quickPrompts.map((qp, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(qp.label)}
                className="text-[10px] font-semibold text-charcoal-800 bg-ivory-100 hover:bg-ivory-50 border border-warmgray-300 px-2.5 py-1 rounded-full transition-colors"
              >
                {qp.label}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="p-3 bg-ivory-100 border-t border-warmgray-300 flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder="Ask AI kitchen assistant..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 bg-ivory-50 border border-warmgray-300 rounded-lg text-xs font-medium text-charcoal-900 focus:outline-none focus:border-wheat-400"
            />
            <button
              type="submit"
              className="p-2 bg-charcoal-900 hover:bg-charcoal-800 text-ivory-50 rounded-lg shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
