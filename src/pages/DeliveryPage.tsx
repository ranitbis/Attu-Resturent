import React from 'react';
import { PageId } from '../components/Navbar';
import { RESTAURANT_INFO } from '../data/restaurant';
import { useCart } from '../context/CartContext';
import {
  Truck,
  Phone,
  MessageSquare,
  ArrowRight,
  Clock,
  ShieldAlert,
  ShoppingBag,
  CheckCircle2,
  MapPin
} from 'lucide-react';

interface DeliveryPageProps {
  setActivePage: (page: PageId) => void;
}

export const DeliveryPage: React.FC<DeliveryPageProps> = ({ setActivePage }) => {
  const { setIsCartOpen } = useCart();

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-left">
      {/* Hero Header with Packaging Image */}
      <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 text-white shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="p-8 sm:p-12 lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/80 border border-red-800/80 text-red-400 text-xs font-bold uppercase tracking-wider">
              <Truck className="w-3.5 h-3.5" />
              <span>Doorstep Delivery Service</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              Home Delivery Available
            </h1>

            <p className="text-base sm:text-lg text-amber-300 font-medium italic">
              &ldquo;Enjoy your favourite food from ATTU Restaurant &amp; Fast Food at home.&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Craving steaming chicken dum biryani, piping hot chowmein, crisp chicken pakoras, or freshly wrapped kathi rolls? We pack every dish with heat-insulating packaging to ensure restaurant taste and freshness right to your dining table in Hanskhali and nearby areas.
            </p>

            {/* Core Action Buttons as specified in prompt */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setActivePage('menu')}
                className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Food</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-bold transition-all border border-slate-700 flex items-center gap-2 active:scale-95 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call to Order: {RESTAURANT_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hello ATTU Restaurant, I would like to enquire about placing a home delivery order in Hanskhali."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-all flex items-center gap-2 active:scale-95 whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 h-full min-h-[300px] lg:min-h-[420px] relative">
            <img
              src="/src/assets/images/home_delivery_packaging_1793116378219.jpg"
              alt="ATTU Home Delivery Meal Boxes"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Honest Delivery Terms Notice (Strict Prompt Compliance) */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h3 className="text-base font-bold text-amber-950 font-display">
              Delivery Policy &amp; Area Verification
            </h3>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              To provide 100% honest and authentic service, ATTU Restaurant &amp; Fast Food confirms specific delivery fees, minimum order amounts, service radius, and preparation/dispatch timelines directly at the time of your order:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-900/90 pt-1">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span><strong>Delivery Area:</strong> Hanskhali, Gobindapur &amp; adjacent Nadia areas.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span><strong>Delivery Charges:</strong> Quoted fairly based on distance from Vivekananda Sarani.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span><strong>Estimated Dispatch Time:</strong> 25 to 45 minutes depending on kitchen queue.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span><strong>Payment:</strong> Cash on Delivery (COD) or instant UPI scan on arrival.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3 Simple Steps to Order Delivery */}
      <div className="space-y-6">
        <div className="text-left">
          <h2 className="text-2xl font-black text-slate-900 font-display">
            How Home Delivery Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Simple, reliable, and authentic ordering from your local favorite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-lg font-mono">
              1
            </div>
            <h4 className="font-bold text-slate-900 text-base">Select Your Dishes</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Explore our full menu of 53+ items. Add items to your online order basket, or note down your favorites from the menu list.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg font-mono">
              2
            </div>
            <h4 className="font-bold text-slate-900 text-base">Submit via WhatsApp or Phone</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Submit your basket through WhatsApp or call <strong className="text-slate-800 font-mono">+91 75014 96177</strong>. Our kitchen staff confirms the items and delivery address instantly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg font-mono">
              3
            </div>
            <h4 className="font-bold text-slate-900 text-base">Hot Food at Your Doorstep</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our delivery partner arrives with hot, sealed food containers. Pay easily with Cash or UPI upon handover.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Action Footer Strip */}
      <div className="bg-slate-900 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-xl font-bold font-display">Ready to enjoy dinner at home?</h3>
          <p className="text-xs text-slate-300">
            Order online or speak with our friendly team in Hanskhali.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setActivePage('menu')}
            className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
          >
            Browse Full Menu <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg transition-colors border border-slate-700 flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Call +91 75014 96177</span>
          </a>
        </div>
      </div>
    </div>
  );
};
