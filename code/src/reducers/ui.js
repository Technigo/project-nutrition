import { createSlice } from '@reduxjs/toolkit'

export const ui = createSlice({
    name: 'ui',
  initialState: {
    loadingIndicator: false,
    snackbar: {
      show: false,
      message: '',
      severity: ''
    }
  },
  reducers: {
    setLoading: (state, action) => {
            state.loadingIndicator = action.payload
    },
    setShowSnackbar: (state, action) => {
      state.snackbar.show = action.payload[0]
      state.snackbar.message = action.payload[1]
      state.snackbar.severity = action.payload[2]
    }
  }
})