import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main style={{ maxWidth: '600px', margin: '80px auto', padding: '0 20px', textAlign: 'center' }}>
      <div style={{ background: '#ffffff', borderRadius: '16px', border: '3px solid #ffffff', padding: '50px 30px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <span style={{ fontSize: '4rem' }}>🏛️</span>
        <h1 style={{ fontFamily: 'Cinzel, serif', color: '#18181b', margin: '16px 0 10px', fontSize: '2rem' }}>
          404 - Page Not Found
        </h1>
        <p style={{ color: '#71717a', fontSize: '1rem', marginBottom: '24px' }}>
          The sculpture or collection you were searching for is not present in our digital atelier.
        </p>
        <Link to="/" className="silaii-form-btn" style={{ display: 'inline-block', width: 'auto', padding: '12px 30px', textDecoration: 'none' }}>
          Return to Atelier Home
        </Link>
      </div>
    </main>
  );
}
