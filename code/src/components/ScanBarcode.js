import React, { useState } from 'react'
import { BarcodeScanner } from './BarcodeScanner'
import { fetchProduct } from 'reducers/products'

import { useDispatch } from "react-redux"
import styled from "styled-components/macro"


const testCode = 5701073062265
const testCode2 = 5000184321064

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  const handleScan = (code) => {
    console.log('Got barcode:', code)
    setShowScanner(false)
    dispatch(fetchProduct(code))
  }

  return (
    <>
      {!showScanner && (
        <ShowScannerButton type="button" onClick={() => setShowScanner(true)}>
          Show scanner !
        </ShowScannerButton>
      )}

      {showScanner && (
        <BarcodeScanner
          className={"scanner"}
          onDetected={handleScan} />
      )}
    </>
  )
}

const ShowScannerButton = styled.button`
background-color: white;
color: black;
font-family: 'ZCOOL QingKe HuangYou', cursive;
font-size: 26px;
border: 1px solid black;
border-radius: 10px;
margin: 10px;
padding: 10px 18px;
`