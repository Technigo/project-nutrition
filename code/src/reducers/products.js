import { createSlice } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'

export const products = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {
        setProduct: (state, action) => {
          state.product = action.payload
        }
    }
})
export const fetchProduct = (barcode) => {
    return dispatch => {
        fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            dispatch(products.actions.setProduct(json))
            dispatch(ui.actions.setLoading(false))
        })
    }
}