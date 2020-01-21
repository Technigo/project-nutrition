// import React, { useEffect } from 'react'
// import { createSlice } from '@reduxjs/toolkit'
// import { useSelector } from 'react-redux'



// export const ui = createSlice({
//     name: 'ui',
//     initialState: {
//         isLoading: false
//     },
//     reducers: {
//         setLoading: (state, action) => {
//             state.setLoading = action.payload
//         }
//     }
// })

//useEffect

// UI - the page is loading ( rediucer 1)
// show spinner 

// dispatch(ui.actions.setLoading(true))
// fetch("https://world.openfoodfacts.org/api/v0/product/[barcode].json")
//     .then(res => res.json())
//     .then(json => {
//         dispatch(products.actions.set(json))
//         dispatch(ui.actions.setLoading(false))
        //toggle the loading
        //this is async actions - hide the loader
    // })
// reducer 2 - listan