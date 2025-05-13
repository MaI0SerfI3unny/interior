import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice.js";
import generationFoldersReducer from "./generationFolders/generationFoldersSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    generationFolders: generationFoldersReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
