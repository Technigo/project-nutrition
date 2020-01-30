import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct } from 'reducers/products'
import { useDispatch } from "react-redux"
import './scanBarcode.css'

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      {!showScanner && (

        <button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </button>

      )}

      {showScanner && (
        <BarcodeScanner onDetected={(code) => {
          console.log('Got barcode', code)
          setShowScanner(false)
          //dispatch(fetchProduct(code))
          dispatch(fetchProduct(7394376616037))
        }}
        />
      )}
    </>
  )
}