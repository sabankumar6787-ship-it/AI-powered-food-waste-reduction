import React, { useState, useEffect } from 'react';
import { X, PackageCheck, Plus, Search, Filter, AlertTriangle, Tag, HeartHandshake, Trash2, CheckCircle2, Warehouse } from 'lucide-react';

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  qty: number;
  unit: string;
  storage: string;
  expiryDays: number;
  status: 'Fresh' | 'Expiring Soon' | 'Expired';
}

interface InventoryManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InventoryManagerModal: React.FC<InventoryManagerModalProps> = ({ isOpen, onClose }) => {
  const initialItems: InventoryItem[] = [
    { id: 'INV-101', name: 'Organic Basmati Rice', category: 'Grains & Dry', qty: 45.0, unit: 'kg', storage: 'Dry Store A2', expiryDays: 14, status: 'Fresh' },
    { id: 'INV-102', name: 'Fresh Poultry Breast', category: 'Poultry & Meat', qty: 18.5, unit: 'kg', storage: 'Cold Room 01', expiryDays: 1, status: 'Expiring Soon' },
    { id: 'INV-103', name: 'Heavy Whipping Cream', category: 'Dairy', qty: 12.0, unit: 'L', storage: 'Cold Room 02', expiryDays: 2, status: 'Expiring Soon' },
    { id: 'INV-104', name: 'Heirloom Vine Tomatoes', category: 'Produce', qty: 24.0, unit: 'kg', storage: 'Walk-in Prep', expiryDays: 3, status: 'Expiring Soon' },
    { id: 'INV-105', name: 'Artisan Sourdough Loaves', category: 'Bakery', qty: 16, unit: 'units', storage: 'Bakery Shelf', expiryDays: 0, status: 'Expiring Soon' },
    { id: 'INV-106', name: 'Atlantic Salmon Fillets', category: 'Seafood', qty: 14.2, unit: 'kg', storage: 'Fish Cold Well', expiryDays: 5, status: 'Fresh' },
  ];

  const [items, setItems] = useState<InventoryItem[]>(() => {
    const saved = localStorage.getItem('aura_inventory_items');
    return saved ? JSON.parse(saved) : initialItems;
  });

  const [filter, setFilter] = useState<'All' | 'Fresh' | 'Expiring Soon' | 'Expired'>('All');
  const [search, setSearch] = useState<string>('');
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [notification, setNotification] = useState<string | null>(null);

  // Form State
  const [newName, setNewName] = useState('');
  const [newCategory, setNewCategory] = useState('Produce');
  const [newQty, setNewQty] = useState('');
  const [newUnit, setNewUnit] = useState('kg');
  const [newStorage, setNewStorage] = useState('Cold Room 01');
  const [newExpiryDays, setNewExpiryDays] = useState('3');

  useEffect(() => {
    localStorage.setItem('aura_inventory_items', JSON.stringify(items));
  }, [items]);

  if (!isOpen) return null;

