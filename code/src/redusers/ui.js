import { createSlice } from '@reduxjs/toolkit'

export const ui = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false
  },
  reducers: {
    setProduct: (state, action) => {
      state.isLoading = action.payload
    }
  }
})
