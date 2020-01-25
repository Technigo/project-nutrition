import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"


import { fetchProduct } from 'reducers/products'

import { BarcodeScanner } from 'components/BarcodeScanner'
import { LoadingIndicator } from './LoadingIndicator'
import "./scanbarcode.css"



export const ScanBarcode = () => {
  const dispatch = useDispatch()
  const showScanner = useSelector((state) => state.ui.showScanner)

  return (
    <div>
      {showScanner &&
        <div className="scanbarcode-container">

          <BarcodeScanner
            className="scanner"
            onDetected={(code) => {
              console.log('Got barcode', code)
              // setShowScanner(false)
              dispatch(fetchProduct(code))
            }}
          />

          <LoadingIndicator />

        </div>
      }
    </div>
  )
}
