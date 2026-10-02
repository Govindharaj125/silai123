import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';
const ROOT_DIR = process.cwd();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multi-host static assets router for local images and CDNs
app.use((req, res, next) => {
  // Never intercept vite internals, modules, source files, or api routes
  if (
    req.path.startsWith('/@') ||
    req.path.startsWith('/node_modules') ||
    req.path.startsWith('/src') ||
    req.path.startsWith('/api') ||
    req.path.startsWith('/cart') ||
    req.path === '/index.html' ||
    req.path === '/'
  ) {
    return next();
  }

  const cleanPath = req.path.replace(/^\//, '');
  if (!cleanPath) return next();

  const possiblePaths = [
    path.join(ROOT_DIR, 'www.silaii.com', cleanPath),
    path.join(ROOT_DIR, 'cdn.shopify.com', cleanPath),
    path.join(ROOT_DIR, 'checkout.shopflo.co', cleanPath),
    path.join(ROOT_DIR, 'assets.snapmint.com', cleanPath)
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(p) && fs.statSync(p).isFile()) {
      return res.sendFile(p);
    }
  }
  next();
});

// Products catalog API
const PRODUCTS_CATALOG = [
  {
    id: 1,
    variantId: 44026362822837,
    title: 'Ayodhya Ram Mandir Replica Sculpture',
    handle: 'ayodhya-ram-mandir-temple-sculpture',
    price: 3499,
    priceFormatted: '₹3,499',
    compareAtPrice: '₹4,999',
    dimensions: '6.0" x 3.5" x 4.5" | 1.2 kg',
    rating: 4.95,
    reviewsCount: 342,
    category: 'DIVINE SERIES',
    badge: 'BESTSELLER',
    tags: ['ram mandir', 'ayodhya', 'temple', 'divine', 'stone'],
    image: '/www.silaii.com/cdn/shop/files/Ram_Mandir_1.jpg'
  },
  {
    id: 2,
    variantId: 44026362822840,
    title: 'Lord Natarajar Cosmic Dance Sculpture',
    handle: 'natarajar-sculpture',
    price: 3999,
    priceFormatted: '₹3,999',
    compareAtPrice: '₹5,499',
    dimensions: '7.5" x 6.0" x 2.5" | 1.1 kg',
    rating: 4.98,
    reviewsCount: 189,
    category: 'DIVINE SERIES',
    badge: 'SACRED',
    tags: ['natarajar', 'shiva', 'cosmic', 'dance', 'divine'],
    image: '/www.silaii.com/cdn/shop/files/Ram_Mandir_2.jpg'
  },
  {
    id: 3,
    variantId: 44026362822842,
    title: 'Balak Ram Lalla Idol Sculpture',
    handle: 'ram-lalla-sculpture',
    price: 2999,
    priceFormatted: '₹2,999',
    compareAtPrice: '₹4,199',
    dimensions: '6.5" x 3.0" x 2.5" | 0.9 kg',
    rating: 4.97,
    reviewsCount: 276,
    category: 'DIVINE SERIES',
    badge: 'CONSECRATED',
    tags: ['ram lalla', 'ayodhya', 'balak ram', 'idol'],
    image: '/www.silaii.com/cdn/shop/files/Ram_Mandir_3.jpg'
  },
  {
    id: 4,
    variantId: 44026362822844,
    title: 'Dr. A.P.J. Abdul Kalam Tribute Sculpture',
    handle: 'dr-apj-abdul-kalam-sculpture',
    price: 2499,
    priceFormatted: '₹2,499',
    compareAtPrice: '₹3,499',
    dimensions: '5.5" x 3.5" x 3.0" | 0.8 kg',
    rating: 4.96,
    reviewsCount: 154,
    category: 'LEADERS & ICONS',
    badge: 'ICON',
    tags: ['kalam', 'missile man', 'president', 'leader'],
    image: '/www.silaii.com/cdn/shop/files/Ram_Mandir_6inch.jpg'
  },
  {
    id: 5,
    variantId: 44026362822845,
    title: 'Levitating Buddha Floating Sculpture',
    handle: 'levitating-buddha-float',
    price: 6999,
    priceFormatted: '₹6,999',
    compareAtPrice: '₹9,999',
    dimensions: '8.0" x 6.0" x 6.0" | 1.6 kg',
    rating: 4.99,
    reviewsCount: 112,
    category: 'FLOAT SERIES',
    badge: 'LEVITATION TECH',
    tags: ['buddha', 'float', 'levitation', 'magnetic'],
    image: '/www.silaii.com/cdn/shop/files/Ram_Mandir_1.jpg'
  },
  {
    id: 6,
    variantId: 44026362822846,
    title: 'Temple Guardian Yazhi Sacred Sculpture',
    handle: 'yazhi-sculpture',
    price: 3299,
    priceFormatted: '₹3,299',
    compareAtPrice: '₹4,499',
    dimensions: '6.0" x 4.0" x 3.0" | 1.0 kg',
    rating: 4.93,
    reviewsCount: 88,
    category: 'DIVINE SERIES',
    badge: 'GUARDIAN',
    tags: ['yazhi', 'vyala', 'temple guardian', 'sculpture'],
    image: '/www.silaii.com/cdn/shop/files/Ram_Mandir_2.jpg'
  },
  {
    id: 7,
    variantId: 44026362822847,
    title: 'Divine Ganesha Car Dashboard Idol',
    handle: 'ganesha-car-dashboard',
    price: 1499,
    priceFormatted: '₹1,499',
    compareAtPrice: '₹1,999',
    dimensions: '3.5" x 2.2" x 1.8" | 0.35 kg',
    rating: 4.97,
    reviewsCount: 420,
    category: 'CAR DASHBOARD SERIES',
    badge: 'CAR DASHBOARD',
    tags: ['ganesha', 'car dashboard', 'travel', 'blessings'],
    image: '/www.silaii.com/cdn/shop/files/Ram_Mandir_3.jpg'
  },
  {
    id: 8,
    variantId: 44026362822848,
    title: 'Thiruvalluvar Monumental Statue Replica',
    handle: 'thiruvalluvar-statue-sculpture',
    price: 3699,
    priceFormatted: '₹3,699',
    compareAtPrice: '₹4,999',
    dimensions: '8.0" x 3.5" x 3.0" | 1.3 kg',
    rating: 4.94,
    reviewsCount: 95,
    category: 'MONUMENTS',
    badge: 'HERITAGE',
    tags: ['thiruvalluvar', 'kanyakumari', 'tamil', 'philosopher'],
    image: '/www.silaii.com/cdn/shop/files/Ram_Mandir_6inch.jpg'
  },
  {
    id: 9,
    variantId: 44026362822849,
    title: 'Chhatrapati Shivaji Maharaj Equestrian Idol',
    handle: 'shivaji-maharaj-sculpture',
    price: 3999,
    priceFormatted: '₹3,999',
    compareAtPrice: '₹5,499',
    dimensions: '7.0" x 5.5" x 3.0" | 1.4 kg',
    rating: 4.98,
    reviewsCount: 215,
    category: 'LEADERS & ICONS',
    badge: 'WARRIOR KING',
    tags: ['shivaji', 'maharaj', 'maratha', 'warrior', 'leader'],
    image: '/www.silaii.com/cdn/shop/files/Ram_Mandir_1.jpg'
  }
];

