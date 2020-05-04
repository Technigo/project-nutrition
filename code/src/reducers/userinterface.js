import { createSlice } from '@reduxjs/toolkit'

export const userinterface = createSlice({
  name: 'userinterface',
  initialState: {
    isLoading: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})