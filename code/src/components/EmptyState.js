import React, { useState } from 'react'
import styled from 'styled-components'
import { BarcodeScanner } from './BarcodeScanner'
import { SetData } from './SetData';
import img from '../emptyFridge.png'

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
  box-shadow: grey 5px 5px 5px 5px;
`

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 80%;
align-items: center;
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
  &:hover{
      background-color: navy;
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