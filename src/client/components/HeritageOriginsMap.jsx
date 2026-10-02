import React, { useState } from 'react';

export const TEMPLE_ORIGINS = [
  {
    id: 'ayodhya',
    name: 'Ayodhya',
    state: 'Uttar Pradesh',
    title: 'Ram Mandir & Balak Ram Sanctum',
    x: 57,
    y: 36,
    handles: ['ayodhya-ram-mandir-temple-sculpture', 'ram-lalla-sculpture'],
    description: 'Sacred birthplace of Lord Rama & historic Nagara temple architecture'
  },
  {
    id: 'sarnath',
    name: 'Sarnath & Bodh Gaya',
    state: 'Bihar / UP',
    title: 'Sacred Bodhi Enlightenment',
    x: 64,
    y: 39,
    handles: ['levitating-buddha-float', 'gautama-buddha-dashboard'],
    description: 'Birthplace of Buddhist tranquility & meditation'
  },
  {
    id: 'chennai',
    name: 'Chennai Atelier',
    state: 'Tamil Nadu',
    title: 'SILAII Master Sthapathi Studio',
    x: 56,
    y: 73,
    handles: ['periyar-evr-bust-sculpture', 'lord-shiva-dashboard'],
    description: 'Design atelier sculpting visionary thinkers & car dashboard deities'
  },
  {
    id: 'coimbatore',
    name: 'Coimbatore Foundry',
    state: 'Tamil Nadu',
    title: 'Precision Stone Foundry',
    x: 48,
    y: 77,
    handles: ['ayodhya-ram-mandir-temple-sculpture', 'ram-lalla-sculpture', 'natarajar-sculpture'],
    description: 'High-density mineral stone casting and hand-burnished patinas'
  },
  {
    id: 'chidambaram',
    name: 'Chidambaram',
    state: 'Tamil Nadu',
    title: 'Thillai Natarajar Cosmic Sanctum',
    x: 54,
    y: 77,
    handles: ['natarajar-sculpture'],
    description: 'Golden Hall representing the Anandatandava of Lord Shiva'
  },
  {
    id: 'thanjavur',
    name: 'Thanjavur',
    state: 'Tamil Nadu',
    title: 'Brihadisvara & Temple Yazhi',
    x: 53,
    y: 80,
    handles: ['yazhi-sculpture'],
    description: 'Chola architectural apex and mystical temple guardian beasts'
  },
  {
    id: 'srivilliputhur',
    name: 'Srivilliputhur',
    state: 'Tamil Nadu',
    title: 'Andal Temple Gopuram',
    x: 49,
    y: 83,
    handles: ['srivilliputhur-andal-temple-sculpture'],
    description: 'Towering 11-tier temple gopuram embodying Tamil devotional history'
  },
  {
    id: 'rameswaram',
    name: 'Rameswaram',
    state: 'Tamil Nadu',
    title: 'Dr. Kalam Memorial & Ramanathaswamy',
    x: 55,
    y: 86,
    handles: ['dr-apj-abdul-kalam-sculpture'],
    description: 'Sacred island sanctuary and ancestral home of Dr. APJ Abdul Kalam'
  },
  {
    id: 'kanyakumari',
    name: 'Kanyakumari',
    state: 'Tamil Nadu',
    title: 'Thiruvalluvar Memorial',
    x: 47,
    y: 91,
    handles: ['thiruvalluvar-statue-sculpture'],
    description: 'Tribute on the Indian Ocean honoring the universal Tirukkural'
  }
];

