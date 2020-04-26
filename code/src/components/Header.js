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
      Is your food organic?
      </HeaderTitle>
      <Lottie
          options={{
            animationData: burger,
          }}
          width="100px"
        />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
display: flex;
align-items: center;
flex-direction: row;
border-bottom: solid 4px #ced6e3;
`

const HeaderTitle = styled.h1`
font-family: 'Bungee Shade', cursive;
font-size: 5vw;
text-align: center;
`