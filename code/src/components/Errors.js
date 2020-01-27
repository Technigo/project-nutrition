import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ErrorSection = styled.div`
  display: flex;
  justify-content: center;
  background: lightgrey;
  padding 20px;
`;

const Error = styled.div`
  padding: 20px;
  background: white;
  box-shadow: 2px 2px 4px grey;
`;

const ErrorTitle = styled.h4`
  font-weight: bold;
`;

const ErrorText = styled.div`
  color: black;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.div`
  margin-top: 10px;
  color: black;
`;

const Link = styled.p`
  padding: 10px;
  box-shadow: 1px 1px 2px grey;
  border-radius: 16px;
  background: #33629a;

  a {
    color: white;
    text-decoration: none;
  }

  ${Button}:hover & {
    background: grey;
    color: black;
  }
`;

export const Errors = () => {
  const scan = useSelector(state => state.barcodes.product);

  return (
    <ErrorSection>
      {scan.status === 0 && (
        <Error>
          <ErrorTitle>Sorry {scan.status_verbose}</ErrorTitle>
          <ErrorText>
            Try again or your product may not be included on
            www.openfoodfact.org. You can add your product on Open Food Fact
            here.{' '}
            <ButtonContainer>
              <Button>
                <Link>
                  <a href="https://www.openfoodfacts.org/" target="_blank">
                    Add product to Open Food Fact
                  </a>
                </Link>
              </Button>
            </ButtonContainer>
          </ErrorText>
        </Error>
      )}
    </ErrorSection>
  );
};
