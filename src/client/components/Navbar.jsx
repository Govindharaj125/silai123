import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  openCartDrawer,
  openWishlistDrawer,
  openLoginModal,
  openProfileModal,
  openContactModal,
  openAboutModal
} from '../redux/uiSlice.js';
import { logout } from '../redux/authSlice.js';

export default function Navbar() {
  const dispatch = useDispatch();
  const cartItemCount = useSelector(state => state.cart.itemCount);
  const wishlistCount = useSelector(state => state.wishlist.items.length);
  const { isLoggedIn, user } = useSelector(state => state.auth);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setProfileDropdownOpen(false);
  };

  return (
    <header className="silaii-header">
      {/* Top Bar: Brand, Search, Contact, Auth, Cart */}
      <div className="silaii-nav-top">
        <Link to="/" className="silaii-brand-logo">
          <img
            src="/www.silaii.com/cdn/shop/files/Silaii_Logo_Brown_1_2d11b99c-9068-4369-b085-e63d4c6ec55f.png"
            alt="SILAII"
            onError={(e) => {
              e.target.src = '/www.silaii.com/cdn/shop/files/Silaii_Logo_Brown_1_2240b201-eb6b-4b5f-99e1-5d613ed74781.png';
            }}
          />
          <span className="silaii-brand-title">SILAII</span>
        </Link>

        <div className="silaii-nav-actions">
          {/* Dedicated Search Page Icon Link */}
          <Link to="/search" className="silaii-icon-btn" title="Search All Sculptures">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </Link>

          {/* Contact Us Page Link */}
          <Link
            to="/contact"
            className="silaii-btn-contact"
            style={{ textDecoration: 'none' }}
          >
            <span>📞</span> Contact Us
          </Link>

          {/* Patron Login & Profile Chip */}
          {!isLoggedIn ? (
            <button
              type="button"
              className="silaii-btn-login"
              onClick={() => dispatch(openLoginModal())}
            >
              <span>👤</span> Patron Sign In
            </button>
          ) : (
            <div style={{ position: 'relative' }}>
              <div
                className="silaii-profile-trigger"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              >
                <div className="silaii-avatar">{user?.avatar || 'R'}</div>
                <span>{user?.name?.split(' ')[0] || 'Patron'}</span>
                <span style={{ fontSize: '0.75rem' }}>▼</span>
              </div>

              {profileDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    right: 0,
                    width: '240px',
                    background: '#fff',
                    border: '2px solid #ffffff',
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                    zIndex: 100000,
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ padding: '12px 14px', background: '#fefce8', borderBottom: '2px solid #ffffff' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#18181b' }}>{user?.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#71717a' }}>{user?.email}</div>
                    <span style={{ display: 'inline-block', marginTop: '4px', fontSize: '0.7rem', background: '#fef08a', color: '#18181b', fontWeight: 800, padding: '2px 8px', borderRadius: '10px', border: '1px solid #ffffff' }}>
                      {user?.tier || 'Gold Patron'}
                    </span>
                  </div>
                  <button
                    style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '8px', color: '#18181b', width: '100%', textAlign: 'left', fontWeight: 600, fontSize: '0.85rem' }}
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      dispatch(openProfileModal());
                    }}
                  >
                    <span>👤</span> My Profile & Status
                  </button>
                  <Link
                    to="/checkout"
                    style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '8px', color: '#18181b', width: '100%', textAlign: 'left', fontWeight: 600, fontSize: '0.85rem' }}
                    onClick={() => setProfileDropdownOpen(false)}
                  >
                    <span>📦</span> Orders & Tracking
                  </Link>
                  <button
                    style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '8px', color: '#dc2626', width: '100%', textAlign: 'left', fontWeight: 600, fontSize: '0.85rem', borderTop: '2px solid #ffffff' }}
                    onClick={handleLogout}
                  >
                    <span>🚪</span> Sign Out
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Wishlist Drawer Trigger */}
          <button
            type="button"
            className="silaii-icon-btn"
            title="Saved Wishlist"
            onClick={() => dispatch(openWishlistDrawer())}
            style={{ position: 'relative' }}
          >
            <span style={{ fontSize: '1.25rem', color: wishlistCount > 0 ? '#eab308' : '#18181b', lineHeight: 1 }}>
              {wishlistCount > 0 ? '♥' : '♡'}
            </span>
            {wishlistCount > 0 && (
              <span className="silaii-cart-badge" style={{ background: '#eab308', color: '#18181b', fontWeight: 800 }}>
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Icon Drawer Trigger */}
          <button
            type="button"
            className="silaii-icon-btn"
            title="View Cart & Checkout"
            onClick={() => dispatch(openCartDrawer())}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="silaii-cart-badge">{cartItemCount || 0}</span>
          </button>
        </div>
      </div>

      {/* Category Navigation Bar */}
      <nav className="silaii-nav-menu-bar">
        <ul className="silaii-nav-links">
          <li className="silaii-nav-link-item">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              /HOME
            </NavLink>
          </li>
          <li className="silaii-nav-link-item">
            <button
              type="button"
              onClick={() => dispatch(openAboutModal())}
            >
              ABOUT
            </button>
          </li>
          <li className="silaii-nav-link-item">
            <NavLink to="/search" className={({ isActive }) => (isActive ? 'active' : '')}>
              🔍 SEARCH
            </NavLink>
          </li>
          <li className="silaii-nav-link-item">
            <NavLink to="/collections/new-arrivals" className={({ isActive }) => (isActive ? 'active' : '')}>
              <span className="silaii-badge-new">NEW</span> NEW LAUNCHES
            </NavLink>
          </li>
          <li className="silaii-nav-link-item">
            <NavLink to="/collections/car-dashboard-series" className={({ isActive }) => (isActive ? 'active' : '')}>
              CAR DASHBOARD SERIES
            </NavLink>
          </li>
          <li className="silaii-nav-link-item">
            <NavLink to="/collections/bestselling-leaders-icons-sculptures" className={({ isActive }) => (isActive ? 'active' : '')}>
              LEADERS & ICONS
            </NavLink>
          </li>
          <li className="silaii-nav-link-item">
            <NavLink to="/collections/god-sculptures" className={({ isActive }) => (isActive ? 'active' : '')}>
              DIVINE SERIES
            </NavLink>
          </li>
          <li className="silaii-nav-link-item">
            <NavLink to="/collections/float-series-levitating-sculptures" className={({ isActive }) => (isActive ? 'active' : '')}>
              FLOAT SERIES
            </NavLink>
          </li>
          <li className="silaii-nav-link-item">
            <NavLink to="/collections/monuments" className={({ isActive }) => (isActive ? 'active' : '')}>
              MONUMENTS
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
