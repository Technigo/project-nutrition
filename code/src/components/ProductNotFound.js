import React from 'react';
import Lottie from "lottie-react-web";
import animation from "../animations/error.json";
import styled, {keyframes} from "styled-components";

export const ProductNotFound = () => {
  return (
    <AnimationContainer>
      <Lottie
        options={{
        animationData: animation,
        loop: false
        }}
        width="150px"
      />
    </AnimationContainer>
  );
};

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