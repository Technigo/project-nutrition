import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProduct } from 'reducers/products'
import styled from 'styled-components'

const Button = styled.button`
  background: yellow;
  display: inline-block;
  border: none;
  padding: 20px;
  width: 70px;
  height: 70px;
  margin: 10px;
  transition: all 0.5s;
  cursor: pointer;
`

const CameraContainer = styled.div`
display: flex;
margin-left: 600px;
`

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      {!showScanner && (
        <Button type='button' onClick={() => setShowScanner(true)}>
          Show scanner
        </Button>
      )}

      {showScanner && (
        <CameraContainer>
        <BarcodeScanner
          className='scanner'
          onDetected={code => {
            setShowScanner(false)
            dispatch(fetchProduct(code))
          }}
        />
        </CameraContainer>
      )}
    </>
  )
}