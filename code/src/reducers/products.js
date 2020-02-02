import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const products = createSlice({
    name: 'products',
    initialState: {
        product: []
    },
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload
        }
    }
})

export const fetchProduct = (barcode) => {

    return dispatch => {
        dispatch(ui.actions.setLoading(true))
        fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
            .then(res => res.json())
            .then(json => {
                // this is the thunk
                dispatch(products.actions.setProduct(json))
                dispatch(ui.actions.setLoading(false))
            })
    }
}