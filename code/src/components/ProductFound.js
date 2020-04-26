import React from 'react'
import Lottie from "lottie-react-web";
import animation from "../animations/complete.json";
import { useSelector } from "react-redux";
import styled, {keyframes} from "styled-components"
 
export const ProductFound = () => {
  const product = useSelector((store) => store.products.product)

  return (
    <div>
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
      <h2>{product.product.product_name}</h2>
      <img src={product.product.image_url} alt="Product"/>
      <h3>{product.product.ingredients_text}</h3>
    </div>
  )
}

const hide = keyframes`
from {
opacity: 1;
}
to {
  opacity: 0;
  display: none;
}
`

const AnimationContainer = styled.div`
animation: ${hide} 2s 4s;
`

