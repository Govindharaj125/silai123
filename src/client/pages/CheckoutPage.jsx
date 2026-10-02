import React, { useState } from 'react';
import { useActionData, useNavigation, Form, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice.js';

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const actionData = useActionData();

  const { items, subtotal, total, discountAmount, discountCode } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const [paymentMode, setPaymentMode] = useState('UPI');
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  const isSubmitting = navigation.state === 'submitting';

  React.useEffect(() => {
    if (actionData && actionData.success) {
      setConfirmedOrder(actionData);
      dispatch(clearCart());
    }
  }, [actionData, dispatch]);

  if (confirmedOrder) {
    return (
      <main style={{ maxWidth: '600px', margin: '60px auto', padding: '0 20px', textAlign: 'center' }}>
        <div style={{ background: '#ffffff', borderRadius: '16px', border: '3px solid #ffffff', padding: '40px 30px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
          <div
            style={{
              width: '70px',
              height: '70px',
              background: '#fef08a',
              color: '#18181b',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.2rem',
              fontWeight: 800,
              margin: '0 auto 20px',
              border: '2px solid #ffffff'
            }}
          >
            ✓
          </div>
          <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.9rem', color: '#18181b', marginBottom: '10px' }}>
            Order Confirmed!
          </h1>
          <p style={{ color: '#71717a', fontSize: '0.95rem', marginBottom: '24px' }}>
            Thank you for your devotion! Your SILAII sculpture order <strong>#{confirmedOrder.orderId}</strong> has been registered.
          </p>

          <div style={{ background: '#fefce8', borderRadius: '12px', padding: '16px', textAlign: 'left', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: '24px', border: '2px solid #ffffff' }}>
            <div><strong>Recipient:</strong> {confirmedOrder.fullName}</div>
            <div><strong>Delivery Address:</strong> {confirmedOrder.address}, {confirmedOrder.city} - {confirmedOrder.pincode}</div>
            <div><strong>Payment Method:</strong> {confirmedOrder.paymentMode}</div>
            <div><strong>Total Paid:</strong> ₹{confirmedOrder.totalAmount?.toLocaleString('en-IN')}</div>
            <div><strong>Estimated Delivery:</strong> 3 - 5 Business Days via Insured Courier</div>
          </div>

          <Link to="/" className="silaii-form-btn" style={{ display: 'inline-block', width: 'auto', padding: '12px 32px', textDecoration: 'none' }}>
            Return to Store
          </Link>
        </div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main style={{ maxWidth: '600px', margin: '60px auto', padding: '0 20px', textAlign: 'center' }}>
        <div style={{ background: '#ffffff', borderRadius: '16px', border: '3px solid #ffffff', padding: '40px 30px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <span style={{ fontSize: '3rem' }}>📦</span>
          <h2 style={{ fontFamily: 'Cinzel, serif', color: '#18181b', margin: '14px 0 10px' }}>
            No Items to Checkout
          </h2>
          <p style={{ color: '#71717a', marginBottom: '20px' }}>Please add a sculpture to your cart first.</p>
          <Link to="/" className="silaii-form-btn" style={{ display: 'inline-block', width: 'auto', padding: '10px 24px', textDecoration: 'none' }}>
            Browse Sculptures
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: '1240px', margin: '30px auto 60px', padding: '0 20px' }}>
      <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: '2.2rem', color: '#18181b', marginBottom: '24px' }}>
        Express Checkout
      </h1>

      <Form method="post" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
        {/* Left Column: Delivery & Payment Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Contact & Shipping Form */}
          <div style={{ background: '#ffffff', borderRadius: '16px', border: '3px solid #ffffff', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.25rem', color: '#18181b', marginBottom: '18px' }}>
              1. Delivery & Contact Details
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div className="silaii-form-group" style={{ gridColumn: '1 / -1' }}>
                <label>Full Name</label>
                <input type="text" name="fullName" required defaultValue={user?.name || 'Raj Sharma'} />
              </div>

              <div className="silaii-form-group">
                <label>Email Address</label>
                <input type="email" name="email" required defaultValue={user?.email || 'rajgovindha165@gmail.com'} />
              </div>

              <div className="silaii-form-group">
                <label>Mobile Number</label>
                <input type="tel" name="phone" required defaultValue={user?.phone || '+91 98846 88804'} />
              </div>

              <div className="silaii-form-group" style={{ gridColumn: '1 / -1' }}>
                <label>Street Address</label>
                <input type="text" name="address" required defaultValue="Plot 42, Temple View Avenue, Adyar" />
              </div>

              <div className="silaii-form-group">
                <label>City</label>
                <input type="text" name="city" required defaultValue="Chennai" />
              </div>

              <div className="silaii-form-group">
                <label>PIN Code</label>
                <input type="text" name="pincode" required defaultValue="600020" />
              </div>
            </div>
          </div>

          {/* Payment Method Selector */}
          <div style={{ background: '#ffffff', borderRadius: '16px', border: '3px solid #ffffff', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.25rem', color: '#18181b', marginBottom: '18px' }}>
              2. Select Payment Method
            </h2>

            <input type="hidden" name="paymentMode" value={paymentMode} />
            <input type="hidden" name="totalAmount" value={total} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* UPI */}
              <div
                onClick={() => setPaymentMode('UPI')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  border: paymentMode === 'UPI' ? '2.5px solid #eab308' : '2px solid #ffffff',
                  background: paymentMode === 'UPI' ? '#fefce8' : '#f8fafc',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="radio" checked={paymentMode === 'UPI'} readOnly />
                  <span style={{ fontWeight: 'normal', color: '#18181b', fontSize: '0.92rem' }}>
                    UPI Express (GPay, PhonePe, Paytm, BHIM)
                  </span>
                </div>
                <span style={{ fontSize: '0.75rem', background: '#fef08a', color: '#18181b', fontWeight: 'normal', padding: '2px 8px', borderRadius: '10px', border: '1px solid #ffffff' }}>
                  INSTANT
                </span>
              </div>

              {/* Cards */}
              <div
                onClick={() => setPaymentMode('Cards')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  border: paymentMode === 'Cards' ? '2.5px solid #eab308' : '2px solid #ffffff',
                  background: paymentMode === 'Cards' ? '#fefce8' : '#f8fafc',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="radio" checked={paymentMode === 'Cards'} readOnly />
                  <span style={{ fontWeight: 'normal', color: '#18181b', fontSize: '0.92rem' }}>
                    Credit / Debit Card (Visa, MasterCard, RuPay)
                  </span>
                </div>
              </div>

              {/* Snapmint EMI */}
              <div
                onClick={() => setPaymentMode('Snapmint 0% EMI')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  border: paymentMode === 'Snapmint 0% EMI' ? '2.5px solid #eab308' : '2px solid #ffffff',
                  background: paymentMode === 'Snapmint 0% EMI' ? '#fefce8' : '#f8fafc',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="radio" checked={paymentMode === 'Snapmint 0% EMI'} readOnly />
                  <span style={{ fontWeight: 'normal', color: '#18181b', fontSize: '0.92rem' }}>
                    Snapmint 0% Interest EMI (3 Easy Installments)
                  </span>
                </div>
                <span style={{ fontSize: '0.75rem', background: '#e0f2fe', color: '#0369a1', fontWeight: 'normal', padding: '2px 8px', borderRadius: '10px' }}>
                  0% INTEREST
                </span>
              </div>

              {/* COD */}
              <div
                onClick={() => setPaymentMode('Cash on Delivery')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  border: paymentMode === 'Cash on Delivery' ? '2.5px solid #eab308' : '2px solid #ffffff',
                  background: paymentMode === 'Cash on Delivery' ? '#fefce8' : '#f8fafc',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="radio" checked={paymentMode === 'Cash on Delivery'} readOnly />
                  <span style={{ fontWeight: 'normal', color: '#18181b', fontSize: '0.92rem' }}>
                    Cash on Delivery (Pay upon safe handover)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div style={{ background: '#ffffff', borderRadius: '16px', border: '3px solid #ffffff', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.35rem', color: '#18181b', marginBottom: '18px' }}>
            Order Overview
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
            {items.map((item) => (
              <div key={item.id} style={{ display: 'flex', gap: '12px', alignItems: 'center', paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
                <img src={item.image} alt={item.title} style={{ width: '56px', height: '56px', borderRadius: '8px', objectFit: 'cover', border: '1.5px solid #ffffff' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#18181b' }}>{item.title}</div>
                  <div style={{ fontSize: '0.78rem', color: '#71717a' }}>{item.variantTitle} &times; {item.quantity}</div>
                </div>
                <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#18181b' }}>
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.92rem', color: '#71717a' }}>
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString('en-IN')}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.92rem', color: '#71717a' }}>
            <span>Shipping</span>
            <span style={{ color: '#0d8249', fontWeight: 700 }}>FREE (Insured)</span>
          </div>

          {discountAmount > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.92rem', color: '#0d8249', fontWeight: 700 }}>
              <span>Promo Savings ({discountCode})</span>
              <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '16px 0 24px', fontSize: '1.35rem', fontWeight: 800, color: '#18181b', borderTop: '2px dashed #e2e8f0', paddingTop: '14px' }}>
            <span>Total Payable</span>
            <span>₹{total.toLocaleString('en-IN')}</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="silaii-form-btn"
            style={{ padding: '16px', fontSize: '1.1rem' }}
          >
            {isSubmitting ? 'Placing Sacred Order...' : `Complete Order & Pay ₹${total.toLocaleString('en-IN')}`}
          </button>

          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#71717a', marginTop: '14px' }}>
            🛡️ 100% Satisfaction & Authenticity Guaranteed by SILAIIGAL PVT LTD
          </p>
        </div>
      </Form>
    </main>
  );
}
