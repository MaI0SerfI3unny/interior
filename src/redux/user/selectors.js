export const selectUser = state => state.user;

export const selectIsLoading = state => state.auth.isLoading;

export const selectisLoggedIn = state => state.auth.isLoggedIn;

export const selectAccessToken = state => state.auth.accessToken;

export const selectUserImage = state => state.user.image;

export const selectError = state => state.auth.isError;

export const getPaymentHistory = state => state.user.payment_history;
