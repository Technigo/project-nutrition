import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  width: 100%;
  margin-bottom: 0;
  background: lightgrey;
  border-top: 1px solid grey;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 30px;
`;

const Button = styled.button`
  border: none;
  color: #33629a;
  font-size: 15px;
  font-weight: bold;
  background: lightgray;
`;

const Title = styled.p`
  color: black;

  ${Button}:hover & {
    font-size: 15px;
    text-shadow: 2px 2px 3px gray;
    color: #33629a;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

const AboutSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin: 20px 20px 20px 20px;

  p {
    padding: 20px;
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 20px;
    width: 80%;
  }
`;

export const Footer = () => {
  return (
    <Section>
      <ButtonContainer>
        <Button type="button">
          <Title>About</Title>
        </Button>
        <Button type="button">
          <Title>History</Title>
        </Button>
        <Button type="button">
          <Title>Favourites</Title>
        </Button>
      </ButtonContainer>
      <AboutSection>
        <Title>
          This site uses data from Open Food Facts, a free and open database.
          You can add information to products on{' '}
          <a href="https://www.openfoodfact.org">www.openfoodfact.org</a>
        </Title>
      </AboutSection>
    </Section>
  );
};
