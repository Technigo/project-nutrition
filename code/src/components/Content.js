import React from "react";
import { useSelector } from "react-redux";
import { ScanBarcode } from "./ScanBarcode";
import { LoadingIndicator } from "./LoadingIndicator";
import { Product } from "components/Product";
export const Content = () => {
  return (
    <>
      <LoadingIndicator />
      <Product />
      <ScanBarcode />
    </>
  );
};
