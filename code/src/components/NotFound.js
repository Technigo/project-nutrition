import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct } from 'reducers/products'
import { useDispatch } from 'react-redux'


export const NotFound = () => {
    const [showScanner, setShowScanner] = useState(false)
    const dispatch  = useDispatch()

    return (
    <>
        {!showScanner && (
            <>
                <h1>Product not found :( </h1>
                <p>Please try with another barcode</p>
                <button type="button" onClick={() => setShowScanner(true)}>
                Scan again
                </button>
            </>
       )}

        {showScanner && (
            <>
                <BarcodeScanner onDetected={(code) => {
                 console.log('Got barcode', code)
                    setShowScanner(false)
                    dispatch(fetchProduct(code))
                    }}
                />
                <button onClick={console.log('hej')}>Cancel
                </button>
            </>
        )}
    </>
  )}