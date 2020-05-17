import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Product } from 'components/Product'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { products } from './reducers/products'
import { loading } from './reducers/loading'
import styled from 'styled-components/macro'

const reducer = combineReducers({
  loading: loading.reducer,
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <MainContainer>
        <h1>Is this Cheese?</h1>
        <LoadingIndicator />
        <ProductContainer />
      </MainContainer>
    </Provider>
  )
}

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 90vh;
  background-color: #F9E586;
  border: 3px #000 solid;
  border-radius: 16px;

  h1{
    margin: 0 0 30px 0;
    font-size: 30px;
  }

  @media (min-width: 700px){
    width: 600px;
  }
`
const ProductContainer = styled(Product)`
height: 60%;
`
