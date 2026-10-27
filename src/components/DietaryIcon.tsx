import React from 'react';
import { DietaryType } from '../data/menu';

export const DietaryIcon: React.FC<{ type: DietaryType; className?: string }> = ({
  type,
  className = 'w-3.5 h-3.5',
}) => {
  if (type === 'veg') {
    return (
      <span
        title="Pure Vegetarian"
        className={`inline-flex items-center justify-center border border-emerald-600 p-[2px] rounded-xs bg-white shrink-0 ${className}`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
      </span>
    );
  }

  if (type === 'egg') {
    return (
      <span
        title="Contains Egg"
        className={`inline-flex items-center justify-center border border-amber-500 p-[2px] rounded-xs bg-white shrink-0 ${className}`}
      >
        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
      </span>
    );
  }

  return (
    <span
      title="Non-Vegetarian"
      className={`inline-flex items-center justify-center border border-red-600 p-[2px] rounded-xs bg-white shrink-0 ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-red-600"></span>
    </span>
  );
};
