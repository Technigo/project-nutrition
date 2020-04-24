import React from "react";
import { BarcodeScanner } from "components/BarcodeScanner";
// import { useDispatch } from 'react-redux'
// import { food } from './reducers/food'
import { FetchFoodButton } from './components/FetchFoodButton'
import { NutritionList } from './components/NutritionList'
import { ScanBarcode } from './components/ScanBarcode'

import { loading } from './reducers/loading'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'






// LÄSER AV API FRÅN FOOD REDUCER 

//  const onDetected = (code) => {
//   console.log(`Code: ${code}`);
//   fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
//     .then((data) => data.json())
//     .then((json) => {
//       console.log(json);
//     });
// };

const reducer = combineReducers({
  loading: loading.reducer
  // foodReducer: foodReducer.reducer
})


export const store = configureStore({ reducer })

export const App = () => {
  
  return (
    
    <Provider store={store}>
    
    
      <label>
        {" "}
        Test codes here:{" "}
        <input type="text" 
        onChange={(e) => 
        NutritionList(e.target.value)}>
          
        </input>
      </label>
      <p>
        {" "}
        Use the field above to test barcodes manually and keep an eye on your
        console in the browser. i.e. Type 7311070347272 - Pågen Gifflar. Yum

      ))}

      </p>
      <ScanBarcode />
     
      <FetchFoodButton /> 
      <NutritionList /> 
    
    </Provider>
    
  );
};
