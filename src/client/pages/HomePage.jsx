import React, { useState, useMemo } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import Pagination from '../components/Pagination.jsx';
import HeroProductSlider from '../components/HeroProductSlider.jsx';

export default function HomePage() {
  const { products } = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [sortBy, setSortBy] = useState('popularity');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = [
    'ALL',
    'DIVINE SERIES',
    'CAR DASHBOARD SERIES',
    'LEADERS & ICONS',
    'FLOAT SERIES',
    'MONUMENTS'
  ];

  const filteredProducts = useMemo(() => {
    let result = products;
    if (selectedCategory !== 'ALL') {
      result = products.filter((p) => p.category === selectedCategory);
    }

    let sorted = [...result];
    if (sortBy === 'price-low') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popularity') {
      sorted.sort((a, b) => {
        const popA = (a.reviewsCount || 0) * (a.rating || 5);
        const popB = (b.reviewsCount || 0) * (b.rating || 5);
        return popB - popA;
      });
    } else if (sortBy === 'rating') {
      sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
    return sorted;
  }, [products, selectedCategory, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div style={{ paddingTop: '16px' }}>
      {/* Big Screen Auto Product Showcase Slider with Buy Button */}
      <HeroProductSlider products={products} />

      {/* Main Storefront Container */}
      <main id="sculptures-catalog" style={{ maxWidth: '1340px', margin: '40px auto 60px', padding: '0 20px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '2.2rem', color: '#18181b', margin: '0 0 8px', fontWeight: 800 }}>
            Masterpiece Sculptures Catalog
          </h2>
          <p style={{ color: '#71717a', fontSize: '1rem', margin: 0 }}>
            Handcrafted with architectural precision and sacred shastra proportions
          </p>
        </div>

        {/* Category Filter Tabs with White Borders */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`silaii-demo-btn ${selectedCategory === cat ? 'active' : ''}`}
              style={{
                background: selectedCategory === cat ? '#eab308' : '#ffffff',
                color: selectedCategory === cat ? '#18181b' : '#3f3f46',
                padding: '8px 18px',
                borderRadius: '24px',
                fontSize: '0.85rem',
                fontWeight: 700,
                boxShadow: selectedCategory === cat ? '0 4px 12px rgba(234, 179, 8, 0.35)' : '0 2px 6px rgba(0,0,0,0.06)'
              }}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Catalog Bar with Stats & Yellow Accent Sorting Dropdown */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '26px',
            flexWrap: 'wrap',
            gap: '14px',
            background: '#ffffff',
            padding: '12px 20px',
            borderRadius: '14px',
            border: '2px solid #ffffff',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
          }}
        >
          <span style={{ fontSize: '0.9rem', color: '#71717a' }}>
            Showing <strong>{filteredProducts.length}</strong> sculptures in{' '}
            <strong style={{ color: '#18181b' }}>{selectedCategory}</strong>
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <label
              htmlFor="home-sort-select"
              style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                color: '#18181b',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#eab308',
                  color: '#18181b',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  boxShadow: '0 2px 6px rgba(234, 179, 8, 0.4)'
                }}
              >
                ⇅
              </span>
              <span>Sort By:</span>
            </label>

            <div style={{ position: 'relative', display: 'inline-block' }}>
              <select
                id="home-sort-select"
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                style={{
                  appearance: 'none',
                  WebkitAppearance: 'none',
                  padding: '8px 38px 8px 16px',
                  borderRadius: '12px',
                  border: '2px solid #ffffff',
                  background: '#fefce8',
                  color: '#18181b',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'all 0.2s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#eab308';
                  e.target.style.boxShadow = '0 0 0 3px rgba(234, 179, 8, 0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#ffffff';
                  e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                }}
              >
                <option value="popularity">Popularity (Most Revered)</option>
                <option value="price-low">Price: Low to High (₹ → ₹₹₹)</option>
                <option value="price-high">Price: High to Low (₹₹₹ → ₹)</option>
                <option value="featured">Featured Collection</option>
                <option value="rating">Highest Rated ★</option>
              </select>
              <div
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  color: '#ca8a04',
                  fontWeight: 800,
                  fontSize: '0.75rem'
                }}
              >
                ▼
              </div>
            </div>
          </div>
        </div>

        {/* Paginated Products Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '28px',
            marginBottom: '30px'
          }}
        >
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination Control */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            setCurrentPage(page);
            const el = document.getElementById('sculptures-catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </main>
    </div>
  );
}
