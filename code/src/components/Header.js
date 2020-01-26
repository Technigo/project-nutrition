import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  color: green;
  text-align: center;
`;

const Message = styled.p`
  text-align: center;
  font-style: italic;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Heading>Find your product</Heading>
      <Message>
        Scan the barcode of any product with your phone to find detailed
        information.
      </Message>
    </StyledHeader>
  );
};
