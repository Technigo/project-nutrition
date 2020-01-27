import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { BarcodeScanner } from './BarcodeScanner'
import { products, fetchProduct } from 'reducers/products'

// STYLED COMPONENTS
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`
const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  background: #CC2936;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  margin: 10px 0;
  border: none;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  transition: 0.4s;
  &:hover {
    opacity: 0.7;
  }
`
// COMPONENT SCANBARCODE
export const ScanBarcode = () => {

  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()
  // const OATLY_CODE = 7394376615979 // If the scanning doesn't work, call fetchProduct with this instead
  // const OTHER_CODE = 7318690013402 // If the scanning doesn't work, call fetchProduct with this instead

  // To start the web cam
  const handleShowScan = () => {
    dispatch(products.actions.resetProduct())
    setShowScanner(true)
  }

  // To use hardcoded product
  // const handleShowScan = () => {
  //   dispatch(fetchProduct(OATLY_CODE))
  // }

  // To fetch the product you scan
  const handleScan = (code) => {
    console.log('Got barcode:', code)
    setShowScanner(false)
    dispatch(fetchProduct(code))
  }

  return (
    <Wrapper>
      {!showScanner &&
        <Button onClick={handleShowScan}>Start scanner</Button>
      }
      {showScanner &&
        <BarcodeScanner onDetected={handleScan} />
      }
    </Wrapper>
  )
}
