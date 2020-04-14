import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  width: 100%;
  height: 80px;
  margin: 0;
  padding: 5px;
  position: fixed;
  bottom: 0;
  border-top: 1px solid red;
`
const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-content: center;

  @media (min-width: 650px) {
    justify-content: space-evenly;
    width: 60%;
    align-self: center;
  }
`
const BackIcon = styled.button`
    display: flex;
    flex-direction: column;
    width: 65px;
    height: 65px;
    background-color: inherit;
    border: none;
    margin: 10px 5px;
    opacity: 0.5;
    justify-content: flex-end;
    text-decoration-line: none;
    align-items: center;
    justify-content: center;

    ${BtnContainer}:hover & {
        opacity: 1;
        }
`
const ScanIcon = styled.button`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 65px;
    height: 65px;
    justify-content: center;
    align-items: center;
    background-color: inherit;
    border: none;
    margin: 10px 5px;
    opacity: 0.5;
    text-decoration-line: none;

    ${BtnContainer}:hover & {
        opacity: 1;
  }
`
const ProfileIcon = styled.button`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 65px;
    height: 65px;
    justify-content: center;
    align-items: center;
    background-color: inherit;
    border: none;
    margin: 10px 5px;
    opacity: 0.5;
    ${BtnContainer}:hover & {
        opacity: 1;
  }
`
const Emoji = styled.p`
    font-size: 20px;
    padding: 0;
    margin: 0;
    height: auto;
    color: transparent;
    text-shadow: 0 0 0 red;
`
const Label = styled.p`
    font-size: 12px;
    color: red;
    font-weight: 700;
    margin: 0;
`
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
        <BackIcon as="a" href="/">
          <Emoji>
            <ScanImg src="/assets/red-arrow.svg" ></ScanImg>

          </Emoji>
          <Label>Back</Label>
        </BackIcon>
        <ScanIcon as="a" href="/">
          <Emoji>
            <ScanImg src="/assets/red-scan-icon.svg" ></ScanImg>
          </Emoji>
          <Label>Scan</Label>
        </ScanIcon>
        <ProfileIcon>
          <Emoji>
            <ScanImg src="/assets/red-user-icon.svg" ></ScanImg>

          </Emoji>
          <Label>Profile</Label>
        </ProfileIcon>
      </BtnContainer>
    </Container>
  )
}