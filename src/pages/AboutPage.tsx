import React from 'react';
import { PageId } from '../components/Navbar';
import { RESTAURANT_INFO } from '../data/restaurant';
import { Utensils, Award, HeartHandshake, MapPin, Phone, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  setActivePage: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActivePage }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-left">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
            About Our Restaurant
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
            ATTU Restaurant &amp; Fast Food
          </h1>
          <p className="text-base text-amber-300 font-medium italic">
            &ldquo;{RESTAURANT_INFO.tagline}&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
            Located on Vivekananda Sarani in Hanskhali, Nadia, West Bengal, ATTU Restaurant &amp; Fast Food is dedicated to serving authentic, flavorful, and freshly prepared dishes to our community.
          </p>
        </div>
      </div>

      {/* Culinary Identity & Offerings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-black text-slate-900 font-display">
            Authentic Flavors, Fresh Ingredients
          </h2>
          <p>
            At ATTU Restaurant &amp; Fast Food, our culinary approach combines the time-honored traditions of Bengal-Mughlai cooking with the vibrant, wok-tossed excitement of Indo-Chinese street fare and everyday fast food classics.
          </p>
          <p>
            Whether you are ordering our signature <strong>Chicken Dum Biryani</strong> layered with fragrant basmati and tender spiced aloo, savoring a plate of crisp <strong>Egg Chicken Chowmein</strong>, or biting into a fresh <strong>Gandharaj Lime Momo</strong>, every recipe is made to order using quality spices and farm-fresh ingredients.
          </p>
          <p>
            We take pride in maintaining an honest, customer-first kitchen with strict cleanliness standards, rapid service, and fair pricing for every guest.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setActivePage('menu')}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Our Menu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
          <img
            src="/src/assets/images/fast_food_spread_combo_1793116377960.jpg"
            alt="ATTU Restaurant Food Spread"
            className="w-full aspect-[4/3] object-cover"
          />
        </div>
      </div>

      {/* Core Specialties Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
            <Utensils className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">Mughlai Biryani</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Slow-cooked Kolkata-style dum biryani with long basmati grains, whole spiced eggs, melt-in-mouth potatoes, and tender chicken or mutton pieces.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">Indo-Chinese Wok</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            High-flame wok cooking bringing smoky &ldquo;wok hei&rdquo; flavor to egg, chicken, and mixed chowmein, Hakka noodles, fried rice, and Shanghai dishes.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">Snacks &amp; Fast Food</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            From Kolkata kathi rolls, crispy chicken lollipops, and Bengali dimer devil to juicy burgers, sandwiches, and stone-style pizzas.
          </p>
        </div>
      </div>

      {/* Location Strip */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-900 font-bold text-base">
            <MapPin className="w-4 h-4 text-red-600" />
            <span>Visit Us on Vivekananda Sarani</span>
          </div>
          <p className="text-xs text-slate-600">
            {RESTAURANT_INFO.address.full} · Open 12:00 PM – 10:30 PM Daily
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Call +91 75014 96177</span>
          </a>
        </div>
      </div>
    </div>
  );
};
