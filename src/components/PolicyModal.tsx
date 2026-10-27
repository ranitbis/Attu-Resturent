import React from 'react';
import { X, Shield, FileText, CheckCircle2 } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 text-left overflow-hidden my-8">
        {/* Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold font-display">
              Ordering Policy &amp; Privacy Information
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[70vh] space-y-5 text-xs text-slate-600 leading-relaxed">
          <section className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-red-600" />
              1. Order Placement &amp; Confirmation
            </h4>
            <p>
              ATTU Restaurant &amp; Fast Food operates fresh-to-order kitchen cooking. When you place an order on this website, your order reference and itemized summary are created. Orders must be confirmed with our restaurant staff via WhatsApp dispatch or phone call to verify kitchen queue and dispatch availability.
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              2. Home Delivery Policy &amp; Verification
            </h4>
            <p>
              Home delivery service is offered in Hanskhali, Gobindapur, and nearby accessible areas in Nadia, West Bengal. Exact delivery charges and minimum order thresholds are based on distance from Vivekananda Sarani and are verified with the customer prior to food preparation. Estimated delivery times range from 25 to 45 minutes subject to traffic, weather, and order volume.
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              3. Payment &amp; Pricing
            </h4>
            <p>
              All prices listed on the website are in Indian Rupees (₹) and match the restaurant's menu exactly. Payment is accepted via Cash on Delivery (COD) or direct UPI (Google Pay, PhonePe, Paytm) upon receipt of order or at the counter for takeaway.
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-slate-700" />
              4. Cancellations &amp; Modifications
            </h4>
            <p>
              Because our food is freshly cooked to order, order cancellations or modifications can only be accepted if communicated immediately via phone call (+91 75014 96177) before cooking has commenced.
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-blue-600" />
              5. Customer Privacy &amp; Data Protection
            </h4>
            <p>
              Customer contact information (name, phone number, and delivery address) submitted through the website or WhatsApp is used exclusively for fulfilling your food order, catering quotation, or responding to customer inquiries. We do not sell, rent, or share personal data with external advertising parties.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
