import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct } from 'reducers/products'
import { useDispatch } from 'react-redux'

import './button.css' 




export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      {!showScanner && (
        <div className="button-container">
          <button className="button-style" type="button" onClick={() => setShowScanner(true)}>
          Show scanner
          </button>
        </div>
      )}

      {showScanner && (
        <BarcodeScanner 
          onDetected={(code) => {
           console.log('Got barcode', code)
            setShowScanner(false)
            dispatch(fetchProduct(code))
        }} />
      )}
    </>
  )
}