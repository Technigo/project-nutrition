import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import styled from "styled-components"

const Button = styled.button`
padding: 15px;
font-size: 1rem;
color: red;
border: solid 1px orange;
margin: 50px;
&:hover{
    color:orange;
    border: solid 2px orange
}
`

export const ScanBarcodeBtn = () => {
  const [showScanner, setShowScanner] = useState(false)
  return (
    <>
      {!showScanner && (
        <Button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </Button>
      )}
      {showScanner && (
        <>
          <BarcodeScanner onDetected={(code) => {
            console.log('Got barcode', code)
            setShowScanner(false)
          }} />
        </>
      )}
    </>
  )
}

