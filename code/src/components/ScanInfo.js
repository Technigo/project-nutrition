import React from 'react';
import styled from 'styled-components';

const StyledScanInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 2rem; */
  /* border: 1px solid yellow; */
`;

const Heading = styled.h1`
  color: green;
  text-align: center;
`;

const Message = styled.p`
  /* border: 1px solid blue; */
  text-align: center;
`;

export const ScanInfo = () => {
  return (
    <StyledScanInfo>
      <Heading>Find your product</Heading>
      <Message>
        Scan the barcode of any product with your phone to find detailed
        information.
      </Message>
    </StyledScanInfo>
  );
};
