import React from "react";
import { products } from "reducers/product"
import { Loading, loader } from "reducers/Loading"
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { GetProduct } from "components/GetProduct"
import { ShowInfo } from "components/ShowInfo"


const reducer = combineReducers({
  loader: loader.reducer,
  products: products.reducer
})

const store = configureStore({ reducer })

export const App = () => {

  return (
    <Provider store={store}>
      <Loading />
      <ShowInfo />
      <GetProduct />
    </Provider>
  )
}

