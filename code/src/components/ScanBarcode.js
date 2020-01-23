import React, { useState } from 'react';
import { BarcodeScanner } from 'components/BarcodeScanner';
import { useDispatch } from 'react-redux';
import { fetchProduct } from '../reducers/food';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledScanBarcode = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 2rem; */
  /* border: 1px solid orange; */
  margin: 1rem;
`;

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false);
  const dispatch = useDispatch();

  return (
    <StyledScanBarcode>
      {!showScanner && (
        <Button type="button" onClick={() => setShowScanner(true)}>
          Scan product
        </Button>
      )}

      {showScanner && (
        <BarcodeScanner
          onDetected={code => {
            console.log('Got barcode', code);
            setShowScanner(false);
            dispatch(fetchProduct(code));
          }}
        />
      )}
    </StyledScanBarcode>
  );
};
