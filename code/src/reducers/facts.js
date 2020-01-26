import { createSlice } from '@reduxjs/toolkit'
import { loading } from 'reducers/loading'

export const facts = createSlice({
    name: 'facts',
    initialState: {
        product: null
    },

    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload
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
                const { product } = json
                dispatch(facts.actions.setProduct(product))
                dispatch(loading.actions.setLoading(false))
            })
    }
}