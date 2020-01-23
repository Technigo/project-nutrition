import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { food } from 'reducers/food';
import { ui } from 'reducers/ui';
import { scanner } from 'reducers/scanner';
import { ScanApp } from 'components/ScanApp';

const reducer = combineReducers({
  ui: ui.reducer,
  food: food.reducer,
  scanner: scanner.reducer
});

const store = configureStore({
  reducer
});

const AppWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  /* border: 1px solid blue; */
  padding: 2rem;
`;

export const App = () => {
  return (
    <Provider store={store}>
      <AppWrapper>
        <ScanApp />
      </AppWrapper>
    </Provider>
  );
};
