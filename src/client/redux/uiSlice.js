import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCartDrawerOpen: false,
  isWishlistDrawerOpen: false,
  isLoginModalOpen: false,
  isProfileModalOpen: false,
  isContactModalOpen: false,
  isAboutModalOpen: false,
  toast: {
    visible: false,
    message: '',
    type: 'success'
  }
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openCartDrawer: (state) => { state.isCartDrawerOpen = true; },
    closeCartDrawer: (state) => { state.isCartDrawerOpen = false; },
    openWishlistDrawer: (state) => { state.isWishlistDrawerOpen = true; },
    closeWishlistDrawer: (state) => { state.isWishlistDrawerOpen = false; },
    openLoginModal: (state) => { state.isLoginModalOpen = true; },
    closeLoginModal: (state) => { state.isLoginModalOpen = false; },
    openProfileModal: (state) => { state.isProfileModalOpen = true; },
    closeProfileModal: (state) => { state.isProfileModalOpen = false; },
    openContactModal: (state) => { state.isContactModalOpen = true; },
    closeContactModal: (state) => { state.isContactModalOpen = false; },
    openAboutModal: (state) => { state.isAboutModalOpen = true; },
    closeAboutModal: (state) => { state.isAboutModalOpen = false; },
    showToast: (state, action) => {
      state.toast = {
        visible: true,
        message: action.payload.message || action.payload,
        type: action.payload.type || 'success'
      };
    },
    hideToast: (state) => {
      state.toast.visible = false;
    }
  }
});

export const {
  openCartDrawer, closeCartDrawer,
  openWishlistDrawer, closeWishlistDrawer,
  openLoginModal, closeLoginModal,
  openProfileModal, closeProfileModal,
  openContactModal, closeContactModal,
  openAboutModal, closeAboutModal,
  showToast, hideToast
} = uiSlice.actions;

export default uiSlice.reducer;
