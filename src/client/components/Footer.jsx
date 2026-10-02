import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openContactModal, openAboutModal, openLoginModal } from '../redux/uiSlice.js';

export default function Footer() {
  const dispatch = useDispatch();

  return (
    <footer style={{ background: '#18181b', color: '#f4f4f5', padding: '50px 24px 24px', borderTop: '3px solid #ffffff' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px' }}>
        {/* Atelier Info */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '14px', letterSpacing: '0.08em' }}>SILAII SCULPTURE ATELIER</h4>
          <p style={{ color: '#a1a1aa', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '14px' }}>
            Preserving Indian civilization and cultural grandeur through authentic fine stone sculptures, divine idols, and car dashboard sacred figures.
          </p>
          <p style={{ color: '#a1a1aa', fontSize: '0.88rem', lineHeight: 1.6 }}>
            <strong>Helpline:</strong> +91 98846 88804 (10 AM - 7 PM IST)<br />
            <strong>Email:</strong> contact@silaii.com
          </p>
        </div>

        {/* Sculpture Collections */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '14px', letterSpacing: '0.05em' }}>SCULPTURE COLLECTIONS</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.1, fontSize: '0.9rem' }}>
            <li><Link to="/products/ayodhya-ram-mandir-temple-sculpture" style={{ color: '#d4d4d8' }}>Ayodhya Ram Mandir</Link></li>
            <li><Link to="/products/natarajar-sculpture" style={{ color: '#d4d4d8' }}>Chidambaram Natarajar</Link></li>
            <li><Link to="/products/ram-lalla-sculpture" style={{ color: '#d4d4d8' }}>Balak Ram Lalla Idol</Link></li>
            <li><Link to="/products/yazhi-sculpture" style={{ color: '#d4d4d8' }}>Temple Guardian Yazhi</Link></li>
            <li><Link to="/products/levitating-buddha-float" style={{ color: '#d4d4d8' }}>Levitating Float Series</Link></li>
          </ul>
        </div>

        {/* Devotion & Support */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '14px', letterSpacing: '0.05em' }}>DEVOTION & SUPPORT</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.1, fontSize: '0.9rem' }}>
            <li><Link to="/contact" style={{ color: '#d4d4d8' }}>Contact Us</Link></li>
            <li><button type="button" onClick={() => dispatch(openAboutModal())} style={{ color: '#d4d4d8', cursor: 'pointer', textAlign: 'left' }}>About SILAII</button></li>
            <li><Link to="/checkout" style={{ color: '#d4d4d8' }}>Track Your Order</Link></li>
            <li><button type="button" onClick={() => dispatch(openLoginModal())} style={{ color: '#d4d4d8', cursor: 'pointer', textAlign: 'left' }}>Patron Login</button></li>
          </ul>
        </div>
      </div>

      <div style={{ maxWidth: '1240px', margin: '40px auto 0', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', fontSize: '0.85rem', color: '#71717a' }}>
        &copy; {new Date().getFullYear()} SILAII. All rights reserved. Handcrafted with reverence in India.
      </div>
    </footer>
  );
}
