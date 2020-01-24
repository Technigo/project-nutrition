import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui.js'

/** Foods structure:
 * food:
 * - name: text
 * - barcode: number
 * - kcal: number
 * - macroValues:
 * - - fat: number
 * - - proteins: number
 * - - carbohydrates: number
 */

const foods = [{
  name: 'Godis',
  barcode: '000000000',
  kcal: '400',
  macroValues: {
    fat: 10,
    proteins: 10,
    carbohydrates: 10
  }
}]
export const macros = createSlice({
  name: 'macros',
  initialState: {
    foods: foods
  },
  reducers: {
    addFood: (state, action) => {
      /* Check to not add duplicates */
      if (state.foods.findIndex((food) => food.barcode === action.payload.barcode) === 1) {
        return
      }
      state.foods.push(action.payload)
    }
  }
})

export const fetchNutritionValues = (code) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
    .then(res => res.json())
    .then(json => {

      const food = { /* create a food object to be put in foods array */ 
        name: json.product.generic_name,
        barcode: code,
        kcal: Math.round(json.product.nutriments.energy_value / 4.2), /* Change from kJ to kcal */ 
        macroValues: {
          fat: json.product.nutriments.fat_100g,
          proteins: json.product.nutriments.proteins_100g,
          carbohydrates: json.product.nutriments.carbohydrates_100g
        }
      }
      
      dispatch(macros.actions.addFood(food))
      dispatch(ui.actions.setLoading(false))
    })
  }
}