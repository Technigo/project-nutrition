import React from 'react'
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { nutritionInfo } from 'reducers/nutritioninfo'
import { ui } from 'reducers/ui'
import { ScanBarcode } from 'components/ScanBarcode';
import { Header } from 'components/Header'


const reducer = combineReducers({
  nutritionInfo: nutritionInfo.reducer,
  ui: ui.reducer
})

export const store = configureStore({ reducer })

export const Home = () => {
  return (
    <Provider store={store}>
      <Header />
      <ScanBarcode />
    </Provider>
  );
};
