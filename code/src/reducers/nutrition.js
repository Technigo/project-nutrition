import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: ["test"]
}

export const nutrition = createSlice({
  name: 'nutrition',
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {

      const foundItem = state.list.find((x) => x.code === action.payload.code)
      if (!foundItem) {
        state.list.push(action.payload)
      }
      else { console.log("Product already stored") }
    }
  }
})