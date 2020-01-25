import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProducts } from 'reducers/products'

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  const test = () => {
    dispatch(fetchProducts(3045140105502))
  }

  return (
    <>
      {!showScanner && (
        <button type="button" onClick={() => test()}>
                    Show scanner
        </button>
      )}

      {showScanner && (
        <BarcodeScanner onDetected={(code) => {
          console.log('Got barcode', code)
          setShowScanner(false)
          dispatch(fetchProducts(3045140105502))
        }} />
      )}
    </>
  )
}