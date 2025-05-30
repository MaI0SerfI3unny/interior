import { createAsyncThunk } from "@reduxjs/toolkit";

import authAPI from "../../api/axios.config.js";

/**
 * Get all user folders
 *
 */
export const getFolders = createAsyncThunk(
  "folders/getFolders",
  async (_, thunkAPI) => {
    try {
      const { data } = await authAPI.get("/folders");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
