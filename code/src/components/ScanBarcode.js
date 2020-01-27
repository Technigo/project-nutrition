import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct } from 'reducers/products'


export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
  <>
    {!showScanner && ( 
      <button type='button' onClick={() => setShowScanner(true)}>
        Show Scanner
      </button>  
    )}

    {showScanner && (
      <BarcodeScanner
        onDetected={code => {
          console.log('got barcode', code)
          setShowScanner(false)
          dispatch(fetchProduct(code))
        }}
      />  
    )}
  </>   
  )
}