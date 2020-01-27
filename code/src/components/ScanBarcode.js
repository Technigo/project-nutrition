import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProduct } from 'reducers/products'
import './scanBarcode.css'


export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <>

      <section className="scanSection">
        <h1>Are You Hungry?</h1>
        <h3>Find out were you can by more - scan you bar code</h3>
      {!showScanner && (
        <button type="button" className="startScanning" onClick={() => setShowScanner(true)}>
          Start scanner >>
        </button>
      )}

      {showScanner && (
        <BarcodeScanner className="scanner" onDetected={(code) => {
          console.log('Got barcode', code)
          setShowScanner(false)
          dispatch(fetchProduct(code))
        }} />
      )}
      </section>
    </>
  )
}