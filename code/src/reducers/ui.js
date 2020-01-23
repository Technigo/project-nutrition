import { createSlice } from "@reduxjs/toolkit";
// import { reducer } from "App";

export const ui = createSlice({
  name: "ui",
  initialState: {
    setLoading: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});
