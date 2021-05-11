import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

axios.defaults.baseURL = 'https://site.ualegion.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/v1/security/login', credentials);
      token.set = data.token;
      return data;
    } catch (e) {
      if (e.response.status === 400) {
        console.error('There is no user with this email and password!');
        error({
          text: 'There is no user with this email and password!',
          width: '280px',
        });
      }

      return rejectWithValue(error.message);
    }
  },
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();

    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }

    token.set(persistedToken);
  },
);
