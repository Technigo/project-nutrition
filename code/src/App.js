import React from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "reducers/productsReducer"
import { Provider } from "react-redux"
import { ScanBarcode } from "components/ScanBarcode.js";
import styled from 'styled-components';

const reducer = combineReducers({ productsReducer: productsReducer.reducer })

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Title>How much?</Title>
        <Paragraph>Scan a product and compare values to daily recommendations</Paragraph>
        <ScanBarcode />
      </Container>
    </Provider>
  );
};

const Container = styled.main`
  text-align: center;
  margin: 40px;
`
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 60px;
  color: #ffa6a6;
  text-shadow: 2px 2px #FF0000;
  margin: 0;
`
const Paragraph = styled.p`
  margin: 0;
`
