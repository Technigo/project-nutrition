import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProduct } from 'reducers/foodproducts'

const OATLY_CODE = 7394376615979 // If the scanning doesn't work, call fetchProduct with this instead

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
        <button type='button' onClick={() => setShowScanner(false)}>
          Hide scanner
        </button>
      )}

      {showScanner && (
        <BarcodeScanner
          className='scanner'
          onDetected={code => {
            console.log('Got barcode', code)
            setShowScanner(false)
            dispatch(fetchProduct(code))
          }}
        />
      )}
    </>
  )
}