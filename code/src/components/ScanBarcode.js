import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProduct } from 'reducers/foodproducts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      {!showScanner && (
        <button type='button' onClick={() => setShowScanner(true)}>
          Show scanner  <FontAwesomeIcon icon="barcode" />
        </button>
      )}

      {showScanner && (
        <button type='button' onClick={() => setShowScanner(false)}>
          Hide scanner <FontAwesomeIcon icon="barcode" />
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