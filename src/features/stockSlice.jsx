import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    loading: false,
    error: false,
    firms: [],
    brands: [],
    products: [],
    sales: [],
    purchases: [],
    categories: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    stockSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state[payload.endpoint] = payload.stock;
    },
    getProCatBrandSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.products = payload[0];
      state.categories = payload[1];
      state.brands = payload[2];
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, stockSuccess, getProCatBrandSuccess, fetchFail } =
  stockSlice.actions;

export default stockSlice.reducer;
