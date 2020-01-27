import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Error } from 'components/Error'
import { InsulinCounter } from 'components/InsulinCounter'
import styled from "styled-components/macro";

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: #28a4a4;
font-weight: bold;
border: 2px solid white;
border-radius: 15px;
margin-top: 150px;
padding: 20px;
@media (min-width: 900px){
    padding: 10px;
    margin-top: 95px;
    }
`;

const Title = styled.h1`
@media (min-width: 900px){
font-size: 2.5em;
}
`;

const Text = styled.p`
margin: 0px;
margin-bottom: 10px;
@media (min-width: 900px){
    font-size: 1.5em;
    }
`;

const Img = styled.img`
width: 320px;
margin-top: 30px;
border-radius: 15px;
border: 2px solid black;
@media (min-width: 900px){
    width: 500px;
    margin-top: 15px;
}
`;

export const Product = () => { 
const product = useSelector(state => state.products.product)

if (!product) return null

return (
    <>
    {product.product && product.status === 1 && ( 
    <>
    <MainContainer>
        <TextContainer>
            <Title className="productName">{product.product && product.product.product_name_sv}</Title>
            <Text>Carbohydrates: {product.product && product.product.nutriments.carbohydrates}g</Text>
            <InsulinCounter/>
        </TextContainer>
        <Img src={product.product && product.product.image_url}/>
    </MainContainer>
    </>
)}

{product.status === 0 && <Error msg={product.status_verbose} />}
</>
)}