import { createSlice } from "@reduxjs/toolkit"

export const ui = createSlice({
  name: "ui",
  initialState: {
    isLoading: false,
    showScanner: false,
    showProduct: false,
    disableScanBtn: false,
    disableCancelBtn: false,
    disableSaveBtn: true
  },

  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setShowScanner: (state, action) => {
      state.showScanner = action.payload

      // enable and disable buttons
      if (action.payload) {
        state.disableScanBtn = true
        state.disableCancelBtn = false
      }
      else {
        state.disableScanBtn = false
        state.disableCancelBtn = true
      }
    },

    setShowProduct: (state, action) => {
      state.showProduct = action.payload

      // enable and disable buttons
      if (action.payload) {
        state.disableScanBtn = false
        state.disableCancelBtn = true
        state.disableSaveBtn = false
      }
    }

  }


})