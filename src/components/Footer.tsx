import React from 'react';
import { PageId } from './Navbar';
import { RESTAURANT_INFO } from '../data/restaurant';
import { Phone, MapPin, Clock, MessageSquare, ExternalLink } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: PageId) => void;
  onOpenPolicy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onOpenPolicy }) => {
  const handleNav = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Identity */}
          <div className="space-y-4">
            <div>
              <span className="text-2xl font-black text-white font-display tracking-tight">
                ATTU
              </span>
              <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mt-0.5">
                Restaurant &amp; Fast Food
              </p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              &ldquo;{RESTAURANT_INFO.tagline}&rdquo; — Serving authentic Mughlai Dum Biryani, Indo-Chinese Noodles, crispy snacks, handcrafted momos, and delicious fast food in Hanskhali, Nadia.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 text-xs font-medium hover:bg-emerald-900 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 text-xs font-medium hover:bg-slate-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" /> Call
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('menu')} className="hover:text-white transition-colors">
                  Complete Menu (53+ Items)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('delivery')} className="hover:text-white transition-colors">
                  Home Delivery Information
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('catering')} className="hover:text-white transition-colors">
                  Catering Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-white transition-colors">
                  Food Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                  About Our Restaurant
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                  Contact &amp; Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Hours & Service */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Service Hours
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 font-medium block">Daily Opening Hours</span>
                  <span className="text-slate-400">{RESTAURANT_INFO.openingHours}</span>
                </div>
              </div>
              <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80 text-[11px] text-slate-400">
                <span className="text-slate-300 font-semibold block mb-0.5">Dining &amp; Takeaway</span>
                Dine-in seating, take-away counter service, and local doorstep delivery available during opening hours.
              </div>
            </div>
          </div>

          {/* Location & Directions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Location &amp; Phone
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <address className="not-italic text-slate-300 leading-relaxed">
                  {RESTAURANT_INFO.address.street},<br />
                  {RESTAURANT_INFO.address.area},<br />
                  {RESTAURANT_INFO.address.district}, {RESTAURANT_INFO.address.state} {RESTAURANT_INFO.address.pincode}
                </address>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="text-slate-200 font-mono hover:text-white transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors pt-1"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Policy Link and Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <button
              onClick={onOpenPolicy}
              className="hover:text-slate-200 underline underline-offset-2 transition-colors cursor-pointer"
            >
              Ordering Policy &amp; Terms
            </button>
            <span>·</span>
            <span>Hanskhali, West Bengal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
