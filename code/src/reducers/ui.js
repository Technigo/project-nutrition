import { createSlice } from '@reduxjs/toolkit'

export const ui = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false,
    isCameraOn: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setCamera: (state, action) => {
      state.isCameraOn = action.payload
    }
  }
})