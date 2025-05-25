import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/slice.js";
import generationFoldersReducer from "./generationFolders/generationFoldersSlice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["accessToken", "isLoggedIn"],
};

const persistedUserReducer = persistReducer(userPersistConfig, userSlice);

const perStore = configureStore({
  reducer: {
    user: persistedUserReducer,
    generationFolders: generationFoldersReducer,
  },
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default perStore;
export const persistor = persistStore(perStore);
