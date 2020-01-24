import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 80px;
  margin: 0;
  padding: 5px;
  position: fixed;
  bottom: 0;
  border-top: 1px solid red;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-content: center;
`;

const Icon = styled.button`
  flex-direction: column;
  align-content: center;
  width: 65px;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border: none;
  margin: 10px 5px;
  opacity: 0.5;

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
  text-shadow: 0 0 0 red;
`;
const Label = styled.p`
  font-size: 12px;
  color: red;
`;

const ScanImg = styled.img`
    width: 15px;
    height: auto;
    color: red;
    fill: red;
    padding-top: 5px;
`

export const BottomBar = () => {
    return (
        <Container>
            <BtnContainer>
                <Icon>
                    <Emoji>
                        <span role="img" aria-label="star">
                            💫
                        </span>
                    </Emoji>
                    <Label>Adventure</Label>
                </Icon>
                <Icon>
                    <Emoji>
                        <ScanImg src="/assets/red-scan-icon.svg" ></ScanImg>
                    </Emoji>
                    <Label>Scan</Label>
                </Icon>
                <Icon>
                    <Emoji>
                        <span role="img" aria-label="sun">
                            ☀️
            </span>
                    </Emoji>
                    <Label>Sun</Label>
                </Icon>

            </BtnContainer>
        </Container>
    );
};