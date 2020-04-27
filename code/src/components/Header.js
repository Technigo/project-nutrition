import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Palm oil free?</HeaderTitle>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const HeaderTitle = styled.h1`
  font-family: "Bungee Shade", cursive;
  font-size: 10vw;
  text-align: center;
  margin: 50px auto;
  color: #4caf50;
  text-shadow: -3px -3px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
    1px 1px 0 #000;
  @media (max-width: 668px) {
    text-shadow: -2px -2px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      1px 1px 0 #000;
  }
`;
