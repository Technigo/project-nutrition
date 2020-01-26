import React from 'react'
import { useSelector } from 'react-redux'
import mglass from 'assets/mglass.jpg'
import styled from "styled-components/macro"


const Icon = styled.img`
    height:30px;
    margin: 5px 0 0 20px;
`

const Title = styled.h1`
    margin:0;
    font-size:40px;
`

const Wrap = styled.div`
    background-color:white;
    width:800px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:50px 0;
    border-radius:8px;

    @media (max-width: 768px) {
    padding:10px;
    width:auto;
  }
    
    `
const TitleDiv = styled.div`
    display:flex;
    margin:50px;

    @media (max-width: 768px) {
    margin:30px;
  }
`

const Name = styled.h2`
    font-size:22px;
`

const TextInfo = styled.h3`
    font-size:20px;
`

const Image = styled.img`
    border-radius:8px;
   
    @media (max-width: 768px) {
    width:70%;
  }`

export const Product = () => {
    const json = useSelector(state => state.facts.product)

    if (!json) {
        return null
    }

    const { product, status, status_verbose } = json

    return (
        <Wrap>
            {status === 1 && (
                <>
                    <TitleDiv>
                        <Title>Search find </Title>
                        <Icon alt="glass" src={mglass} />
                    </TitleDiv>

                    <Name>Name of product: {product && product.product_name}</Name>
                    <Image alt="product" src={product && product.image_url} />
                    <TextInfo>Ingredients:</TextInfo> <Image alt="ingrediens" src={product && product.image_ingredients_url} />
                    <TextInfo>Brand: {product && product.brands}</TextInfo>
                </>)}


            {status === 0 && <h1>{status_verbose}</h1>}
            {/* {product.status === 0 && <Error msg={product.status_verbose} <h1>{product.status_verbose}</h1>} /> */}
        </Wrap>
    )
}