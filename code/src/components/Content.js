import React from "react";
import { useSelector } from "react-redux";
import { ScanBarcode } from "./ScanBarcode";
import { LoadingIndicator } from "./LoadingIndicator";
import { Product } from "components/Product";

export const Content = () => {
  const isLoading = useSelector(state => state.ui.isLoading);

  if (isLoading) return <LoadingIndicator />;

  return (
    <>
      <Product />
      <ScanBarcode />
    </>
  );
};
