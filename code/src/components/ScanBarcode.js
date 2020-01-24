import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProducts } from 'reducers/products'

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
        <BarcodeScanner onDetected={(code => {
          console.log('Got barcode', code)
          setShowScanner(false)
          dispatch(fetchProducts(code))
        })} />
      )}
    </>
  )
}