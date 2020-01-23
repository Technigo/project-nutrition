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
  /* padding: 2rem; */
  /* border: 1px solid orange; */
  margin: 1rem;
`
const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  margin-top: 20px;
  padding: 20px 15px;
  background: #f1f1f1;
  border: 3px solid #721817;
  border-radius: 6px;
  color: #721817;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background: #D8C0BF;
  }
`
// COMPONENT SCANBARCODE
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
