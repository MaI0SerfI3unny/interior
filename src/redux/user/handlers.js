export const handleLogin = (state, { payload }) => {
  state.accessToken = payload.data;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isError = false;
};

export const handleRegister = (state, { payload }) => {
  state.accessToken = payload.data;
  state.isLoading = false;
  state.isLoggedIn = true;
};

export const handleUserInfo = (state, { payload }) => {
  state.user = payload;
  state.isLoading = false;
};

export const handlerChangeEmail = (state, { payload }) => {
  state.user.email = payload;
};
