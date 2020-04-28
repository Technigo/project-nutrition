import React from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsList } from "./reducers/products";
import { ui } from "reducers/ui";
import { Provider } from "react-redux";
import { Input } from "components/Input";
import { ProductInfo } from "components/ProductInfo";

import styled from "styled-components/macro";
import { GlobalStyle } from "lib/Global";

import { Header } from "./components/Header";

// import { BarcodeScanner } from 'components/BarcodeScanner'
// import { ScanBarcode } from "./components/ScanBarcode";

// const onDetected = (code) => {
//   console.log(`Code: ${code}`);
//   fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
//     .then((data) => data.json())
//     .then((json) => {
//       console.log(json);
//     });
// };

// combine reducers
const reducer = combineReducers({
  productsList: productsList.reducer,
  ui: ui.reducer,
});

// setup the store
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <InnerContainer>
          <Header />
          <Input />
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
  width: 80%;
  max-width: 300px;
  background-color: #c3d3e0;
  padding: 20px;
  margin-top: 20px;
  border: 15px solid #e3b49a;

  @media (max-width: 400px) {
    margin-top: 20px;
    border: none;
  },

`;
