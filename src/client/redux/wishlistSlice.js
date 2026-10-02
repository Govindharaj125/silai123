import { createSlice } from '@reduxjs/toolkit';

/**
 * Hydrates initial wishlist state from localStorage
 */
const getInitialWishlist = () => {
  try {
    const saved = localStorage.getItem('silaii_wishlist');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) return { items: parsed };
      if (parsed && Array.isArray(parsed.items)) return parsed;
    }
  } catch (e) {
    console.error('Failed to load wishlist from localStorage', e);
  }
  return { items: [] };
};

/**
 * Persists wishlist state to localStorage
 */
const saveWishlist = (items) => {
  try {
    localStorage.setItem('silaii_wishlist', JSON.stringify({ items }));
  } catch (e) {
    console.error('Failed to save wishlist to localStorage', e);
  }
};

const initialState = getInitialWishlist();

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    // Toggles presence of an item in the wishlist
    toggleWishlist: (state, action) => {
      const product = action.payload;
      if (!product || !product.id) return;
      const index = state.items.findIndex((item) => item.id === product.id);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(product);
      }
      saveWishlist(state.items);
    },

    // Adds a sculpture item to the wishlist if not already present
    addToWishlist: (state, action) => {
      const product = action.payload;
      if (!product || !product.id) return;
      const exists = state.items.some((item) => item.id === product.id);
      if (!exists) {
        state.items.push(product);
        saveWishlist(state.items);
      }
    },

    // Removes a sculpture item from the wishlist by ID or product object
    removeFromWishlist: (state, action) => {
      const targetId =
        typeof action.payload === 'object' && action.payload !== null
          ? action.payload.id
          : action.payload;
      state.items = state.items.filter((item) => item.id !== targetId);
      saveWishlist(state.items);
    },

    // Clears all favorited items from the wishlist
    clearWishlist: (state) => {
      state.items = [];
      saveWishlist(state.items);
    }
  }
});

export const {
  toggleWishlist,
  addToWishlist,
  removeFromWishlist,
  clearWishlist
} = wishlistSlice.actions;

// Selectors
export const selectWishlistItems = (state) => state.wishlist.items;
export const selectWishlistCount = (state) => state.wishlist.items.length;
export const selectIsItemInWishlist = (productId) => (state) =>
  state.wishlist.items.some((item) => item.id === productId);

export default wishlistSlice.reducer;
