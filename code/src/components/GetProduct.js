import React from "react"
import { fetchProduct } from "reducers/product"
import { useDispatch } from "react-redux"
import { BarcodeScanner } from "components/BarcodeScanner"
import { ScanBarcodeBtn } from "components/ScanBarcodeBtn"
import styled from "styled-components/macro"


const Text = styled.h2`
font-size: 1rem;
width: 60%;
margin: 0 auto;
text-align:center;
color: ${(props) => props.color};
`;

const Title = styled.h1`
font-family: 'Lobster', cursive;
font-size: 2rem;
text-align: center;
font-weight:bold;
color: red;
`
const Content = styled.section`
width: auto;
background: ghostwhite;
padding: 20px;
display: flex;
flex-direction: column;
align-items:center;
`

const Main = styled.div`
background: powderblue;
padding: 2rem;
height: 100vh;
display:flex;
flex-direction: column;
align-items:center;
`;

export const GetProduct = (code) => {
  const dispatch = useDispatch()

  const onDetected = (code) => {
    console.log(`CodeLOG: ${code}`)
    dispatch(fetchProduct(code))
  }
  return (
    <Main>
      <Content>
        <Title>
          Make the right choice!
      </Title>
        <Text color="red" > Check your food here before eating</Text>
        <ScanBarcodeBtn />
        <Text>
          <label>
            {" "}
          Push button to scan your product with the camera or enter the barcode manually:{" "}
          (testercode:
          7311070347272)
          <input type="text" onChange={(e) => onDetected(e.target.value)} ></input>
          </label>
        </Text>
      </Content>
    </Main>
  )
}
