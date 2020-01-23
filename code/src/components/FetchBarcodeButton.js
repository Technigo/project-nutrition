import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchBarcode } from 'reducers/barcode';

export const FetchBarcodeButton = () => {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={() => dispatch(fetchBarcode())}>
      Fetch barcode
    </button>
  );
};
