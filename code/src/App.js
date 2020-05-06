import React from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { productsList } from "./reducers/products";
import { ui } from "reducers/ui";
import { Input } from "components/Input";
import { ProductInfo } from "components/ProductInfo";
import { Header } from "./components/Header";
import styled from "styled-components/macro";
import { GlobalStyle } from "lib/Global";
import { LoadingIndicator } from "./components/LoadingIndicator";

// combine reducers:
const reducer = combineReducers({
  productsList: productsList.reducer,
  ui: ui.reducer,
});

// setup the store:
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <InnerContainer>
          <Header />
          <Input />
          <LoadingIndicator />
          {/* <ScanBarcode onDetected={onDetected} /> */}
          {/* <ScanBarcode /> */}
          <ProductInfo />
        </InnerContainer>
      </Container>
    </Provider>
  );
};

const Container = styled.section`
  font-family: "Work Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 300px;
  background-color: #c3d3e0;
  padding: 20px;
  margin-top: 20px;
  border: 15px solid #e3b49a;
  @media (max-width: 400px) {
    margin-top: 20px;
    border: none;
  }
`;
