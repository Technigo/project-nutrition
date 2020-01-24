import React from 'react';
import { useDispatch, Selector, useSelector } from 'react-redux';
import { scanner } from 'reducers/scanner';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const StyledFooter = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: green; */
  /* height: 80px; */
  /* border: 1px solid red; */
  padding: 2rem;
  width: 100%;
  color: white;
  bottom: 0;
  left: 0;
`;

export const Footer = () => {
  const dispatch = useDispatch();
  const showScanner = useSelector(state => state.scanner.showScanner);

  return (
    <StyledFooter>
      {!showScanner && (
        <Button
          type="button"
          onClick={() => dispatch(scanner.actions.setShowScanner(true))}
          color="yellow"
        >
          Scan product
        </Button>
      )}
    </StyledFooter>
  );
};
