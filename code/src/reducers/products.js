import { createSlice } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'


export const products = createSlice({
    name: 'products',
    initialState: {
        product: []
    },

    //***** here is the Actions *****/
    reducers: {
        setBarcodes: (state, action) => {
            console.log(state)
            console.log(action)
            state.product = action.payload
        },
    }
})
/******* The Thunk **********/
export const fetchBarcodes = (barcode) => {
    return (dispatch) => {
        dispatch(ui.actions.setLoading(true))

        fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                dispatch(products.actions.setBarcodes(json))
                dispatch(ui.actions.setLoading(false))
            })
    }
}
