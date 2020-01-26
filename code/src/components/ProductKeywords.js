import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

const Keywords = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Paragraph = styled.p`
  background: #f8c3af;

  margin: 1rem 0.5rem 0.5rem 0.5rem;
  padding: 0.5rem;
`;

export const ProductKeywords = () => {
  const scan = useSelector(state => state.products.product);

  if (!scan) return null;

  return (
    <>
      {scan.product._keywords.length === 0 ? null : (
        <h3>Here are some useful keywords for you:</h3>
      )}
      <Keywords>
        {scan.product._keywords.length === 0
          ? null
          : scan.product._keywords.map((key, index) => (
              <Paragraph key={index}>{key}</Paragraph>
            ))}
      </Keywords>
    </>
  );
};
