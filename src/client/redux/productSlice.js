import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS_CATALOG } from '../data/products.js';

const initialState = {
  products: PRODUCTS_CATALOG,
  selectedCategory: 'ALL',
  searchQuery: '',
  sortBy: 'featured',
  currentPage: 1,
  itemsPerPage: 6
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.currentPage = 1;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  }
});

export const { setCategory, setSearchQuery, setSortBy, setCurrentPage } = productSlice.actions;
export default productSlice.reducer;
