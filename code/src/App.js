import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ui } from "./reducers/ui";
import { products } from "./reducers/products";
import { Content } from "./components/Content";
import { Container, ColorOverlay, ContentWrapper } from "styles";

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <ContentWrapper>
          <Content />
        </ContentWrapper>
        <ColorOverlay />
      </Container>
    </Provider>
  );
};
