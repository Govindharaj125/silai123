import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeWishlistDrawer, openCartDrawer, showToast } from '../redux/uiSlice.js';
import { removeFromWishlist, clearWishlist } from '../redux/wishlistSlice.js';
import { addToCart } from '../redux/cartSlice.js';

export default function WishlistDrawer() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.isWishlistDrawerOpen);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  if (!isOpen) return null;

  const handleMoveToCart = (product) => {
    dispatch(addToCart({ product, quantity: 1 }));
    dispatch(removeFromWishlist(product.id));
    dispatch(showToast({ message: `✓ ${product.title} moved to your cart!` }));
  };

  const handleAddAllToCart = () => {
    wishlistItems.forEach((product) => {
      dispatch(addToCart({ product, quantity: 1 }));
    });
    dispatch(clearWishlist());
    dispatch(closeWishlistDrawer());
    dispatch(openCartDrawer());
    dispatch(showToast({ message: `✓ All saved sculptures moved to your cart!` }));
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        zIndex: 10000,
        display: 'flex',
        justifyContent: 'flex-end',
        backdropFilter: 'blur(3px)'
      }}
      onClick={() => dispatch(closeWishlistDrawer())}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          background: '#ffffff',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-4px 0 25px rgba(0,0,0,0.2)',
          borderLeft: '3px solid #ffffff',
          animation: 'slideInRight 0.25s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '2px solid #f4f4f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#ffffff'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.4rem', color: '#eab308' }}>♥</span>
            <div>
              <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.25rem', color: '#18181b', margin: 0, fontWeight: 800 }}>
                Saved Wishlist
              </h2>
              <span style={{ fontSize: '0.8rem', color: '#71717a' }}>
                {wishlistItems.length} {wishlistItems.length === 1 ? 'masterpiece' : 'masterpieces'}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => dispatch(closeWishlistDrawer())}
            style={{
              background: '#f4f4f5',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              fontSize: '1.2rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#71717a'
            }}
          >
            &times;
          </button>
        </div>

        {/* Wishlist Items List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
          {wishlistItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 10px' }}>
              <span style={{ fontSize: '3rem', color: '#d4d4d8', display: 'block', marginBottom: '16px' }}>♡</span>
              <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.2rem', color: '#18181b', marginBottom: '8px' }}>
                Your Wishlist is Empty
              </h3>
              <p style={{ color: '#71717a', fontSize: '0.9rem', marginBottom: '24px' }}>
                Save your cherished divine sculptures and monuments to view them later.
              </p>
              <button
                type="button"
                className="silaii-form-btn"
                style={{ width: 'auto', padding: '10px 24px', margin: '0 auto', display: 'inline-block' }}
                onClick={() => dispatch(closeWishlistDrawer())}
              >
                Explore Sculptures
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    padding: '14px',
                    borderRadius: '12px',
                    border: '2px solid #ffffff',
                    background: '#f8fafc',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    alignItems: 'center'
                  }}
                >
                  <Link
                    to={`/products/${item.handle}`}
                    onClick={() => dispatch(closeWishlistDrawer())}
                    style={{ flexShrink: 0 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: '74px',
                        height: '74px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        border: '1.5px solid #ffffff'
                      }}
                      onError={(e) => {
                        e.target.src = '/www.silaii.com/cdn/shop/files/Ram_Mandir_2.jpg';
                      }}
                    />
                  </Link>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <Link
                      to={`/products/${item.handle}`}
                      onClick={() => dispatch(closeWishlistDrawer())}
                      style={{
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        color: '#18181b',
                        textDecoration: 'none',
                        display: 'block',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        marginBottom: '4px'
                      }}
                    >
                      {item.title}
                    </Link>
                    <div style={{ fontSize: '0.78rem', color: '#71717a', marginBottom: '6px' }}>
                      {item.category}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontWeight: 800, color: '#18181b', fontSize: '0.95rem' }}>
                        {item.priceFormatted || `₹${item.price.toLocaleString('en-IN')}`}
                      </span>
                      {item.compareAtPrice && (
                        <span style={{ fontSize: '0.8rem', color: '#a1a1aa', textDecoration: 'line-through' }}>
                          {item.compareAtPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                    <button
                      type="button"
                      onClick={() => dispatch(removeFromWishlist(item.id))}
                      title="Remove from wishlist"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#94a3b8',
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        padding: '2px 4px'
                      }}
                    >
                      &times;
                    </button>
                    <button
                      type="button"
                      onClick={() => handleMoveToCart(item)}
                      style={{
                        background: '#eab308',
                        color: '#18181b',
                        border: '1px solid #ffffff',
                        borderRadius: '6px',
                        padding: '6px 10px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 2px 6px rgba(234, 179, 8, 0.3)'
                      }}
                    >
                      + Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer Actions */}
        {wishlistItems.length > 0 && (
          <div
            style={{
              padding: '18px 24px',
              borderTop: '2px solid #f4f4f5',
              background: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            <button
              type="button"
              className="silaii-form-btn"
              onClick={handleAddAllToCart}
              style={{ width: '100%', padding: '12px' }}
            >
              Move All ({wishlistItems.length}) to Cart
            </button>
            <button
              type="button"
              onClick={() => dispatch(clearWishlist())}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#71717a',
                fontSize: '0.82rem',
                cursor: 'pointer',
                textAlign: 'center',
                textDecoration: 'underline'
              }}
            >
              Clear Wishlist
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
