import React from 'react';
import styled from 'styled-components';

const Head = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
  height: 50px;
  width: 100%;
  margin: 0;
  border-top-radius: 16px;
  border-bottom: 1px solid purple;
  box-shadow: 2px 2px 4px grey;

  h1 {
    color: black;
    font-size: 20px;
  }
`;

const NavigationIcons = styled.button`
  position: absolute;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  div {
    width: 1.5rem;
    height: 0.25rem;
    background: black;
    border-radius: 10px;
    position: relative;
  }
`;

export const Header = ({ title }) => {
  return (
    <Head>
      <NavigationIcons>
        <div />
        <div />
        <div />
      </NavigationIcons>
      <h1>{title}</h1>
    </Head>
  );
};
