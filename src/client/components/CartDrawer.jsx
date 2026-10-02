import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { closeCartDrawer } from '../redux/uiSlice.js';
import { updateQuantity, removeFromCart, applyCoupon, removeCoupon } from '../redux/cartSlice.js';

export default function CartDrawer() {
  const dispatch = useDispatch();
  const { isCartDrawerOpen } = useSelector((state) => state.ui);
  const { items, subtotal, total, discountAmount, discountCode } = useSelector((state) => state.cart);

  if (!isCartDrawerOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 999999,
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.2s ease'
      }}
      onClick={() => dispatch(closeCartDrawer())}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '440px',
          height: '100%',
          backgroundColor: '#ffffff',
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          borderLeft: '3px solid #ffffff',
          animation: 'slideInRight 0.25s ease'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div style={{ padding: '20px 24px', borderBottom: '2px solid #ffffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fefce8' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: '#18181b', margin: 0 }}>Your Sculpture Cart</h3>
            <span style={{ fontSize: '0.8rem', color: '#71717a' }}>{items.length} unique masterpiece(s)</span>
          </div>
          <button
            type="button"
            style={{ fontSize: '1.5rem', color: '#71717a', cursor: 'pointer', lineHeight: 1 }}
            onClick={() => dispatch(closeCartDrawer())}
          >
            &times;
          </button>
        </div>

        {/* Line Items List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <span style={{ fontSize: '3rem' }}>🛍️</span>
              <h4 style={{ margin: '14px 0 6px', color: '#18181b' }}>Your Cart is Empty</h4>
              <p style={{ color: '#71717a', fontSize: '0.9rem', marginBottom: '20px' }}>Discover sacred and iconic sculptures to begin your collection.</p>
              <button
                type="button"
                className="silaii-form-btn"
                onClick={() => dispatch(closeCartDrawer())}
              >
                Browse Sculptures
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    padding: '12px',
                    borderRadius: '12px',
                    background: '#f8fafc',
                    border: '2px solid #ffffff',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px', border: '1.5px solid #ffffff' }}
                  />
                  <div style={{ flex: 1 }}>
                    <Link
                      to={`/products/${item.handle}`}
                      onClick={() => dispatch(closeCartDrawer())}
                      style={{ fontWeight: 700, fontSize: '0.9rem', color: '#18181b', display: 'block', marginBottom: '2px' }}
                    >
                      {item.title}
                    </Link>
                    <div style={{ fontSize: '0.78rem', color: '#71717a', marginBottom: '8px' }}>{item.variantTitle}</div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1.5px solid #ffffff', borderRadius: '6px', padding: '2px 6px' }}>
                        <button
                          type="button"
                          style={{ padding: '0 4px', fontWeight: 800, color: '#18181b' }}
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                        >
                          -
                        </button>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, minWidth: '16px', textAlign: 'center' }}>{item.quantity}</span>
                        <button
                          type="button"
                          style={{ padding: '0 4px', fontWeight: 800, color: '#18181b' }}
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                        >
                          +
                        </button>
                      </div>

                      <span style={{ fontWeight: 400, fontSize: '0.95rem', color: '#18181b' }}>
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>

                      <button
                        type="button"
                        style={{ color: '#dc2626', fontSize: '0.75rem', fontWeight: 600 }}
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div style={{ padding: '20px 24px', borderTop: '2px solid #ffffff', background: '#ffffff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', color: '#71717a' }}>
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>

            {discountAmount > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', color: '#0d8249', fontWeight: 700 }}>
                <span>Discount ({discountCode})</span>
                <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '1.2rem', fontWeight: 800, color: '#18181b', borderTop: '1px dashed #e2e8f0', paddingTop: '10px' }}>
              <span>Total Payable</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <Link
                to="/cart"
                className="silaii-demo-btn"
                style={{ textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => dispatch(closeCartDrawer())}
              >
                View Full Cart
              </Link>
              <Link
                to="/checkout"
                className="silaii-form-btn"
                style={{ textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => dispatch(closeCartDrawer())}
              >
                Checkout &rarr;
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
