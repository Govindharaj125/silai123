import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showToast } from '../redux/uiSlice.js';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      dispatch(showToast({ message: '⚠️ Please fill in all fields to send your message.' }));
      return;
    }

    setSubmitted(true);
    dispatch(showToast({ message: '✓ Thank you! Your inquiry has been sent to SILAII Artisans.' }));
  };

  return (
    <main style={{ maxWidth: '1100px', margin: '40px auto 80px', padding: '0 20px' }}>
      {/* Breadcrumb */}
      <div style={{ marginBottom: '24px', fontSize: '0.85rem', color: '#71717a' }}>
        <Link to="/" style={{ color: '#eab308', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
        <span style={{ margin: '0 8px' }}>/</span>
        <span style={{ color: '#18181b', fontWeight: 600 }}>Contact SILAII Artisans</span>
      </div>

      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '45px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: '#fefce8',
            border: '2px solid #ffffff',
            boxShadow: '0 4px 14px rgba(234, 179, 8, 0.25)',
            fontSize: '1.8rem',
            marginBottom: '16px'
          }}
        >
          📞
        </div>
        <h1
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '2.5rem',
            color: '#18181b',
            margin: '0 0 12px',
            fontWeight: 800
          }}
        >
          Contact SILAII Artisans
        </h1>
        <p
          style={{
            color: '#52525b',
            fontSize: '1.1rem',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: 1.6
          }}
        >
          We are here to assist with custom orders, sizing & shipping inquiries.
        </p>
      </div>

      {/* Contact Grid: Info Cards + Form */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          alignItems: 'start'
        }}
      >
        {/* Left Column: Direct Atelier Contact Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '2px solid #ffffff',
              padding: '28px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
            }}
          >
            <h3
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '1.25rem',
                color: '#18181b',
                marginTop: 0,
                marginBottom: '20px',
                fontWeight: 800
              }}
            >
              Direct Atelier Concierge
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Customer Care */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: '#fefce8',
                    border: '1.5px solid #ffffff',
                    fontSize: '1.1rem',
                    flexShrink: 0
                  }}
                >
                  📞
                </span>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#71717a', textTransform: 'uppercase', fontWeight: 800 }}>
                    Customer Care
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#18181b', marginTop: '2px' }}>
                    +91 98846 88804
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>
                    (10 AM - 7 PM IST)
                  </div>
                </div>
              </div>

              {/* Email Support */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: '#fefce8',
                    border: '1.5px solid #ffffff',
                    fontSize: '1.1rem',
                    flexShrink: 0
                  }}
                >
                  ✉️
                </span>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#71717a', textTransform: 'uppercase', fontWeight: 800 }}>
                    Email Support
                  </div>
                  <a
                    href="mailto:contact@silaii.com"
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#eab308',
                      textDecoration: 'none',
                      marginTop: '2px',
                      display: 'inline-block'
                    }}
                  >
                    contact@silaii.com
                  </a>
                </div>
              </div>

              {/* Sculpture Studio */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: '#fefce8',
                    border: '1.5px solid #ffffff',
                    fontSize: '1.1rem',
                    flexShrink: 0
                  }}
                >
                  🏛️
                </span>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#71717a', textTransform: 'uppercase', fontWeight: 800 }}>
                    Sculpture Studio
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#18181b', marginTop: '2px' }}>
                    Chennai & Coimbatore, Tamil Nadu
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Assurance Box */}
          <div
            style={{
              background: '#f8fafc',
              borderRadius: '16px',
              border: '2px solid #ffffff',
              padding: '24px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
            }}
          >
            <h4 style={{ margin: '0 0 10px', color: '#18181b', fontSize: '0.95rem' }}>
              🛡️ Dedicated Artisan Support
            </h4>
            <p style={{ margin: 0, color: '#52525b', fontSize: '0.88rem', lineHeight: 1.6 }}>
              Whether you need customized sizing for your home altar or specific temple architectural consultations, our traditional sthapathis and artisans provide personal guidance.
            </p>
          </div>
        </div>

        {/* Right Column: Inquiry Message Form */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '2px solid #ffffff',
            padding: '32px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
          }}
        >
          <h3
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: '1.35rem',
              color: '#18181b',
              marginTop: 0,
              marginBottom: '8px',
              fontWeight: 800
            }}
          >
            Send Us a Message
          </h3>
          <p style={{ color: '#71717a', fontSize: '0.9rem', marginBottom: '24px' }}>
            Fill in your details below and our team will get back to you within 24 hours.
          </p>

          {submitted ? (
            <div
              style={{
                background: '#f0fdf4',
                border: '2px solid #86efac',
                borderRadius: '12px',
                padding: '24px',
                textAlign: 'center',
                color: '#166534'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>✓</div>
              <h4 style={{ margin: '0 0 8px', fontSize: '1.2rem', fontFamily: 'Cinzel, serif' }}>
                Inquiry Received!
              </h4>
              <p style={{ margin: 0, fontSize: '0.92rem', color: '#15803d', lineHeight: 1.6 }}>
                Thank you, <strong>{formData.name}</strong>. Our sculpture specialists will review your message and reach out to <strong>{formData.email}</strong> shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                style={{
                  marginTop: '18px',
                  background: '#16a34a',
                  color: '#ffffff',
                  border: '2px solid #ffffff',
                  padding: '8px 20px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Name Field */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#18181b',
                    marginBottom: '8px',
                    textTransform: 'uppercase'
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '2px solid #ffffff',
                    background: '#f8fafc',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s, background 0.2s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#eab308';
                    e.target.style.background = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#ffffff';
                    e.target.style.background = '#f8fafc';
                  }}
                />
              </div>

              {/* Email Address Field */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#18181b',
                    marginBottom: '8px',
                    textTransform: 'uppercase'
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. anand@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '2px solid #ffffff',
                    background: '#f8fafc',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s, background 0.2s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#eab308';
                    e.target.style.background = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#ffffff';
                    e.target.style.background = '#f8fafc';
                  }}
                />
              </div>

              {/* Message / Inquiry Field */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#18181b',
                    marginBottom: '8px',
                    textTransform: 'uppercase'
                  }}
                >
                  Message / Inquiry
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about the sculpture inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '2px solid #ffffff',
                    background: '#f8fafc',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    transition: 'border-color 0.2s, background 0.2s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#eab308';
                    e.target.style.background = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#ffffff';
                    e.target.style.background = '#f8fafc';
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  background: '#eab308',
                  color: '#18181b',
                  border: '2.5px solid #ffffff',
                  borderRadius: '12px',
                  padding: '14px 24px',
                  fontSize: '1rem',
                  fontWeight: 800,
                  fontFamily: 'Cinzel, serif',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(234, 179, 8, 0.4)',
                  transition: 'all 0.2s ease',
                  marginTop: '6px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ca8a04';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#eab308';
                  e.currentTarget.style.color = '#18181b';
                }}
              >
                Send Inquiry to Artisans ➔
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
