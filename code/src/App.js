import React from 'react'
import { ScanBarcode } from 'components/ScanBarcode'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { facts } from 'reducers/facts'
import { loading } from 'reducers/loading'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { Product } from 'components/Product'
import styled from 'styled-components'


const Bg = styled.div`
font-family: 'Roboto', sans-serif;
align-items:center;
justify-content:center;
display:flex;
flex-direction:column;
padding:100px;
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
