import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: powderblue;
  width: 100%;
  height: 80px;
  margin: 0;
  position: fixed;
  top: 86%;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Icon = styled.button`
  flex-direction: column;
  align-content: center;
  
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border: none;
  margin: 10px 5px;
  opacity: 1;

  ${BtnContainer}:hover & {
    opacity: 1;
  }
`;

const Emoji = styled.p`
  font-size: 15px;
  padding: 0;
  margin: 0;
  height: auto;
  color: transparent;
  text-shadow: 0 0 0 white;
  font-size: 25px;
  padding: 10px
`;
const Label = styled.p`
  font-size: 12px;
  color: white;
  
`;

export const Footer = () => {
  return (
    <Container>
      <BtnContainer>
        <Icon>
          <Emoji>
            <span role="img" aria-label="letter">
              ✉
            </span>
          </Emoji>
          <Label></Label>
        </Icon>
        <Icon>
          <Emoji>
            <span role="img" aria-label="bin">
              🗑
            </span>
          </Emoji>
          <Label></Label>
        </Icon>
       
      </BtnContainer>
    </Container>
  );
};