// In-memory cart store per session
const cartStore: Record<string, any> = {};

function getSessionId(req: Request, res: Response): string {
  let sessionId = req.cookies?.silaii_session_id;
  if (!sessionId) {
    sessionId = 'sess_' + Math.random().toString(36).substring(2, 15);
    res.cookie('silaii_session_id', sessionId, { maxAge: 86400000 * 30, httpOnly: true });
  }
  return sessionId;
}

// REST API Endpoints
app.get('/api/products', (req: Request, res: Response) => {
  res.json(PRODUCTS_CATALOG);
});

app.get('/api/products/:handle', (req: Request, res: Response) => {
  const product = PRODUCTS_CATALOG.find(p => p.handle === req.params.handle);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.get('/api/search', (req: Request, res: Response) => {
  const q = String(req.query.q || '').toLowerCase().trim();
  if (!q) return res.json(PRODUCTS_CATALOG);
  const results = PRODUCTS_CATALOG.filter(
    p => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q))
  );
  res.json(results);
});

app.get('/api/auth/me', (req: Request, res: Response) => {
  const userCookie = req.cookies?.silaii_user;
  if (userCookie) {
    try {
      return res.json({ loggedIn: true, user: JSON.parse(userCookie) });
    } catch (e) {}
  }
  res.json({
    loggedIn: true,
    user: {
      name: 'Raj Sharma',
      email: 'rajgovindha165@gmail.com',
      phone: '+91 98846 88804',
      tier: 'Gold Patron'
    }
  });
});

app.post('/api/auth/login', (req: Request, res: Response) => {
  const { name = 'Raj Sharma', email = 'rajgovindha165@gmail.com', phone = '+91 98846 88804' } = req.body;
  const user = { name, email, phone, tier: 'Gold Patron' };
  res.cookie('silaii_user', JSON.stringify(user), { maxAge: 86400000 * 30, httpOnly: false });
  res.json({ success: true, user });
});

app.post('/api/auth/logout', (req: Request, res: Response) => {
  res.clearCookie('silaii_user');
  res.json({ success: true });
});

app.post('/api/contact', (req: Request, res: Response) => {
  res.json({ success: true, message: 'Message received by SILAII Atelier' });
});

app.get('/cart.js', (req: Request, res: Response) => {
  const sessId = getSessionId(req, res);
  const cart = cartStore[sessId] || { items: [], item_count: 0, total_price: 0 };
  res.json(cart);
});

// Setup Vite development server middleware
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    app.use(vite.middlewares);

    app.use('*', async (req: Request, res: Response, next) => {
      const url = req.originalUrl;
      if (url.startsWith('/api') || url.startsWith('/cart')) {
        return next();
      }
      try {
        let template = fs.readFileSync(path.resolve(ROOT_DIR, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    app.use(express.static(path.join(ROOT_DIR, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(ROOT_DIR, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, HOST, () => {
    console.log(`SILAII React Application running at http://${HOST}:${PORT}`);
  });
}

startServer();
