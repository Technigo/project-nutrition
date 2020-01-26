import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

const List = styled.ul`
  margin: 1rem 0 1rem 2rem;
`;

export const ProductIngredients = () => {
  const scan = useSelector(state => state.products.product);

  if (!scan) return null;

  const formattedIngredients =
    scan.product &&
    scan.product.ingredients_hierarchy.map(ingredient =>
      ingredient.replace("en:", "").replace(/-/gi, " ")
    );

  return (
    <>
      {formattedIngredients.length === 0 ? null : (
        <h3>This is what you need:</h3>
      )}
      <List>
        {formattedIngredients.length === 0 ? (
          <p>
            Unfortunatelly, we do not have any information about ingredients of
            that product.{" "}
            <span role="img" aria-labelledby="sad face">
              😟
            </span>
          </p>
        ) : (
          formattedIngredients.map((ing, index) => <li key={index}>{ing}</li>)
        )}
      </List>
    </>
  );
};
