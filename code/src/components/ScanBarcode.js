import React, { useState } from 'react';
import { BarcodeScanner } from 'components/BarcodeScanner';
import { fetchBarcode } from 'reducers/barcodes';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const IntroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items; center;
  margin-bottom: 20px;
`;

const IntroTitle = styled.h1`
  text-align: center;
`;

const IntroText = styled.h3`
  text-align: center;
`;

const ScannerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  height: 400px;
`;
const ButtonWrapper = styled.div``;

const FloatingButton = styled.button`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #33629a;
  color: white;
  box-shadow: 4px 4px 4px 4px gray;
  border: none;
  font-size: 18px;
  position: relative;

  ${ButtonWrapper}:hover & {
    background-color: #4e97ec;
    color: white;
    box-shadow: 4px 4px 30px 4px #3072c1;
  }

  ${ButtonWrapper}:active & {
    box-shadow: none;
    border: 1px inset white;
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
          <IntroSection>
            <IntroTitle>Are you a food allergicer?</IntroTitle>
            <IntroText>Scan your products before you eat</IntroText>
          </IntroSection>

          <ButtonWrapper>
            <FloatingButton
              className="button"
              type="button"
              onClick={() => setShowScanner(true)}
            >
              {' '}
              <Icon>
                <i className="fas fa-expand"></i>
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
            dispatch(fetchBarcode(47694903));
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
