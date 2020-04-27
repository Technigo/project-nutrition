import React from "react";
import Lottie from "lottie-react-web";
import animation from "../animations/complete.json";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const ProductFound = () => {
  const product = useSelector((store) => store.products.product);

  return (
    <Wrapper>
      <Lottie
        options={{
          animationData: animation,
          loop: false,
        }}
        width="100px"
        height="100px"
      />
      <Title>{product.product.product_name}</Title>
      <WrapperRow>
        <SubTitle>
          Your product{" "}
          {product.product.ingredients_from_palm_oil_tags.length === 0 &&
          product.product.ingredients_that_may_be_from_palm_oil_tags.length ===
            0
            ? "does not seem to contain any palm oil 👍🏽"
            : "most likely contains palm oil 👎🏽"}
        </SubTitle>
      </WrapperRow>
      <Ingredients>
        <span>Ingredients: </span>
        {product.product.ingredients_text}
      </Ingredients>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const WrapperRow = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
  margin: auto;
`;
const Ingredients = styled.h4`
  padding: 25px 45px 0;
  @media (max-width: 668px) {
    padding: 15px 25px 0;
  }
`;

const Title = styled.h2`
  margin: 25px auto;
  font-size: 32px;
  text-align: center;
`;

const SubTitle = styled.h3`
  padding: 25px 45px 0;
  max-width: 450px;
  margin: 0;
  font-size: 24px;
  text-align: justify;
  @media (max-width: 668px) {
    padding: 15px 25px 0;
  }
`;
