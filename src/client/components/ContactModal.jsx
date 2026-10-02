import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeContactModal, showToast } from '../redux/uiSlice.js';

export default function ContactModal() {
  const dispatch = useDispatch();
  const { isContactModalOpen } = useSelector((state) => state.ui);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  if (!isContactModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    dispatch(showToast({ message: '✓ Thank you! SILAII Artisan Team will contact you shortly.' }));
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', message: '' });
      dispatch(closeContactModal());
    }, 1500);
  };

  return (
    <div className="silaii-modal-backdrop" onClick={() => dispatch(closeContactModal())}>
      <div className="silaii-modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="silaii-modal-close" onClick={() => dispatch(closeContactModal())}>
          &times;
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <span style={{ fontSize: '2.2rem' }}>📞</span>
          <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.4rem', color: '#18181b', margin: '6px 0' }}>
            Contact SILAII Artisans
          </h3>
          <p style={{ color: '#71717a', fontSize: '0.85rem' }}>
            We are here to assist with custom orders, sizing & shipping inquiries.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px', fontSize: '0.85rem' }}>
          <div style={{ background: '#fefce8', padding: '8px 12px', borderRadius: '6px', borderLeft: '4px solid #eab308', border: '2px solid #ffffff' }}>
            <strong>Customer Care:</strong> +91 98846 88804 (10 AM - 7 PM IST)
          </div>
          <div style={{ background: '#fefce8', padding: '8px 12px', borderRadius: '6px', borderLeft: '4px solid #eab308', border: '2px solid #ffffff' }}>
            <strong>Email Support:</strong> contact@silaii.com
          </div>
          <div style={{ background: '#fefce8', padding: '8px 12px', borderRadius: '6px', borderLeft: '4px solid #eab308', border: '2px solid #ffffff' }}>
            <strong>Sculpture Studio:</strong> Chennai & Coimbatore, Tamil Nadu
          </div>
        </div>

        {sent ? (
          <div style={{ padding: '16px', background: '#f0fdf4', color: '#15803d', borderRadius: '8px', textAlign: 'center', fontWeight: 700, border: '2px solid #ffffff' }}>
            ✓ Message Sent Successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="silaii-form-group">
              <label>Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Anand Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="silaii-form-group">
              <label>Email Address</label>
              <input
                type="email"
                required
                placeholder="e.g. anand@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="silaii-form-group">
              <label>Message / Inquiry</label>
              <textarea
                rows={3}
                required
                placeholder="Tell us about the sculpture inquiry..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button type="submit" className="silaii-form-btn">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
