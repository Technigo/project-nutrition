import React, { useState } from 'react';
import styled from "styled-components";
import { BarcodeScanner } from 'components/BarcodeScanner';
import { useDispatch, useSelector } from "react-redux";
import { onDetected } from "reducers/products";
import { DisplayFoodFacts } from "components/DisplayFoodFacts";
import { ShowLoader } from "components/ShowLoader";


export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.ui.isLoading)
 
  return (
    <ScanSection>
     {showScanner && (
        <BarcodeScanner onDetected={(code) => {
          setShowScanner(false)
          dispatch(onDetected(code))
        }} />
      )}
      {isLoading && <ShowLoader/>}
      {!isLoading && <DisplayFoodFacts/>}
      {!showScanner && (
        <Button type="button" onClick={() => setShowScanner(true)}>
          Scan
        </Button>
      )}
    </ScanSection>
  )
}

const ScanSection = styled.section`
display:flex;
justify-content: center;
flex-direction: column;
margin-top: 20px;
`

const Button = styled.button`
font-size: 40px;
font-family: 'Bungee Shade', cursive;
color: #576329;

height: 143px;
width: 143px;

margin: auto;

border-radius: 50%;
background: #fbf699;
border: 2px dashed #9ab148;
`