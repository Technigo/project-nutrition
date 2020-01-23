import React, { useState } from 'react';
import { BarcodeScanner } from 'components/BarcodeScanner';
import { useDispatch } from 'react-redux';
import { fetchProduct } from '../reducers/product';
import { Button } from 'semantic-ui-react';

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {!showScanner && (
        <Button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
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
    </>
  );
};
