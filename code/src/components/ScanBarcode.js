import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BarcodeScanner } from './BarcodeScanner'
import { fetchProduct } from '../reducers/products'
import { Button } from './Button'
import './scanbarcode.css'

export const ScanBarcode = () => {
  const dispatch = useDispatch()
  const [showScanner, setShowScanner] = useState(false)

  return (
    <>
      <section className="scanner-section">
        {!showScanner && (
          <Button
            onClick={() => setShowScanner(true)}
            text="Show scanner" />
        )}
        {showScanner && (
          <BarcodeScanner className="scanner" onDetected={(code) => {
            setShowScanner(false)
            console.log('Got barcode', code)
            dispatch(fetchProduct(code))
          }} />
        )}
      </section>
    </>
  )
}