import React, { useState, useMemo, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import Pagination from '../components/Pagination.jsx';

export default function ProductsPage() {
  const { products: initialProducts, categoryTitle, allProducts = [], categoryParam } = useLoaderData();
  const navigate = useNavigate();

  // Collapsible sidebar state (open by default on desktop)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('CURRENT');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Sync selectedCategory when categoryParam changes
  useEffect(() => {
    setSelectedCategory('CURRENT');
    setCurrentPage(1);
  }, [categoryParam]);

  const categories = [
    { id: 'CURRENT', label: `${categoryTitle} (Current)` },
    { id: 'ALL', label: 'All Collections' },
    { id: 'DIVINE SERIES', label: 'Divine Series' },
    { id: 'CAR DASHBOARD SERIES', label: 'Car Dashboard Series' },
    { id: 'LEADERS & ICONS', label: 'Leaders & Icons' },
    { id: 'FLOAT SERIES', label: 'Float Series' },
    { id: 'MONUMENTS', label: 'Monuments & Memorials' }
  ];

  const materials = [
    { id: 'all', label: 'All Materials' },
    { id: 'Krishna Shila Stone Composite', label: 'Krishna Shila Stone' },
    { id: 'Cold-Cast Bronze & Mineral Stone', label: 'Cold-Cast Bronze & Stone' },
    { id: 'Black Granite Composite', label: 'Black Granite Composite' },
    { id: 'Antique Terracotta & Sandstone', label: 'Terracotta & Sandstone' },
    { id: 'Heat-Resistant Automotive Mineral', label: 'Automotive Mineral Stone' }
  ];

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'under-2500', label: 'Under ₹2,500' },
    { id: '2500-4000', label: '₹2,500 to ₹4,000' },
    { id: 'above-4000', label: 'Above ₹4,000' }
  ];

  // Base pool of items depending on whether user selects CURRENT or a specific category
  const basePool = useMemo(() => {
    if (selectedCategory === 'CURRENT') {
      return initialProducts;
    }
    if (selectedCategory === 'ALL') {
      return allProducts.length ? allProducts : initialProducts;
    }
    return (allProducts.length ? allProducts : initialProducts).filter(
      (p) => p.category === selectedCategory
    );
  }, [selectedCategory, initialProducts, allProducts]);

  // Apply Material & Price Range filters + Sorting
  const filteredProducts = useMemo(() => {
    let result = basePool.filter((p) => {
      // 1. Material Filter
      const matchesMaterial =
        selectedMaterial === 'all' ||
        p.material === selectedMaterial ||
        (p.description && p.description.toLowerCase().includes(selectedMaterial.toLowerCase())) ||
        (p.features && p.features.some((f) => f.toLowerCase().includes(selectedMaterial.toLowerCase())));

      // 2. Price Range Filter
      let matchesPrice = true;
      if (selectedPriceRange === 'under-2500') {
        matchesPrice = p.price < 2500;
      } else if (selectedPriceRange === '2500-4000') {
        matchesPrice = p.price >= 2500 && p.price <= 4000;
      } else if (selectedPriceRange === 'above-4000') {
        matchesPrice = p.price > 4000;
      }

      return matchesMaterial && matchesPrice;
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
  }, [basePool, selectedMaterial, selectedPriceRange, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const hasActiveFilters =
    selectedCategory !== 'CURRENT' ||
    selectedMaterial !== 'all' ||
    selectedPriceRange !== 'all';

  const handleResetFilters = () => {
    setSelectedCategory('CURRENT');
    setSelectedMaterial('all');
    setSelectedPriceRange('all');
    setCurrentPage(1);
  };

  return (
    <main style={{ maxWidth: '1360px', margin: '30px auto 60px', padding: '0 20px' }}>
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#eab308', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          SILAII SCULPTURE ATELIER
        </span>
        <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: '2.4rem', color: '#18181b', margin: '6px 0 10px', fontWeight: 800 }}>
          {categoryTitle}
        </h1>
        <p style={{ color: '#52525b', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto' }}>
          Authentic stone composite and cold-cast sculptures handcrafted by master sthapathis
        </p>
      </div>

      {/* Top Action & Controls Bar: Sidebar Toggle + Result Count + Sort Select */}
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
        {/* Sidebar Toggle & Filter Indicators */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{
              background: isSidebarOpen ? '#18181b' : '#eab308',
              color: isSidebarOpen ? '#ffffff' : '#18181b',
              border: '2px solid #ffffff',
              borderRadius: '10px',
              padding: '8px 16px',
              fontSize: '0.85rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'all 0.2s ease'
            }}
          >
            <span>{isSidebarOpen ? '◀' : '☰'}</span>
            <span>{isSidebarOpen ? 'Hide Filters' : 'Show Filters'}</span>
            {hasActiveFilters && (
              <span
                style={{
                  background: isSidebarOpen ? '#eab308' : '#18181b',
                  color: isSidebarOpen ? '#18181b' : '#ffffff',
                  fontSize: '0.72rem',
                  padding: '1px 6px',
                  borderRadius: '10px'
                }}
              >
                Active
              </span>
            )}
          </button>

          <span style={{ fontSize: '0.9rem', color: '#71717a' }}>
            Showing <strong>{filteredProducts.length}</strong> sculptures
          </span>

          {/* Active Filter Chips */}
          {selectedCategory !== 'CURRENT' && (
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
                onClick={() => setSelectedCategory('CURRENT')}
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

          {selectedPriceRange !== 'all' && (
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
              Price: {selectedPriceRange}
              <button
                type="button"
                onClick={() => setSelectedPriceRange('all')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                &times;
              </button>
            </span>
          )}
        </div>

        {/* Yellow-accented Sorting Dropdown */}
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
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#18181b' }}>Sort By:</span>
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
              <option value="rating">Highest Rated ★</option>
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

      {/* Main Content Layout: Collapsible Sidebar + Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isSidebarOpen ? '280px 1fr' : '1fr',
          gap: '28px',
          alignItems: 'start',
          transition: 'all 0.3s ease'
        }}
      >
        {/* ================= COLLAPSIBLE SIDEBAR ================= */}
        {isSidebarOpen && (
          <aside
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '2px solid #ffffff',
              padding: '24px',
              boxShadow: '0 4px 18px rgba(0,0,0,0.05)',
              position: 'sticky',
              top: '20px',
              animation: 'fadeIn 0.2s ease-in'
            }}
          >
            {/* Sidebar Header with Close & Reset */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
                paddingBottom: '12px',
                borderBottom: '1px solid #f4f4f5'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.1rem' }}>⚙️</span>
                <h3
                  style={{
                    fontFamily: 'Cinzel, serif',
                    fontSize: '1.15rem',
                    color: '#18181b',
                    margin: 0,
                    fontWeight: 800
                  }}
                >
                  Filter Catalog
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#eab308',
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
                  onClick={() => setIsSidebarOpen(false)}
                  title="Collapse Sidebar"
                  style={{
                    background: '#f4f4f5',
                    border: 'none',
                    borderRadius: '50%',
                    width: '28px',
                    height: '28px',
                    fontSize: '0.9rem',
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

            {/* 1. FILTER BY CATEGORY */}
            <div style={{ marginBottom: '24px', borderBottom: '1px solid #f4f4f5', paddingBottom: '18px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: '#18181b',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  letterSpacing: '0.05em'
                }}
              >
                1. Sculpture Category
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {categories.map((cat) => {
                  const isChecked = selectedCategory === cat.id;
                  let count = 0;
                  if (cat.id === 'CURRENT') {
                    count = initialProducts.length;
                  } else if (cat.id === 'ALL') {
                    count = allProducts.length || initialProducts.length;
                  } else {
                    count = (allProducts.length ? allProducts : initialProducts).filter(
                      (p) => p.category === cat.id
                    ).length;
                  }

                  return (
                    <label
                      key={cat.id}
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
                        background: isChecked ? '#fefce8' : 'transparent',
                        transition: 'background 0.15s'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <input
                          type="radio"
                          name="category-filter"
                          checked={isChecked}
                          onChange={() => {
                            setSelectedCategory(cat.id);
                            setCurrentPage(1);
                          }}
                          style={{ accentColor: '#eab308' }}
                        />
                        <span>{cat.label}</span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#a1a1aa' }}>({count})</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* 2. FILTER BY MATERIAL */}
            <div style={{ marginBottom: '24px', borderBottom: '1px solid #f4f4f5', paddingBottom: '18px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: '#18181b',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  letterSpacing: '0.05em'
                }}
              >
                2. Artisan Material
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {materials.map((mat) => {
                  const isChecked = selectedMaterial === mat.id;
                  let count = 0;
                  if (mat.id === 'all') {
                    count = basePool.length;
                  } else {
                    count = basePool.filter(
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
                          name="material-filter"
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

            {/* 3. FILTER BY PRICE RANGE */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: '#18181b',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  letterSpacing: '0.05em'
                }}
              >
                3. Price Range
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {priceRanges.map((range) => {
                  const isChecked = selectedPriceRange === range.id;
                  let count = 0;
                  if (range.id === 'all') {
                    count = basePool.length;
                  } else if (range.id === 'under-2500') {
                    count = basePool.filter((p) => p.price < 2500).length;
                  } else if (range.id === '2500-4000') {
                    count = basePool.filter((p) => p.price >= 2500 && p.price <= 4000).length;
                  } else if (range.id === 'above-4000') {
                    count = basePool.filter((p) => p.price > 4000).length;
                  }

                  return (
                    <label
                      key={range.id}
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
                          name="price-filter"
                          checked={isChecked}
                          onChange={() => {
                            setSelectedPriceRange(range.id);
                            setCurrentPage(1);
                          }}
                          style={{ accentColor: '#eab308' }}
                        />
                        <span>{range.label}</span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#a1a1aa' }}>({count})</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </aside>
        )}

        {/* ================= PRODUCTS GRID OR EMPTY STATE ================= */}
        <div>
          {filteredProducts.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '60px 20px',
                background: '#ffffff',
                borderRadius: '16px',
                border: '2px solid #ffffff',
                boxShadow: '0 4px 16px rgba(0,0,0,0.05)'
              }}
            >
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '12px' }}>🏺</span>
              <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.3rem', color: '#18181b', margin: '0 0 8px' }}>
                No Sculptures Match Selected Filters
              </h3>
              <p style={{ color: '#71717a', fontSize: '0.92rem', marginBottom: '20px' }}>
                Try adjusting your category, material, or price preferences to explore our hand-carved heritage catalog.
              </p>
              <button
                type="button"
                className="silaii-form-btn"
                style={{ display: 'inline-block', width: 'auto', padding: '10px 24px' }}
                onClick={handleResetFilters}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isSidebarOpen
                    ? 'repeat(auto-fill, minmax(280px, 1fr))'
                    : 'repeat(auto-fill, minmax(290px, 1fr))',
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
                  window.scrollTo({ top: 150, behavior: 'smooth' });
                }}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
