import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { ui } from './reducers/ui';
import { barcode } from './reducers/barcode';

import { LoadingIndicator } from 'components/LoadingIndicator';
import { ScanBarcode } from './components/ScanBarcode';
import { Header } from './components/Header';
import { Product } from 'components/Product';

const reducer = combineReducers({
  ui: ui.reducer,
  barcode: barcode.reducer
});

export const store = configureStore({
  reducer
});

export const App = () => {
  return (
    <Provider store={store}>
      <Header title="My barcode scanner" />
      <LoadingIndicator />
      <ScanBarcode />
      <Product />
    </Provider>
  );
};
