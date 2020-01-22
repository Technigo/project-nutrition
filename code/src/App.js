import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'


import { barcode } from './reducers/barcode'
import { ui } from './reducers/ui'

import { LoadingIndicator } from './components/LoadingIndicator'
import { ScanBarcode } from './components/ScanBarcode'



const reducer = combineReducers({
  barcode: barcode.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <LoadingIndicator />
        <ScanBarcode />
      </main>
    </Provider>
  )
}
