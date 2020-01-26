import React from 'react';
import { BarcodeScanner } from 'components/BarcodeScanner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../reducers/food';
import { scanner } from 'reducers/scanner';
import styled from 'styled-components';
// import './barcodeScanner.css';

const StyledScanBarcode = styled.div`
  width: 100%;
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

// className="scanner"

export const ScanBarcode = () => {
  const showScanner = useSelector(state => state.scanner.showScanner);
  const dispatch = useDispatch();

  return (
    <StyledScanBarcode visible={showScanner}>
      {showScanner && (
        <BarcodeScanner
          onDetected={code => {
            console.log('Got barcode', code);
            dispatch(scanner.actions.setShowScanner(false));
            dispatch(fetchProduct(code));
          }}
        />
      )}
    </StyledScanBarcode>
  );
};
