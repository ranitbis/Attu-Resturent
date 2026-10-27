import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { RESTAURANT_INFO } from '../data/restaurant';
import {
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  ExternalLink,
  Truck,
  Users,
  Send,
  CheckCircle2
} from 'lucide-react';

interface ContactPageProps {
  setActivePage: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ setActivePage }) => {
  const [inquiryType, setInquiryType] = useState<'General' | 'Home Delivery' | 'Catering'>('General');
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderPhone.trim() || !message.trim()) return;

    setSubmitted(true);
  };

  const getWhatsAppMessageLink = () => {
    const text = `*ENQUIRY - ATTU RESTAURANT & FAST FOOD*
*Type:* ${inquiryType}
*From:* ${senderName}
*Phone:* ${senderPhone}
*Message:* ${message}`;
    return `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-left">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-2">
          <MapPin className="w-3.5 h-3.5" /> Verified Contact Information
        </div>
        <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-slate-900">
          Contact ATTU Restaurant &amp; Fast Food
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
          Get in touch for food orders, table inquiries, home delivery dispatch, or event catering quotations in Hanskhali, Nadia.
        </p>
      </div>

      {/* Main 3 Quick Service Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Option 1: Direct Call */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Direct Phone Call</h3>
            <p className="text-xs text-slate-600">
              Speak directly with our counter staff for food orders, parcel pickup, and quick queries.
            </p>
            <p className="text-sm font-bold font-mono text-slate-900">
              {RESTAURANT_INFO.phone}
            </p>
          </div>
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors text-center shadow-xs flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" /> Call Now
          </a>
        </div>

        {/* Option 2: Home Delivery Enquiries */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Home Delivery Enquiries</h3>
            <p className="text-xs text-slate-600">
              Verify delivery distance, minimum order, and estimated delivery time to your doorstep.
            </p>
            <p className="text-xs font-semibold text-amber-700">
              Hanskhali, Gobindapur &amp; adjacent localities
            </p>
          </div>
          <button
            onClick={() => setActivePage('delivery')}
            className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors text-center shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <Truck className="w-3.5 h-3.5 text-amber-400" /> Delivery Page
          </button>
        </div>

        {/* Option 3: Catering Enquiries */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Catering Enquiries</h3>
            <p className="text-xs text-slate-600">
              Request customized quotations for parties, birthdays, weddings, and corporate gatherings.
            </p>
            <p className="text-xs font-semibold text-emerald-700">
              Tailored menus &amp; live food stations
            </p>
          </div>
          <button
            onClick={() => setActivePage('catering')}
            className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors text-center shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <Users className="w-3.5 h-3.5" /> Request Catering Quote
          </button>
        </div>
      </div>

      {/* Grid: Address Details + Google Maps Embed & Link */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Card */}
        <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold font-display text-white">
              Restaurant Details
            </h3>
            <p className="text-xs text-slate-400">
              Always verify opening hours and location before visiting.
            </p>
          </div>

          <div className="space-y-4 text-xs text-slate-300">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-white text-sm">Verified Address</span>
                <address className="not-italic leading-relaxed mt-1 text-slate-300">
                  {RESTAURANT_INFO.address.street}<br />
                  {RESTAURANT_INFO.address.area}<br />
                  {RESTAURANT_INFO.address.district}, {RESTAURANT_INFO.address.state} {RESTAURANT_INFO.address.pincode}<br />
                  {RESTAURANT_INFO.address.country}
                </address>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-white text-sm">Operating Hours</span>
                <span className="text-slate-300">{RESTAURANT_INFO.openingHours}</span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Lunch, evening snacks, and dinner service.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-white text-sm">Telephone</span>
                <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="font-mono text-amber-300 text-sm hover:underline">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-white text-sm">WhatsApp</span>
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  Chat with ATTU on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
            >
              <span>Open in Google Maps Application</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs space-y-6">
          <div>
            <h3 className="text-xl font-bold font-display text-slate-900">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Have a question about our menu, special dietary requests, or a pending order? Send us a note.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl space-y-4 text-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-base font-bold text-emerald-950 font-display">
                Message Prepared!
              </h4>
              <p className="text-xs text-emerald-800 leading-relaxed max-w-sm mx-auto">
                Your message has been drafted. You can send it directly to ATTU on WhatsApp right now for an instant response.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppMessageLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition-colors flex items-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" /> Send via WhatsApp
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="text-xs text-slate-600 hover:text-slate-900 underline py-2"
                >
                  Draft Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Enquiry Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['General', 'Home Delivery', 'Catering'] as const).map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setInquiryType(type)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                        inquiryType === type
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Das"
                  value={senderName}
                  onChange={e => setSenderName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={senderPhone}
                  onChange={e => setSenderPhone(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-red-600 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Message or Question *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Write your inquiry or question here..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-red-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" /> Prepare WhatsApp Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
