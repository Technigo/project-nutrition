import React from "react"
import { useDispatch } from 'react-redux'
import { nutrition } from '../reducers/nutrition'
import { BarcodeScanner } from "./BarcodeScanner";


export const SetData = ({ setBarcode, setShowScanner }) => {
    const dispatch = useDispatch()
    const onDetected = (code) => {
        console.log(`Code: ${code}`);
        fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
            .then((data) => data.json())
            .then((json) => {
                if (json.product) {
                    if (json.product.product_name) {
                        setBarcode(code)
                        setShowScanner(false)
                    } else { console.log('no product name') }

                } else { console.log('no product') }
            });
    };

    return <BarcodeScanner onDetected={onDetected} />
}