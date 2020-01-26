import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";
import { ProductHeader } from "./ProductHeader";
import { ProductCategories } from "./ProductCategories";
import { ProductKeywords } from "./ProductKeywords";
import { ProductAllergies } from "./ProductAllegies";
import { ProductIngredients } from "./ProductIngredients";

import { NotFound } from "./NotFound";

import styled from "styled-components";

const Section = styled.section`
  margin-bottom: 3rem;
`;

export const Product = () => {
  const scan = useSelector(state => state.products.product);

  if (!scan) return null;

  console.log("SCAN", scan);

  return (
    <>
      {scan.product && scan.status === 1 && (
        <Section>
          <ProductHeader />
          <Card
            image={scan.product.image_url}
            title={scan.product.product_name}
            secondaryText={
              scan.product.brands === undefined
                ? null
                : `PRODUCED BY: ${scan.product.brands}`
            }
          >
            <ProductIngredients />
            <ProductAllergies />
            <ProductCategories />
            <ProductKeywords />
          </Card>
        </Section>
      )}
      {scan.status === 0 && <NotFound />}
    </>
  );
};