export default function HeritageOriginsMap({ selectedOrigin, onSelectOrigin, activeProducts = [] }) {
  const [hoveredPin, setHoveredPin] = useState(null);

  // Check which pins have sculptures matching currently filtered search results
  const activeHandles = new Set(activeProducts.map((p) => p.handle));

  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '16px',
        border: '2px solid #ffffff',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        padding: '24px',
        marginBottom: '32px',
        position: 'relative'
      }}
    >
      {/* Map Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '20px'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.2rem' }}>🗺️</span>
            <h3
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '1.25rem',
                color: '#18181b',
                margin: 0,
                fontWeight: 800
              }}
            >
              Temple Heritage & Atelier Origins Map
            </h3>
          </div>
          <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#71717a' }}>
            Click any sacred sanctuary or atelier pin to filter sculptures by authentic geographic origin
          </p>
        </div>

        {selectedOrigin && (
          <button
            type="button"
            onClick={() => onSelectOrigin(null)}
            style={{
              background: '#fefce8',
              border: '1.5px solid #eab308',
              color: '#854d0e',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>&times;</span> Clear Origin Filter ({selectedOrigin.name})
          </button>
        )}
      </div>

      {/* Origin Filter Chips */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          marginBottom: '20px'
        }}
      >
        <button
          type="button"
          onClick={() => onSelectOrigin(null)}
          style={{
            padding: '5px 12px',
            borderRadius: '16px',
            fontSize: '0.8rem',
            fontWeight: 700,
            border: '1.5px solid #ffffff',
            cursor: 'pointer',
            background: !selectedOrigin ? '#eab308' : '#f4f4f5',
            color: !selectedOrigin ? '#18181b' : '#52525b',
            boxShadow: !selectedOrigin ? '0 2px 8px rgba(234, 179, 8, 0.4)' : 'none'
          }}
        >
          All Locations
        </button>
        {TEMPLE_ORIGINS.map((origin) => {
          const isSelected = selectedOrigin?.id === origin.id;
          const matchCount = origin.handles.filter((h) => activeHandles.has(h)).length;

          return (
            <button
              key={origin.id}
              type="button"
              onClick={() => onSelectOrigin(isSelected ? null : origin)}
              style={{
                padding: '5px 12px',
                borderRadius: '16px',
                fontSize: '0.8rem',
                fontWeight: 700,
                border: '1.5px solid #ffffff',
                cursor: 'pointer',
                background: isSelected ? '#eab308' : '#f8fafc',
                color: isSelected ? '#18181b' : '#3f3f46',
                boxShadow: isSelected ? '0 2px 8px rgba(234, 179, 8, 0.4)' : '0 1px 4px rgba(0,0,0,0.04)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>{isSelected ? '📍' : '○'}</span>
              <span>{origin.name}</span>
              {matchCount > 0 && (
                <span
                  style={{
                    fontSize: '0.7rem',
                    background: isSelected ? '#ffffff' : '#fef08a',
                    color: '#18181b',
                    padding: '1px 6px',
                    borderRadius: '10px'
                  }}
                >
                  {matchCount}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Interactive Illustrated Map Canvas */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '420px',
          background: 'linear-gradient(135deg, #fdfbf7 0%, #f4eee2 100%)',
          borderRadius: '14px',
          border: '2px solid #ffffff',
          boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.04)',
          overflow: 'hidden'
        }}
      >
        {/* Subtle Map Compass & Decorative Watermarks */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '20px',
            textAlign: 'right',
            opacity: 0.5,
            pointerEvents: 'none'
          }}
        >
          <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.2rem', fontWeight: 800, color: '#ca8a04' }}>
            N ↑
          </div>
          <div style={{ fontSize: '0.75rem', color: '#78716c', letterSpacing: '0.1em' }}>
            INDIAN PENINSULA
          </div>
        </div>

        {/* Stylized SVG Map of India */}
        <svg
          viewBox="0 0 800 650"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        >
          <defs>
            <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#faebd7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ede3d2" stopOpacity="0.9" />
            </linearGradient>
            <filter id="mapShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#78716c" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* India Continental Silhouette */}
          <path
            d="M 330 60 
               L 370 70 L 400 110 L 430 110 L 480 140 L 510 180 L 570 185 L 610 190 
               L 660 170 L 700 200 L 680 230 L 620 240 L 580 260 L 560 300 
               L 520 330 L 490 380 L 470 430 L 460 480 L 430 540 L 400 580 
               L 380 570 L 350 510 L 330 450 L 300 390 L 270 340 L 260 280 
               L 250 240 L 290 200 L 300 160 L 310 110 Z"
            fill="url(#landGrad)"
            stroke="#d6d3d1"
            strokeWidth="2"
            filter="url(#mapShadow)"
          />

          {/* Sacred Rivers (Ganges, Kaveri) */}
          <path
            d="M 380 180 Q 460 210 560 240"
            fill="none"
            stroke="#bae6fd"
            strokeWidth="2.5"
            strokeDasharray="4 2"
          />
          <path
            d="M 350 480 Q 400 490 450 495"
            fill="none"
            stroke="#bae6fd"
            strokeWidth="2.5"
            strokeDasharray="4 2"
          />

          {/* River Label */}
          <text x="460" y="225" fill="#0284c7" fontSize="10" fontWeight="600" opacity="0.6">
            Ganga River
          </text>
          <text x="380" y="475" fill="#0284c7" fontSize="10" fontWeight="600" opacity="0.6">
            Kaveri River
          </text>
        </svg>

        {/* Interactive Pins on Map */}
        {TEMPLE_ORIGINS.map((origin) => {
          const isSelected = selectedOrigin?.id === origin.id;
          const isHovered = hoveredPin?.id === origin.id;
          const matchCount = origin.handles.filter((h) => activeHandles.has(h)).length;

          return (
            <div
              key={origin.id}
              style={{
                position: 'absolute',
                left: `${origin.x}%`,
                top: `${origin.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: isSelected || isHovered ? 20 : 10,
                cursor: 'pointer'
              }}
              onMouseEnter={() => setHoveredPin(origin)}
              onMouseLeave={() => setHoveredPin(null)}
              onClick={() => onSelectOrigin(isSelected ? null : origin)}
            >
              {/* Pulsing Beacon Halo if selected or matched */}
              {(isSelected || matchCount > 0) && (
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: isSelected ? 'rgba(234, 179, 8, 0.4)' : 'rgba(234, 179, 8, 0.25)',
                    animation: 'pulse 1.8s infinite'
                  }}
                />
              )}

              {/* Pin Icon */}
              <div
                style={{
                  width: isSelected ? '34px' : '28px',
                  height: isSelected ? '34px' : '28px',
                  borderRadius: '50%',
                  background: isSelected ? '#18181b' : '#eab308',
                  color: isSelected ? '#fef08a' : '#18181b',
                  border: '2.5px solid #ffffff',
                  boxShadow: '0 3px 10px rgba(0,0,0,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: isSelected ? '0.9rem' : '0.8rem',
                  transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: isHovered ? 'scale(1.25)' : 'scale(1)'
                }}
              >
                📍
              </div>

              {/* Static Label below pin */}
              <div
                style={{
                  marginTop: '4px',
                  background: isSelected ? '#18181b' : 'rgba(255, 255, 255, 0.95)',
                  color: isSelected ? '#fef08a' : '#18181b',
                  padding: '2px 8px',
                  borderRadius: '8px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  whiteSpace: 'nowrap',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  border: '1px solid #ffffff',
                  textAlign: 'center',
                  pointerEvents: 'none'
                }}
              >
                {origin.name}
              </div>

              {/* Hover Tooltip / Detail Card */}
              {isHovered && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%) translateY(-10px)',
                    background: '#ffffff',
                    border: '2px solid #ffffff',
                    borderRadius: '12px',
                    padding: '12px 14px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                    zIndex: 30,
                    width: '240px',
                    pointerEvents: 'none',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ fontSize: '0.7rem', color: '#eab308', fontWeight: 800, textTransform: 'uppercase' }}>
                    {origin.state}
                  </div>
                  <div style={{ fontWeight: 800, color: '#18181b', fontSize: '0.9rem', margin: '2px 0 4px' }}>
                    {origin.title}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#52525b', lineHeight: 1.4, marginBottom: '8px' }}>
                    {origin.description}
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ca8a04' }}>
                    ✦ Click to view {origin.handles.length} sculptures
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
