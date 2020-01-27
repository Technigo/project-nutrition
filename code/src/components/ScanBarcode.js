import React, { useState } from "react";
import { BarcodeScanner } from "components/BarcodeScanner";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, removeProduct } from "../reducers/products";
import { Button } from "styles";

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false);
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.product);

  if (product.fetched)
    return (
      <Button type="button" onClick={() => dispatch(removeProduct())}>
        Back
      </Button>
    );
  return (
    <>
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
