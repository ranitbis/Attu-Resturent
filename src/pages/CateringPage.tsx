import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { RESTAURANT_INFO } from '../data/restaurant';
import {
  Users,
  Phone,
  MessageSquare,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface CateringPageProps {
  setActivePage: (page: PageId) => void;
}

export interface CateringEnquiry {
  enquiryId: string;
  timestamp: string;
  customerName: string;
  customerPhone: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  guestCount: string;
  foodRequirements: string;
  additionalRequirements: string;
}

export const CateringPage: React.FC<CateringPageProps> = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    eventType: 'Birthday Party',
    eventDate: '',
    eventLocation: '',
    guestCount: '',
    foodRequirements: '',
    additionalRequirements: ''
  });

  const [submittedEnquiry, setSubmittedEnquiry] = useState<CateringEnquiry | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.customerName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    const cleanPhone = formData.customerPhone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number');
      return;
    }
    if (!formData.eventDate) {
      setErrorMsg('Please select your planned event date');
      return;
    }
    if (!formData.eventLocation.trim()) {
      setErrorMsg('Please specify the event location or venue');
      return;
    }
    if (!formData.guestCount.trim()) {
      setErrorMsg('Please specify the approximate number of guests');
      return;
    }

    setIsSubmitting(true);

    const newEnquiry: CateringEnquiry = {
      enquiryId: `ATTU-CAT-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toISOString(),
      customerName: formData.customerName.trim(),
      customerPhone: formData.customerPhone.trim(),
      eventType: formData.eventType,
      eventDate: formData.eventDate,
      eventLocation: formData.eventLocation.trim(),
      guestCount: formData.guestCount.trim(),
      foodRequirements: formData.foodRequirements.trim() || 'General ATTU Biryani & Fast Food Menu',
      additionalRequirements: formData.additionalRequirements.trim() || 'None'
    };

    // Store in localStorage for audit persistence
    try {
      const existing = localStorage.getItem('attu_catering_enquiries');
      const list = existing ? JSON.parse(existing) : [];
      list.unshift(newEnquiry);
      localStorage.setItem('attu_catering_enquiries', JSON.stringify(list));
    } catch (err) {
      console.error('Failed to save catering enquiry', err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedEnquiry(newEnquiry);
      // reset form
      setFormData({
        customerName: '',
        customerPhone: '',
        eventType: 'Birthday Party',
        eventDate: '',
        eventLocation: '',
        guestCount: '',
        foodRequirements: '',
        additionalRequirements: ''
      });
    }, 400);
  };

  const getWhatsAppCateringLink = (enquiry: CateringEnquiry) => {
    const text = `*NEW CATERING QUOTE REQUEST - ATTU RESTAURANT*
*Enquiry Ref:* ${enquiry.enquiryId}
*Customer:* ${enquiry.customerName}
*Phone:* ${enquiry.customerPhone}
*Event Type:* ${enquiry.eventType}
*Event Date:* ${enquiry.eventDate}
*Location:* ${enquiry.eventLocation}
*Approx. Guests:* ${enquiry.guestCount}
*Menu Requirements:* ${enquiry.foodRequirements}
*Additional Notes:* ${enquiry.additionalRequirements}

_Please provide your customized catering quotation and availability._`;
    return `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-left">
      {/* Hero Banner with Luxury Buffet Image */}
      <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 text-white shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="p-8 sm:p-12 lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/80 border border-amber-800/80 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>Events &amp; Celebrations</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              Catering Services by ATTU Restaurant &amp; Fast Food
            </h1>

            <p className="text-base sm:text-lg text-amber-300 font-medium italic">
              &ldquo;Planning a celebration or special event? Contact ATTU for catering enquiries.&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              From intimate family feasts, birthday bashes, and anniversaries to grand wedding receptions, community celebrations, and corporate gatherings across Nadia, ATTU delivers authentic flavours, freshly cooked live food stations, aromatic dum biryani pots, and delightful snacks that leave every guest impressed.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#enquiry-form"
                className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Request Catering Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-bold transition-all border border-slate-700 flex items-center gap-2 active:scale-95 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call for Catering</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hello ATTU Restaurant, I would like to inquire about catering services for an upcoming event."
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
              src="/src/assets/images/catering_spread_buffet_1793116377372.jpg"
              alt="ATTU Catering Banquet Spread"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Honest Custom Quotation Policy Note */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-6 h-6 text-slate-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-900 font-display">
              Customized Catering Quotations
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every celebration is unique. Rather than offering rigid one-size-fits-all packages, ATTU Restaurant prepares a tailor-made quotation based on your exact guest count, dietary preferences, selected menu items (Biryani Handis, Indo-Chinese buffet, live Roll and Momo stalls), and venue location.
            </p>
          </div>
        </div>
      </div>

      {/* Main Catering Content & Interactive Enquiry Form */}
      <div id="enquiry-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Container */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Direct Enquiry Form
            </div>
            <h2 className="text-2xl font-black text-slate-900 font-display">
              Request a Catering Quote
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Fill out the 8 event details below and our team will get in touch with an accurate quotation.
            </p>
          </div>

          {submittedEnquiry ? (
            /* Genuine Confirmation State */
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl space-y-4 text-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-emerald-950 font-display">
                  Catering Enquiry Submitted Successfully!
                </h3>
                <p className="text-xs text-emerald-800 mt-1 font-mono">
                  Reference: <strong>{submittedEnquiry.enquiryId}</strong>
                </p>
              </div>

              <div className="bg-white/80 p-4 rounded-lg text-xs text-slate-700 text-left space-y-1.5 border border-emerald-100">
                <p><strong>Customer:</strong> {submittedEnquiry.customerName} ({submittedEnquiry.customerPhone})</p>
                <p><strong>Event:</strong> {submittedEnquiry.eventType} on {submittedEnquiry.eventDate}</p>
                <p><strong>Location:</strong> {submittedEnquiry.eventLocation}</p>
                <p><strong>Approximate Guests:</strong> {submittedEnquiry.guestCount}</p>
                <p><strong>Food Requirements:</strong> {submittedEnquiry.foodRequirements}</p>
                {submittedEnquiry.additionalRequirements !== 'None' && (
                  <p><strong>Notes:</strong> {submittedEnquiry.additionalRequirements}</p>
                )}
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={getWhatsAppCateringLink(submittedEnquiry)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" /> Send Copy to ATTU via WhatsApp
                </a>
                <button
                  onClick={() => setSubmittedEnquiry(null)}
                  className="text-xs text-slate-600 hover:text-slate-900 underline underline-offset-2 py-1"
                >
                  Submit Another Event Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs font-medium">
                  {errorMsg}
                </div>
              )}

              {/* 1. Customer Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  1. Customer Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.customerName}
                  onChange={e => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-amber-600"
                />
              </div>

              {/* 2. Contact Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  2. Contact Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number for call or WhatsApp"
                  value={formData.customerPhone}
                  onChange={e => setFormData({ ...formData, customerPhone: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-amber-600 font-mono"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 3. Event Type */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    3. Event Type *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={e => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-amber-600 font-medium"
                  >
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Wedding Reception">Wedding Reception</option>
                    <option value="Family Gathering">Family Gathering</option>
                    <option value="Corporate / Office Event">Corporate / Office Event</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Puja / Festival Celebration">Puja / Festival Celebration</option>
                    <option value="Other Celebration">Other Celebration</option>
                  </select>
                </div>

                {/* 4. Event Date */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    4. Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={e => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-amber-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 5. Event Location */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    5. Event Location / Venue *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hanskhali, Gobindapur, Ranaghat, etc."
                    value={formData.eventLocation}
                    onChange={e => setFormData({ ...formData, eventLocation: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-amber-600"
                  />
                </div>

                {/* 6. Approximate Number of Guests */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    6. Approximate Number of Guests *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 25, 50, 100, 250+ guests"
                    value={formData.guestCount}
                    onChange={e => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-amber-600"
                  />
                </div>
              </div>

              {/* 7. Preferred Food or Menu Requirements */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  7. Preferred Food or Menu Requirements *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. Dum Biryani Handis, Chicken Chaap, Mixed Chowmein, Live Momo stall, Chicken Lollipop starters, etc."
                  value={formData.foodRequirements}
                  onChange={e => setFormData({ ...formData, foodRequirements: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-amber-600"
                />
              </div>

              {/* 8. Additional Requirements */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  8. Additional Requirements (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Serving staff required, specific timing, packaging requests"
                  value={formData.additionalRequirements}
                  onChange={e => setFormData({ ...formData, additionalRequirements: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-amber-600"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? 'Submitting Enquiry...' : 'Submit Catering Enquiry'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Sidebar Info & Direct Contact */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold font-display text-white">
              Why Choose ATTU Catering?
            </h3>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span><strong>Authentic Flavours:</strong> Prepared with traditional slow-dum methods and high-flame wok hei.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span><strong>Flexible Menus:</strong> Customize combos of biryani, noodles, rolls, momos, and appetizers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span><strong>Hygienic Standards:</strong> Quality ingredients, food-grade hot containers, and dedicated prep.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span><strong>Local Nadia Service:</strong> Reliable delivery and on-time service across Hanskhali and surrounds.</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <p className="text-xs text-slate-400">Prefer speaking directly with the restaurant management?</p>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 75014 96177</span>
              </a>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hello ATTU Restaurant, I would like to enquire about catering for an event."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-emerald-400 rounded-xl font-semibold text-xs transition-colors border border-slate-700"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Direct WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
