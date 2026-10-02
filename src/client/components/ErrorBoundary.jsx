import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

export default function ErrorBoundary() {
  const error = useRouteError();
  console.error('Route error:', error);

  return (
    <div style={{ padding: '80px 20px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <span style={{ fontSize: '3rem' }}>⚠️</span>
      <h2 style={{ fontFamily: 'Cinzel, serif', color: '#18181b', margin: '16px 0 8px' }}>
        Sculpture Not Found or Route Issue
      </h2>
      <p style={{ color: '#71717a', marginBottom: '24px' }}>
        {error?.statusText || error?.message || 'The page you were looking for could not be loaded.'}
      </p>
      <Link to="/" className="silaii-form-btn" style={{ display: 'inline-block', width: 'auto', padding: '12px 28px', textDecoration: 'none' }}>
        Return to Atelier Home
      </Link>
    </div>
  );
}
