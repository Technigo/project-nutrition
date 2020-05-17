import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../reducers/products'
import { BarcodeScanner } from 'components/BarcodeScanner'
import styled from 'styled-components/macro'

const ScanButton = styled.button`
  padding: 12px;
  background-color: #fff;
  border: 3px #000 solid;
  border-radius: 8px;
  font-family: 'Fredoka One', cursive;
  font-size: 18px;
`

const Camera = styled(BarcodeScanner)`
  width: 80%;
  height: 50%;

  video {
    width: 100%;
    border: 3px #000 solid;
    border-radius: 8px;
  }

  canvas {
    width: 100%;
    height: 0;
  }
`

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  const handleScan = (code) => {
    setShowScanner(false)
    dispatch(fetchProduct(code))
  }

  return (
    <>
      {!showScanner && (
        <ScanButton type='button' onClick={() => setShowScanner(true)}>
          Scan your item
        </ScanButton>
      )}

      {showScanner && (
        <Camera onDetected={handleScan} />
      )}
    </>
  )
}