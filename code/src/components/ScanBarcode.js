import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BarcodeScanner } from './BarcodeScanner'
import { fetchProduct } from '../reducers/products'

export const ScanBarcode = () => {
  const dispatch = useDispatch()
  const [showScanner, setShowScanner] = useState(false)

  return (
    <>
      {!showScanner && (
        <button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </button>
      )}
      {showScanner && (
        <BarcodeScanner onDetected={(code) => {
          setShowScanner(false)
          console.log('Got barcode', code)
          dispatch(fetchProduct(code))
        }} />
      )}
    </>
  )
}