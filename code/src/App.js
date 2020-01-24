import React from 'react'
import { Provider } from 'react-redux'
import { macros } from './reducers/macros.js'
import { ui } from './reducers/ui.js'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { ScanBarcode } from './components/ScanBarcode.js'
import { LoadingIndicator } from './components/LoadingIndicator.js'
import { FoodsList } from './components/FoodsList.js'

const reducer = combineReducers({
  macros: macros.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <ScanBarcode />
      <LoadingIndicator />
      <FoodsList />
  </Provider>
  )
}
