import React from 'react';
import { PageId } from '../components/Navbar';
import { RESTAURANT_INFO } from '../data/restaurant';
import { MENU_ITEMS, CATEGORIES } from '../data/menu';
import { FoodCard } from '../components/FoodCard';
import {
  Phone,
  ArrowRight,
  MapPin,
  Clock,
  Truck,
  Users,
  UtensilsCrossed,
  Sparkles,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

interface HomePageProps {
  setActivePage: (page: PageId) => void;
  onSelectDish: (dish: (typeof MENU_ITEMS)[0]) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActivePage, onSelectDish }) => {
  // Curated popular items across categories
  const featuredDishes = MENU_ITEMS.filter(
    item =>
      item.id === 'biryani-chicken' ||
      item.id === 'momo-gandharaj-chicken' ||
      item.id === 'noodle-egg-chicken-chowmein' ||
      item.id === 'pizza-barbecue-chicken' ||
      item.id === 'snack-chicken-lollipop' ||
      item.id === 'bread-chicken-cheese-burger'
  );

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_biryani_feast_1793116375405.jpg"
            alt="Authentic Biryani Feast at ATTU Restaurant"
            className="w-full h-full object-cover opacity-25 filter blur-xs scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Brand Wordmark and Location Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/70 border border-red-800/60 text-red-400 text-xs font-semibold tracking-wider uppercase">
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>Hanskhali, Nadia · West Bengal</span>
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-display leading-[1.1]">
                  ATTU Restaurant <br />
                  <span className="text-red-500 font-extrabold">&amp; Fast Food</span>
                </h1>
                <p className="mt-3 text-lg sm:text-xl font-medium text-amber-400 italic">
                  &ldquo;{RESTAURANT_INFO.tagline}&rdquo;
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Experience authentic Kolkata-style Dum Biryani, Indo-Chinese chowmein and hakka noodles, handmade momos, flaky rolls, and irresistible fast food snacks. Prepared fresh every day with genuine passion.
              </p>

              {/* Primary Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setActivePage('menu')}
                  className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-all shadow-lg shadow-red-900/30 flex items-center gap-2 active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <span>Explore Complete Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-sm transition-all border border-slate-700 flex items-center gap-2 active:scale-95 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm transition-all border border-slate-800 flex items-center gap-2 whitespace-nowrap"
                >
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Key Trust & Operational Info */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="block text-slate-200 font-semibold">12:00 PM – 10:30 PM</span>
                    <span>Every Day</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-red-500 shrink-0" />
                  <div>
                    <span className="block text-slate-200 font-semibold">Home Delivery</span>
                    <span>Hanskhali &amp; Nearby</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="block text-slate-200 font-semibold">Event Catering</span>
                    <span>Custom Quotations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group">
                <img
                  src="/src/assets/images/hero_biryani_feast_1793116375405.jpg"
                  alt="ATTU Signature Chicken Biryani"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-amber-500 text-slate-950 mb-1">
                    Signature Dish
                  </span>
                  <h3 className="text-xl font-bold text-white">Chicken Dum Biryani</h3>
                  <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                    Slow-cooked in copper handi with egg, aloo &amp; fragrant spices
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-black text-amber-400 font-mono">₹90</span>
                    <button
                      onClick={() => setActivePage('menu')}
                      className="text-xs font-semibold text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      Order from Menu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Business Services Spotlight (Home Delivery & Catering) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Home Delivery */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="relative h-52 bg-slate-900 overflow-hidden">
              <img
                src="/src/assets/images/home_delivery_packaging_1793116378219.jpg"
                alt="ATTU Home Delivery Service"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-xs flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5" /> Home Delivery
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold font-display">
                  Home Delivery Available
                </h3>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                &ldquo;Enjoy your favourite food from ATTU Restaurant &amp; Fast Food at home.&rdquo;
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Hot and fresh meals dispatched directly to your doorstep in Hanskhali and surrounding areas. Exact delivery charges and times confirmed on order.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActivePage('menu')}
                  className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>Order Food</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call to Order</span>
                </a>
                <button
                  onClick={() => setActivePage('delivery')}
                  className="text-xs font-medium text-slate-600 hover:text-slate-900 underline underline-offset-2 ml-auto"
                >
                  Delivery Info
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Catering Services */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="relative h-52 bg-slate-900 overflow-hidden">
              <img
                src="/src/assets/images/catering_spread_buffet_1793116377372.jpg"
                alt="ATTU Catering Services"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-xs flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Catering Service
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold font-display">
                  Catering Services by ATTU
                </h3>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                &ldquo;Planning a celebration or special event? Contact ATTU for catering enquiries.&rdquo;
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Specialized catering for birthdays, weddings, family gatherings, corporate get-togethers, and festivals. Custom menus and live fast food stations available.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActivePage('catering')}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>Request Catering Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="px-4 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-700" />
                  <span>Call for Catering</span>
                </a>
                <button
                  onClick={() => setActivePage('catering')}
                  className="text-xs font-medium text-slate-600 hover:text-slate-900 underline underline-offset-2 ml-auto"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Selection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Customer Favorites
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Featured Menu Highlights
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Popular dishes prepared fresh to order with authentic recipes and exact prices.
            </p>
          </div>

          <button
            onClick={() => setActivePage('menu')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 transition-colors cursor-pointer"
          >
            <span>View All 53+ Dishes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDishes.map(dish => (
            <FoodCard key={dish.id} item={dish} onSelect={onSelectDish} />
          ))}
        </div>
      </section>

      {/* Popular Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            Explore Menu Categories
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Browse our full repertoire of Indo-Chinese specialties, authentic biryanis, and snacks.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActivePage('menu')}
              className="group p-4 bg-white rounded-xl border border-slate-200 hover:border-red-500 hover:shadow-md transition-all text-left flex flex-col justify-between cursor-pointer"
            >
              <div>
                <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">
                  {cat.id === 'Biryani' ? '🍲' :
                   cat.id === 'Pizza' ? '🍕' :
                   cat.id === 'Noodles' ? '🍜' :
                   cat.id === 'Rice' ? '🍚' :
                   cat.id === 'Momo' ? '🥟' :
                   cat.id === 'Bread' ? '🍔' :
                   cat.id === 'Roll' ? '🌯' :
                   cat.id === 'Shanghai' ? '🥢' : '🍗'}
                </span>
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-red-600 transition-colors">
                  {cat.name}
                </h3>
              </div>
              <span className="text-[11px] text-slate-400 font-mono mt-3">
                {cat.count} items
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Location & Opening Hours Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
                  Visit Us Today
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mt-1">
                  Welcome to ATTU Restaurant
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Located conveniently on Vivekananda Sarani in Hanskhali, Nadia. Drop by for counter takeaway, cozy dining, or call for local home delivery.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Full Address</span>
                    <span>{RESTAURANT_INFO.address.full}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Operating Hours</span>
                    <span>{RESTAURANT_INFO.openingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Direct Phone</span>
                    <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="font-mono text-amber-400 hover:underline">
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold text-xs transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" /> Get Directions <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> Message on WhatsApp
                </a>
              </div>
            </div>

            {/* Visual map preview / fast food combo platter */}
            <div className="relative min-h-[300px] bg-slate-800">
              <img
                src="/src/assets/images/fast_food_spread_combo_1793116377960.jpg"
                alt="ATTU Restaurant Fast Food Specialties"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-slate-900/90 backdrop-blur-xs p-4 rounded-xl border border-slate-700 text-xs">
                  <p className="font-bold text-white mb-1">Authentic Fast Food &amp; Biryani</p>
                  <p className="text-slate-300">
                    Prepared fresh to order in our clean kitchen on Vivekananda Sarani.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
