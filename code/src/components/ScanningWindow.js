import React from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch, useSelector } from 'react-redux'
import { scanner } from 'reducers/scanner'
import { fetchProduct } from '../reducers/food'

export const ScanningWindow = () => {
  const showScanner = useSelector((state) => state.scanner.showScanner)
  const dispatch = useDispatch()

  return (
    <div className="camera" visible={showScanner}>
      {showScanner && (
        <BarcodeScanner
          onDetected={(code) => {
            console.log('Got barcode', code)
            dispatch(scanner.actions.setShowScanner(false))
            dispatch(fetchProduct(code))
          }} />
      )}
    </div>
  )
}