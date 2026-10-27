import React, { useState } from 'react';
import { MenuItem } from '../data/menu';
import { useCart } from '../context/CartContext';
import { DietaryIcon } from './DietaryIcon';
import { Plus, Minus, Check, Flame, Sparkles } from 'lucide-react';

interface FoodCardProps {
  item: MenuItem;
  onSelect?: (item: MenuItem) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item, onSelect }) => {
  const { items, addItem, updateQuantity } = useCart();
  const [imageError, setImageError] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const cartItem = items.find(ci => ci.item.id === item.id);
  const quantity = cartItem?.quantity || 0;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(item, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateQuantity(item.id, 1);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateQuantity(item.id, -1);
  };

  return (
    <div
      onClick={() => onSelect?.(item)}
      className="group relative flex flex-col justify-between bg-white rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 overflow-hidden text-left"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden cursor-pointer">
        {!imageError ? (
          <img
            src={item.imageUrl}
            alt={item.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-4 text-center">
            <span className="text-3xl mb-1 select-none">
              {item.category === 'Biryani' ? '🍲' :
               item.category === 'Pizza' ? '🍕' :
               item.category === 'Noodles' ? '🍜' :
               item.category === 'Rice' ? '🍚' :
               item.category === 'Momo' ? '🥟' :
               item.category === 'Bread' ? '🍔' :
               item.category === 'Roll' ? '🌯' : '🍗'}
            </span>
            <span className="text-xs font-medium text-slate-300 tracking-wide line-clamp-1">{item.name}</span>
            <span className="text-[10px] text-amber-400 font-mono mt-1 uppercase tracking-widest">{item.category}</span>
          </div>
        )}

        {/* Subtle Gradient Scrim for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

        {/* Top Badges / Indicators */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10">
          <DietaryIcon type={item.dietary} className="shadow-xs" />
          {item.isPopular && (
            <span className="bg-red-600 text-white text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-sm uppercase shadow-xs flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" /> Popular
            </span>
          )}
          {item.isChefSpecial && (
            <span className="bg-amber-600 text-white text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-sm uppercase shadow-xs">
              Special
            </span>
          )}
        </div>

        {/* Spice Level Indicator */}
        {item.spiceLevel > 1 && (
          <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-amber-300 px-1.5 py-0.5 rounded text-[10px] flex items-center gap-0.5 font-medium">
            <Flame className="w-3 h-3 text-red-500 fill-red-500" />
            <span>Spicy</span>
          </div>
        )}

        {/* Bottom overlay price on image for immediate visibility */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white z-10 pointer-events-none">
          <span className="text-xs text-slate-200 drop-shadow-xs font-medium">{item.category}</span>
          <span className="text-base font-bold tabular-nums text-white bg-black/75 px-2 py-0.5 rounded-md backdrop-blur-xs shadow-xs">
            ₹{item.price}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-semibold text-slate-900 text-base leading-snug group-hover:text-red-700 transition-colors">
              {item.name}
            </h3>
          </div>
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {item.description}
          </p>
        </div>

        {/* Card Footer: Exact Price and Action Button */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[11px] text-slate-600">Price</span>
            <span className="text-lg font-bold text-slate-900 tabular-nums">
              ₹{item.price}
            </span>
          </div>

          {quantity === 0 ? (
            <button
              type="button"
              onClick={handleAdd}
              aria-label={`Add ${item.name} to order`}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 flex items-center gap-1.5 shadow-xs whitespace-nowrap shrink-0 ${
                justAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-red-600 hover:bg-red-700 active:scale-95 text-white'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Added
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" /> Add
                </>
              )}
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={handleDecrement}
                aria-label={`Decrease quantity of ${item.name}`}
                className="w-6 h-6 rounded flex items-center justify-center bg-white text-slate-700 hover:text-red-600 hover:bg-red-50 transition-colors shadow-xs"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="text-xs font-bold text-slate-900 tabular-nums px-1 min-w-[16px] text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={handleIncrement}
                aria-label={`Increase quantity of ${item.name}`}
                className="w-6 h-6 rounded flex items-center justify-center bg-red-600 text-white hover:bg-red-700 transition-colors shadow-xs"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
