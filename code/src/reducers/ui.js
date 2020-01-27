import {createSlice} from '@reduxjs/toolkit'

export const ui = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false,
    isImage: true,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setImage: (state, action) => {
      state.isImage = action.payload
    }
  }
})