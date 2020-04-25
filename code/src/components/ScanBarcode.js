import React, { useState } from 'react'
import { BarcodeScanner } from './BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProduct } from 'reducers/products'


export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      {showScanner &&
        <BarcodeScanner onDetected={(code) => {
          console.log('Got barcode', code, json.allergens_hierarchy)
          setShowScanner(false)
          dispatch(fetchProduct(code))
        }}
        />
      }

      {!showScanner &&
        <button onClick={() => setShowScanner(true)}>
          Scan product
        </button>
      }

    </>
  )
}