import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProduct } from 'reducers/products'
import styled from "styled-components/macro";

const Button = styled.button`
  color: white;
  background-color: #28a4a4;
  font-size: 1rem;
  padding: 15px;
  border-radius: 15px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1rem;
  cursor: pointer;
  margin-top: 120px;
  border: none;
  position: absolute;
  border: 1px solid black;
  opacity: 0.8;
  :hover {opacity: 1;}
`;

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  const testCode = 7340001803020
  const testCodeNonWorking = 7340001803123

  return (
    <div className="scan-btn-container">
      {/* Change the 'code' in the line below to 'testCode' to fetch a static product (Blueberry Cake) at startup (for testing) */}
      {dispatch(fetchProduct('code'))}

      {!showScanner && (
        <Button type="button" onClick={() => setShowScanner(true) }>
         scan item >>
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