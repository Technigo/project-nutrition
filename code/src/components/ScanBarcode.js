import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { getProduct } from 'reducers/productsReducer'
import styled from 'styled-components';
import { Product } from 'components/Product'

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <Section>
      <Wrapper>
        {!showScanner && (
          <Ean src="../assets/ean.jpg" alt="ean" />
        )}
        {showScanner && (
          <BarcodeScanner onDetected={(code) => {
            setShowScanner(false)
            dispatch(getProduct(code))
          }} />
        )}
        <Product />
      </Wrapper>

      {!showScanner && (
        <ScanButton type="button" onClick={() => setShowScanner(true)}>
          Scan barcode
        </ScanButton>
      )}

      {/* {showScanner && (
        <ScanButton type="button" onClick={() => setShowScanner(false)}>
          Close camera
        </ScanButton>
      )} */}
    </Section>
  )
}

const ScanButton = styled.button`
  width: 200px;
  height: 50px;
  font-family: 'Roboto Mono', monospace;
  color: black;
  background: transparent;
  border: 2px solid black;
  padding: 10px 20px;
  font-size: 16px;

  &:hover{
    box-shadow: 4px 4px #FF0000;
  }
`

const Wrapper = styled.div`
  width: 320px;
  height: 240px; 
  border-radius: 10px;
  border: 2px solid black;
  margin: 30px;

@media (min-width: 667px){
  width: 640px;
  height: 480px;
}
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Ean = styled.img`
  width: 200px;
  height: 100px;
  margin: 70px 0;
 
@media (min-width: 667px){
  margin: 200px 0;
}
`

