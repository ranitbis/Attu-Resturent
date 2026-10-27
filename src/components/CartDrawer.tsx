import React, { useState } from 'react';
import { useCart, PlacedOrder } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurant';
import { X, Trash2, Plus, Minus, ArrowRight, Phone, MessageSquare, ShoppingBag, CheckCircle2 } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    submitOrder,
    generateWhatsAppLink
  } = useCart();

  const [orderType, setOrderType] = useState<'takeaway' | 'delivery'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [validationError, setValidationError] = useState('');
  const [completedOrder, setCompletedOrder] = useState<PlacedOrder | null>(null);

  if (!isCartOpen) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!customerName.trim()) {
      setValidationError('Please enter your full name');
      return;
    }

    const cleanPhone = customerPhone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setValidationError('Please enter a valid 10-digit mobile number');
      return;
    }

    if (orderType === 'delivery' && !deliveryAddress.trim()) {
      setValidationError('Please enter your delivery address in Hanskhali / nearby area');
      return;
    }

    const order = submitOrder({
      orderType,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      deliveryAddress: orderType === 'delivery' ? deliveryAddress.trim() : undefined,
      notes: orderNotes.trim() || undefined
    });

    setCompletedOrder(order);
  };

  const handleClose = () => {
    setIsCartOpen(false);
    if (completedOrder) {
      setCompletedOrder(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-900 text-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-red-500" />
              <h2 className="text-base font-bold">Your Order</h2>
              {items.length > 0 && !completedOrder && (
                <span className="text-xs text-slate-300">
                  ({items.length} {items.length === 1 ? 'item' : 'items'})
                </span>
              )}
            </div>
            <button
              onClick={handleClose}
              aria-label="Close cart"
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {completedOrder ? (
              /* Honest Order Confirmation State */
              <div className="space-y-5 text-center py-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    Order Submitted!
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Reference ID: <span className="font-mono font-bold text-slate-800">{completedOrder.orderId}</span>
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left space-y-2 text-xs">
                  <div className="flex justify-between font-medium text-slate-700 pb-2 border-b border-slate-200">
                    <span>Order Type:</span>
                    <span className="font-semibold uppercase text-slate-900">{completedOrder.orderType}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Customer:</span>
                    <span className="font-medium text-slate-900">{completedOrder.customerName} ({completedOrder.customerPhone})</span>
                  </div>
                  {completedOrder.deliveryAddress && (
                    <div className="text-slate-600">
                      <span className="block font-medium text-slate-700">Delivery Address:</span>
                      <p className="mt-0.5 text-slate-800">{completedOrder.deliveryAddress}</p>
                    </div>
                  )}
                  <div className="pt-2 border-t border-slate-200">
                    <span className="block font-medium text-slate-700 mb-1">Items Summary:</span>
                    {completedOrder.items.map((it, idx) => (
                      <div key={idx} className="flex justify-between py-0.5 text-slate-700">
                        <span>{it.quantity}x {it.name}</span>
                        <span className="tabular-nums font-mono font-medium">₹{it.subtotal}</span>
                      </div>
                    ))}
                    <div className="flex justify-between pt-2 border-t border-slate-200 font-bold text-slate-900 text-sm">
                      <span>Subtotal:</span>
                      <span className="font-mono text-red-600">₹{completedOrder.subtotal}</span>
                    </div>
                  </div>
                </div>

                {/* Honest Dispatch & Confirmation Notice */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-left">
                  <p className="text-xs text-amber-900 leading-relaxed font-medium">
                    Important: Please dispatch this order directly to ATTU via WhatsApp or telephone to confirm current kitchen availability and delivery time.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-2">
                  <a
                    href={generateWhatsAppLink(completedOrder)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-xl shadow-xs transition-colors text-sm"
                  >
                    <MessageSquare className="w-4 h-4" /> Send Order via WhatsApp
                  </a>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 px-4 rounded-xl shadow-xs transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4 text-amber-400" /> Call {RESTAURANT_INFO.phone} to Confirm
                  </a>
                  <button
                    onClick={handleClose}
                    className="w-full text-xs text-slate-500 hover:text-slate-800 py-1"
                  >
                    Close Window & Return to Menu
                  </button>
                </div>
              </div>
            ) : items.length === 0 ? (
              /* Empty Cart State */
              <div className="text-center py-12 space-y-3">
                <div className="w-14 h-14 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h3 className="text-base font-semibold text-slate-800">Your basket is empty</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Explore our menu of authentic biryani, chowmein, fried rice, rolls, and fast food snacks.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
                >
                  Browse Menu <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              /* Active Cart Items & Checkout Form */
              <div className="space-y-4">
                {/* Items List */}
                <div className="space-y-2.5 divide-y divide-slate-100">
                  {items.map(({ item, quantity }) => (
                    <div key={item.id} className="pt-2.5 first:pt-0 flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-slate-900 truncate">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 font-mono tabular-nums">
                          ₹{item.price} each · ₹{item.price * quantity}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg border border-slate-200">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-5 h-5 rounded flex items-center justify-center bg-white text-slate-700 hover:text-red-600 transition-colors shadow-xs"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-2.5 h-2.5" />
                        </button>
                        <span className="text-xs font-bold text-slate-800 min-w-[16px] text-center font-mono">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-5 h-5 rounded flex items-center justify-center bg-red-600 text-white hover:bg-red-700 transition-colors shadow-xs"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-2.5 h-2.5" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-slate-400 hover:text-red-600 p-1 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={clearCart}
                    className="text-[11px] text-slate-400 hover:text-red-600 transition-colors"
                  >
                    Clear All Items
                  </button>
                </div>

                {/* Checkout Details Form */}
                <form id="checkout-form" onSubmit={handleCheckout} className="border-t border-slate-200 pt-3 space-y-3">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Customer Information
                  </h4>

                  {/* Order Type Toggle */}
                  <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`py-1.5 text-xs font-semibold rounded-md transition-all ${
                        orderType === 'delivery'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Home Delivery
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('takeaway')}
                      className={`py-1.5 text-xs font-semibold rounded-md transition-all ${
                        orderType === 'takeaway'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Takeaway / Pickup
                    </button>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sourav Mukherjee"
                      value={customerName}
                      onChange={e => setCustomerName(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Phone Number (for call/WhatsApp confirmation) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={customerPhone}
                      onChange={e => setCustomerPhone(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-red-600 font-mono"
                    />
                  </div>

                  {orderType === 'delivery' ? (
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Delivery Address & Landmark *
                      </label>
                      <textarea
                        required
                        rows={2}
                        placeholder="House/Street, Landmark, Hanskhali / Gobindapur area"
                        value={deliveryAddress}
                        onChange={e => setDeliveryAddress(e.target.value)}
                        className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-red-600"
                      />
                      <p className="text-[10px] text-slate-600 mt-0.5">
                        Note: Delivery charges & distance verified upon confirmation.
                      </p>
                    </div>
                  ) : (
                    <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg text-[11px] text-slate-600">
                      <span className="font-semibold text-slate-800">Counter Pickup Location:</span>
                      <p className="mt-0.5">{RESTAURANT_INFO.address.full}</p>
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Cooking or Delivery Instructions (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Less spicy, extra onions, packing request"
                      value={orderNotes}
                      onChange={e => setOrderNotes(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-red-600"
                    />
                  </div>

                  {validationError && (
                    <div className="text-[11px] font-medium text-red-600 bg-red-50 p-2 rounded-md">
                      {validationError}
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>

          {/* Footer Subtotal & Action Bar */}
          {!completedOrder && items.length > 0 && (
            <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>Items Subtotal</span>
                <span className="text-base font-bold text-slate-900 font-mono tabular-nums">
                  ₹{subtotal}
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-600">
                <span>Payment Method</span>
                <span className="font-medium text-slate-700">Cash on Delivery / UPI upon arrival</span>
              </div>

              <button
                type="submit"
                form="checkout-form"
                className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl shadow-xs transition-colors text-sm"
              >
                Place Order · ₹{subtotal} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
