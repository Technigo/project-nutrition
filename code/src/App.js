import React from "react";
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { product } from "./reducers/product"
import { Scanner } from "components/Scanner";

const reducer = combineReducers({
  product: product.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Scanner />
    </Provider>
  );
};
