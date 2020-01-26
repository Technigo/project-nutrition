import { createSlice } from "@reduxjs/toolkit";

export const ui = createSlice({
  name: "ui",
  initialState: {
    isLoading: false,
    showScanner: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setShowScanner: (state, action) => {
      state.showScanner = action.payload;
    }
  }
});
