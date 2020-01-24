import { createSlice } from '@reduxjs/toolkit'
// import { ui } from './ui.js'

/** Foods structure:
 * food:
 * - name: text
 * - barcode: number
 * - kcal: number
 * - macroValues:
 * - - fat: number
 * - - protein: number
 * - - carbo: number
 * - - alcohol: number
 */
export const macros = createSlice({
  name: 'macros',
  initialState: {
    foods: []
  },
  reducers: {
    addFood: (state, action) => {
      state.foods.push(action.payoad)
    }
  }
})

export const fetchNutritionValues = (code) => {
  return (dispatch) => {
    // dispatch(ui.actions.setLoading(true))
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      // TODO Add function to extract relevant value from nutrition before dispatching! 
      // dispatch(macros.actions.addFood(json))
    })
  }
}