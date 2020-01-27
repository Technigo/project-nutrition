import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct } from 'reducers/products'
import { useDispatch } from 'react-redux'
import { Image } from './Image'

import './button.css'
import './scanner.css' 




export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      {!showScanner && (
        <div className="button-container">
          <Image />
          <button className="button-style" type="button" onClick={() => setShowScanner(true)}>
          Show scanner
          </button>
        </div>
      )}


      {showScanner && (
        <div className="camera-container">
        <BarcodeScanner 
          className="scanner"
          onDetected={(code) => {
           console.log('Got barcode', code)
            setShowScanner(false)
            dispatch(fetchProduct(code))
        }} />
        <button className="button-cancel" type="button" onClick={() => setShowScanner(false)}>
        Cancel
        </button>
        </div>
      )}
    </>
  )
}