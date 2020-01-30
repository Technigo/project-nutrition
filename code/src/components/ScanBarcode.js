import React, { useState } from "react";
import { BarcodeScanner } from "components/BarcodeScanner";
import { useDispatch } from "react-redux";
import { fetchProduct} from "../reducers/products";
import { Button } from "styles";

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Is this local?</h1>
      {!showScanner && (
        <Button type="button" onClick={() => setShowScanner(true)}>
          Scan Product
        </Button>
      )}

      {showScanner && (
        <BarcodeScanner
          onDetected={code => {
            console.log("Got barcode", code);
            setShowScanner(false);
            dispatch(fetchProduct(code));
          }}
        />
      )}
    </>
  );
};
