import { createSlice } from '@reduxjs/toolkit'


export const insulinCounter = createSlice({
    name: 'insulinCounter',
    initialState: {
        product: [],
        personalCarbsPerUnit: 14.3
    },
    reducers: {
        setDose: (state, action) => {
            /*
            console.log("setDose(): Hello")
            console.log(state)
            if (state.product && state.product.product.nutriments.carbohydrates){
                console.log("setDose(): Inside if")
                state.insulinDose =  state.product.product.nutriments.carbohydrates / state.personalCarbsPerUnit 
            }
            
            
var carbsPerUnit = 14.3;   // 500 / 35 doser per dag
var reductionPerUnit = 2.5         // mmol/L som minskas för 1 dos insulin
var levelGoal = 5.0;

var dose = (totalCarbs / carbsPerUnit);
            */
           
            
        }
    }
})
