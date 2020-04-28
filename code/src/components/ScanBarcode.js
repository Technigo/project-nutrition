import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { getProduct } from 'reducers/productsReducer'


export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      {showScanner && (
        <BarcodeScanner onDetected={(code) => {
          console.log('Got barcode', code)
          setShowScanner(false)
          dispatch(getProduct(code))
        }} />
      )}

      {!showScanner && (
        <button type="button" onClick={() => setShowScanner(true)}>
          Scan barcode
        </button>
      )}

      {showScanner && (
        <button type="button" onClick={() => setShowScanner(false)}>
          Close camera
        </button>
      )}
    </>
  )
}
