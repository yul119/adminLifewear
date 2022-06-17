import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../lib/constant";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const data = axios
      .get(`${BASE_URL}/admin/users?page=1`)
      .then((res) => res.data.data);
    return data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: { isLoading: false, users: [] },
  extraReducers: {
    // get all users
    [fetchUsers.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.isLoading = false;
      console.log("false");
    },
  },
});

export default usersSlice;
