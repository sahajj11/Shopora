import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "./categoryAPI";

export const fetchCategories = createAsyncThunk(
  "category/fetchAll",
  async (_, thunkAPI) => {
    try {
      return await getCategories();
    } catch (err) {
      const message =
        err.response?.data?.message || "Failed to fetch categories";
      return thunkAPI.rejectWithValue(message);
    }
  },
);

