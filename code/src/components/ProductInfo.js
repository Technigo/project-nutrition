import React from "react";
import { useSelector } from "react-redux";
// import { NotFound } from 'components/NotFound'
import styled from "styled-components/macro";

export const ProductInfo = () => {
  const item = useSelector((store) => store.productsList.products);

  if (!item) return null;

  return (
    <div>
      {item.product && <ProductName>{item.product.product_name}</ProductName>}
      {item.product && <Brand>{item.product.brands}</Brand>}
      <Container>
        {item.product && (
          <NutrimentsText>
            Fat: {item.product.nutriments.fat_100g}
          </NutrimentsText>
        )}
        {item.product && (
          <NutrimentsText>
            Calories: {item.product.nutriments.energy_100g}
          </NutrimentsText>
        )}
        {item.product && (
          <NutrimentsText>
            Sugars: {item.product.nutriments.sugars_100g}
          </NutrimentsText>
        )}
        {item.product && (
          <NutrimentsText>
            Proteins: {item.product.nutriments.proteins_100g}
          </NutrimentsText>
        )}
        {item.product && <NutrimentsGrams>per 100 g</NutrimentsGrams>}
      </Container>
      {item.status === 0 && (
        <ProductNotFound>
          Oh no! {item.status_verbose}{" "}
          <span role="img" aria-label="angry-beast">
            👹
          </span>
        </ProductNotFound>
      )}
    </div>
  );
};

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ProductName = styled.h2`
  font-size: 1.8em;
  text-align: center;
  margin-bottom: 5px;
`;

const ProductNotFound = styled.h2`
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 5px;
`;

const Brand = styled.h3`
  font-style: italic;
  font-size: 1em;
  text-align: center;
  margin: 0 0 15px 0;
`;

const NutrimentsText = styled.p`
  font-weight: 500;
  margin: 5px;
  align-items: left;
`;

const NutrimentsGrams = styled.p`
  border-top: 0.3px solid #305e75;
  font-size: 0.9em;
  text-align: center;
  font-weight: 300;
  font-style: italic;
  margin: 10px;
  padding-top: 10px;
  width: 80px;
`;
