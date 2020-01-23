import React from 'react';
import { useSelector } from 'react-redux';

export const Product = () => {
  const product = useSelector(state => state.barcodes.product);

  if (!product) return null;

  console.log('product', product);
  return (
    <>
      <h1>Product:</h1>
      <img src={product.product && product.product.image_url}></img>
    </>
  );
};
