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
          <h2>
            This product contains {scan.product.nutriments.energy_100g}
            {scan.product.nutriments.energy_unit}.
          </h2>
        </section>
      )}
      {scan.status === 0 && <h2>Ooops! Product not found!</h2>}
    </>
  );
};
