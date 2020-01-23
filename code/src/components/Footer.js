import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const StyledFooter = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: green;
  height: 70px;
  width: 100%;
  color: white;
  bottom: 0;
  left: 0;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Button type="button">Scan product</Button>
    </StyledFooter>
  );
};
