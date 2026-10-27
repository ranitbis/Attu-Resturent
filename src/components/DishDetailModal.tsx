import React, { useState } from 'react';
import { MenuItem } from '../data/menu';
import { useCart } from '../context/CartContext';
import { DietaryIcon } from './DietaryIcon';
import { X, Plus, Minus, Flame, Sparkles, ShoppingBag, Check } from 'lucide-react';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose }) => {
  const { items, addItem, updateQuantity } = useCart();
  const [imageError, setImageError] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  if (!dish) return null;

  const cartItem = items.find(ci => ci.item.id === dish.id);
  const quantity = cartItem?.quantity || 0;

  const handleAdd = () => {
    addItem(dish, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-left"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
          aria-label="Close dish modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Image */}
        <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
          {!imageError ? (
            <img
              src={dish.imageUrl}
              alt={dish.name}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-4 text-center">
              <span className="text-4xl mb-2">🍽️</span>
              <span className="text-sm font-semibold text-slate-200">{dish.name}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
            <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
              {dish.category}
            </span>
            <span className="text-2xl font-black font-mono text-white tabular-nums drop-shadow-md">
              ₹{dish.price}
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2">
            <DietaryIcon type={dish.dietary} className="w-4 h-4" />
            <h3 className="text-xl font-bold text-slate-900 font-display">
              {dish.name}
            </h3>
            {dish.isPopular && (
              <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Popular
              </span>
            )}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {dish.description}
          </p>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <span>Category: <strong className="text-slate-800">{dish.category}</strong></span>
              {dish.spiceLevel > 1 && (
                <span className="flex items-center gap-1 text-red-600 font-medium">
                  <Flame className="w-3.5 h-3.5 fill-red-600" /> Spicy Preparation
                </span>
              )}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
            <div>
              <span className="text-[11px] text-slate-600 block">Exact Price</span>
              <span className="text-2xl font-black text-slate-900 font-mono tabular-nums">
                ₹{dish.price}
              </span>
            </div>

            {quantity === 0 ? (
              <button
                onClick={handleAdd}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 shadow-xs cursor-pointer ${
                  justAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-red-600 hover:bg-red-700 text-white active:scale-95'
                }`}
              >
                {justAdded ? (
                  <>
                    <Check className="w-4 h-4" /> Added to Basket
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" /> Add to Order
                  </>
                )}
              </button>
            ) : (
              <div className="flex items-center gap-3 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => updateQuantity(dish.id, -1)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center bg-white text-slate-700 hover:text-red-600 shadow-xs transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm font-bold text-slate-900 tabular-nums font-mono min-w-[20px] text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => updateQuantity(dish.id, 1)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center bg-red-600 text-white hover:bg-red-700 shadow-xs transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
