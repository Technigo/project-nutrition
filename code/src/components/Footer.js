import React from 'react';
import { useDispatch } from 'react-redux';
import { scanner } from 'reducers/scanner';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const StyledFooter = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: green;
  height: 80px;
  width: 100%;
  color: white;
  bottom: 0;
  left: 0;
`;

export const Footer = () => {
  const dispatch = useDispatch();

  return (
    <StyledFooter>
      <Button
        type="button"
        onClick={() => dispatch(scanner.actions.setShowScanner(true))}
      >
        Scan product
      </Button>
    </StyledFooter>
  );
};
