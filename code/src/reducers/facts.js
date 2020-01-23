import { createSlice } from '@reduxjs/toolkit'
import { loading } from 'reducers/loading'

export const facts = createSlice({
    name: 'facts',
    initialState: {
        products: []
    },

    reducers: {
        setProduct: (state, action) => {
            state.products = action.payload
        }
    },


})

export const fetchProduct = (barcode) => {
    return dispatch => {
        dispatch(loading.actions.setLoading(true))
        fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
            .then((res) => res.json())
            .then((json) => {
                console.log("json", json)
                dispatch(facts.actions.setProduct(json))
                dispatch(loading.actions.setLoading(false))
            })
    }
}