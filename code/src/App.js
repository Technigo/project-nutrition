import React from "react";
import { foods } from './reducers/foods'
import { NutritionList } from './components/NutritionList'
import { ScanBarcode } from './components/ScanBarcode'
import { loading } from './reducers/loading'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import './App.css'



const onDetected = (code) => {
  console.log(`Code: ${code}`);
  fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
    .then((data) => data.json())
    .then((json) => {
      console.log(json);
    });
};

const reducer = combineReducers({
  loading: loading.reducer,
  foods: foods.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
 
  return (
    
    <Provider store={store}>
      <ScanBarcode />
      <NutritionList /> 
    </Provider>   
  );
};
