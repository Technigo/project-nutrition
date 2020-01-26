import React from 'react'
import { ScanBarcode } from 'components/ScanBarcode'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { facts } from 'reducers/facts'
import { loading } from 'reducers/loading'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { Products } from 'components/Products'
import styled from 'styled-components/macro'


const Bg = styled.div`
    margin: auto;
    max-width: 800px;
    padding:100px;
    font-family: 'Roboto', sans-serif;
   
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
        <Products />
      </Bg>
    </Provider>
  )
}
