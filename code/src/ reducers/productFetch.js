import { createSlice} from '@reduxjs/toolkit'
import { ui } from ' reducers/ui'
// import React, { useEffect, useState } from 'react'
// import { ScanBarcode } from 'components/ScanBarcode'
// import { Link } from 'react-router-dom'

export const productFetch = createSlice({
    name: 'productFetch',
    initialState: {
        all: []
    },
    reducers: {
        setProducts: (state, action) => {
            state.all = action.payload
        }
    }
})

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(ui.actions.setLoading(true))
        fetch('https://world.openfoodfacts.org/api/v0/product/[barcode].json')
            .then((res) => res.json())
            .then((json) => {
                dispatch(productFetch.actions.setProducts(json))
                dispatch(ui.actions.setLoading(false))
                // console.log(products)
            })            
    } 
}    