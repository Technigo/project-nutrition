import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct } from 'reducers/products'
import styled from 'styled-components'



export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      {!showScanner && (
        <Button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </Button>
      )}

      {showScanner && (
        <BarcodeScanner onDetected={(code) => {
          console.log('Got barcode', code)
          setShowScanner(false)
          dispatch(fetchProduct(code))
        }} />
      )}
    </>
  )
}

const Button = styled.button`
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: 50px;
padding: 5px 10px;
margin: 10px 0px;
background: #E0A2B3;
border: none;
box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2), 0px 3px 3px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
`