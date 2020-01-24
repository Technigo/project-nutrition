import { createSlice } from '@reduxjs/toolkit'

export const ui = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false,
    isScanning: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setScanning: (state, action) => {
      state.isScanning = action.payload
    }
  }
})
