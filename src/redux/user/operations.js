import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://";

// Utility to add JWT
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

/**
 * Registration
 *
 */
export const register = createAsyncThunk(
  "user/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/register", credentials);

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
  async (userInfo, thunkAPI) => {
    try {
      const { data } = await axios.post("/login", userInfo);
      setAuthHeader(data.accessToken);

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
    await axios.post("/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
