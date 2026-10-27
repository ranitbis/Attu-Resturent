import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem } from '../data/menu';
import { RESTAURANT_INFO } from '../data/restaurant';

export interface CartItem {
  item: MenuItem;
  quantity: number;
  instructions?: string;
}

export interface PlacedOrder {
  orderId: string;
  timestamp: string;
  orderType: 'takeaway' | 'delivery';
  items: {
    name: string;
    price: number;
    quantity: number;
    subtotal: number;
  }[];
  subtotal: number;
  customerName: string;
  customerPhone: string;
  deliveryAddress?: string;
  notes?: string;
  status: 'Received by Customer' | 'Awaiting Restaurant Confirmation';
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem, qty?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  setItemQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  recentOrders: PlacedOrder[];
  submitOrder: (orderData: {
    orderType: 'takeaway' | 'delivery';
    customerName: string;
    customerPhone: string;
    deliveryAddress?: string;
    notes?: string;
  }) => PlacedOrder;
  generateWhatsAppLink: (order: PlacedOrder) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('attu_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [recentOrders, setRecentOrders] = useState<PlacedOrder[]>(() => {
    try {
      const saved = localStorage.getItem('attu_recent_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('attu_cart', JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [items]);

  useEffect(() => {
    try {
      localStorage.setItem('attu_recent_orders', JSON.stringify(recentOrders));
    } catch (e) {
      console.error('Failed to save orders to localStorage', e);
    }
  }, [recentOrders]);

  const addItem = (item: MenuItem, qty = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.item.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      return [...prev, { item, quantity: qty }];
    });
  };

  const removeItem = (itemId: string) => {
    setItems(prev => prev.filter(i => i.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setItems(prev => {
      return prev
        .map(i => {
          if (i.item.id === itemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter((i): i is CartItem => i !== null);
    });
  };

  const setItemQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }
    setItems(prev =>
      prev.map(i => (i.item.id === itemId ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((acc, curr) => acc + curr.quantity, 0);
  const subtotal = items.reduce(
    (acc, curr) => acc + curr.item.price * curr.quantity,
    0
  );

  const submitOrder = (orderData: {
    orderType: 'takeaway' | 'delivery';
    customerName: string;
    customerPhone: string;
    deliveryAddress?: string;
    notes?: string;
  }): PlacedOrder => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newOrder: PlacedOrder = {
      orderId: `ATTU-${new Date().getFullYear()}-${randomSuffix}`,
      timestamp: new Date().toISOString(),
      orderType: orderData.orderType,
      items: items.map(ci => ({
        name: ci.item.name,
        price: ci.item.price,
        quantity: ci.quantity,
        subtotal: ci.item.price * ci.quantity,
      })),
      subtotal,
      customerName: orderData.customerName,
      customerPhone: orderData.customerPhone,
      deliveryAddress: orderData.deliveryAddress,
      notes: orderData.notes,
      status: 'Awaiting Restaurant Confirmation'
    };

    setRecentOrders(prev => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  const generateWhatsAppLink = (order: PlacedOrder): string => {
    const orderItemsText = order.items
      .map(i => `• ${i.name} x ${i.quantity} = ₹${i.subtotal}`)
      .join('\n');

    const addressSection =
      order.orderType === 'delivery'
        ? `\n*Delivery Address:* ${order.deliveryAddress || 'Not provided'}`
        : '\n*Order Option:* Takeaway (Counter Pickup)';

    const notesSection = order.notes ? `\n*Special Instructions:* ${order.notes}` : '';

    const message = `*NEW ORDER - ATTU RESTAURANT & FAST FOOD*
*Order Ref:* ${order.orderId}
*Customer:* ${order.customerName}
*Phone:* ${order.customerPhone}${addressSection}
--------------------------------
*ITEMS ORDERED:*
${orderItemsText}
--------------------------------
*Subtotal:* ₹${order.subtotal}
${notesSection}

_Please confirm availability and dispatch time. Thank you!_`;

    return `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        setItemQuantity,
        clearCart,
        totalCount,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        recentOrders,
        submitOrder,
        generateWhatsAppLink
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
