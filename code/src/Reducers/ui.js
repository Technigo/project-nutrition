import { createSlice } from '@reduxjs/toolkit'

export const ui = createSlice({
  name: 'products',
  initialState: {
    product: []
  },
  reducers: {
    setProduct: (state, action) => {
      state.isLoading = action.payload
    }
  }
})
