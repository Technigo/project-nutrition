import React from "react";
import { useSelector } from "react-redux";

export const Product = () => {
  const scan = useSelector(state => state.products.product);

  if (!scan) return null;

  console.log("SCAN", scan);

  return (
    <>
      {scan.product && scan.status === 1 && (
        <section className="product-container">
          <h1>Product:</h1>
          <img
            alt="barcode"
            src={scan.product && scan.product.image_nutrition_url}
          />
          <h2>This product is: {scan.product && scan.product.labels}</h2>
        </section>
      )}
    </>
  );
};
