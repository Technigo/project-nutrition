import React from 'react';
import { BarcodeScanner } from 'components/BarcodeScanner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../reducers/food';
import { scanner } from 'reducers/scanner';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledScanBarcode = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 2rem; */
  /* border: 1px solid orange; */
  margin-top: 3rem;
`;

export const ScanBarcode = () => {
  const showScanner = useSelector(state => state.scanner.showScanner);
  // const [showScanner, setShowScanner] = useState(false);
  const dispatch = useDispatch();

  return (
    <StyledScanBarcode>
      {/* {!showScanner && (
        <Button
          type="button"
          onClick={() => dispatch(scanner.actions.setShowScanner(true))}
        >
          Scan product
        </Button>
      )} */}

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
