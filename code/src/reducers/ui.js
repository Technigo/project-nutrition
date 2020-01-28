import {createSlice} from '@reduxjs/toolkit'

export const ui = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false,
    isImage: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})