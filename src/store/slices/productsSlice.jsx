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
    // console.log(
    // "🚀 ~ file: productsSlice.jsx ~ line 13 ~ data",
    // data
    // );
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: { isLoading: false, products: [] },
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
  },
});

export default productsSlice;
