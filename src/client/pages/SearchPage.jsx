import React, { useState, useMemo } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import Pagination from '../components/Pagination.jsx';
import HeritageOriginsMap, { TEMPLE_ORIGINS } from '../components/HeritageOriginsMap.jsx';

export default function SearchPage() {
  const { products } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  // Main state
  const [query, setQuery] = useState(initialQuery);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false); // Front-left sidebar state
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all'); // all, under-2500, 2500-4500, above-4500
  const [minRating, setMinRating] = useState(0); // 0, 4.5, 4.9
  const [selectedBadge, setSelectedBadge] = useState('all');
  const [selectedOrigin, setSelectedOrigin] = useState(null); // Temple origin object
  const [showMap, setShowMap] = useState(true);
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

  const materials = [
    { id: 'all', label: 'All Materials' },
    { id: 'Krishna Shila Stone Composite', label: 'Krishna Shila Stone' },
    { id: 'Cold-Cast Bronze & Mineral Stone', label: 'Cold-Cast Bronze & Stone' },
    { id: 'Black Granite Composite', label: 'Black Granite Composite' },
    { id: 'Antique Terracotta & Sandstone', label: 'Terracotta & Sandstone' },
    { id: 'Heat-Resistant Automotive Mineral', label: 'Automotive Mineral' }
  ];

  const badges = [
    'all',
    'BESTSELLER',
    'SACRED',
    'CONSECRATED',
    'GUARDIAN',
    'HERITAGE',
    'ICON',
    'STATE EMBLEM'
  ];

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      // 1. Text Query
      const q = query.toLowerCase().trim();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.material && p.material.toLowerCase().includes(q)) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.tags && p.tags.some((t) => t.toLowerCase().includes(q)));

      // 2. Category
      const matchesCategory = selectedCategory === 'ALL' || p.category === selectedCategory;

      // 3. Material
      const matchesMaterial =
        selectedMaterial === 'all' ||
        p.material === selectedMaterial ||
        (p.description && p.description.toLowerCase().includes(selectedMaterial.toLowerCase())) ||
        (p.features && p.features.some((f) => f.toLowerCase().includes(selectedMaterial.toLowerCase())));

      // 4. Price Range
      let matchesPrice = true;
      if (priceRange === 'under-2500') {
        matchesPrice = p.price < 2500;
      } else if (priceRange === '2500-4500') {
        matchesPrice = p.price >= 2500 && p.price <= 4500;
      } else if (priceRange === 'above-4500') {
        matchesPrice = p.price > 4500;
      }

      // 5. Rating
      const matchesRating = !minRating || p.rating >= minRating;

      // 6. Badge
      const matchesBadge = selectedBadge === 'all' || p.badge === selectedBadge;

      // 7. Sacred Map Origin
      let matchesOrigin = true;
      if (selectedOrigin) {
        matchesOrigin = selectedOrigin.handles.includes(p.handle);
      }

      return matchesQuery && matchesCategory && matchesMaterial && matchesPrice && matchesRating && matchesBadge && matchesOrigin;
    });

    // Sorting
    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popularity') {
      result = [...result].sort((a, b) => {
        const popA = (a.reviewsCount || 0) * (a.rating || 5);
        const popB = (b.reviewsCount || 0) * (b.rating || 5);
        return popB - popA;
      });
    } else if (sortBy === 'rating') {
      result = [...result].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return result;
  }, [products, query, selectedCategory, selectedMaterial, priceRange, minRating, selectedBadge, selectedOrigin, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    setCurrentPage(1);
    if (val) {
      setSearchParams({ q: val });
    } else {
      setSearchParams({});
    }
  };

  const handleResetFilters = () => {
    setQuery('');
    setSelectedCategory('ALL');
    setSelectedMaterial('all');
    setPriceRange('all');
    setMinRating(0);
    setSelectedBadge('all');
    setSelectedOrigin(null);
    setSortBy('popularity');
    setCurrentPage(1);
    setSearchParams({});
  };

  // Count how many non-default filters are active
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== 'ALL') count++;
    if (selectedMaterial !== 'all') count++;
    if (priceRange !== 'all') count++;
    if (minRating > 0) count++;
    if (selectedBadge !== 'all') count++;
    if (selectedOrigin !== null) count++;
    return count;
  }, [selectedCategory, selectedMaterial, priceRange, minRating, selectedBadge, selectedOrigin]);

  const hasActiveFilters = activeFiltersCount > 0 || query !== '';

  return (
    <div style={{ background: '#fdfbf7', minHeight: '100vh', paddingBottom: '60px' }}>
      {/* Search Header Banner */}
      <section
        style={{
          background: '#ffffff',
          color: '#18181b',
          padding: '38px 20px 28px',
          textAlign: 'center',
          borderBottom: '3px solid #ffffff',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
        }}
      >
        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#eab308', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          ARCHITECTURAL SEARCH & ARCHIVES
        </span>
        <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: '2.4rem', fontWeight: 800, margin: '8px 0 10px', color: '#18181b' }}>
          Search Sculpture Atelier
        </h1>
        <p style={{ color: '#52525b', fontSize: '0.98rem', fontWeight: 500, marginBottom: '22px', maxWidth: '640px', margin: '0 auto 22px' }}>
          Explore divine idols, historic temple replicas, sacred dashboard series & monument statues
        </p>

        {/* Search Bar Input */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            background: '#f8fafc',
            borderRadius: '40px',
            padding: '8px 20px',
            border: '2.5px solid #ffffff',
            boxShadow: '0 4px 16px rgba(0,0,0,0.07)'
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Search by deity, sanctuary, temple or style (e.g. Ram Mandir, Natarajar, Ayodhya)..."
            value={query}
            onChange={handleSearchChange}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              padding: '10px 14px',
              fontSize: '1rem',
              color: '#18181b',
              fontWeight: 500
            }}
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setSearchParams({});
              }}
              style={{
                color: '#71717a',
                fontSize: '1.3rem',
                padding: '0 8px',
                cursor: 'pointer',
                background: 'transparent',
                border: 'none'
              }}
            >
              &times;
            </button>
          )}
        </div>
      </section>

      {/* Main Body */}
      <main style={{ maxWidth: '1360px', margin: '26px auto', padding: '0 20px' }}>
        {/* Map Header Controls */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
          <button
            type="button"
            onClick={() => setShowMap(!showMap)}
            style={{
              background: '#ffffff',
              border: '2px solid #ffffff',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#18181b',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}
          >
            <span>🗺️</span> {showMap ? 'Hide Origins Map' : 'Show Temple Origins Map'}
          </button>
        </div>

        {/* Interactive Temple Heritage & Atelier Origins Map */}
        {showMap && (
          <HeritageOriginsMap
            selectedOrigin={selectedOrigin}
            onSelectOrigin={(origin) => {
              setSelectedOrigin(origin);
              setCurrentPage(1);
            }}
            activeProducts={filteredProducts}
          />
        )}

        {/* Action Bar with Filter Icon Button + Results Info + Sort */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '26px',
            flexWrap: 'wrap',
            gap: '14px',
            background: '#ffffff',
            padding: '14px 20px',
            borderRadius: '16px',
            border: '2px solid #ffffff',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
          }}
        >
          {/* Left Action: FILTER ICON BUTTON (Triggers Front-Left Sidebar) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setIsFilterDrawerOpen(true)}
              style={{
                background: '#eab308',
                color: '#18181b',
                border: '2px solid #ffffff',
                borderRadius: '12px',
                padding: '9px 18px',
                fontSize: '0.9rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                boxShadow: '0 2px 10px rgba(234, 179, 8, 0.4)',
                transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {/* Filter Icon SVG */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
              <span>Filter Sculptures</span>
              {activeFiltersCount > 0 && (
                <span
                  style={{
                    background: '#18181b',
                    color: '#fef08a',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '2px 7px',
                    borderRadius: '12px',
                    marginLeft: '2px'
                  }}
                >
                  {activeFiltersCount}
                </span>
              )}
            </button>

            <span style={{ fontSize: '0.92rem', color: '#71717a' }}>
              Found <strong style={{ color: '#18181b' }}>{filteredProducts.length}</strong> sculptures
            </span>

            {/* Active Filter Chips */}
            {selectedCategory !== 'ALL' && (
              <span
                style={{
                  background: '#fef08a',
                  color: '#854d0e',
                  border: '1.5px solid #eab308',
                  borderRadius: '12px',
                  padding: '3px 10px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                Category: {selectedCategory}
                <button
                  type="button"
                  onClick={() => setSelectedCategory('ALL')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  &times;
                </button>
              </span>
            )}

            {selectedMaterial !== 'all' && (
              <span
                style={{
                  background: '#fef08a',
                  color: '#854d0e',
                  border: '1.5px solid #eab308',
                  borderRadius: '12px',
                  padding: '3px 10px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                Material: {selectedMaterial.split(' ')[0]}
                <button
                  type="button"
                  onClick={() => setSelectedMaterial('all')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  &times;
                </button>
              </span>
            )}

            {selectedOrigin && (
              <span
                style={{
                  background: '#fef08a',
                  color: '#854d0e',
                  border: '1.5px solid #eab308',
                  borderRadius: '12px',
                  padding: '3px 10px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                📍 {selectedOrigin.name}
                <button
                  type="button"
                  onClick={() => setSelectedOrigin(null)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  &times;
                </button>
              </span>
            )}

            {priceRange !== 'all' && (
              <span
                style={{
                  background: '#fef08a',
                  color: '#854d0e',
                  border: '1.5px solid #eab308',
                  borderRadius: '12px',
                  padding: '3px 10px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                Price: {priceRange}
                <button
                  type="button"
                  onClick={() => setPriceRange('all')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  &times;
                </button>
              </span>
            )}

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleResetFilters}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#ca8a04',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                Clear All
              </button>
            )}
          </div>

          {/* Right Action: Yellow Accent Sorting Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                fontWeight: 800
              }}
            >
              ⇅
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#18181b' }}>Sort:</span>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                style={{
                  appearance: 'none',
                  WebkitAppearance: 'none',
                  padding: '8px 34px 8px 14px',
                  borderRadius: '10px',
                  border: '2px solid #ffffff',
                  background: '#fef08a',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                <option value="popularity">Popularity (Most Revered)</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated ★</option>
              </select>
              <div
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  color: '#ca8a04',
                  fontSize: '0.75rem',
                  fontWeight: 800
                }}
              >
                ▼
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid or Empty State */}
        {filteredProducts.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '70px 20px',
              background: '#ffffff',
              borderRadius: '16px',
              border: '2px solid #ffffff',
              boxShadow: '0 4px 16px rgba(0,0,0,0.05)'
            }}
          >
            <span style={{ fontSize: '3.2rem', display: 'block', marginBottom: '14px' }}>🔍</span>
            <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.4rem', color: '#18181b', margin: '0 0 8px' }}>
              No Sculptures Match Your Criteria
            </h3>
            <p style={{ color: '#71717a', fontSize: '0.95rem', marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px' }}>
              Try adjusting your category, material, or price filters to explore our complete sacred collection.
            </p>
            <button
              type="button"
              className="silaii-form-btn"
              style={{ display: 'inline-block', width: 'auto', padding: '10px 28px' }}
              onClick={handleResetFilters}
            >
              Clear All Filters & Reset
            </button>
          </div>
        ) : (
          <div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '26px',
                marginBottom: '32px'
              }}
            >
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 250, behavior: 'smooth' });
              }}
            />
          </div>
        )}
      </main>

      {/* ================= FRONT-LEFT SIDEBAR DRAWER (SLIDES IN FROM LEFT) ================= */}
      {isFilterDrawerOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 100000,
            display: 'flex',
            justifyContent: 'flex-start',
            backdropFilter: 'blur(3px)',
            animation: 'fadeIn 0.2s ease-out'
          }}
          onClick={() => setIsFilterDrawerOpen(false)}
        >
          <aside
            style={{
              width: '100%',
              maxWidth: '360px',
              height: '100%',
              background: '#ffffff',
              boxShadow: '6px 0 30px rgba(0,0,0,0.22)',
              borderRight: '3px solid #ffffff',
              display: 'flex',
              flexDirection: 'column',
              animation: 'slideInLeft 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div
              style={{
                padding: '20px 22px',
                borderBottom: '2px solid #f4f4f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#ffffff'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: '#eab308',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#18181b',
                    fontSize: '1rem',
                    boxShadow: '0 2px 6px rgba(234, 179, 8, 0.4)'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'Cinzel, serif',
                      fontSize: '1.2rem',
                      color: '#18181b',
                      margin: 0,
                      fontWeight: 800
                    }}
                  >
                    Filter Sculptures
                  </h3>
                  <span style={{ fontSize: '0.78rem', color: '#71717a' }}>
                    {filteredProducts.length} matching masterworks
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#ca8a04',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      textDecoration: 'underline'
                    }}
                  >
                    Reset
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setIsFilterDrawerOpen(false)}
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
            </div>

            {/* Scrollable Filters Body */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '22px' }}>
              {/* 1. Category Filter */}
              <div style={{ marginBottom: '24px', borderBottom: '1px solid #f4f4f5', paddingBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#18181b', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.05em' }}>
                  Sculpture Collection
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {categories.map((cat) => {
                    const count = cat === 'ALL' ? products.length : products.filter((p) => p.category === cat).length;
                    const isChecked = selectedCategory === cat;

                    return (
                      <label
                        key={cat}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '0.85rem',
                          color: isChecked ? '#18181b' : '#52525b',
                          fontWeight: isChecked ? 700 : 500,
                          cursor: 'pointer',
                          padding: '5px 8px',
                          borderRadius: '8px',
                          background: isChecked ? '#fef08a' : 'transparent',
                          transition: 'background 0.15s'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <input
                            type="radio"
                            name="category-sidebar-drawer"
                            checked={isChecked}
                            onChange={() => {
                              setSelectedCategory(cat);
                              setCurrentPage(1);
                            }}
                            style={{ accentColor: '#eab308' }}
                          />
                          <span>{cat === 'ALL' ? 'All Collections' : cat.replace(' SERIES', '')}</span>
                        </div>
                        <span style={{ fontSize: '0.75rem', color: '#a1a1aa' }}>({count})</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* 2. Artisan Material Filter */}
              <div style={{ marginBottom: '24px', borderBottom: '1px solid #f4f4f5', paddingBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#18181b', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.05em' }}>
                  Artisan Material
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {materials.map((mat) => {
                    const isChecked = selectedMaterial === mat.id;
                    let count = 0;
                    if (mat.id === 'all') {
                      count = products.length;
                    } else {
                      count = products.filter(
                        (p) =>
                          p.material === mat.id ||
                          (p.description && p.description.toLowerCase().includes(mat.id.toLowerCase()))
                      ).length;
                    }

                    return (
                      <label
                        key={mat.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '0.85rem',
                          color: isChecked ? '#18181b' : '#52525b',
                          fontWeight: isChecked ? 700 : 500,
                          cursor: 'pointer',
                          padding: '5px 8px',
                          borderRadius: '8px',
                          background: isChecked ? '#fef08a' : 'transparent',
                          transition: 'background 0.15s'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <input
                            type="radio"
                            name="material-sidebar-drawer"
                            checked={isChecked}
                            onChange={() => {
                              setSelectedMaterial(mat.id);
                              setCurrentPage(1);
                            }}
                            style={{ accentColor: '#eab308' }}
                          />
                          <span>{mat.label}</span>
                        </div>
                        <span style={{ fontSize: '0.75rem', color: '#a1a1aa' }}>({count})</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* 3. Price Range Filter */}
              <div style={{ marginBottom: '24px', borderBottom: '1px solid #f4f4f5', paddingBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#18181b', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.05em' }}>
                  Price Range
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { id: 'all', label: 'All Prices' },
                    { id: 'under-2500', label: 'Under ₹2,500' },
                    { id: '2500-4500', label: '₹2,500 to ₹4,500' },
                    { id: 'above-4500', label: 'Above ₹4,500' }
                  ].map((range) => {
                    const isChecked = priceRange === range.id;
                    return (
                      <label
                        key={range.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '0.85rem',
                          color: isChecked ? '#18181b' : '#52525b',
                          fontWeight: isChecked ? 700 : 500,
                          cursor: 'pointer',
                          padding: '5px 8px',
                          borderRadius: '8px',
                          background: isChecked ? '#fef08a' : 'transparent'
                        }}
                      >
                        <input
                          type="radio"
                          name="price-sidebar-drawer"
                          checked={isChecked}
                          onChange={() => {
                            setPriceRange(range.id);
                            setCurrentPage(1);
                          }}
                          style={{ accentColor: '#eab308' }}
                        />
                        <span>{range.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* 4. Rating Filter */}
              <div style={{ marginBottom: '24px', borderBottom: '1px solid #f4f4f5', paddingBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#18181b', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.05em' }}>
                  Customer Rating
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { value: 0, label: 'All Ratings' },
                    { value: 4.9, label: '★ 4.9 & Above (Exceptional)' },
                    { value: 4.5, label: '★ 4.5 & Above (Highly Revered)' }
                  ].map((r) => {
                    const isChecked = minRating === r.value;
                    return (
                      <label
                        key={r.value}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '0.85rem',
                          color: isChecked ? '#18181b' : '#52525b',
                          fontWeight: isChecked ? 700 : 500,
                          cursor: 'pointer',
                          padding: '5px 8px',
                          borderRadius: '8px',
                          background: isChecked ? '#fefce8' : 'transparent'
                        }}
                      >
                        <input
                          type="radio"
                          name="rating-sidebar-drawer"
                          checked={isChecked}
                          onChange={() => {
                            setMinRating(r.value);
                            setCurrentPage(1);
                          }}
                          style={{ accentColor: '#eab308' }}
                        />
                        <span>{r.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* 5. Sacred Temple / Atelier Origin Filter */}
              <div style={{ marginBottom: '24px', borderBottom: '1px solid #f4f4f5', paddingBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#18181b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Temple / Atelier Origin
                  </label>
                  {selectedOrigin && (
                    <button
                      type="button"
                      onClick={() => setSelectedOrigin(null)}
                      style={{ background: 'none', border: 'none', color: '#ca8a04', fontSize: '0.75rem', cursor: 'pointer', fontWeight: 700 }}
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {TEMPLE_ORIGINS.map((origin) => {
                    const isSel = selectedOrigin?.id === origin.id;
                    return (
                      <button
                        key={origin.id}
                        type="button"
                        onClick={() => {
                          setSelectedOrigin(isSel ? null : origin);
                          setCurrentPage(1);
                        }}
                        style={{
                          padding: '5px 10px',
                          borderRadius: '12px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          border: '1.5px solid #ffffff',
                          background: isSel ? '#eab308' : '#f8fafc',
                          color: isSel ? '#18181b' : '#52525b',
                          boxShadow: isSel ? '0 2px 6px rgba(234, 179, 8, 0.4)' : 'none',
                          cursor: 'pointer'
                        }}
                      >
                        📍 {origin.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 6. Special Edition Badges */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#18181b', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.05em' }}>
                  Artisan Badges
                </label>
                <select
                  value={selectedBadge}
                  onChange={(e) => {
                    setSelectedBadge(e.target.value);
                    setCurrentPage(1);
                  }}
                  style={{
                    width: '100%',
                    padding: '9px 12px',
                    borderRadius: '10px',
                    border: '2px solid #ffffff',
                    background: '#f8fafc',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#18181b',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="all">All Sculptures</option>
                  {badges.filter((b) => b !== 'all').map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div
              style={{
                padding: '16px 22px',
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
                style={{ width: '100%', padding: '12px', fontSize: '0.92rem' }}
                onClick={() => setIsFilterDrawerOpen(false)}
              >
                View {filteredProducts.length} Sculptures
              </button>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
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
                  Reset All Filters
                </button>
              )}
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
