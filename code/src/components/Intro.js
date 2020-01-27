import React from 'React';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
`;

export const Intro = () => {
  return (
    <Section>
      <Title>Are you allergic to nuts?</Title>
      <Text>Scan your products before you eat</Text>
    </Section>
  );
};
