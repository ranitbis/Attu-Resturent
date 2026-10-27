import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { PolicyModal } from './components/PolicyModal';
import { DishDetailModal } from './components/DishDetailModal';
import { MenuItem } from './data/menu';

import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { DeliveryPage } from './pages/DeliveryPage';
import { CateringPage } from './pages/CateringPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    const validPages: PageId[] = ['home', 'menu', 'delivery', 'catering', 'about', 'gallery', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  });

  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  // Sync hash with active page for bookmarking and back button navigation
  useEffect(() => {
    window.location.hash = activePage;
  }, [activePage]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'menu', 'delivery', 'catering', 'about', 'gallery', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-red-600 selection:text-white">
        {/* Top Navigation */}
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        {/* Main Page View */}
        <main className="flex-1">
          {activePage === 'home' && (
            <HomePage setActivePage={setActivePage} onSelectDish={setSelectedDish} />
          )}
          {activePage === 'menu' && (
            <MenuPage onSelectDish={setSelectedDish} />
          )}
          {activePage === 'delivery' && (
            <DeliveryPage setActivePage={setActivePage} />
          )}
          {activePage === 'catering' && (
            <CateringPage setActivePage={setActivePage} />
          )}
          {activePage === 'about' && (
            <AboutPage setActivePage={setActivePage} />
          )}
          {activePage === 'gallery' && (
            <GalleryPage setActivePage={setActivePage} onSelectDish={setSelectedDish} />
          )}
          {activePage === 'contact' && (
            <ContactPage setActivePage={setActivePage} />
          )}
        </main>

        {/* Global Slide-Over Cart Drawer */}
        <CartDrawer />

        {/* Dish Detail Lightbox Modal */}
        <DishDetailModal dish={selectedDish} onClose={() => setSelectedDish(null)} />

        {/* Ordering Policy & Privacy Modal */}
        <PolicyModal isOpen={isPolicyOpen} onClose={() => setIsPolicyOpen(false)} />

        {/* Site Footer */}
        <Footer setActivePage={setActivePage} onOpenPolicy={() => setIsPolicyOpen(true)} />
      </div>
    </CartProvider>
  );
}
