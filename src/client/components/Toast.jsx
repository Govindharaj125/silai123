import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { hideToast, openCartDrawer } from '../redux/uiSlice.js';

export default function Toast() {
  const dispatch = useDispatch();
  const { toast } = useSelector((state) => state.ui);

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        dispatch(hideToast());
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast.visible, dispatch]);

  if (!toast.visible) return null;

  return (
    <div className="silaii-toast">
      <span>{toast.message}</span>
      <button
        type="button"
        style={{
          background: '#eab308',
          color: '#18181b',
          padding: '6px 12px',
          borderRadius: '6px',
          fontSize: '0.8rem',
          fontWeight: 800,
          border: '1px solid #ffffff',
          cursor: 'pointer'
        }}
        onClick={() => {
          dispatch(hideToast());
          dispatch(openCartDrawer());
        }}
      >
        View Cart &rarr;
      </button>
    </div>
  );
}
