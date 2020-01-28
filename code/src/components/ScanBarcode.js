import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct } from 'reducers/products'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import './barcodeScanner.css'


export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      {!showScanner && (
        <div className="background">
          <button className="button" type="button" onClick={() => setShowScanner(true)}>
            SHOW SCANNER
        </button>
        </div>
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