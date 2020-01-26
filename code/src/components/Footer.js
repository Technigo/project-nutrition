import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { scanner } from 'reducers/scanner';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const StyledFooter = styled.div`
  position: fixed;
  justify-content: center;
  align-items: center;
  background: #383e42;
  width: 100%;
  color: white;
  bottom: 0;
  left: 0;
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: white;
  padding-bottom: 2rem;
`;

const WrapperInfo = styled.div`
  padding: 1.5rem;

  p {
    text-align: center;
    font-size: 0.8rem;
  }

  a {
    color: white;
    text-decoration: underline;

    &:hover {
      color: green;
    }
  }
`;

export const Footer = () => {
  const dispatch = useDispatch();
  const showScanner = useSelector(state => state.scanner.showScanner);

  return (
    <StyledFooter>
      <WrapperButton>
        {!showScanner && (
          <Button
            type="button"
            onClick={() => dispatch(scanner.actions.setShowScanner(true))}
            color="yellow"
          >
            Scan product
          </Button>
        )}
      </WrapperButton>
      <WrapperInfo>
        <p>
          This site is based on an API from{' '}
          <a href="https://world.openfoodfacts.org/">Open Food Facts</a>. Open
          Food Facts is a non-profit project developed by thousands of
          volunteers from around the world.
        </p>
      </WrapperInfo>
    </StyledFooter>
  );
};
