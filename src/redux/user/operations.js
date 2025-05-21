import { createAsyncThunk } from "@reduxjs/toolkit";

import { persistor } from "../store.js";
import authAPI, {
  clearAuthHeader,
  setAuthHeader,
} from "../../api/axios.config.js";

/**
 * Registration
 *
 */
export const register = createAsyncThunk(
  "user/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authAPI.post("/register", credentials);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/**
 * Login
 * User gets his accessToken and is allowed to user private part of application
 */
export const login = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    try {
      await persistor.purge();

      const { data } = await authAPI.post("/login", credentials);

      setAuthHeader(data.data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/**
 * Logout
 * Send request to clear session data on backend and clean up Auth Header
 */
export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/**
 * Get User Info
 * Just update local info about user
 * Not sure if it is needed at all
 */
export const getUser = createAsyncThunk("user/getUser", async (_, thunkAPI) => {
  try {
    const response = await authAPI.get("/user");
    return response.data;
  } catch (error) {
    if (error.response?.data?.data?.message)
      return thunkAPI.rejectWithValue(error.response.data.data.message);

    return thunkAPI.rejectWithValue(error.message);
  }
});
