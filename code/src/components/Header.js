import React from "react";
import styled from "styled-components/macro";

export const Header = () => {
  return (
    <HeaderContainer>
      <Headline>What are you eating?<span role='img' aria-label='cookie'>🍪</span></Headline>
      <HeaderText>
        Here you can find out how much fat, protein, sugars and calories there
        are in what you are eating!
      </HeaderText>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Headline = styled.h1`
  font-size: 2.2em;
  text-align: center;
  margin-bottom: 5px;
`;

const HeaderText = styled.p`
  text-align: center;
  padding-bottom: 1em;
  width: 80%;
`;
