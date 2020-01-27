import React from 'react'
import { Provider } from 'react-redux'
import { macros } from './reducers/macros.js'
import { ui } from './reducers/ui.js'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { ScanBarcode } from './components/ScanBarcode.js'
import { LoadingIndicator } from './components/LoadingIndicator.js'
import { FoodsList } from './components/FoodsList.js'
import { InfoBar } from './components/InfoBar.js'

const reducer = combineReducers({
  macros: macros.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })

//const errorMsg = useSelector(state => state.ui.)
const handleClose = () => {
  return
}

export const App = () => {
  return (
    <Provider store={store}>
      <header>
        <h1>Barcode scanner</h1>
      </header>
      <main>
        <ScanBarcode />
        <div class="status-info">
          <LoadingIndicator />
        </div>
        <FoodsList />
        <InfoBar />
        
      </main>
  </Provider>
  )
}
