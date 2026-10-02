import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice.js';

export default function HeroProductSlider({ products }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Top featured sculptures with distinct high-res carousel images
  const showcaseProducts = products.slice(0, 6);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Auto-play interval: 3.5 seconds
  useEffect(() => {
    if (!isPaused && showcaseProducts.length > 0) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % showcaseProducts.length);
      }, 3500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, showcaseProducts.length]);

  if (!showcaseProducts.length) return null;

  const current = showcaseProducts[currentIndex];

  const handleBuyNow = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart({ product, quantity: 1 }));
    navigate('/checkout');
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? showcaseProducts.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseProducts.length);
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1440px',
        margin: '16px auto 36px',
        padding: '0 16px',
        position: 'relative'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Big Screen Product Image Slide Container - Full Cover High */}
      <div
        style={{
          width: '100%',
          height: 'clamp(560px, 75vh, 760px)',
          borderRadius: '24px',
          border: '3px solid #ffffff',
          boxShadow: '0 14px 44px rgba(0, 0, 0, 0.15)',
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: '#18181b'
        }}
      >
        {/* Full Cover Image with Click Navigation to Product Page */}
        <Link
          to={`/products/${current.handle}`}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            position: 'absolute',
            inset: 0,
            zIndex: 1
          }}
          title={`Click to view ${current.title}`}
        >
          <img
            src={current.image}
            alt={current.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onError={(e) => {
              e.target.src = '/www.silaii.com/cdn/shop/files/Ram_Mandir_1.jpg';
            }}
          />
        </Link>

        {/* ONLY SHOW BUY BUTTON */}
        <div
          style={{
            position: 'absolute',
            bottom: '28px',
            right: '28px',
            zIndex: 10
          }}
        >
          <button
            type="button"
            onClick={(e) => handleBuyNow(e, current)}
            style={{
              background: '#eab308',
              color: '#18181b',
              border: '2.5px solid #ffffff',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
              padding: '14px 36px',
              borderRadius: '35px',
              fontSize: '1rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              letterSpacing: '0.04em',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              e.currentTarget.style.background = '#ca8a04';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.background = '#eab308';
              e.currentTarget.style.color = '#18181b';
            }}
          >
            <span>⚡</span> BUY NOW
          </button>
        </div>

        {/* Previous Slide Arrow with White Border */}
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous Slide"
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.94)',
            backdropFilter: 'blur(4px)',
            border: '2px solid #ffffff',
            color: '#18181b',
            fontSize: '1.4rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            zIndex: 10,
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#eab308';
            e.currentTarget.style.color = '#18181b';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.94)';
            e.currentTarget.style.color = '#18181b';
          }}
        >
          &#10094;
        </button>

        {/* Next Slide Arrow with White Border */}
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next Slide"
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.94)',
            backdropFilter: 'blur(4px)',
            border: '2px solid #ffffff',
            color: '#18181b',
            fontSize: '1.4rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            zIndex: 10,
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#eab308';
            e.currentTarget.style.color = '#18181b';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.94)';
            e.currentTarget.style.color = '#18181b';
          }}
        >
          &#10095;
        </button>
      </div>

      {/* Slide Indicators / Thumb Dots */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          marginTop: '16px'
        }}
      >
        {showcaseProducts.map((p, idx) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: currentIndex === idx ? '32px' : '12px',
              height: '12px',
              borderRadius: '8px',
              background: currentIndex === idx ? '#eab308' : '#e2e8f0',
              border: '2px solid #ffffff',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
            }}
          />
        ))}
      </div>
    </div>
  );
}
