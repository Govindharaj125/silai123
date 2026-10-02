import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart, applyCoupon, removeCoupon, clearCart } from '../redux/cartSlice.js';
import { showToast } from '../redux/uiSlice.js';

export default function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, subtotal, total, discountAmount, discountCode } = useSelector((state) => state.cart);
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = couponInput.trim().toUpperCase();
    if (code === 'RAM10' || code === 'SILAII10' || code === 'FESTIVE') {
      dispatch(applyCoupon(code));
      setCouponError('');
      dispatch(showToast({ message: '✓ Promo Code Applied! 10% instant savings.' }));
    } else {
      setCouponError('Invalid coupon code. Try RAM10 for 10% off!');
    }
  };

  if (items.length === 0) {
    return (
      <main style={{ maxWidth: '800px', margin: '60px auto', padding: '0 20px', textAlign: 'center' }}>
        <div style={{ background: '#ffffff', padding: '60px 30px', borderRadius: '16px', border: '3px solid #ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <span style={{ fontSize: '4rem' }}>🛍️</span>
          <h2 style={{ fontFamily: 'Cinzel, serif', color: '#18181b', margin: '16px 0 10px' }}>
            Your Cart is Currently Empty
          </h2>
          <p style={{ color: '#71717a', fontSize: '1rem', marginBottom: '24px' }}>
            Browse through our divine deities, leaders, and sacred temple collections to acquire your first masterpiece.
          </p>
          <Link to="/" className="silaii-form-btn" style={{ display: 'inline-block', width: 'auto', padding: '12px 32px', textDecoration: 'none' }}>
            Discover Sculptures
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: '1240px', margin: '30px auto 60px', padding: '0 20px' }}>
      <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: '2.2rem', color: '#18181b', marginBottom: '24px' }}>
        Shopping Cart ({items.length} Masterpieces)
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'start' }}>
        {/* Cart Line Items */}
        <div style={{ background: '#ffffff', borderRadius: '16px', border: '3px solid #ffffff', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '16px',
                  paddingBottom: '20px',
                  borderBottom: '2px solid #f1f5f9'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '90px', height: '90px', objectFit: 'cover', borderRadius: '10px', border: '2px solid #ffffff' }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <Link to={`/products/${item.handle}`} style={{ fontWeight: 700, fontSize: '1rem', color: '#18181b' }}>
                        {item.title}
                      </Link>
                      <div style={{ fontSize: '0.82rem', color: '#71717a', margin: '4px 0 10px' }}>
                        {item.variantTitle}
                      </div>
                    </div>
                    <button
                      type="button"
                      style={{ color: '#dc2626', fontSize: '0.8rem', fontWeight: 600 }}
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', background: '#f8fafc', border: '2px solid #ffffff', borderRadius: '8px', padding: '2px 8px' }}>
                      <button
                        type="button"
                        style={{ padding: '2px 6px', fontWeight: 800 }}
                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                      >
                        -
                      </button>
                      <span style={{ minWidth: '24px', textAlign: 'center', fontWeight: 800 }}>{item.quantity}</span>
                      <button
                        type="button"
                        style={{ padding: '2px 6px', fontWeight: 800 }}
                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                      >
                        +
                      </button>
                    </div>

                    <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#18181b' }}>
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/" style={{ fontSize: '0.88rem', color: '#71717a', fontWeight: 600 }}>
              &larr; Continue Browsing
            </Link>
            <button
              type="button"
              style={{ fontSize: '0.88rem', color: '#dc2626', fontWeight: 600 }}
              onClick={() => dispatch(clearCart())}
            >
              Empty Cart
            </button>
          </div>
        </div>

        {/* Order Summary & Checkout */}
        <div style={{ background: '#ffffff', borderRadius: '16px', border: '3px solid #ffffff', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.35rem', color: '#18181b', marginBottom: '16px' }}>
            Order Summary
          </h2>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.95rem', color: '#71717a' }}>
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString('en-IN')}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.95rem', color: '#71717a' }}>
            <span>Shipping (Insured Packaging)</span>
            <span style={{ color: '#0d8249', fontWeight: 700 }}>FREE</span>
          </div>

          {discountAmount > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.95rem', color: '#0d8249', fontWeight: 700 }}>
              <span>Promo Discount ({discountCode})</span>
              <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
            </div>
          )}

          {/* Promo Code Form */}
          <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '8px', margin: '20px 0' }}>
            <input
              type="text"
              placeholder="Coupon Code (RAM10)"
              value={couponInput}
              onChange={(e) => setCouponInput(e.target.value)}
              style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: '8px',
                border: '2px solid #ffffff',
                background: '#f8fafc',
                fontSize: '0.9rem'
              }}
            />
            <button type="submit" className="silaii-form-btn" style={{ width: 'auto', padding: '8px 16px' }}>
              Apply
            </button>
          </form>
          {couponError && <p style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '-12px', marginBottom: '14px' }}>{couponError}</p>}

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontSize: '1.3rem', fontWeight: 800, color: '#18181b', borderTop: '2px dashed #e2e8f0', paddingTop: '14px' }}>
            <span>Total Payable</span>
            <span>₹{total.toLocaleString('en-IN')}</span>
          </div>

          <button
            type="button"
            className="silaii-form-btn"
            style={{ padding: '14px', fontSize: '1.05rem' }}
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout &rarr;
          </button>
        </div>
      </div>
    </main>
  );
}
