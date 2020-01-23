import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { product } from 'reducers/product';
import { ui } from 'reducers/ui';
import { ScanBarcode } from 'components/ScanBarcode';
import { ScanInfo } from 'components/ScanInfo';
import { GlobalStyle } from 'components/GlobalStyle';

const reducer = combineReducers({
  ui: ui.reducer,
  product: product.reducer
});

const store = configureStore({
  reducer
});

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ScanInfo />
      <ScanBarcode />
    </Provider>
  );
};
