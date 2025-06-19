import { createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../api/axios.config.js";

/**
 * get tariffs for user
 *
 */
export const getTariffs = createAsyncThunk("plans", async (_, thunkAPI) => {
  try {
    const { data } = await authAPI.get("/tariffs");

    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});
