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
