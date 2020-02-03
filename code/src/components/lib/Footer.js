import React from "react"
import styled from "styled-components/macro"

const Container = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #bce9ef;
  width: 100%;
  height: 80px;
  margin: 0;
`
const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  // width: 500px;
  justify-content: center;
  
`
const Icon = styled.button`
  flex-direction: column;
  align-content: center;
  width: 65px;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border: none;
  margin: 10px 35px;
  opacity: 0.5;
  ${BtnContainer}:hover & {
    opacity: 1;
  }
`
const Emoji = styled.p`
  font-size: 15px;
  padding: 0;
  margin: 0;
  height: auto;
  color: transparent;
  // text-shadow: 0 0 0 white;
  text-shadow: 0 0 0 grey;
`
const Label = styled.p`
  font-size: 12px;
  color: darkslategrey;
  font-weight: bold;
  // color: darkslategrey;
`
export const Footer = () => {
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
            <span role="img" aria-label="snowflake">
              ⭐️
            </span>
          </Emoji>
          <Label>Snow</Label>
        </Icon>
        <Icon>
          <Emoji>
            <span role="img" aria-label="sun">
              ☀️
            </span>
          </Emoji>
          <Label>Sun</Label>
        </Icon>
        <Icon>
          <Emoji>
            <span role="img" aria-label="sun">
              🦋
            </span>
          </Emoji>
          <Label>Favourites</Label>
        </Icon>
      </BtnContainer>
    </Container>
  )
}