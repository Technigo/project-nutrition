import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProduct } from 'reducers/products'

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      {!showScanner && (
        <button
          className='scanning-button'
          type='button'
          onClick={() => setShowScanner(true)}>
          Start scanning
        </button>
      )}

      {showScanner && (
        <BarcodeScanner
          onDetected={(code) => {
            // console.log('Got barcode', code)
            setShowScanner(false)
            dispatch(fetchProduct(code))
          }}
        />
      )}
    </>
  )
}
