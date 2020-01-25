import React, { useState } from 'react'
import { useDispatch } from "react-redux"


import { fetchProduct } from 'reducers/products'

import { BarcodeScanner } from 'components/BarcodeScanner'
import { LoadingIndicator } from './LoadingIndicator'
import "./scanbarcode.css"



export const ScanBarcode = () => {
  const dispatch = useDispatch()
  const [showScanner, setShowScanner] = useState(false)

  return (
    <div className="scanbarcode-container">
      {!showScanner && (
        <button className="showscanner-btn" type="button" onClick={() => setShowScanner(true)}>
          Show Scanner
        </button>
      )}

      {showScanner && (
        <BarcodeScanner
          className="scanner"
          onDetected={(code) => {
            console.log('Got barcode', code)
            setShowScanner(false)
            dispatch(fetchProduct(code))
          }} />

      )}
      <LoadingIndicator />

    </div>
  )
}