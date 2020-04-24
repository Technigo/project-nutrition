
import { createSlice } from '@reduxjs/toolkit'
import { loading } from './loading'
import { useDispatch } from 'react-redux'



export const foodReducer = createSlice ({ 
  name:'Food',
  initialState: 
  {
    all: []
  },

  reducers: {
    setFood: (state, action) => {
      state.all = action.payload
    }
  }
})

// ----Denna är extra utifall vi vill ha en loading funk--------
//  export const fetchFood = (code) => {
//   return (dispatch) => {
//     dispatch(loading.actions.setLoading(true))
//     fetch(`hhttps://world.openfoodfacts.org/api/v0/product/${code}.json`)
//     .then((res) => res.json())
//     .then((json) => {
//       dispatch(food.actions.setFood(json.product.ingredients_hierarchy))
//       dispatch(loading.actions.setLoading(false))
//     })
//   }
// }
/// ----Denna är extra utifall vi vill ha en loading funk--------



// HÖR INTE HEMMA I EN REDUCER //
// export const food = (code) => {
//   console.log(`Code: ${code}`);
//   fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
//     .then((data) => data.json())
//     .then((json) => {
//       console.log(json);
//     });  
// }
// HÖR INTE HEMMA I EN REDUCER //