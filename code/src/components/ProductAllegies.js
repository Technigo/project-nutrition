import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

const List = styled.ul`
  margin: 1rem 0 1rem 2rem;
`;

export const ProductAllergies = () => {
  const scan = useSelector(state => state.products.product);

  if (!scan) return null;

  const formattedAllergens =
    scan.product &&
    scan.product.allergens_tags.map(allergen =>
      allergen.replace("en:", "").replace(/-/gi, " ")
    );

  return (
    <>
      {formattedAllergens.length === 0 ? null : (
        <h3>Any allergies? This product contains:</h3>
      )}
      <List>
        {formattedAllergens.length === 0
          ? null
          : formattedAllergens.map((all, index) => <li key={index}>{all}</li>)}
      </List>
    </>
  );
};
