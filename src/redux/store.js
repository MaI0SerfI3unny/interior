import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice.js";
import authReducer from "./auth/slice.js";
import generationFoldersReducer from "./generationFolders/generationFoldersSlice.js";
import plansReducer from "./plans/slice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    generationFolders: generationFoldersReducer,
    plans: plansReducer,
  },
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
