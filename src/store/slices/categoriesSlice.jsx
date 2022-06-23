import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_BASE_URL } from "../../lib/constant";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const data = axios
      .get(`${BACKEND_BASE_URL}/categories?perpage=40`)
      .then((res) => res.data.data);
    return data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    isLoading: false,
    categories: [],
  },
  extraReducers: {
    // get all products
    [fetchCategories.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.isLoading = false;
      console.log("false");
    },
  },
});

export default categoriesSlice;
