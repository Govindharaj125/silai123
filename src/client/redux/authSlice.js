import { createSlice } from '@reduxjs/toolkit';

const getInitialUser = () => {
  try {
    const saved = localStorage.getItem('silaii_user');
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return {
    isLoggedIn: true,
    user: {
      name: 'Raj Sharma',
      email: 'rajgovindha165@gmail.com',
      phone: '+91 98846 88804',
      tier: 'Gold Patron',
      memberSince: '2026',
      acquisitions: 3,
      avatar: 'R'
    }
  };
};

const initialState = getInitialUser();

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { name = 'Raj Sharma', email = 'rajgovindha165@gmail.com', phone = '+91 98846 88804' } = action.payload;
      state.isLoggedIn = true;
      state.user = {
        name,
        email,
        phone,
        tier: 'Gold Patron',
        memberSince: '2026',
        acquisitions: 3,
        avatar: name.charAt(0).toUpperCase()
      };
      try {
        localStorage.setItem('silaii_user', JSON.stringify(state));
      } catch (e) {}
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      try {
        localStorage.removeItem('silaii_user');
      } catch (e) {}
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
