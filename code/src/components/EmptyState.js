import React, { useState } from 'react'
import styled from 'styled-components'
import { SetData } from './SetData'

const MainText = styled.h1`
  color: #fff;
  size: 30px;
  margin: 0 0 30px 0;
  box-shadow: grey 2px 2px 5px 5px; 
  padding: 15px;
  border-radius: 8px;
`
const Image = styled.img`
  border-radius: 50%;
  height: 200px;
  height: 200px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  align-items: center;
  width: 100%;
  background-image: linear-gradient(31.5deg, #1e1313 58%, #277CC9 42% )
`
const Button = styled.button`
  color: #fff;
  font-size: 30px;
  box-shadow: grey 2px 2px 5px 5px; 
  padding: 15px;
  border-radius: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: yellow;
  }

  &:active {
      box-shadow: none;
      transform: translatey(3px);
  }
`
const CameraContainer = styled.div`
overflow: hidden;
width: 80%;
height: 75%;
padding: 20px;
`

export const EmptyState = () => {
  const [showScanner, setShowScanner] = useState(false)

  return (
    <Container>
      {!showScanner &&
        <div>
          <MainText>Your fridge is empty!</MainText>
          <Image src={require('../emptyFridge.png')} />
        </div>}
      {showScanner &&
        <CameraContainer>
          <SetData />
        </CameraContainer>}
      <Button onClick={() => setShowScanner(!showScanner)}>Scan Items</Button>
    </Container>
  )
}