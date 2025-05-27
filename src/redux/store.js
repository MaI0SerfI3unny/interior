import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice.js";
import authReducer from "./auth/slice.js";
import generationFoldersReducer from "./generationFolders/generationFoldersSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    generationFolders: generationFoldersReducer,
  },
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
