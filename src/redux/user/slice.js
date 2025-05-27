import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { handleUserInfo, handlerChangeEmail } from "./handlers.js";
import {
  getUser,
  changeUserEmail,
  deleteUser,
  changeAvatar,
  getLiqPayUrl,
  saveNewPwd,
} from "./operations.js";

import { sendRecoveryPwdEmail } from "./operations.js";

const initialState = {
  name: "",
  email: "",
  image: null,
  freeCount: null,
  active_plan: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  extraReducers: builder => {
    builder

      .addCase(getUser.fulfilled, handleUserInfo)
      .addCase(changeUserEmail.fulfilled, handlerChangeEmail)
      .addCase(deleteUser.fulfilled, () => {
        return initialState;
      })
      .addCase(changeAvatar.fulfilled, (state, { payload }) => {
        state.user.image = payload;
      })
      .addCase(sendRecoveryPwdEmail.fulfilled, state => {
        state.isLoading = false;
      })

      .addMatcher(
        isAnyOf(getUser.rejected, getLiqPayUrl.rejected, saveNewPwd.rejected),
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
