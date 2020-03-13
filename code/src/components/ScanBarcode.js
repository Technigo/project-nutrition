import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProduct } from 'reducers/products'
import styled from 'styled-components'

const Wrapper = styled.section`

`

const Button = styled.button`
  display: flex;
  border: none;
  justify-content: center;
  width: 150px;
  height: 70px;
  margin: 10px;
  transition: all 0.5s;
  cursor: pointer;
  border-radius: 31px;
  background: #FF7F11;
  box-shadow:  50px 50px 100px #b85b0c, 
             -50px -50px 100px #ffa316;
`

const CameraContainer = styled.div`
display: flex;
margin-left: 600px;
`

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <Wrapper>
      {!showScanner && (
        <Button type='button' onClick={() => setShowScanner(true)}>
          Open camera to scan
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
    </Wrapper>
  )
}