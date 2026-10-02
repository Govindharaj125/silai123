import { createSlice } from '@reduxjs/toolkit';

const getInitialCart = () => {
  try {
    const saved = localStorage.getItem('silaii_cart');
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return {
    items: [
      {
        id: 44026362822837,
        productId: 1,
        title: 'Ayodhya Ram Mandir Replica Sculpture',
        variantTitle: '6.0" x 3.5" x 4.5"',
        price: 3499,
        compareAtPrice: '₹4,999',
        quantity: 1,
        image: '/www.silaii.com/cdn/shop/files/Ram_Mandir_1.jpg',
        handle: 'ayodhya-ram-mandir-temple-sculpture'
      }
    ],
    discountCode: '',
    discountPercent: 0,
    discountAmount: 0
  };
};

const saveCart = (state) => {
  try {
    localStorage.setItem('silaii_cart', JSON.stringify(state));
  } catch (e) {}
};

const calculateTotals = (state) => {
  const subtotal = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  state.subtotal = subtotal;
  if (state.discountPercent > 0) {
    state.discountAmount = Math.round(subtotal * (state.discountPercent / 100));
  } else {
    state.discountAmount = 0;
  }
  state.total = Math.max(0, subtotal - state.discountAmount);
  state.itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  saveCart(state);
};

const initialState = getInitialCart();
calculateTotals(initialState);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, variant, quantity = 1 } = action.payload;
      const variantId = variant ? variant.id : product.variantId;
      const existing = state.items.find(i => i.id === variantId);

      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({
          id: variantId,
          productId: product.id,
          title: product.title,
          variantTitle: variant ? variant.size : product.dimensions,
          price: variant ? variant.price : product.price,
          compareAtPrice: variant ? variant.compareAtPrice : product.compareAtPrice,
          quantity: quantity,
          image: product.image,
          handle: product.handle
        });
      }
      calculateTotals(state);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        state.items = state.items.filter(i => i.id !== id);
      } else {
        const item = state.items.find(i => i.id === id);
        if (item) item.quantity = quantity;
      }
      calculateTotals(state);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
      calculateTotals(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.discountCode = '';
      state.discountPercent = 0;
      state.discountAmount = 0;
      calculateTotals(state);
    },
    applyCoupon: (state, action) => {
      const code = (action.payload || '').trim().toUpperCase();
      if (code === 'RAM10' || code === 'SILAII10' || code === 'FESTIVE') {
        state.discountCode = code;
        state.discountPercent = 10;
      } else {
        state.discountCode = '';
        state.discountPercent = 0;
      }
      calculateTotals(state);
    },
    removeCoupon: (state) => {
      state.discountCode = '';
      state.discountPercent = 0;
      calculateTotals(state);
    }
  }
});

export const { addToCart, updateQuantity, removeFromCart, clearCart, applyCoupon, removeCoupon } = cartSlice.actions;
export default cartSlice.reducer;
