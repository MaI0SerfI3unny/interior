import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice.js";
import authReducer from "./auth/slice.js";
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
  createTransform,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authTransform = createTransform(
  inboundState => {
    if (inboundState?.rememberMe) {
      return {
        rememberMe: inboundState.rememberMe,
        accessToken: inboundState.accessToken,
        isLoggedIn: inboundState.isLoggedIn,
      };
    }
    return null;
  },
  outboundState => {
    return outboundState;
  },
  { whitelist: ["auth"] }
);

const authPersistConfig = {
  key: "auth",
  storage,
  // whitelist: ["rememberMe", "accessToken", "isLoggedIn"],
  transforms: [authTransform],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const perStore = configureStore({
  reducer: {
    user: userReducer,
    auth: persistedAuthReducer,
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
