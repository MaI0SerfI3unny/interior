import { createAsyncThunk } from "@reduxjs/toolkit";

import { persistor } from "../store.js";
import authAPI, {
  clearAuthHeader,
  setAuthHeader,
} from "../../api/axios.config.js";
import {
  toastError,
  toastSuccess,
} from "../../assets/functions/toastNotification.js";

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
    if (error.response?.data?.detail === "UNAUTHORIZED") {
      toastError("Token not valid, try again");
      return thunkAPI.rejectWithValue(error.response.data.detail);
    }

    return thunkAPI.rejectWithValue(error.message);
  }
});

/**
 * Send recovery password email
 * Send email to user for given opportunity to change password
 *
 */

export const sendRecoveryPwdEmail = createAsyncThunk(
  "user/sendRecoveryPwdEmail",
  async (payload, thunkAPI) => {
    const { successMessage, notFoundMessage, errorMessage, ...requestData } =
      payload;
    try {
      const { data } = await authAPI.post("/recovery", requestData);

      toastSuccess(successMessage);
      return data;
    } catch (error) {
      if (error.response?.data?.detail === "NOT_FOUND_USER") {
        toastError(notFoundMessage);
      } else {
        toastError(errorMessage);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/**
 * Save new password
 * Save new user's password in database
 *
 */

export const saveNewPwd = createAsyncThunk(
  "user/saveNewPwd",
  async (payload, thunkAPI) => {
    const { successMessage, errorMessage, ...requestData } = payload;
    try {
      const { data } = await authAPI.post("/recovery/complete", requestData);
      toastSuccess(successMessage);
      return data;
    } catch (error) {
      if (error.response?.data?.detail === "TOKEN_EXPIRED")
        toastError(errorMessage);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/**
 * Google auth: get OAuth URL
 *
 */

export const getOauthUrl = createAsyncThunk(
  "user/getOauthUrl",
  async (_, thunkAPI) => {
    try {
      const { data } = await authAPI.get("/google");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
