import React from 'react'
import styled from "styled-components/macro";

const ParentContainer = styled.div`
display: flex;
justify-content: center;
`;
const Container = styled.div`
margin-top: 150px;
`;

export const Error = (props) => {
    return (
      <ParentContainer>
      <Container>
      {props.msg}!
      </Container>
      </ParentContainer>
    );
  };