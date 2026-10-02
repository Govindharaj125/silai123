import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice.js';
import { showToast } from '../redux/uiSlice.js';

export default function RecommendedProductsAuto({ products, currentId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Filter out current product and keep recommendations
  const items = products.filter((p) => p.id !== currentId);

  // Auto-scrolling behavior
  useEffect(() => {
    if (isPaused || !scrollContainerRef.current) return;

    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScrollLeft - 10) {
        // Smoothly loop back to start
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll forward by one card width (~210px)
        container.scrollBy({ left: 210, behavior: 'smooth' });
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -220, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScrollLeft - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 220, behavior: 'smooth' });
      }
    }
  };

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart({ product, quantity: 1 }));
    dispatch(showToast({ message: `✓ Added ${product.title} to cart!` }));
  };

  const handleInstantBuy = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart({ product, quantity: 1 }));
    navigate('/checkout');
  };

  if (!items.length) return null;

  return (
    <section
      style={{
        marginTop: '60px',
        background: '#ffffff',
        borderRadius: '20px',
        border: '3px solid #ffffff',
        padding: '28px 24px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
        position: 'relative'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header with Title & Auto-Scroll Nav Controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        <div>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#eab308', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Curated Collection
          </span>
          <h2
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: '1.4rem',
              color: '#18181b',
              margin: '2px 0 0',
              fontWeight: 800
            }}
          >
            Recommended Sculptures
          </h2>
        </div>

        {/* Carousel controls with white borders */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.75rem', color: '#71717a', marginRight: '4px' }}>
            {isPaused ? '⏸ Paused' : '▶ Auto-scrolling'}
          </span>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Recommended"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#f8fafc',
              border: '2px solid #ffffff',
              color: '#18181b',
              fontSize: '1rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#eab308')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#f8fafc')}
          >
            &#10094;
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Recommended"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#f8fafc',
              border: '2px solid #ffffff',
              color: '#18181b',
              fontSize: '1rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#eab308')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#f8fafc')}
          >
            &#10095;
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track for Small Image Products */}
      <div
        ref={scrollContainerRef}
        style={{
          display: 'flex',
          gap: '16px',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          paddingBottom: '12px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {items.map((prod) => (
          <div
            key={prod.id}
            style={{
              flex: '0 0 195px',
              width: '195px',
              background: '#f8fafc',
              borderRadius: '14px',
              border: '2px solid #ffffff',
              boxShadow: '0 3px 12px rgba(0, 0, 0, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(234, 179, 8, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 3px 12px rgba(0, 0, 0, 0.05)';
            }}
          >
            {/* Small Image Container (150px height) */}
            <Link
              to={`/products/${prod.handle}`}
              style={{
                display: 'block',
                width: '100%',
                height: '150px',
                position: 'relative',
                background: '#ffffff',
                borderBottom: '2px solid #ffffff',
                overflow: 'hidden'
              }}
            >
              <img
                src={prod.image}
                alt={prod.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onError={(e) => {
                  e.target.src = '/www.silaii.com/cdn/shop/files/Ram_Mandir_1.jpg';
                }}
              />
              {prod.badge && (
                <span
                  style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    background: '#eab308',
                    color: '#18181b',
                    fontSize: '0.62rem',
                    fontWeight: 800,
                    padding: '2px 6px',
                    borderRadius: '8px',
                    border: '1.5px solid #ffffff',
                    letterSpacing: '0.04em'
                  }}
                >
                  {prod.badge}
                </span>
              )}
            </Link>

            {/* Product Meta */}
            <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <span style={{ fontSize: '0.68rem', color: '#eab308', fontWeight: 800, textTransform: 'uppercase', marginBottom: '2px' }}>
                {prod.category.replace(' SERIES', '')}
              </span>
              <Link
                to={`/products/${prod.handle}`}
                style={{
                  textDecoration: 'none',
                  color: '#18181b',
                  fontSize: '0.82rem',
                  fontFamily: 'Cinzel, serif',
                  fontWeight: 700,
                  lineHeight: 1.3,
                  marginBottom: '6px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  minHeight: '2.2em'
                }}
              >
                {prod.title}
              </Link>

              {/* Price (font-weight: 400 normal as requested) */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: 'auto', marginBottom: '10px' }}>
                <span style={{ fontSize: '1rem', fontWeight: 400, color: '#18181b' }}>
                  {prod.priceFormatted}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#a1a1aa', textDecoration: 'line-through' }}>
                  {prod.compareAtPrice}
                </span>
              </div>

              {/* Action Buttons: Quick Add & Buy */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                <button
                  type="button"
                  onClick={(e) => handleQuickAdd(e, prod)}
                  style={{
                    background: '#ffffff',
                    color: '#18181b',
                    border: '1.5px solid #ffffff',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '6px 4px',
                    cursor: 'pointer'
                  }}
                  title="Add to Cart"
                >
                  + Cart
                </button>
                <button
                  type="button"
                  onClick={(e) => handleInstantBuy(e, prod)}
                  style={{
                    background: '#eab308',
                    color: '#18181b',
                    border: '1.5px solid #ffffff',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '6px 4px',
                    cursor: 'pointer'
                  }}
                  title="Buy Now"
                >
                  ⚡ Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
