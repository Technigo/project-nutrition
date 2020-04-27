import React, { useState } from "react";
import styled from "styled-components";
import { BarcodeScanner } from "components/BarcodeScanner";
import { useDispatch, useSelector } from "react-redux";
import { onDetected } from "reducers/products";
import { DisplayFoodFacts } from "components/DisplayFoodFacts";
import { ShowLoader } from "components/ShowLoader";
import { keyframes } from "styled-components";

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [again, setAgain] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.ui.isLoading);

  const handleOnClick = () => {
    setShowScanner(true);
    setAgain(true);
  };

  return (
    <ScanSection>
      {showScanner && (
        <BarcodeScanner
          onDetected={(code) => {
            setShowScanner(false);
            dispatch(onDetected(code));
          }}
        />
      )}
      {isLoading && <ShowLoader />}
      {!isLoading && !showScanner && <DisplayFoodFacts />}
      {!showScanner && (
        <Button type="button" onClick={() => handleOnClick()}>
          {again ? "again?" : "scan"}
        </Button>
      )}
    </ScanSection>
  );
};

const ScanSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #fafff1;
`;

const flash = keyframes`
0% {
  box-shadow: -8px -8px 0 #4caf50, -9px -9px 0 #000,
    8px 8px 0 #4caf50, 9px 9px 0 #000;
}
25% {
  box-shadow: -16px -16px 0 #337336,
    -17px -17px 0 #000, 16px 16px 0 #337336, 17px 17px 0 #000;
50% {
  box-shadow: -8px -8px 0 #4caf50, -9px -9px 0 #000, -16px -16px 0 #337336,
    -17px -17px 0 #000, -24px -24px 0 #163318, -25px -25px 0 #000,
    8px 8px 0 #4caf50, 9px 9px 0 #000, 16px 16px 0 #337336, 17px 17px 0 #000,
    24px 24px 0 #163318, 25px 25px 0 #000;
}
75% {
  box-shadow: -8px -8px 0 #4caf50, -9px -9px 0 #000, -16px -16px 0 #337336,
    -17px -17px 0 #000,
    8px 8px 0 #4caf50, 9px 9px 0 #000, 16px 16px 0 #337336, 17px 17px 0 #000;
}
100% {
  box-shadow: -8px -8px 0 #4caf50, -9px -9px 0 #000,
  8px 8px 0 #4caf50, 9px 9px 0 #000;
}
`;

const Button = styled.button`
  font-size: 60px;
  font-family: "Bungee Shade", cursive;
  color: #4caf50;
  text-shadow: -3px -3px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
    1px 1px 0 #000;
  margin: 25px auto;
  border: none;
  border-radius: 5px;
  border: 2px dashed #00000000;
  box-shadow: -8px -8px 0 #4caf50, -9px -9px 0 #000, 8px 8px 0 #4caf50,
    9px 9px 0 #000;
  background: #fafff1;
  animation: ${flash} 3s linear infinite;
  box-sizing: border-box;
  @media (max-width: 668px) {
    font-size: 30px;
    text-shadow: -2px -2px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      1px 1px 0 #000;
  }
`;
