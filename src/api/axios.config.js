import axios from "axios";

import { forceLogout } from "../redux/auth/slice.js";
import store from "../redux/store.js";

// eslint-disable-next-line no-undef
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// Utility to add JWT
export const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
export const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = "";
};

const api = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      const state = store.getState();
      const token = state.auth.accessToken;

      if (token) {
        store.dispatch(forceLogout());
      }
    }
    return Promise.reject(error);
  }
);

export default api;
