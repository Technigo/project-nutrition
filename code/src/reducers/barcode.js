import { createSlice } from "@reduxjs/toolkit"

export const barcode = createSlice({
  name: "barcode",
  initialState: {
    items: []
  },

  reducers: {
    setBarcode: (state, action) => {
      state.items = action.payload
    }
  }


})