import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct, products } from 'reducers/products'
import { useDispatch } from 'react-redux'
import './scanner.css'

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch  = useDispatch()

  
  return (
    <>
      {!showScanner && (
        <button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </button>
      )}

      {showScanner && (
        <>
        <BarcodeScanner className="scanner" onDetected={(code) => {
          console.log('Got barcode', code)
          setShowScanner(false)
          dispatch(fetchProduct(code))
        }} />
        <button type="button" onClick={() => setShowScanner(false)}>Cancel</button>
        
        {/* <h1>{products.product.product_name_sv}</h1> */}
        </>

      )}
    </>
  )
}