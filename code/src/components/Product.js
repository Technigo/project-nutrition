import React from "react";
import { useSelector } from "react-redux";

export const Product = () => {
  const scan = useSelector(state => state.products.product);

  if (!scan) return null;

  console.log("SCAN", scan);

  return (
    <>
      {scan.product && scan.status === 1 && (
        <section className="scanner-container">
          <img
            alt="barcode"
            src={scan.product && scan.product.image_nutrition_url}
          />
          <h2>This product is: {scan.product && scan.product.labels}</h2>
        </section>
      )}
      {scan.status === 0 && <h2>Ooops! Product not found!</h2>}
    </>
  );
};

export const Scan = () => {
  const scan = useSelector(state => state.products.product);
  if (scan.product && scan.product.labels !== "vegeterian")
    return <h3>This product is not vegetarian!</h3>;
};
