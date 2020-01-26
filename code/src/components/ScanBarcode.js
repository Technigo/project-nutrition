import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProduct } from 'reducers/products'
import styled from "styled-components/macro";

const Button = styled.button`
  color: white;
  background-color: grey;
  font-size: 1rem;
  padding: 15px;
  border-radius: 20px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1rem;
  cursor: pointer;
  margin-top: 380px;
  border: none;
`


export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  const testCode = 7340001803020

  return (
    <div className="scan-btn-container">
      {/* The line below will fetch a static product (Blueberry Cake) at startup (for testing) */}
      {dispatch(fetchProduct('code'))}

      {!showScanner && (
        <Button type="button" onClick={() => setShowScanner(true) }>
          Show scanner
        </Button>
      )}

      {showScanner && (
        <BarcodeScanner className="scanner" onDetected={(code) => {
          console.log('Got barcode', code)
          setShowScanner(false)
          dispatch(fetchProduct(code))
        }} />
      )}
    </div>
  )
}