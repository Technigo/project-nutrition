import { createSlice } from '@reduxjs/toolkit';

export const scanner = createSlice({
  name: 'scanner',
  initialState: {
    showScanner: false
  },
  reducers: {
    setShowScanner: (state, action) => {
      state.showScanner = action.payload;
    }
  }
});
