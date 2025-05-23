import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  handleLogin,
  handleRegister,
  handleUserInfo,
  handlerChangeEmail,
} from "./handlers.js";
import {
  getUser,
  login,
  logout,
  register,
  changeUserEmail,
  deleteUser,
} from "./operations.js";
import { clearAuthHeader } from "../../api/axios.config.js";

const initialState = {
  user: {
    name: "",
    email: "",
    image: null,
    freeCount: null,
    active_plan: null,
  },
  accessToken: null,
  isLoggedIn: false,
  isLoading: false,
  isError: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    forceLogout() {
      clearAuthHeader();
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, handleLogin)
      .addCase(register.fulfilled, handleRegister)
      .addCase(logout.fulfilled, () => {
        return initialState;
      })
      .addCase(getUser.fulfilled, handleUserInfo)
      .addCase(changeUserEmail.fulfilled, handlerChangeEmail)
      .addCase(deleteUser.fulfilled, () => {
        return initialState;
      })

      .addMatcher(
        isAnyOf(register.rejected, login.rejected, getUser.rejected),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      );
  },
});

export const { forceLogout } = userSlice.actions;
export default userSlice.reducer;

// email: "htos@ukr.net";
// name: "Хтось";
// password: "11111111";
