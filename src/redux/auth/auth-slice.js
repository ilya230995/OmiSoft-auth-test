import { createSlice } from '@reduxjs/toolkit';
import { signIn, fetchCurrentUser } from './auth-operation';
import { signOut } from './auth-actions';

const initialState = {
  token: null,
  error: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signIn.fulfilled](state, action) {
      state.token = action.payload.token;
      state.error = null;
      state.isLoggedIn = true;
    },
    [signIn.rejected](state, action) {
      state.error = action.payload;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.isLoggedIn = true;
    },
    [signOut](state, action) {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
