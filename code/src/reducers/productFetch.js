import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const productFetch = createSlice({
    name: 'productFetch',
    initialState: {
        all: []
    },
    reducers: {
        setproductFetch: (state, action) => {
            state.all = action.payload
        }
    }
})

export const fetchProductFetch = () => {
    return (dispatch) => {
        dispatch(ui.actions.setLoading(true))
        fetch("https://world.openfoodfacts.org/api/v0/product/[barcode].json")
            .then(res => res.json())
            .then(json => {
                dispatch(productFetch.actions.setProducts(json))
                dispatch(ui.actions.setLoading(false))
            })
    }
}