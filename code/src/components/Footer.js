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
  border: none;
  color: blue;
  font-size: 12px;
  font-weight: bold;
  text-shadow: 2px 2px 3px gray;
  background: lightgray;
`;

const Title = styled.p`
  color: black;

  ${Button}:hover & {
    color: blue;
    font-size: 15px;
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
