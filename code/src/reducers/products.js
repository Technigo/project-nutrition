import { createSlice } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'

/*import { insulinCounter } from 'reducers/insulinCounter'*/

export const products = createSlice({
    name: 'products',
    initialState: {
        product: [],
        personalCarbsPerUnit: 12
    },
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload
            console.log(state)
            if (state.product.status === 0){
                console.log("No product found")
            }else if (state.product && state.product.product.nutriments.carbohydrates){
                state.insulinDose = state.product.product.nutriments.carbohydrates / state.personalCarbsPerUnit
                console.log(state.insulinDose)
            }
        },
        setDose: (state, action) => {
            /*
            console.log("setDose(): Hello")
            console.log(state)
            if (state.product && state.product.product.nutriments.carbohydrates){
                console.log("setDose(): Inside if")
                state.insulinDose = state.product.product.nutriments.carbohydrates*5 
                console.log(state.insulinDose)
            }
            */
        }
    }
    // TODO: Create a new reducer "showProduct" and "hideProduct"
    // those reducers to update state.showProduct
    // Also, the component "Product" to use state.showProduct in a "useSelector"
    // in order to show/hide the product 
    // ALSO: Create a static "header spacer" of ca 100px so that the static
    // header will not be displayed over the content.
})

export const fetchProduct = (barcode) => {
    return dispatch => {
        dispatch(ui.actions.setLoading(true))
        fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
        .then(res => res.json())
        .then(json => {
            dispatch(products.actions.setProduct(json))
            //dispatch(products.actions.setDose())
            dispatch(ui.actions.setLoading(false))
        })
    }
}