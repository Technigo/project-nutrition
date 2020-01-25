import React, { useState } from 'react';
import { BarcodeScanner } from 'components/BarcodeScanner';
import { fetchBarcode } from 'reducers/barcodes';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
  height: 500px;
`;

const FloatingButton = styled.button`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #4195fc;
  color: white;
  box-shadow: 4px 4px 30px 4px #0ff;
  border: none;
  font-size: 18px;

  ${ButtonWrapper}:hover & {
    background-color: purple;
    color: black;
    box-shadow: 4px 4px 4px 4px gray;
  }

  ${ButtonWrapper}:active & {
    box-shadow: none;
    border: 1px solid rebeccapurple;
  }

  ${ButtonWrapper}:focus & {
    box-shadow: 4px 4px 5px gray;
    outline: none;
    border: 1px solid #4195fc;
    /* create a BIG glow */
    box-shadow: 0px 0px 4px #4195fc;
    -moz-box-shadow: 0px 0px 4px #4195fc;
    -webkit-box-shadow: 0px 0px 4px #4195fc;
  }
`;

const BarcodeImage = styled.img`
  color: black;
`;

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {!showScanner && (
        <ButtonWrapper>
          <BarcodeImage src="./assets/scan.svg"></BarcodeImage>
          <FloatingButton type="button" onClick={() => setShowScanner(true)}>
            Scan Product
          </FloatingButton>
        </ButtonWrapper>
      )}

      {showScanner && (
        <BarcodeScanner
          className="scanner"
          onDetected={code => {
            console.log('Got barcode', code);
            setShowScanner(false);
            dispatch(fetchBarcode(code));
          }}
        />
      )}
    </>
  );
};
