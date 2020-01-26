import React from "react";
import { BarcodeScanner } from "components/BarcodeScanner";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "reducers/products";
import { ui } from "reducers/ui"

export const ScanBarcode = () => {
  const showScanner = useSelector(state => state.ui.showScanner);
  const dispatch = useDispatch();

  return (
    <>
      {showScanner && (
        <BarcodeScanner
          onDetected={code => {
            console.log("Got barcode", code);
            dispatch(ui.actions.setShowScanner(false));
            dispatch(fetchProduct(code));
          }}
        />
      )}
    </>
  );
};
