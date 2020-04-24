import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: []
}

export const nutrition = createSlice({
  name: 'nutrition',
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.list.push(action.payload)
    }
  }
})