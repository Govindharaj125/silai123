import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { closeProfileModal } from '../redux/uiSlice.js';
import { logout } from '../redux/authSlice.js';

export default function ProfileModal() {
  const dispatch = useDispatch();
  const { isProfileModalOpen } = useSelector((state) => state.ui);
  const { user } = useSelector((state) => state.auth);

  if (!isProfileModalOpen || !user) return null;

  return (
    <div className="silaii-modal-backdrop" onClick={() => dispatch(closeProfileModal())}>
      <div className="silaii-modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="silaii-modal-close" onClick={() => dispatch(closeProfileModal())}>
          &times;
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div className="silaii-avatar" style={{ width: '60px', height: '60px', fontSize: '1.5rem', margin: '0 auto 10px', border: '2px solid #ffffff' }}>
            {user.avatar || 'R'}
          </div>
          <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.35rem', color: '#18181b', margin: '0 0 4px' }}>
            {user.name}
          </h3>
          <span style={{ display: 'inline-block', background: '#fef08a', color: '#18181b', fontWeight: 800, padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', border: '1px solid #ffffff' }}>
            {user.tier || 'Gold Patron'}
          </span>
        </div>

        <div style={{ background: '#fefce8', borderRadius: '12px', padding: '14px', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: '1.25rem', border: '2px solid #ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div><strong>Email:</strong> {user.email}</div>
          <div><strong>Mobile:</strong> {user.phone}</div>
          <div><strong>Member Since:</strong> {user.memberSince || '2026'}</div>
          <div><strong>Total Sculptures Acquired:</strong> {user.acquisitions || 3} Masterpieces</div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <Link
            to="/checkout"
            className="silaii-form-btn"
            style={{ flex: 1, textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => dispatch(closeProfileModal())}
          >
            View Orders
          </Link>
          <button
            type="button"
            className="silaii-demo-btn"
            style={{ marginTop: 0, background: '#fff0f0', border: '2px solid #ffffff', color: '#dc2626' }}
            onClick={() => {
              dispatch(logout());
              dispatch(closeProfileModal());
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
