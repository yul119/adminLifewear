import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../lib/constant";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const data = axios
      .get(`${BASE_URL}/products`)
      .then((res) => res.data.data);
    return data;
  }
);
export const getProcessProduct = createAsyncThunk(
  "products/getProcessProduct",
  async (slug) => {
    const data = axios
      .get(`${BASE_URL}/products/${slug}`)
      .then((res) => res.data);
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    products: [],
    processProduct: {},
  },
  extraReducers: {
    // get all products
    [fetchProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
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
