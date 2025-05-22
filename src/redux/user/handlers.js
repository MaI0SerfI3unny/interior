export const handleLogin = (state, { payload }) => {
  state.accessToken = payload.data;
  state.isLoading = false;
  state.isLoggedIn = true;
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
