import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import CartPage from './pages/CartPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import { PRODUCTS_CATALOG } from './data/products.js';

// 1. Home Page Loader
export async function homeLoader() {
  return { products: PRODUCTS_CATALOG };
}

// 2. Collections Page Loader
export async function collectionsLoader({ params }) {
  const { category } = params;
  let categoryTitle = 'All Sculptures';
  let filtered = PRODUCTS_CATALOG;

  if (category === 'new-arrivals') {
    categoryTitle = 'New Launches';
    filtered = PRODUCTS_CATALOG.filter(p => p.badge === 'BESTSELLER' || p.badge === 'CONSECRATED');
  } else if (category === 'car-dashboard-series') {
    categoryTitle = 'Car Dashboard Series';
    filtered = PRODUCTS_CATALOG.filter(p => p.category === 'CAR DASHBOARD SERIES');
  } else if (category === 'bestselling-leaders-icons-sculptures') {
    categoryTitle = 'Leaders & Icons';
    filtered = PRODUCTS_CATALOG.filter(p => p.category === 'LEADERS & ICONS');
  } else if (category === 'god-sculptures') {
    categoryTitle = 'Divine Series';
    filtered = PRODUCTS_CATALOG.filter(p => p.category === 'DIVINE SERIES');
  } else if (category === 'float-series-levitating-sculptures') {
    categoryTitle = 'Float Series Levitating Sculptures';
    filtered = PRODUCTS_CATALOG.filter(p => p.category === 'FLOAT SERIES');
  } else if (category === 'monuments') {
    categoryTitle = 'Monuments & Memorials';
    filtered = PRODUCTS_CATALOG.filter(p => p.category === 'MONUMENTS');
  } else if (category) {
    categoryTitle = category.replace(/-/g, ' ').toUpperCase();
  }

  return { products: filtered, categoryTitle, allProducts: PRODUCTS_CATALOG, categoryParam: category };
}

// 3. Product Detail Loader
export async function productDetailLoader({ params }) {
  const { handle } = params;
  const product = PRODUCTS_CATALOG.find(p => p.handle === handle);
  if (!product) {
    throw new Response('Sculpture Not Found', { status: 404 });
  }
  return { product, allProducts: PRODUCTS_CATALOG };
}

// 4. Search Loader
export async function searchLoader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q') || '';
  return { products: PRODUCTS_CATALOG, initialQuery: q };
}

// 5. Checkout Action
export async function checkoutAction({ request }) {
  const formData = await request.formData();
  const fullName = formData.get('fullName');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const address = formData.get('address');
  const city = formData.get('city');
  const pincode = formData.get('pincode');
  const paymentMode = formData.get('paymentMode') || 'UPI Express';
  const totalAmount = parseFloat(formData.get('totalAmount') || '0');

  const orderId = 'SIL-' + Math.floor(100000 + Math.random() * 900000);

  return {
    success: true,
    orderId,
    fullName,
    email,
    phone,
    address,
    city,
    pincode,
    paymentMode,
    totalAmount
  };
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    handle: { crumb: () => 'Home' },
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
        handle: { title: 'SILAII | Handcrafted Heritage & Divine Sculptures' }
      },
      {
        path: 'collections/:category',
        element: <ProductsPage />,
        loader: collectionsLoader,
        handle: { title: 'Collection' }
      },
      {
        path: 'products/:handle',
        element: <ProductDetailPage />,
        loader: productDetailLoader,
        handle: { title: 'Product Details' }
      },
      {
        path: 'search',
        element: <SearchPage />,
        loader: searchLoader,
        handle: { title: 'Search Sculptures' }
      },
      {
        path: 'cart',
        element: <CartPage />,
        handle: { title: 'Shopping Cart' }
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
        action: checkoutAction,
        handle: { title: 'Express Checkout' }
      },
      {
        path: 'contact',
        element: <ContactPage />,
        handle: { title: 'Contact SILAII Artisans' }
      },
      {
        path: 'pages/contact',
        element: <ContactPage />,
        handle: { title: 'Contact SILAII Artisans' }
      },
      {
        path: '*',
        element: <NotFoundPage />,
        handle: { title: 'Page Not Found' }
      }
    ]
  }
]);
