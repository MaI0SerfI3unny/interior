import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  handleUserInfo,
  handlerChangeEmail,
  handlerChangename,
} from "./handlers.js";
import {
  getUser,
  changeUserEmail,
  deleteUser,
  changeAvatar,
  getLiqPayUrl,
  saveNewPwd,
  changeUserName,
  getTariffs,
} from "./operations.js";

import { sendRecoveryPwdEmail } from "./operations.js";
import { logout } from "../auth/operations.js";

const initialState = {
  name: "",
  email: "",
  image: null,
  freeCount: null,
  active_plan: null,
  registration_type: "",
  payment_details: [],
  payment_history: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,

  extraReducers: builder => {
    builder

      .addCase(getUser.fulfilled, handleUserInfo)
      .addCase(changeUserEmail.fulfilled, handlerChangeEmail)
      .addCase(changeUserName.fulfilled, handlerChangename)
      .addCase(deleteUser.fulfilled, () => {
        return initialState;
      })
      .addCase(changeAvatar.fulfilled, (state, { payload }) => {
        state.image = payload;
      })
      .addCase(sendRecoveryPwdEmail.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, () => {
        return initialState;
      })
      .addCase(getTariffs.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(getTariffs.pending, state => {
        state.isLoading = true;
      })

      .addMatcher(
        isAnyOf(
          getUser.rejected,
          getLiqPayUrl.rejected,
          saveNewPwd.rejected,
          getTariffs.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      );
  },
});

export default userSlice.reducer;

// email: "htos@ukr.net";
// name: "Хтось";
// password: "11111111";
