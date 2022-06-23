import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_BASE_URL } from "../../lib/constant";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const data = axios
      .get(`${BACKEND_BASE_URL}/products?perpage=1000`)
      .then((res) => res.data.data);
    return data;
  }
);
export const getProcessProduct = createAsyncThunk(
  "products/getProcessProduct",
  async (slug) => {
    const data = axios
      .get(`${BACKEND_BASE_URL}/products/${slug}`)
      .then((res) => res.data);
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    activeProducts: [],
    inactiveProducts: [],
    detailProduct: {},
  },
  extraReducers: {
    // get all products
    [fetchProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.activeProducts = action.payload.filter(
        (el) => el.status === "1"
      );
      state.inactiveProducts = action.payload.filter(
        (el) => el.status === "0"
      );
    },
    [fetchProducts.rejected]: (state, action) => {
      state.isLoading = false;
      console.log("false");
    },

    // get process products
    [getProcessProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProcessProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.processProduct = action.payload;
    },
    [getProcessProduct.rejected]: (state, action) => {
      state.isLoading = false;
      console.log("false");
    },
  },
});

export default productsSlice;
