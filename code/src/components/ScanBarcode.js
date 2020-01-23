import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProduct } from ' reducers/products'

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      {!showScanner && (
        <button type='button' onClick={() => setShowScanner(true)}>
          Show scanner
        </button>
      )}

      {showScanner && (
        <BarcodeScanner 
        // Damien had parenthesis around code down below
          onDetected={code => {
            console.log('Got barcode', code)
              setShowScanner(false)
              //fetching the barcode from the reducer:products
              dispatch(fetchProduct(code))
        }} />
      )}
    </>
  )
}
