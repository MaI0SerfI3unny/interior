import { createAsyncThunk } from "@reduxjs/toolkit";

import authAPI, { clearAuthHeader } from "../../api/axios.config.js";
import {
  toastSuccess,
  toastError,
} from "../../assets/functions/toastNotification.js";

/**
 * Get User Info
 * Just update local info about user
 *
 */
export const getUser = createAsyncThunk("user/getUser", async (_, thunkAPI) => {
  try {
    const response = await authAPI.get(`/user?cache_not_friend=${Date.now()}`);
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
 * Change email
 */

export const changeUserEmail = createAsyncThunk(
  "user/changeEmail",
  async (data, thunkAPI) => {
    try {
      await authAPI.patch("/user/email", { new_email: data.value });
      toastSuccess(data.successMsg);
      return data.value;
    } catch (error) {
      toastError(data.errorMsg);
      return thunkAPI(error.message);
    }
  }
);

/**
 * Change name
 */

export const changeUserName = createAsyncThunk(
  "user/changeName",
  async (data, thunkAPI) => {
    try {
      await authAPI.patch("/user/name", { name: data.name });
      toastSuccess(data.successMsg);
      return data.name;
    } catch (error) {
      toastError(data.errorMsg);
      return thunkAPI(error.message);
    }
  }
);

/**
 * Delete user
 */

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (data, thunkAPI) => {
    try {
      await authAPI.delete("/user/delete");
      clearAuthHeader();
    } catch (error) {
      toastError(data.errorMsg);
      return thunkAPI(error.message);
    }
  }
);

/**
 * Change avatar
 */

export const changeAvatar = createAsyncThunk(
  "user/changeAvatar",
  async (data, thunkAPI) => {
    try {
      await authAPI.patch("/user/photo", { photo: data.image });
      const updatedUser = await authAPI.get(
        `/user?cache_not_friend=${Date.now()}`
      );
      toastSuccess(data.successMsg);
      return updatedUser.data.image;
    } catch (error) {
      toastError(data.errorMsg);
      return thunkAPI(error.message);
    }
  }
);

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
 * get url for LiqPay
 *
 */

export const getLiqPayUrl = createAsyncThunk(
  "user/getLiqPayUrl",
  async (payload, thunkAPI) => {
    try {
      const { data } = await authAPI.post("/tariffs/create", payload);

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
