import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  signupUser,
  signinUser,
  signoutUser,
  refreshUser,
  updateUser,
  subscribeUser,
} from './authOperations';

const initialState = {
  user: {
    name: '',
    birthdate: null,
    email: null,
    avatarURL: '',
    subscription: '',
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const handlePending = (state, _) => {
  state.isRefreshing = true;
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isRefreshing = false;
  state.isLoading = false;
};
// Register user
const handleSignupUser = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = null;
};
// Login user
const handleSigninUser = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.error = null;
};
// Logout user
const handleSignoutUser = (state, _) => {
  state.user = { name: null, birthdate: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.error = null;
};
// Update user
const handleUpdateUser = (state, action) => {
  state.user.name = action.payload.name;
  state.user.avatarURL = action.payload.avatarURL;
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = null;
};
// Refresh user
const handleRefreshUser = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = null;
};
// Subscribe user
const handleSubscribeUser = (state, action) => {
  state.user.subscription = action.payload.subscription;
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      // Register user
      .addCase(signupUser.pending, handlePending)
      .addCase(signupUser.fulfilled, handleSignupUser)
      .addCase(signupUser.rejected, handleRejected)
      // Login user
      .addCase(signinUser.pending, handlePending)
      .addCase(signinUser.fulfilled, handleSigninUser)
      .addCase(signinUser.rejected, handleRejected)
      // Logout user
      .addCase(signoutUser.pending, handlePending)
      .addCase(signoutUser.fulfilled, handleSignoutUser)
      .addCase(signoutUser.rejected, handleRejected)
      // Update user
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, handleUpdateUser)
      .addCase(updateUser.rejected, handleRejected)
      // Refresh user
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, handleRefreshUser)
      .addCase(refreshUser.rejected, handleRejected)
      // Subscribe user
      .addCase(subscribeUser.pending, handlePending)
      .addCase(subscribeUser.fulfilled, handleSubscribeUser)
      .addCase(subscribeUser.rejected, handleRejected);
  },
});
//
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

export const persistedUsersReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
