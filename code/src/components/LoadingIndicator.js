import React from "react";
import sheep from "../sheep.gif";
import { CountingSheep } from "styles";

export const LoadingIndicator = () => {
  return (
    <>
      <CountingSheep src={sheep} />
      <h2>Looking for product...</h2>
    </>
  );
};
