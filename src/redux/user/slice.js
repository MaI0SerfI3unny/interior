import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { handleLogin } from "./handlers.js";
import { login, logout, register } from "./operations.js";

const initialState = {
  user: {
    name: "Andrea",
    email: "",
    photo: "",
  },
  accessToken: null,
  isLoggedIn: false,
  isLoading: false,
  isError: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, handleLogin)
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, () => {
        return initialState;
      })

      .addMatcher(
        isAnyOf(register.rejected, login.rejected),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      );
  },
});

export default userSlice.reducer;
