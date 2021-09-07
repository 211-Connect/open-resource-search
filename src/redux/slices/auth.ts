import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Auth } from 'aws-amplify';
import { cache } from 'swr';

const initialState = {
  isLoggedIn: false,
  isLoading: true,
};

export const checkAuthStatus = createAsyncThunk('check auth', async () => {
  await Auth.currentAuthenticatedUser();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
      cache.clear();
    },
  },
  extraReducers: {
    [checkAuthStatus.fulfilled.type]: (state) => {
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [checkAuthStatus.rejected.type]: (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
