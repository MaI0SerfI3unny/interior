import { createAsyncThunk } from "@reduxjs/toolkit";

import authAPI from "../../api/axios.config.js";
import {
  toastError,
  toastSuccess,
} from "../../assets/functions/toastNotification.js";

/**
 * Get all user folders
 *
 */
export const getFolders = createAsyncThunk(
  "folders/getFolders",
  async (_, thunkAPI) => {
    try {
      const { data } = await authAPI.get(
        `/folders?cache_not_friend=${Date.now()}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/**
 * Save photo to the new folder
 *
 */
export const savePhotoToNewFolder = createAsyncThunk(
  "folders/saveToNewFolder",
  async (item, thunkAPI) => {
    const { title, photo, errorMsg, successMsg } = item;
    try {
      const { data } = await authAPI.post("/folders/photos/", {
        title,
        photo,
      });

      console.log("data :>> ", data);
      toastSuccess(successMsg);
      return data;
    } catch (error) {
      toastError(errorMsg);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
