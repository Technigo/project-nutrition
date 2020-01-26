import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

const List = styled.ul`
  margin: 1rem 0 1rem 2rem;
`;

export const ProductCategories = () => {
  const scan = useSelector(state => state.products.product);

  if (!scan) return null;

  const formattedCategories =
    scan.product &&
    scan.product.categories_tags.map(cat =>
      cat.replace("en:", "").replace(/-/gi, " ")
    );

  return (
    <>
      {formattedCategories.length === 0 ? null : (
        <h3>Search for other similiar products by categories:</h3>
      )}
      <List>
        {formattedCategories.length === 0
          ? null
          : formattedCategories.map((cat, index) => <li key={index}>{cat}</li>)}
      </List>
    </>
  );
};
