import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct } from 'reducers/products'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

export const ShowScanner = () => {
  const [showScanner, setShowScanner] = useState(false)

  const dispatch = useDispatch()


  return (
    <Container >
      {!showScanner && (
        <Wrapper>
          <Text>Click here to scan your product:</Text>
          <Button onClick={() => setShowScanner(true)}>
            <ButtonText>
              SCAN
          </ButtonText>
          </Button>
        </Wrapper>
      )
      }

      {
        showScanner && (
          <BarcodeScanner
            onDetected={(code) => {
              setShowScanner(false)
              dispatch(fetchProduct(code))
            }} />
        )
      }
    </Container >
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Button = styled.button`
  display: inline-block;
  font-size: 1em;
  background: #F2CB05;
  margin-bottom: 1em;
  border: 2px solid #F2CB05;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: scale(1.03);
    opacity: 0.8;
  }
`

const ButtonText = styled.div`
display: flex;
padding: 15px;
font-weight: 800;
color: white;
&:hover {
  color: white;
  transition: 0.4s;
}
`

const Container = styled.div`
 display: flex;
 justify-content: center;
  }
`

const Text = styled.p`
  font-size: 18px;
  letter-spacing: 1px;
  margin-right: 50px;
`