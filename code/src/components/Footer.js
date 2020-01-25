import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  width: 100%;
  margin-bottom: 0;
  background: lightgrey;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
`;

const Button = styled.button`
  color: black;
  border: none;
  background: lightgrey;
`;

const Title = styled.p`
  color: black;

  ${Button}:hover & {
    text-decoration: underline;
  }
`;

export const Footer = () => {
  return (
    <Section>
      <Container>
        <Button type="button">
          <Title>Scan</Title>
        </Button>
        <Button type="button">
          <Title>History</Title>
        </Button>
        <Button type="button">
          <Title>Favourites</Title>
        </Button>
      </Container>
    </Section>
  );
};
