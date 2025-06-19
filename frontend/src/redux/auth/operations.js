import { createAsyncThunk } from "@reduxjs/toolkit";

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
    const { errorMessage, ...requestData } = credentials;
    try {
      const { data } = await authAPI.post("/register", requestData);

      return data;
    } catch (error) {
      console.log(error.response.data.email[0], "data");
      if (
        error.response?.data?.email[0] ===
        "user with this email already exists."
      ) {
        console.log("in error if", errorMessage);
        toastError(errorMessage);
      }

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
