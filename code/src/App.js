import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { food } from 'reducers/food'
import { ui } from 'reducers/ui'
import { scanner } from 'reducers/scanner'

import { Header } from 'components/Header'
import { ScanningWindow } from 'components/ScanningWindow'
import { ProductInfo } from 'components/ProductInfo'

const reducer = combineReducers({
  ui: ui.reducer,
  food: food.reducer,
  scanner: scanner.reducer
})

const store = configureStore({
  reducer
})

export const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Header />
        <ScanningWindow />
        <ProductInfo />
      </div>
    </Provider>
  )
}
