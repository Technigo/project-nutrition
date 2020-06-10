import React from 'react'
import { useSelector } from 'react-redux'
import { products } from "reducers/product"
import styled from "styled-components/macro"


const Main = styled.div`
background: powderblue;
height:100vh;
padding: 0.7rem;
display:flex;
flex-direction: column;
align-items:center;
`;

const Image = styled.img`
  width:300px;
  height: auto;
  border: 1px solid red;
`;

const Content = styled.div`
display:flex;
background: ghostwhite;
padding: 15px;
border-radius: 4px;
flex-direction:column;
align-content:center;
justify-content:center;
align-items: center;
@media (min-width: 768px) {
    flex-direction: row;
    height:auto;
  }
`;

const Text = styled.p`
font-size: 1.2rem;
background: white;
padding: 10px;
`;

const Title = styled.h1`
font-family: 'Lobster', cursive;
font-size: 2rem;
font-weight:bold;
color: red;
text-align: center;
`
export const ShowInfo = () => {
  const productInfo = useSelector(state => state.products.product)
  console.log("prodInfo", productInfo)

  return (
    <>
      {productInfo.product && productInfo.status === 1 && (
        <Main>
          <Title> Choose to be healthy - Is   {productInfo.product.product_name} good for you?
       </Title>
          <Content>
            <Image src={productInfo.product.image_front_small_url} />
            <Text>
              The whole thing weighs:{productInfo.product.product_quantity}
              <br></br>
              100g contains: {productInfo.product.nutriments.sugars}g sugar &
              {productInfo.product.nutriments.fat}g fat
            </Text>
          </Content>
        </Main>
      )}
      {productInfo.status === 0 && <h1>OUPS! CANT FIND</h1>}
    </>
  )
}
