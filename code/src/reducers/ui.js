import { createSlice } from '@reduxjs/toolkit'
//same component in most projects

export const ui = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false
  },
  reducers: {
    setLoading: (state, action) => {
        state.isLoading = action.payload
      }
    }  
})