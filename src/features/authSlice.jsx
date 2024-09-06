import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    token: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    registerSuccess: (state, { payload }) => {
      state.currentUser = payload.data.username;
      state.loading = false;
      state.error = false;
      state.token = payload.token;
    },

    loginSuccess: (state, { payload }) => {
      state.currentUser = payload.user.username;
      state.loading = false;
      state.token = payload.token;
    },

    logoutSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
      state.token = null;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  fetchFail,
} = authSlice.actions;

export default authSlice.reducer;
