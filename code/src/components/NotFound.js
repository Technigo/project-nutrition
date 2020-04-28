import React from "react";
import { useSelector } from "react-redux";

export const NotFound = () => {
  const item = useSelector((store) => store.productsList.products);
  
  return (
    <>
      {item.status_verbose && <h1> {item.status_verbose}</h1>}
      <p>{item.status_verbose}</p>
      <p>{item.code}</p>
    </>
  );
};
