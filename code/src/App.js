import React from "react"
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { ui } from "reducers/ui"
import { products } from "reducers/products"
import { LoadingIndicator } from "components/LoadingIndicator"
import { Product } from "components/Product"
import style from "styled-components"

const Section = style.section`
background: #FF7F11;
height: 100vh;
color: #FDFFFC;
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Section>
        <Product />
        <LoadingIndicator />
      </Section>
    </Provider>
  )
}
