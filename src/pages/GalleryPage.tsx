import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { MENU_ITEMS, MenuItem } from '../data/menu';
import { Eye, X, Utensils, ZoomIn } from 'lucide-react';

interface GalleryPageProps {
  setActivePage: (page: PageId) => void;
  onSelectDish: (dish: MenuItem) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ setActivePage, onSelectDish }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<{
    url: string;
    title: string;
    category: string;
    price?: number;
    description?: string;
  } | null>(null);

  // Gallery items combining our high-res generated hero photos with key dishes
  const galleryItems = [
    {
      id: 'gal-hero-biryani',
      title: 'Authentic Chicken Dum Biryani Handi',
      category: 'Biryani',
      url: '/src/assets/images/hero_biryani_feast_1793116375405.jpg',
      price: 90,
      description: 'Slow-cooked in copper handi with whole spiced egg, saffron potatoes, and caramelized onions.'
    },
    {
      id: 'gal-catering-spread',
      title: 'Grand Catering Buffet Banquet',
      category: 'Catering',
      url: '/src/assets/images/catering_spread_buffet_1793116377372.jpg',
      description: 'Full catering service for weddings, birthdays, and parties with live buffet setups.'
    },
    {
      id: 'gal-fastfood-spread',
      title: 'Fast Food Platter & Appetizers',
      category: 'Snacks',
      url: '/src/assets/images/fast_food_spread_combo_1793116377960.jpg',
      description: 'Crispy chicken lollipops, fried momos with chili sauce, chicken burgers, and chowmein.'
    },
    {
      id: 'gal-delivery-boxes',
      title: 'Fresh Packaged Home Delivery Meals',
      category: 'Delivery',
      url: '/src/assets/images/home_delivery_packaging_1793116378219.jpg',
      description: 'Hot, heat-sealed takeout boxes ready for delivery across Hanskhali.'
    },
    ...MENU_ITEMS.slice(0, 16).map(item => ({
      id: item.id,
      title: item.name,
      category: item.category,
      url: item.imageUrl,
      price: item.price,
      description: item.description
    }))
  ];

  const categories = ['All', 'Biryani', 'Noodles', 'Rice', 'Bread', 'Pizza', 'Momo', 'Snacks', 'Catering'];

  const filteredGallery = galleryItems.filter(item => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-left">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-2">
          <Utensils className="w-3.5 h-3.5" /> Visual Showcase
        </div>
        <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-slate-900">
          Food &amp; Dining Gallery
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
          A visual look at our freshly prepared dum biryanis, wok-tossed chowmein, hand-pinched momos, snacks, and catering events.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedCategory === cat
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredGallery.map((item, idx) => (
          <div
            key={item.id + idx}
            onClick={() => setActiveImage(item)}
            className="group relative rounded-xl overflow-hidden bg-slate-900 aspect-4/3 cursor-pointer shadow-xs hover:shadow-md transition-all"
          >
            <img
              src={item.url}
              alt={item.title}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span className="p-2.5 rounded-full bg-white/90 text-slate-900 shadow-lg">
                <ZoomIn className="w-5 h-5" />
              </span>
            </div>

            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                {item.category}
              </span>
              <h4 className="text-sm font-semibold truncate text-white">
                {item.title}
              </h4>
              {item.price && (
                <span className="text-xs font-mono font-bold text-white">
                  ₹{item.price}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-slate-900 text-white rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] w-full bg-black">
              <img
                src={activeImage.url}
                alt={activeImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    {activeImage.category}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {activeImage.title}
                  </h3>
                </div>
                {activeImage.price && (
                  <span className="text-xl font-black text-amber-400 font-mono">
                    ₹{activeImage.price}
                  </span>
                )}
              </div>

              {activeImage.description && (
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeImage.description}
                </p>
              )}

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => {
                    setActiveImage(null);
                    setActivePage('menu');
                  }}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Order this Dish from Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
