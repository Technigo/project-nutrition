import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../reducers/products'
import 'src/../barCode.css'

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
        <div className="scanner">
          <BarcodeScanner
            onDetected={(code) => {
              console.log('Got barcode', code)
              setShowScanner(false)
              dispatch(fetchProducts(code))
            }} />
        </div>
      )}
    </>
  )
}