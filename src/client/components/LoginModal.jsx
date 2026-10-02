import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeLoginModal, showToast } from '../redux/uiSlice.js';
import { login } from '../redux/authSlice.js';

export default function LoginModal() {
  const dispatch = useDispatch();
  const { isLoginModalOpen } = useSelector((state) => state.ui);
  const [formData, setFormData] = useState({
    name: 'Raj Sharma',
    email: 'rajgovindha165@gmail.com',
    phone: '+91 98846 88804'
  });

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    dispatch(closeLoginModal());
    dispatch(showToast({ message: `✓ Welcome back, ${formData.name.split(' ')[0]}!` }));
  };

  const handleDemoLogin = () => {
    const demo = { name: 'Raj Sharma', email: 'rajgovindha165@gmail.com', phone: '+91 98846 88804' };
    dispatch(login(demo));
    dispatch(closeLoginModal());
    dispatch(showToast({ message: '✓ Signed in with 1-Click Demo Account!' }));
  };

  return (
    <div className="silaii-modal-backdrop" onClick={() => dispatch(closeLoginModal())}>
      <div className="silaii-modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="silaii-modal-close" onClick={() => dispatch(closeLoginModal())}>
          &times;
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <img
            src="/www.silaii.com/cdn/shop/files/Silaii_Logo_Brown_1_2d11b99c-9068-4369-b085-e63d4c6ec55f.png"
            alt="SILAII"
            style={{ height: '38px', marginBottom: '10px' }}
          />
          <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.35rem', color: '#18181b', margin: '0 0 4px' }}>
            Patron Sign In
          </h3>
          <p style={{ color: '#71717a', fontSize: '0.85rem', margin: 0 }}>
            Access your sculpture orders, devotion status & certificates.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="silaii-form-group">
            <label>Full Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="silaii-form-group">
            <label>Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="silaii-form-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <button type="submit" className="silaii-form-btn">
            Continue to Account
          </button>
        </form>

        <div style={{ marginTop: '1.25rem', textAlign: 'center', borderTop: '2px solid #ffffff', paddingTop: '1rem' }}>
          <button type="button" className="silaii-demo-btn" onClick={handleDemoLogin}>
            ⚡ 1-Click Demo Login
          </button>
        </div>
      </div>
    </div>
  );
}
