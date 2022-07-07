import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, getUser } from 'redux/auth/auth-operations';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logout.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [getUser.pending]: state => {
      state.isLoading = true;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [getUser.rejected]: state => {
      state.isLoading = false;
    },
  },
});

// export const authApi = createApi({
//   reducerPath: 'user',
//   tagTypes: ['User'],
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com/' }),
//   endpoints: builder => ({
//     addUser: builder.mutation({
//       query: credentials => ({
//         url: '/users/signup',
//         method: 'POST',
//         body: credentials,
//       }),
//       invalidatesTags: ['User'],
//     }),
//     loginUser: builder.mutation({
//       query: credentials => ({
//         url: '/users/login',
//         method: 'POST',
//         body: credentials,
//       }),
//       invalidatesTags: ['User'],
//     }),
//     logout: builder.mutation({
//       query: token => ({
//         url: '/users/logout',
//         method: 'POST',
//         body: token,
//       }),
//       invalidatesTags: ['User'],
//     }),
//     getUserData: builder.query({
//       query: token => ({
//         url: '/users/current',
//         method: 'GET',
//         body: token,
//       }),
//       providesTags: ['User'],
//     }),
//   }),
// });

// export const { useAddUserMutation, useLoginUserMutation, useLogoutMutation, useGetUserDataQuery } =
//   authApi;
// export const { isLoggedIn } = isLoggedInReducer.actions;
