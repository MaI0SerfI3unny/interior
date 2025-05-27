import { createAsyncThunk } from "@reduxjs/toolkit";
import { persistor } from "../store.js";

import authAPI, {
  clearAuthHeader,
  setAuthHeader,
} from "../../api/axios.config.js";

import { toastError } from "../../assets/functions/toastNotification.js";

/**
 * Registration
 *
 */
export const register = createAsyncThunk(
  "auth/register",
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
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      await persistor.purge();

      const { data } = await authAPI.post("/login", credentials);

      setAuthHeader(data.data);

      return data;
    } catch (error) {
      if (error.response?.data?.detail === "INVALID_CREDENTIALS")
        toastError("Login or password is incorrect");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/**
 * Logout
 * Send request to clear session data on backend and clean up Auth Header
 */
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/**
 * Google auth: get OAuth URL
 *
 */

export const getOauthUrl = createAsyncThunk(
  "auth/getOauthUrl",
  async (_, thunkAPI) => {
    try {
      const { data } = await authAPI.get("/google");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
