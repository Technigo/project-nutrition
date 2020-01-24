import React from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from 'reducers/products'
import { ui } from 'reducers/ui'

export const ScanBarcode = () => {
  const isScanning = useSelector((state) => state.ui.isScanning)

  const dispatch = useDispatch()

  return (
    <>
      {!isScanning && (
        <button
          className='scanning-button'
          type='button'
          onClick={() => dispatch(ui.actions.setScanning(true))}>
          Start scanning
        </button>
      )}

      {isScanning && (
        <BarcodeScanner
          onDetected={(code) => {
            dispatch(ui.actions.setScanning(false))
            dispatch(fetchProduct(code))
          }}
        />
      )}
    </>
  )
}
