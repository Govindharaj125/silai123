import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeAboutModal } from '../redux/uiSlice.js';

export default function AboutModal() {
  const dispatch = useDispatch();
  const { isAboutModalOpen } = useSelector((state) => state.ui);

  if (!isAboutModalOpen) return null;

  return (
    <div className="silaii-modal-backdrop" onClick={() => dispatch(closeAboutModal())}>
      <div className="silaii-modal-card" style={{ maxWidth: '560px' }} onClick={(e) => e.stopPropagation()}>
        <button type="button" className="silaii-modal-close" onClick={() => dispatch(closeAboutModal())}>
          &times;
        </button>

        <h2 style={{ fontFamily: 'Cinzel, serif', color: '#18181b', marginBottom: '0.75rem', fontSize: '1.6rem' }}>
          About SILAII
        </h2>

        <p style={{ lineHeight: 1.7, color: '#27272a', fontSize: '0.95rem', marginBottom: '1rem' }}>
          <strong>SILAII</strong> is an Indian design studio and heritage atelier founded with the vision of immortalizing iconic cultural monuments, spiritual masters, historical leaders, and divine deities.
        </p>

        <p style={{ lineHeight: 1.7, color: '#27272a', fontSize: '0.95rem', marginBottom: '1rem' }}>
          Every SILAII sculpture begins with intensive architectural research, clay prototyping by master sthapathis, and micro-precision casting in dense mineral composite stone with gold and bronze patinas.
        </p>

        <div style={{ background: '#fefce8', borderLeft: '4px solid #eab308', border: '2px solid #ffffff', padding: '12px 16px', fontSize: '0.9rem', color: '#18181b', fontStyle: 'italic', marginBottom: '1.25rem' }}>
          "Sculpting the soul of Indian civilization into timeless masterpieces."
        </div>

        <button type="button" className="silaii-form-btn" onClick={() => dispatch(closeAboutModal())}>
          Explore Sculptures
        </button>
      </div>
    </div>
  );
}
