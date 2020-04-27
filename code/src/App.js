import React from 'react';
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import styled from 'styled-components'
import { Welcome } from './components/Welcome'
import { LoaderSpinner } from 'components/LoaderSpinner'
import { ProductInfo } from './components/ProductInfo'
import { product } from 'reducers/product'
import { ui } from 'reducers/ui'


const reducer = combineReducers({
  ui: ui.reducer,
  product: product.reducer
});

const Wrapper = styled.div`
  text-align: center;
`

export const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Welcome />
        <LoaderSpinner />
        <ProductInfo />
      </Wrapper>
    </Provider>
  );
};
