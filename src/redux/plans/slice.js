import { createSlice } from "@reduxjs/toolkit";
import { getTariffs } from "./operations.js";

export const selectPlans = state => state.plans.plans;
export const selectIsLoadingPlans = state => state.plans.isLoading;

const initialState = { plans: [], isLoading: false };
const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getTariffs.fulfilled, (state, { payload }) => {
        state.plans = payload;
        state.isLoading = false;
      })
      .addCase(getTariffs.pending, state => {
        state.isLoading = true;
      }),
});

export default plansSlice.reducer;
