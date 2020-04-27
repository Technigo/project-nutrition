import React from 'react';
import Lottie from "lottie-react-web";
import animation from "../animations/complete.json";
import { useSelector } from "react-redux";
import styled, {keyframes} from "styled-components";
 
export const ProductFound = () => {
  const product = useSelector((store) => store.products.product);

  return (
    <Wrapper>
      <AnimationContainer>
        <Lottie
          options={{
          animationData: animation,
          loop: false
          }}
          width="150px"
          height="150px"
        />
      </AnimationContainer>
      <Title>{product.product.product_name}</Title>
      <WrapperRow>
        <SubTitle>Your product{" "}
        {product.product.ingredients_from_palm_oil_tags.length === 0 &&
        product.product.ingredients_that_may_be_from_palm_oil_tags.length === 0 ? "does net seem to have any palm oil 👍🏽" : "this product most likely contains palm oil 👎🏽"}
        </SubTitle>
        <Img src={product.product.image_url} alt="Product"/>
      </WrapperRow>

      <Ingredients><span>Ingredients: </span>{product.product.ingredients_text}</Ingredients>
    </Wrapper>
  );
};

const Wrapper = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
`

const WrapperRow = styled.div`
display: flex;
width: fit-content;
justify-content: center;
margin: auto;
`
const Ingredients = styled.h4`
padding: 25px 45px;

@media (max-width: 668px) {
  padding: 15px 25px;
}
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

const Img = styled.img`
width: 30%;
margin: 0 15px;
border-radius: 10px;
border: 2px dashed #8db55f;
`

const hide = keyframes`
0% {
  opacity: 1;
}

50% {
  opacity: 0;
}

100% {
  opacity: 0;
  visibility: hidden;
  width: 0;
  height: 0; 
}
`
const AnimationContainer = styled.div`
animation: ${hide} 1s ease-in 2s forwards;
`