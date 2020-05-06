import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProduct } from 'reducers/foodproducts'

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()
  const scannedresult = useHistory()

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
            scannedresult.push('/scannedresult')
          }}
        />
      )}
    </>
  )
}