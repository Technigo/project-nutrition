import React from 'react';
import styled from "styled-components";
import Lottie from "lottie-react-web";
import hotdog from "../animations/flying-hotdog.json";
import burger from "../animations/delicious-burger.json";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Lottie
        options={{
        animationData: hotdog,
        }}
        width="100px"
      />

      <HeaderTitle>
        Palm oil free?
      </HeaderTitle>

      <Lottie
        options={{
        animationData: burger,
        }}
        width="100px"
      />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
display: flex;
align-items: center;
flex-direction: row;
border-bottom: 4px dashed #8db55f;
background: #fafff1;
`

const HeaderTitle = styled.h1`
font-family: 'Bungee Shade', cursive;
font-size: 5vw;
text-align: center;

font-size: 8vw;

color: #4CAF50;
text-shadow: -3px -3px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, 1px 1px 0 #000;
    
@media (max-width: 668px) {
  text-shadow: -2px -2px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, 1px 1px 0 #000;
}  
`