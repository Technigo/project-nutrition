import { createSlice } from '@reduxjs/toolkit'


export const productStore = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false
  },
})
reducers: {
  setLoading: (state, action) => {
    state.isLoading = action.payload
  }
}