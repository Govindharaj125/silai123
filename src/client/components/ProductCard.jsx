import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice.js';
import { toggleWishlist } from '../redux/wishlistSlice.js';
import { showToast } from '../redux/uiSlice.js';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const wrapRef = useRef(null);

  const isWishlisted = useSelector((state) =>
    state.wishlist.items.some((i) => i.id === product.id)
  );

  // Navigate to product detail page on click anywhere on card (except buttons)
  const handleCardClick = (e) => {
    // If the click is inside a button or form element, let that handle it
    if (e.target.closest('button')) {
      return;
    }
    navigate(`/products/${product.handle}`);
  };

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart({ product, quantity: 1 }));
    dispatch(showToast({ message: `✓ ${product.title} added to your cart!` }));
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleWishlist(product));
    if (isWishlisted) {
      dispatch(showToast({ message: `Removed ${product.title} from Wishlist.` }));
    } else {
      dispatch(showToast({ message: `♥ Added ${product.title} to your Wishlist!` }));
    }
  };

  const handleMouseMove = (e) => {
    if (!wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setZoomPos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
    setZoomPos({ x: 50, y: 50 });
  };

  return (
    <div
      className="sculpture-card"
      onClick={handleCardClick}
      style={{
        cursor: 'pointer',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease'
      }}
    >
      {/* Image Wrap with Interactive Hover-to-Zoom Lens and Pointer Cursor */}
      <div
        ref={wrapRef}
        className="card-img-wrap"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          background: '#ffffff'
        }}
      >
        {product.badge && <span className="card-badge">{product.badge}</span>}

        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
            transform: isZoomed ? 'scale(1.25)' : 'scale(1)',
            transition: isZoomed
              ? 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform-origin 0.08s ease-out'
              : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform-origin 0.4s ease-out',
            display: 'block',
            pointerEvents: 'none'
          }}
          onError={(e) => {
            e.target.src = '/www.silaii.com/cdn/shop/files/Ram_Mandir_2.jpg';
          }}
        />

        {/* Hover-to-Zoom Craftsmanship Detail Indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            background: isZoomed ? 'rgba(24, 24, 27, 0.92)' : 'rgba(255, 255, 255, 0.9)',
            color: isZoomed ? '#fef08a' : '#52525b',
            border: isZoomed ? '1.5px solid #eab308' : '1.5px solid #ffffff',
            backdropFilter: 'blur(6px)',
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            pointerEvents: 'none',
            transition: 'all 0.2s ease',
            zIndex: 2
          }}
        >
          <span style={{ fontSize: '0.85rem' }}>🔍</span>
          <span>{isZoomed ? 'Detail View • Click to Open' : 'Hover to Zoom • Click to Open'}</span>
        </div>

        {/* Persistent Wishlist Toggle Heart Button */}
        <button
          type="button"
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={handleToggleWishlist}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: isWishlisted ? '#fefce8' : 'rgba(255, 255, 255, 0.92)',
            border: isWishlisted ? '2px solid #eab308' : '2px solid #ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            zIndex: 4,
            transition: 'all 0.2s ease',
            color: isWishlisted ? '#eab308' : '#71717a',
            fontSize: '1.25rem',
            lineHeight: 1
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {isWishlisted ? '♥' : '♡'}
        </button>
      </div>

      <div className="card-body">
        <span className="card-cat">{product.category}</span>
        <h3
          className="card-title"
          style={{ cursor: 'pointer', margin: 0 }}
        >
          {product.title}
        </h3>
        <div className="card-dims">{product.dimensions}</div>

        <div className="card-rating">
          ★ ★ ★ ★ ★ <span>{product.rating} ({product.reviewsCount})</span>
        </div>

        <div className="card-price-row">
          <span className="card-price">{product.priceFormatted}</span>
          <span className="card-compare-price">{product.compareAtPrice}</span>
        </div>

        <div className="card-actions">
          <button
            type="button"
            className="btn-view-details"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/products/${product.handle}`);
            }}
          >
            View Details
          </button>
          <button
            type="button"
            className="btn-quick-add"
            onClick={handleQuickAdd}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
