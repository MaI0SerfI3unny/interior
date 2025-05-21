export const selectUser = state => state.user.user;

export const selectIsLoading = state => state.user.isLoading;

export const selectisLoggedIn = state => state.user.isLoggedIn;

export const selectAccessToken = state => state.user.accessToken;

export const selectUserImage = state => state.user.user.image;
