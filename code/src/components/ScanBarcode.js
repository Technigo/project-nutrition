import React, { useState } from 'react'
import { BarcodeScanner } from './BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProduct } from 'reducers/products'
import styled from 'styled-components';


export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      {showScanner &&
        <BarcodeScanner onDetected={(code) => {
          console.log('Got barcode', code)
          setShowScanner(false)
          dispatch(fetchProduct(code))
        }}
        />
      }

      {!showScanner &&
        <StyledButton onClick={() => setShowScanner(true)}>Scan Barcode</StyledButton>
      }
    </>
  )
}

const StyledButton = styled.button`
  margin: 50px;
  height: 70px;
  border-radius: 18px;
  box-shadow: 10px 5px #203240;
  font-family: "Cabin", sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  background-color: #91ccec;
  outline: none;
  border: none;
`;