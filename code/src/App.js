import React from 'react'
import { ScanBarcode } from 'components/ScanBarcode'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { ui } from "reducers/ui"
import { products } from "reducers/products"
import { Product } from "components/Product"
import { LoadingIndicator } from 'components/LoadingIndicator'
import { SavedProducts } from 'components/SavedProducts'
import styled from "styled-components/macro"
import foodimage from "./media/hero-image.jpeg"


const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

export const store = configureStore({ reducer })


export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <LoadingIndicator />
        <ScanBarcode />
        <Product />
        <SavedProducts />
      </Container>
    </Provider>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-image: url(${foodimage});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
min-height: 600px;
`