  const showNotice = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newQty) return;

    const expiryNum = parseInt(newExpiryDays, 10);
    const newItem: InventoryItem = {
      id: `INV-${Math.floor(100 + Math.random() * 900)}`,
      name: newName,
      category: newCategory,
      qty: parseFloat(newQty),
      unit: newUnit,
      storage: newStorage,
      expiryDays: expiryNum,
      status: expiryNum <= 0 ? 'Expired' : expiryNum <= 3 ? 'Expiring Soon' : 'Fresh',
    };

    setItems([newItem, ...items]);
    setShowAddForm(false);
    setNewName('');
    setNewQty('');
    showNotice(`✓ Added ${newItem.name} (${newItem.qty} ${newItem.unit}) to Inventory.`);
  };

  const handleAction = (id: string, actionType: 'discount' | 'donate' | 'waste') => {
    const item = items.find(i => i.id === id);
    if (!item) return;

    if (actionType === 'discount') {
      showNotice(`🏷️ Applied 25% dynamic discount on ${item.name} POS menu item.`);
    } else if (actionType === 'donate') {
      setItems(items.filter(i => i.id !== id));
      showNotice(`📦 Routed ${item.qty} ${item.unit} of ${item.name} to Shelter Donation Manifest.`);
    } else if (actionType === 'waste') {
      setItems(items.filter(i => i.id !== id));
      showNotice(`🗑️ Logged ${item.qty} ${item.unit} of ${item.name} in Waste Audit Report.`);
    }
  };

  const filteredItems = items.filter(item => {
    const matchesFilter = filter === 'All' ? true : item.status === filter;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                          item.category.toLowerCase().includes(search.toLowerCase()) ||
                          item.storage.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-ivory-100 border border-warmgray-300 rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-modal relative overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-warmgray-300">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-sage-100 border border-sage-300 flex items-center justify-center text-sage-600">
              <PackageCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="inline-flex items-center space-x-1.5 text-[10px] font-mono uppercase font-bold text-sage-700 bg-sage-100 px-2 py-0.5 rounded">
                <span>REAL-TIME INVENTORY WMS</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal-900 font-sans mt-0.5">
                Cold Room & Stock Batch Manager
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

        {/* Toolbar */}
        <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-warmgray-200">
          
          {/* Search */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-charcoal-400" />
            <input
              type="text"
              placeholder="Search ingredient, category, or storage room..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-ivory-50 border border-warmgray-300 rounded-lg text-xs font-medium text-charcoal-900 focus:outline-none focus:border-wheat-400"
            />
          </div>

          {/* Status Filters */}
          <div className="flex items-center space-x-1 bg-ivory-200 p-1 rounded-lg border border-warmgray-300">
            {(['All', 'Fresh', 'Expiring Soon', 'Expired'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded text-[11px] font-bold transition-all ${
                  filter === f ? 'bg-charcoal-900 text-ivory-50' : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowAddForm(true)}
            className="px-3.5 py-1.5 bg-wheat-400 hover:bg-wheat-500 text-charcoal-900 font-bold text-xs rounded-lg shadow-sm flex items-center space-x-1 shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Add Stock Batch</span>
          </button>

        </div>

        {/* Notification Toast */}
        {notification && (
          <div className="my-2 p-2.5 bg-sage-100 border border-sage-300 rounded-lg text-xs text-sage-800 font-medium animate-fadeIn">
            {notification}
          </div>
        )}

        {/* Table Body */}
        <div className="py-4 overflow-y-auto flex-1">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-ivory-200/60 border-b border-warmgray-300 text-charcoal-600 uppercase font-mono text-[10px]">
                <th className="py-2.5 px-3 font-semibold">Batch ID & Ingredient</th>
                <th className="py-2.5 px-3 font-semibold">Category</th>
                <th className="py-2.5 px-3 font-semibold">Available Qty</th>
                <th className="py-2.5 px-3 font-semibold">Storage Room</th>
                <th className="py-2.5 px-3 font-semibold">Shelf Life</th>
                <th className="py-2.5 px-3 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-warmgray-200">
              {filteredItems.length > 0 ? (
                filteredItems.map(item => (
                  <tr key={item.id} className="hover:bg-ivory-50 transition-colors">
                    <td className="py-3 px-3">
                      <div className="font-bold text-charcoal-900">{item.name}</div>
                      <div className="font-mono text-[10px] text-charcoal-500">{item.id}</div>
                    </td>
                    <td className="py-3 px-3 text-charcoal-700 font-medium">{item.category}</td>
                    <td className="py-3 px-3 font-mono font-bold text-charcoal-900">{item.qty} {item.unit}</td>
                    <td className="py-3 px-3 text-charcoal-600 flex items-center space-x-1">
                      <Warehouse className="w-3.5 h-3.5 text-wheat-600" />
                      <span>{item.storage}</span>
                    </td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        item.status === 'Expiring Soon' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                        item.status === 'Expired' ? 'bg-red-100 text-red-700 border border-red-200' :
                        'bg-sage-100 text-sage-700 border border-sage-200'
                      }`}>
                        {item.expiryDays === 0 ? 'Expires Today' : `${item.expiryDays} Days Left`}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <div className="flex items-center justify-end space-x-1.5">
                        <button
                          onClick={() => handleAction(item.id, 'discount')}
                          title="Apply Dynamic Markdown"
                          className="p-1.5 bg-wheat-100 text-wheat-800 hover:bg-wheat-200 rounded border border-wheat-300"
                        >
                          <Tag className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleAction(item.id, 'donate')}
                          title="Route to Shelter Donation"
                          className="p-1.5 bg-sage-100 text-sage-800 hover:bg-sage-200 rounded border border-sage-300"
                        >
                          <HeartHandshake className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleAction(item.id, 'waste')}
                          title="Log as Waste"
                          className="p-1.5 bg-red-100 text-red-700 hover:bg-red-200 rounded border border-red-300"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-charcoal-500 text-xs">
                    No inventory items match the current search or status filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-warmgray-300 flex items-center justify-between text-xs text-charcoal-500">
          <span className="font-mono">Total Tracked Batches: {items.length}</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-charcoal-900 text-ivory-50 font-bold rounded-lg text-xs"
          >
            Return to Dashboard
          </button>
        </div>

      </div>

      {/* Add Item Form Sub-Modal */}
      {showAddForm && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-sm">
          <div className="bg-ivory-100 rounded-2xl border border-warmgray-300 max-w-md w-full p-6 shadow-modal space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-warmgray-200">
              <h4 className="text-base font-bold text-charcoal-900">Add New Inventory Batch</h4>
              <button onClick={() => setShowAddForm(false)} className="text-charcoal-500 font-bold">✕</button>
            </div>

            <form onSubmit={handleAddItem} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-charcoal-800">Ingredient Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Fresh Mozzarella Cheese"
                  value={newName}
                  onChange={e => setNewName(e.target.value)}
                  className="w-full p-2 bg-ivory-50 border border-warmgray-300 rounded text-xs text-charcoal-900 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-charcoal-800">Quantity</label>
                  <input
                    type="number"
                    step="0.1"
                    required
                    placeholder="15.0"
                    value={newQty}
                    onChange={e => setNewQty(e.target.value)}
                    className="w-full p-2 bg-ivory-50 border border-warmgray-300 rounded text-xs text-charcoal-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-charcoal-800">Unit</label>
                  <select
                    value={newUnit}
                    onChange={e => setNewUnit(e.target.value)}
                    className="w-full p-2 bg-ivory-50 border border-warmgray-300 rounded text-xs text-charcoal-900"
                  >
                    <option value="kg">kg</option>
                    <option value="L">L</option>
                    <option value="units">units</option>
                    <option value="boxes">boxes</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-charcoal-800">Storage Room</label>
                  <select
                    value={newStorage}
                    onChange={e => setNewStorage(e.target.value)}
                    className="w-full p-2 bg-ivory-50 border border-warmgray-300 rounded text-xs text-charcoal-900"
                  >
                    <option value="Cold Room 01">Cold Room 01</option>
                    <option value="Cold Room 02">Cold Room 02</option>
                    <option value="Dry Store A1">Dry Store A1</option>
                    <option value="Walk-in Prep">Walk-in Prep</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-charcoal-800">Days Until Expiry</label>
                  <input
                    type="number"
                    min="0"
                    max="60"
                    required
                    value={newExpiryDays}
                    onChange={e => setNewExpiryDays(e.target.value)}
                    className="w-full p-2 bg-ivory-50 border border-warmgray-300 rounded text-xs text-charcoal-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-3 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-3 py-1.5 bg-ivory-200 text-charcoal-800 text-xs font-semibold rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-charcoal-900 text-ivory-50 text-xs font-bold rounded"
                >
                  Save Stock Batch
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
