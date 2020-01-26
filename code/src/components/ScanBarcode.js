import React, { useState } from 'react';
import { BarcodeScanner } from 'components/BarcodeScanner';
import { fetchBarcode } from 'reducers/barcodes';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const ScannerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
  height: 600px;
`;
const ButtonWrapper = styled.div``;

const FloatingButton = styled.button`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #4195fc;
  color: white;
  box-shadow: 4px 4px 4px 4px gray;
  border: none;
  font-size: 18px;
  position: relative;

  ${ButtonWrapper}:hover & {
    background-color: purple;
    color: black;
  }

  ${ButtonWrapper}:active & {
    box-shadow: none;
    border: 1px solid rebeccapurple;
    box-shadow: 4px 4px 30px 4px #0ff;
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

const Scan = styled.p`
  padding: 1em;
  position: absolute;
`;

const Icon = styled.i`
  font-size: 130px;
  position: absolute;
  color: white;
  z-index: 2;
  bottom: 25px;
`;

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {!showScanner && (
        <ScannerContainer>
          <ButtonWrapper>
            <FloatingButton
              className="button"
              type="button"
              onClick={() => setShowScanner(true)}
            >
              {' '}
              <Icon>
                <i class="fas fa-expand"></i>
              </Icon>
              Scan Product
            </FloatingButton>
          </ButtonWrapper>
        </ScannerContainer>
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

/*

  &::before,
  &::after {
    contents: '';
    display: blocks;
    position: absolute;
    background: #fff;
  }

  &::before {
    top: -0.3em;
    bottom: -0.3em;
    left: 1em;
    right: 1em;

    &::after {
      left: 0.3em;
      right: -0.3em;
      top: 1em;
      bottom: 1em;
    }

    ${FloatingButton} & {
      position: relative;
      z-index: 1;
    }
  }
`;
*/
