import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct } from 'reducers/products'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { IoMdQrScanner } from "react-icons/io";


export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)

  const dispatch = useDispatch()


  return (
    <Container >
      {!showScanner && (
        <Button onClick={() => setShowScanner(true)}>
          <ButtonText>
            Show scanner <IoMdQrScanner
              size={20}
              style={{ marginLeft: 10 }} />
          </ButtonText>
        </Button>
      )
      }

      {
        showScanner && (
          <BarcodeScanner
            onDetected={(code) => {
              console.log('Got barcode', code)
              setShowScanner(false)
              dispatch(fetchProduct(code))
            }} />
        )
      }
    </Container >
  )
}


const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin-bottom: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  &:hover {
    background: #f1f1f1;
  }
`
const ButtonText = styled.div`
display: flex;
font-weight: 600;
`

const Container = styled.div`
 display: flex;
 justify-content: center;
  }
`