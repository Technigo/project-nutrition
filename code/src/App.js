import React from "react";
import { BarcodeScanner } from "components/BarcodeScanner";
import { useDispatch } from 'react-redux'
import { foods, fetchFoods} from './reducers/foods'
import { FetchFoodButton } from './components/FetchFoodButton'
import { NutritionList } from './components/NutritionList'
import { ScanBarcode } from './components/ScanBarcode'
import { Input } from './components/Input'
import { loading } from './reducers/loading'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'



// const dispatch = useDispatch()


// LÄSER AV API FRÅN FOOD REDUCER 

const onDetected = (code) => {
  // const dispatch = useDispatch()

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
     
      <p>
        {" "}
        Use the field above to test barcodes manually and keep an eye on your
        console in the browser. i.e. Type 7311070347272 - Pågen Gifflar. Yum

      ))}

      </p>
      <ScanBarcode />
     {/* <Input /> */}
      <FetchFoodButton /> 
      <NutritionList /> 
    
    </Provider>
    
  );
};
