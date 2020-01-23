import { createSlice } from '@reduxjs/toolkit'
import { ui } from '../reducers/ui'
export const products = createSlice({
    name: 'products',
    initialState: {
        //Damien had -all- down below, Jennie used product
        product: []
    },
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload
        }
    }
})
//this fetchProduct is called in the ScanBarcode 
export const fetchProduct = (barcode) => {
    return dispatch => {
        //Dispatching the setLoading action
        dispatch(ui.actions.setLoading(true))
        //Down below is a THUNK
        fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
            .then(res => res.json())
            .then((json) => {
                //Dispatching the products action
                dispatch(products.actions.setProduct(json))
                //Dispatching the setLoading action
                dispatch(ui.actions.setLoading(false))
                // console.log(products)
            })
    }
}