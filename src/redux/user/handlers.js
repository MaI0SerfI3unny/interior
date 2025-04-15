export const handleLogin = (state, { payload }) => {
  state.accessToken = payload.data.accessToken;
  state.isLoading = false;
  state.isRefreshing = false;
  state.isLoggedIn = true;
};
