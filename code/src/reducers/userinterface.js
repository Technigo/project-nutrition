import { createSlice } from '@reduxjs/toolkit'

export const userinterface = createSlice({
  name: 'userinterface',
  initialState: {
    isLoading: false,
    header: "Home"
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setHeader: (state, action) => {
      state.header = action.payload
    }
  }
})