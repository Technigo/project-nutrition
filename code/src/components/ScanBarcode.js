import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { BarcodeScanner } from './BarcodeScanner'
import { fetchProduct } from 'reducers/products'

// STYLED COMPONENTS
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`
const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #721817;
  cursor: pointer;
  margin-top: 20px;
  padding: 20px 15px;
  background: #f1f1f1;
  border: 3px solid #721817;
  border-radius: 6px;
  transition: 0.4s;
  &:hover {
    background: #D8C0BF;
  }
`
// COMPONENT SCANBARCODE
export const ScanBarcode = () => {

  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()
  // const OATLY_CODE = 7394376615979 // If the scanning doesn't work, call fetchProduct with this instead
  const OTHER_CODE = 7318690013402 // If the scanning doesn't work, call fetchProduct with this instead

  // To start the web cam
  const handleShowScan = () => {
    // setShowScanner(true)
    dispatch(fetchProduct(OTHER_CODE))
  }

  // To fetch the product you scan
  const handleScan = (code) => {
    console.log('Got barcode:', code)
    setShowScanner(false)
    dispatch(fetchProduct(code))
  }

  return (
    <Wrapper>
      {!showScanner &&
        <Button onClick={handleShowScan}>Scan your product</Button>
      }
      {showScanner &&
        <BarcodeScanner onDetected={handleScan} />
      }
    </Wrapper>
  )
}
