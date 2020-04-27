import React, { useState } from 'react';
import styled from "styled-components";
import { BarcodeScanner } from 'components/BarcodeScanner';
import { useDispatch, useSelector } from "react-redux";
import { onDetected } from "reducers/products";
import { DisplayFoodFacts } from "components/DisplayFoodFacts";
import { ShowLoader } from "components/ShowLoader";


export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.ui.isLoading);
 
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
          scan
        </Button>
      )}
    </ScanSection>
  );
};

const ScanSection = styled.section`
display:flex;
justify-content: center;
flex-direction: column;
margin-top: 20px;
`

const Button = styled.button`
font-size: 60px;
font-family: monospace;
color: #4CAF50;
text-shadow: -3px -3px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, 1px 1px 0 #000;
margin: auto;
margin-bottom: 12px;
border-radius: 10px;
background: #fafff1;
border: 2px dashed #8db55f;

@media (max-width: 668px) {
  font-size: 30px;
  text-shadow: -2px -2px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, 1px 1px 0 #000;
}
`