import { createSlice } from '@reduxjs/toolkit'

export const ui = createSlice({
    name: 'ui',
  initialState: {
    loadingIndicator: false
    
  },
  reducers: {
    setLoading: (state, action) => {
            state.loadingIndicator = action.payload
    }
  }
})