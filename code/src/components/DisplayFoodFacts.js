import React from 'react';
import { useSelector } from "react-redux";
import { ProductFound } from "components/ProductFound";
import { ProductNotFound } from "components/ProductNotFound";
import { BeforeScan } from "components/BeforeScan";
import styled from "styled-components";

export const DisplayFoodFacts = () => {
  const product = useSelector((store) => store.products.product)
  
  if(product.status === 1) {
    return (
      <Wrapper>
        <ProductFound/>
      </Wrapper>
    );
  } else if(product.status === 0) {
      return (
        <Wrapper>
          <ProductNotFound/>
        </Wrapper>
    );
  } else {
      return (
        <Wrapper>
          <BeforeScan/>
        </Wrapper>
    );
  };
};

const Wrapper = styled.section`
display: flex;
justify-content: center;
`