import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, CATEGORIES, MenuCategory, MenuItem, DietaryType } from '../data/menu';
import { FoodCard } from '../components/FoodCard';
import { DietaryIcon } from '../components/DietaryIcon';
import { Search, X, SlidersHorizontal, Sparkles, Utensils } from 'lucide-react';

interface MenuPageProps {
  onSelectDish: (dish: MenuItem) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onSelectDish }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<DietaryType | 'all'>('all');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      // Category match
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      // Dietary match
      if (dietaryFilter !== 'all' && item.dietary !== dietaryFilter) {
        return false;
      }
      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCat = item.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [selectedCategory, dietaryFilter, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-left">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white p-6 sm:p-10 rounded-2xl border border-slate-800 shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider mb-2">
            <Utensils className="w-3 h-3" /> Complete Menu
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            ATTU Complete Menu &amp; Exact Prices
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            All 53+ freshly crafted dishes across 9 categories. From slow-cooked Mughlai biryani to street-style chowmein, juicy burgers, momos, and crispy cutlets. All prices in Indian Rupees (₹).
          </p>
        </div>
        <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-15 pointer-events-none hidden md:block">
          <img
            src="/src/assets/images/fast_food_spread_combo_1793116377960.jpg"
            alt="Food background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Filter and Search Bar Section */}
      <div className="space-y-4">
        {/* Search Input & Sorters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search dishes (e.g. biryani, chowmein, momo, burger, lollipop)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Dietary Filter Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-xl shadow-2xs shrink-0 overflow-x-auto">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                dietaryFilter === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                dietaryFilter === 'non-veg'
                  ? 'bg-red-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <DietaryIcon type="non-veg" />
              <span>Non-Veg</span>
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <DietaryIcon type="veg" />
              <span>Veg</span>
            </button>
            <button
              onClick={() => setDietaryFilter('egg')}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                dietaryFilter === 'egg'
                  ? 'bg-amber-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <DietaryIcon type="egg" />
              <span>Egg</span>
            </button>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-slate-500 hidden sm:block" />
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="py-2 px-3 text-xs bg-white rounded-xl border border-slate-300 text-slate-700 focus:outline-none focus:ring-1 focus:ring-red-600 shadow-2xs font-medium cursor-pointer"
            >
              <option value="default">Default Order</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Navigation Bar (Interactive Filter Tabs) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              selectedCategory === 'All'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Categories ({MENU_ITEMS.length})
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.id} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Results Header Count and Active Filter Notice */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
        <div>
          <span>Showing <strong className="text-slate-800 font-semibold">{filteredItems.length}</strong> of {MENU_ITEMS.length} dishes</span>
          {selectedCategory !== 'All' && <span> in <strong>{selectedCategory}</strong></span>}
          {dietaryFilter !== 'all' && <span> (filtered by {dietaryFilter})</span>}
        </div>
        {(selectedCategory !== 'All' || dietaryFilter !== 'all' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory('All');
              setDietaryFilter('all');
              setSearchQuery('');
            }}
            className="text-red-600 hover:text-red-700 font-semibold cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Menu Cards Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map(dish => (
            <FoodCard key={dish.id} item={dish} onSelect={onSelectDish} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 space-y-3">
          <p className="text-sm font-semibold text-slate-700">No dishes found matching your criteria</p>
          <p className="text-xs text-slate-500">
            Try adjusting your search query or removing the dietary filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setDietaryFilter('all');
              setSearchQuery('');
            }}
            className="mt-2 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Menu Bottom Transparency Note */}
      <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 leading-relaxed">
        <p>
          <strong>Authentic Pricing Commitment:</strong> All 53+ items listed above reflect the official prices of ATTU Restaurant &amp; Fast Food. Prices are inclusive of all standard counter packing. For bulk orders or catering inquiries, contact us directly.
        </p>
      </div>
    </div>
  );
};
