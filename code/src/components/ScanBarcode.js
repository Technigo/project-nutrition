import React, { useState } from "react";
import { BarcodeScanner } from "components/BarcodeScanner";
import { useDispatch } from "react-redux";
import { fetchProduct } from "../reducers/products";
import { ScanButton } from "styles";

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      {!showScanner && (
        <ScanButton type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </ScanButton>
      )}

      {showScanner && (
        <BarcodeScanner
          onDetected={code => {
            console.log("Got barcode", code);
            setShowScanner(false);
            dispatch(fetchProduct(4000540003468));
          }}
        />
      )}
    </>
  );
};
