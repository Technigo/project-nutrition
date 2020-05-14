import React, { useState } from 'react'
import { BarcodeScanner } from './BarcodeScanner'
import { fetchProduct } from 'reducers/productStore'
import { useDispatch } from "react-redux"
import styled from 'styled-components'


const ButtonText = styled.p`
    font-size:48px;
`
const Emojis = styled.span`
    font-size:121px;
    @media (max-width: 375px){
      font-size:72px;
    }
`
const ShowScanner = styled.button`
    background:transparent;
    border: none;
    cursor:pointer;
    outline:none;
    
`
const ButtonContainer = styled.div`
    margin-top:40%;
    outline:none;
    font-size:42px;
    width: 600px;
`

const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
`
const Scanner = styled.div`
    max-width: 800px;
    margin-left:auto;
    margin-right:auto;
  `


export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  const handleScan = (code) => {
    dispatch(fetchProduct(code))
    setShowScanner(false)
  }

  return (
    <>
      {!showScanner && (
        <Container>
          <ShowScanner type="button" onClick={() => setShowScanner(true)}>
            <ButtonContainer><Emojis>click→📷</Emojis></ButtonContainer>
          </ShowScanner>
        </Container>
      )}
      <Scanner>
        {showScanner && (
          <BarcodeScanner
            className={'scanner'}
            onDetected={handleScan}
          />

        )}
      </Scanner>
    </>
  )
}