import axios from "axios";

export const safeApi = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const clearAuthHeaderSafeApi = () => {
  safeApi.defaults.headers.common.Authorization = "";
};

export default safeApi;
