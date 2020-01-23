import React from 'react';
import styled from 'styled-components';

const Head = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
  height: 100px;
  width: 100%;
  margin: 0;

  h1 {
    color: black;
    font-size: 20px;
  }
`;

export const Header = ({ title }) => {
  return (
    <Head>
      <h1>{title}</h1>
    </Head>
  );
};
