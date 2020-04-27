import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components"

export const ProductInfo = () => {
  const product = useSelector((store) => store.products.product);

  return (
    <Wrapper>
      <Title>{product.product.product_name}</Title>
      {/* if it contains peanut, show penaut emoji ... etc  */}
      <SubTitle> This product contains {product.product.allergens_hierarchy}
      </SubTitle>
      <Ingredients><span>Ingredients: </span>{product.product.ingredients_text}</Ingredients>
    </Wrapper>
  );
}

const Wrapper = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
`
const Ingredients = styled.h4`
padding: 25px 45px;
`

const Title = styled.h2`
margin: 25px auto;
font-size: 32px;
text-align: center;
`

const SubTitle = styled.h3`
max-width: 250px;
margin: 0;
font-size: 24px;
text-align: center;
`