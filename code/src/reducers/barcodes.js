import { createSlice } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'
import { ScanBarcode } from 'components/ScanBarcode'
// import { BarcodeScanner } from 'components/BarcodeScanner'




export const barcodes = createSlice({
    name: 'barcodes',
    initialState: {
        items: []
    },

    //***** here is the Actions *****/
    reducers: {
        setBarcodes: (state, action) => {
            console.log(state)
            console.log(action)
            state.items = action.payload
            // state.items.push({ id: state.code, text: action.payload })
        }

    }
})
/******* The Thunk **********/
// In the export const fetchBarcodes = ( ****here the barcode id should be I think****) =>
export const fetchBarcodes = (code) => {
    return (dispatch) => {
        dispatch(ui.actions.setloading(true))
        // fetch(`https://world.openfoodfacts.org/api/v0/product/[barcode].json`)
        fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)

            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                dispatch(barcodes.actions.setBarcodes(json))
                dispatch(ui.actions.setLoading(false))
            })

    }
}
