import { createSlice } from '@reduxjs/toolkit'

export const food = createSlice({
  name: 'food',
  initialState: {
    items: ['cake', 'banana']
  },
  reducers: {
    actionName: () => {
      // code to be executed
    }
  }
})

/*

export const functionName = () => {
  return (dispatch) => {
    dispatch(sliceName.actions.actionName())
    fetch('API-url')
      .then((res) => res.json())
      .then((json) => {
        dispatch(sliceName.actions.actionName(json))
        // other code to be executed if so
      })
  }
}*/