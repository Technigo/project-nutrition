import { createSlice } from '@reduxjs/toolkit'
import { loading } from 'reducers/loading'

export const facts = createSlice({
    name: 'facts',
    initialState: {
        products: []
    },

    reducers: {
        addProduct: (state, { payload: json }) => {
            if (state.products.find(product => product.code === json.code)) {
                state.products = state.products.sort((a, b) => {
                    if (a.code === json.code) return -1;
                    return 0;
                })
            } else {
                state.products.push(json)
            }
        },
        clearProducts: state => {
            state.products = []
        }
    },

})

export const fetchProduct = (barcode) => {
    return dispatch => {
        dispatch(loading.actions.setLoading(true))
        fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
            .then((res) => res.json())
            .then((json) => {
                dispatch(facts.actions.addProduct(json))
                dispatch(loading.actions.setLoading(false))
            })
    }
}