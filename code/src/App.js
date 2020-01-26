import React from 'react'
import { ScanBarcode } from 'components/ScanBarcode'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { facts } from 'reducers/facts'
import { loading } from 'reducers/loading'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { Product } from 'components/Product'
import styled from 'styled-components/macro'


const Bg = styled.div`
font-family: 'Roboto', sans-serif;
padding:100px;
margin: auto;
max-width: 800px;

@media (max-width: 768px) {
    padding:10px;
  }
`

const reducer = combineReducers({
  facts: facts.reducer,
  loading: loading.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Bg>
        <LoadingIndicator />
        <ScanBarcode />
        <Product />
      </Bg>
    </Provider>
  )
}
