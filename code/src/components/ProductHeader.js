import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

const Main = styled.div`
  margin: 0 auto;
  background: #f8c3af;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

export const ProductHeader = () => {
  const scan = useSelector(state => state.products.product);

  return (
    <Main>
      <h2>Below you will find information about your product</h2>
      <p>We also do like {scan.product.product_name}! Tasty!</p>
    </Main>
  );
};
