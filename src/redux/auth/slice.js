import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { clearAuthHeader } from "../../api/axios.config.js";
import { getOauthUrl, login, logout, register } from "./operations.js";
import { handleLogin, handleRegister } from "./handlers.js";

const initialState = {
  accessToken: null,
  isLoggedIn: false,
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    forceLogout: () => {
      clearAuthHeader();
      return initialState;
    },
    setToken: (state, action) => {
      state.accessToken = action.payload;
      state.isLoggedIn = true;
    },
    setRememberMe: (state, action) => {
      state.rememberMe = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, handleLogin)
      .addCase(register.fulfilled, handleRegister)
      .addCase(logout.fulfilled, () => {
        localStorage.removeItem("token");
        return initialState;
      })
      .addMatcher(isAnyOf(login.pending, register.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(register.rejected, login.rejected, getOauthUrl.rejected),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      );
  },
});

export const { forceLogout, setToken, setRememberMe } = authSlice.actions;

export default authSlice.reducer;
