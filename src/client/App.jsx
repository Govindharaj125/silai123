import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import WishlistDrawer from './components/WishlistDrawer.jsx';
import LoginModal from './components/LoginModal.jsx';
import ProfileModal from './components/ProfileModal.jsx';
import ContactModal from './components/ContactModal.jsx';
import AboutModal from './components/AboutModal.jsx';
import Toast from './components/Toast.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

export default function App() {
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      
      <div className="silaii-app-main">
        <Outlet />
      </div>

      <Footer />
      
      {/* Global Modals & Drawers */}
      <CartDrawer />
      <WishlistDrawer />
      <LoginModal />
      <ProfileModal />
      <ContactModal />
      <AboutModal />
      <Toast />
      <WhatsAppButton />
    </div>
  );
}
