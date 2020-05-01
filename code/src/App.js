import React from "react";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { data } from './reducers/data';
import { ui } from './reducers/ui';
import { BarcodeButton } from './components/BarcodeButton';
import { BarcodeScanner } from './components/BarcodeScanner';
import { ScannedInfo } from './components/ScannedInfo'
import { InputCodeManually } from 'components/InputCodeManually'
import { LocalFoodText } from './components/LocalFoodText'
import { Header } from 'lib/Header'
import { Footer } from 'lib/Footer'
import styled from 'styled-components'


const reducer = combineReducers ({
  data: data.reducer,
  ui: ui.reducer
});

const store = configureStore({reducer});

export const App = () => {
 
    return (
    <Provider store={store}>
    <div>
      <Header />
      <LocalFoodText />
      <Content>
        <BarcodeButton />
        <InputCodeManually />
        <ScannedInfo />
      </Content>
      <Footer />
    </div>
    </Provider>
  )
  }

  const Content = styled.main`
  display: flex;
  flex-direction:column;
  justyfy-content: center;
  align-items:center;
  height: auto;
  @media (max-width: 449px) {
  width: 100%;
  padding: 30px;
  margin-top: 30px;
  }
  @media (min-width: 450px) and (max-width: 750px) {
  width: 100%;
  padding: 30px;
  }
`