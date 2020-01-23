import React from 'react';
import { useSelector } from 'react-redux';

export const Product = () => {
  const product = useSelector(state => state.barcode.product);

  if (!product) return null;

  return (
    <>
      <h1>Product:</h1>
      <hp></hp>
    </>
  );
};
