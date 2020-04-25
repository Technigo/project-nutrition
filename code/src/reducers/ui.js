import { createSlice } from '@reduxjs/toolkit'

export const ui = createSlice({
  name: 'ui',
  initialState: {
    //Testa att sätta till true när det finns en loading spinner att visa
    isLoading: false
  },

  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})