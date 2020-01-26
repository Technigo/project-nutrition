import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Error } from 'components/Error'
import { InsulinCounter } from 'components/InsulinCounter'
import styled from "styled-components/macro";

const Container = styled.div`
width: 320px;
height: 600px;
`
const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Title = styled.h1`
margin-top: 150px;
`
const Text = styled.p`
margin: 0px;
margin-bottom: 10px;
`

const Img = styled.img`
width: 320px;
margin-top: 50px;
`

export const Product = () => { 
const product = useSelector(state => state.products.product)
//const showProduct = useSelector(state => state.showProduct)
const [showProduct, setShowProduct] = useState(false)

if (!product) return null
//if (!product || !showProduct) return null
console.log(product)
console.log("showProduct: " + showProduct)

return (
    <>
    {product.product && product.status === 1 && ( 
    <Container>
        <TextContainer>
            <Title className="productName">{product.product && product.product.product_name_sv}</Title>
            <Text>Carbohydrates: {product.product && product.product.nutriments.carbohydrates}g</Text>
            <InsulinCounter/>
        </TextContainer>
        <Img src={product.product && product.product.image_url}/>
    </Container> 
)}

{product.status === 0 && <Error msg={product.status_verbose}/>}
</>
)}