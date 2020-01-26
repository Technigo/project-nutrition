import React from 'react'
import { useHistory } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { fetchProduct } from 'reducers/products'

import { BarcodeScanner } from 'components/BarcodeScanner'
import { LoadingIndicator } from './LoadingIndicator'
import './css/scanbarcode.css'


export const ScanBarcode = () => {
  const dispatch = useDispatch()
  const showScanner = useSelector((state) => state.ui.showScanner)
  let history = useHistory()

  return (
    <div className="scan-container">
      {showScanner &&
        <div className="scanbarcode-container">

          <BarcodeScanner
            className="scanner"
            onDetected={(code) => {
              console.log('Got barcode', code)
              dispatch(fetchProduct(code))
              history.push("/product")
            }}
          />

          <LoadingIndicator />

        </div>
      }
      {!showScanner &&
        <div className="scanbarcode-container">
          <p> Scan a product to find out its nutrients</p>
          <img src="assets/barcode.png" />
        </div>
      }
    </div>
  )
}
