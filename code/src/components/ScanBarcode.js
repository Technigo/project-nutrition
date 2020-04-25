import React, { useState } from 'react';
import { BarcodeScanner } from 'components/BarcodeScanner';
import { useDispatch, useSelector } from "react-redux";
import { onDetected } from "reducers/products";
import {DisplayFoodFacts} from "components/DisplayFoodFacts"


export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch();
  const product = useSelector((store) => store.products)

 

  return (
    <>
      {!showScanner && (
        <button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </button>
      )}

      {showScanner && (
        <BarcodeScanner onDetected={(code) => {
          console.log('Got barcode', code)
          setShowScanner(false)
          dispatch(onDetected(code))
          console.log("hejsan", product)
        }} />
      )}
      {product.status === 1 && <DisplayFoodFacts/>}

    </>
  )
}
