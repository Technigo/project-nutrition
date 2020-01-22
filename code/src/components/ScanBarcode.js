import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { BarcodeScanner } from './BarcodeScanner'
import { fetchProduct } from 'reducers/products'


export const ScanBarcode = () => {

  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  // To start the web cam
  const handleShowScan = () => {
    setShowScanner(true)
  }

  // To fetch the product you scan
  const handleScan = (code) => {
    console.log('Got barcode:', code)
    setShowScanner(false)
    dispatch(fetchProduct(code))
  }

  return (
    <>
      {!showScanner &&
        <Button onClick={handleShowScan}>Scan your product</Button>
      }
      {showScanner &&
        <BarcodeScanner onDetected={handleScan} />
      }
    </>
  )
}

const Button = styled.button`
  padding: 10px;
  background: #2A2B2A;
  border: 2px solid #fff;
  border-radius: 6px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background: #3D3E3D;
  }
`