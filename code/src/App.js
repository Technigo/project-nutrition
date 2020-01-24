import React from 'react'
import { Provider } from 'react-redux'
import { macros } from './reducers/macros.js'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const reducer = combineReducers({
  macros: macros.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      Hej
  </Provider>
  )
}
