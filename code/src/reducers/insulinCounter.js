import { createSlice } from '@reduxjs/toolkit'


export const insulinCounter = createSlice({
    name: 'insulinCounter',
    initialState: {
        personalSetting: 5
    },
    reducers: {
        setDose: (state, action) => {
            console.log("setDose(): Hello")
            console.log(state.product)
            if (state.product && state.product.product.nutriments.carbohydrates){
                console.log("setDose(): Inside if")
                state.insulinDose = state.personalSetting * state.product.product.nutriments.carbohydrates 
            }
           
            
        }
    }
})