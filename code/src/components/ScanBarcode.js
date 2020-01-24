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
  height: 100px;
`;

const FloatingButton = styled.button`
  width: 20%;
  height: 40px;
  border-radius: 18px;
  background-color: rebeccapurple;
  color: white;
  box-shadow: 3px 3px 4px gray;
  border: none;
  font-size: 18px;

  ${ButtonWrapper}:hover & {
    background-color: purple;
    color: black;
    box-shadow: 6px 6px 6px 4px gray;
  }

  ${ButtonWrapper}:active & {
    box-shadow: none;
    border: 1px solid rebeccapurple;
  }

  ${ButtonWrapper}:focus & {
    box-shadow: 4px 4px 5px gray;
  }
`;

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {!showScanner && (
        <ButtonWrapper>
          <FloatingButton type="button" onClick={() => setShowScanner(true)}>
            Scan a product
          </FloatingButton>
        </ButtonWrapper>
      )}

      {showScanner && (
        <BarcodeScanner
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
