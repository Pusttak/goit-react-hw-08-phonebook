import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/user-api';

export const register = createAsyncThunk('user/register', async (credentials, { rejectWithValue }) => {
  try {
    const newUser = await API.registerUser(credentials);
    return newUser;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const login = createAsyncThunk('user/login', async (credentials, { rejectWithValue }) => {
  try {
    const userData = await API.loginUser(credentials);
    return userData;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const logout = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
  try {
    const userData = await API.logout();
    return userData;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const getUser = createAsyncThunk('user/getUser', async (_, { getState, rejectWithValue }) => {
  const state = getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return rejectWithValue();
  }

  API.token.set(persistedToken);

  try {
    const userData = await API.getUserData();
    return userData;
  } catch (err) {
    return rejectWithValue(err);
  }
});
