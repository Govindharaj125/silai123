import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.js';
import authReducer from './authSlice.js';
import uiReducer from './uiSlice.js';
import productReducer from './productSlice.js';
import wishlistReducer from './wishlistSlice.js';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    ui: uiReducer,
    products: productReducer,
    wishlist: wishlistReducer
  }
});
