import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice.js';
import { toggleWishlist } from '../redux/wishlistSlice.js';
import { showToast, openCartDrawer } from '../redux/uiSlice.js';
import RecommendedProductsAuto from '../components/RecommendedProductsAuto.jsx';

export default function ProductDetailPage() {
  const { product, allProducts } = useLoaderData();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isWishlisted = useSelector((state) =>
    state.wishlist.items.some((i) => i.id === product.id)
  );

  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);
  const [selectedImage, setSelectedImage] = useState(product.images?.[0] || product.image);
  const [quantity, setQuantity] = useState(1);

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;
  const currentPriceFormatted = selectedVariant ? selectedVariant.priceFormatted : product.priceFormatted;
  const currentComparePrice = selectedVariant ? selectedVariant.compareAtPrice : product.compareAtPrice;

  const handleAddToCart = () => {
    dispatch(addToCart({ product, variant: selectedVariant, quantity }));
    dispatch(showToast({ message: `✓ Added ${quantity}x ${product.title} to cart!` }));
  };

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(product));
    if (isWishlisted) {
      dispatch(showToast({ message: `Removed ${product.title} from Wishlist.` }));
    } else {
      dispatch(showToast({ message: `♥ Added ${product.title} to your Wishlist!` }));
    }
  };

  const handleBuyNow = () => {
    dispatch(addToCart({ product, variant: selectedVariant, quantity }));
    navigate('/checkout');
  };

  return (
    <main style={{ maxWidth: '1280px', margin: '20px auto 60px', padding: '0 20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '36px', alignItems: 'stretch', marginBottom: '50px' }}>
        {/* Left: Gallery Full Height */}
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div
            style={{
              width: '100%',
              flex: 1,
              minHeight: '660px',
              borderRadius: '20px',
              overflow: 'hidden',
              background: '#ffffff',
              border: '3px solid #ffffff',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
              marginBottom: '16px',
              position: 'relative'
            }}
          >
            <img
              src={selectedImage}
              alt={product.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              onError={(e) => {
                e.target.src = '/www.silaii.com/cdn/shop/files/Ram_Mandir_1.jpg';
              }}
            />
          </div>

          {/* Thumbnails */}
          {product.images && product.images.length > 1 && (
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  style={{
                    width: '92px',
                    height: '92px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: selectedImage === img ? '2.5px solid #eab308' : '2px solid #ffffff',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    background: '#ffffff',
                    padding: 0
                  }}
                >
                  <img src={img} alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details & Purchase Actions */}
        <div style={{ background: '#ffffff', padding: '30px', borderRadius: '16px', border: '3px solid #ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#eab308', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            {product.category}
          </span>
          <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.9rem', color: '#18181b', margin: '6px 0 10px', lineHeight: 1.3 }}>
            {product.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', fontSize: '0.9rem' }}>
            <span style={{ color: '#eab308', fontWeight: 700 }}>★ ★ ★ ★ ★ {product.rating}</span>
            <span style={{ color: '#71717a' }}>({product.reviewsCount} customer reviews)</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px' }}>
            <span style={{ fontSize: '1.8rem', fontWeight: 400, color: '#18181b' }}>
              {currentPriceFormatted}
            </span>
            <span style={{ fontSize: '1.1rem', color: '#a1a1aa', textDecoration: 'line-through' }}>
              {currentComparePrice}
            </span>
            <span style={{ background: '#fef08a', color: '#18181b', fontSize: '0.75rem', fontWeight: 800, padding: '2px 8px', borderRadius: '10px', border: '1px solid #ffffff' }}>
              SAVE {Math.round((1 - currentPrice / parseInt(currentComparePrice.replace(/[^0-9]/g, ''))) * 100)}%
            </span>
          </div>

          <p style={{ color: '#3f3f46', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px' }}>
            {product.description}
          </p>

          {/* Size / Variant Options */}
          {product.variants && product.variants.length > 1 && (
            <div style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#18181b', marginBottom: '8px', textTransform: 'uppercase' }}>
                Select Sculpture Size:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVariant(v)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: selectedVariant?.id === v.id ? '2px solid #eab308' : '2px solid #ffffff',
                      background: selectedVariant?.id === v.id ? '#fefce8' : '#f8fafc',
                      color: '#18181b',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
                    }}
                  >
                    {v.size} - {v.priceFormatted}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#18181b', textTransform: 'uppercase' }}>Quantity:</span>
            <div style={{ display: 'flex', alignItems: 'center', background: '#f8fafc', border: '2px solid #ffffff', borderRadius: '8px', padding: '4px 10px' }}>
              <button
                type="button"
                style={{ padding: '0 6px', fontWeight: 800, fontSize: '1.1rem' }}
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span style={{ minWidth: '30px', textAlign: 'center', fontWeight: 800 }}>{quantity}</span>
              <button
                type="button"
                style={{ padding: '0 6px', fontWeight: 800, fontSize: '1.1rem' }}
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '12px', marginBottom: '24px' }}>
            <button
              type="button"
              className="silaii-form-btn"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="silaii-demo-btn"
              style={{ background: '#18181b', color: '#ffffff', border: '2px solid #ffffff', fontWeight: 800 }}
              onClick={handleBuyNow}
            >
              ⚡ Instant Buy
            </button>
            <button
              type="button"
              onClick={handleToggleWishlist}
              title={isWishlisted ? 'Remove from Wishlist' : 'Save to Wishlist'}
              style={{
                background: isWishlisted ? '#fefce8' : '#ffffff',
                border: isWishlisted ? '2px solid #eab308' : '2px solid #ffffff',
                borderRadius: '8px',
                width: '48px',
                height: '46px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                color: isWishlisted ? '#eab308' : '#71717a',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                transition: 'all 0.2s ease'
              }}
            >
              {isWishlisted ? '♥' : '♡'}
            </button>
          </div>

          {/* Guarantees Box */}
          <div style={{ background: '#fefce8', borderRadius: '12px', padding: '14px', border: '2px solid #ffffff', fontSize: '0.85rem', color: '#18181b', lineHeight: 1.7, marginBottom: '24px' }}>
            <div>🛡️ <strong>Authenticity:</strong> Includes SILAII Master Sculptor Certificate</div>
            <div>🚚 <strong>Shipping:</strong> Safe insured wooden-crate delivery in 3-5 days</div>
            <div>🔄 <strong>Guarantee:</strong> 100% damage-free transit replacement warranty</div>
          </div>

          {/* SIDE PANEL: Sculpture Highlights & Specifications (Full Details) */}
          <div
            style={{
              background: '#f8fafc',
              borderRadius: '16px',
              border: '2px solid #ffffff',
              padding: '22px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              marginBottom: '22px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span style={{ fontSize: '1.2rem' }}>🏛️</span>
              <h3
                style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: '#18181b',
                  margin: 0
                }}
              >
                Sculpture Highlights
              </h3>
            </div>

            {/* Features List */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {product.features?.map((f, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '8px',
                    color: '#3f3f46',
                    fontSize: '0.9rem',
                    lineHeight: 1.5
                  }}
                >
                  <span style={{ color: '#eab308', fontWeight: 800, fontSize: '0.9rem' }}>✦</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Technical Specifications Matrix */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '8px',
                background: '#ffffff',
                padding: '14px',
                borderRadius: '10px',
                border: '1.5px solid #ffffff',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ fontSize: '0.85rem', color: '#18181b' }}>
                <strong style={{ color: '#71717a', textTransform: 'uppercase', fontSize: '0.75rem', display: 'block' }}>Dimensions:</strong>
                <span style={{ fontWeight: 600 }}>{product.dimensions}</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#18181b', borderTop: '1px dashed #e2e8f0', paddingTop: '8px' }}>
                <strong style={{ color: '#71717a', textTransform: 'uppercase', fontSize: '0.75rem', display: 'block' }}>Material:</strong>
                <span style={{ fontWeight: 600 }}>Micro-fused mineral composite stone compound</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#18181b', borderTop: '1px dashed #e2e8f0', paddingTop: '8px' }}>
                <strong style={{ color: '#71717a', textTransform: 'uppercase', fontSize: '0.75rem', display: 'block' }}>Craftsmanship:</strong>
                <span style={{ fontWeight: 600 }}>Hand-sculpted archetypal cast & antique patina finish</span>
              </div>
            </div>
          </div>

          {/* SIDE PANEL: Patron Reviews (Full Details on Side) */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '2px solid #ffffff',
              padding: '22px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.2rem' }}>★</span>
                <h3
                  style={{
                    fontFamily: 'Cinzel, serif',
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#18181b',
                    margin: 0
                  }}
                >
                  Patron Reviews ({product.reviewsCount})
                </h3>
              </div>
              <span style={{ color: '#eab308', fontSize: '0.85rem', fontWeight: 800 }}>
                ★ ★ ★ ★ ★ 5.0
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '10px', border: '1.5px solid #ffffff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '0.85rem' }}>
                  <strong>Venkatesh Raghavan <span style={{ color: '#16a34a', fontSize: '0.75rem' }}>✓ Verified Patron</span></strong>
                  <span style={{ color: '#eab308', fontSize: '0.8rem' }}>★ ★ ★ ★ ★</span>
                </div>
                <p style={{ color: '#3f3f46', fontSize: '0.85rem', margin: 0, lineHeight: 1.5 }}>
                  "The precision and spiritual weight of this sculpture in person is breathtaking. Exactly as described and perfectly packaged."
                </p>
              </div>

              <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '10px', border: '1.5px solid #ffffff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '0.85rem' }}>
                  <strong>Pooja Deshmukh <span style={{ color: '#16a34a', fontSize: '0.75rem' }}>✓ Verified Patron</span></strong>
                  <span style={{ color: '#eab308', fontSize: '0.8rem' }}>★ ★ ★ ★ ★</span>
                </div>
                <p style={{ color: '#3f3f46', fontSize: '0.85rem', margin: 0, lineHeight: 1.5 }}>
                  "Gifted this to my parents for their anniversary altar. Outstanding finish and heavy stone feel."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-scrolling Recommended Products Carousel (Small Image Products) */}
      <RecommendedProductsAuto products={allProducts || []} currentId={product.id} />
    </main>
  );
}
