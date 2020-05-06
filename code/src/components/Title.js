import React from "react"
import styled from "styled-components/macro"

const TitleContainer = styled.div`
  padding: 50px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`

const Text = styled.h1`
  color: #fff;
`

export const Title = () => {
  return (
    <TitleContainer>
      <Text>What's in your fridge?</Text>
    </TitleContainer>
  )
}