import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { products } from 'reducers/products';
import { ScannedProduct } from 'components/Scannedproduct';
import { Input } from './components/Input';
import { CameraButton } from 'components/CameraButton';

const reducer = combineReducers({ products: products.reducer });

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Input />
      <ScannedProduct />
      <CameraButton />
    </Provider>
  );
};
