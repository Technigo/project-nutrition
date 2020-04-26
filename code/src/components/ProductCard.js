import React from "react"
import styled from 'styled-components'

const CardContainer = styled.section`
    display: flex;
    flex-direction: row;
    background-color: white;
    width: 300px;
    justify-content: space-between;
    border-radius: 8px;
    padding: 8px;
    margin-top: 0;
`

const Text = styled.p`
    font-size: 24px;
    margin: 4px;
`

const Info = styled.section`
    display: flex;
    flex-direction: column;
`
const ImageContainer = styled.section`
    width: 50px;
    height: auto;
`
const Image = styled.img`
    width: 100%
    height: auto;
`


export const ProductCard = ({ ...product }) => {
    
    return (
        <CardContainer>
            <Info>
                <Text>{product.product.product_name}</Text>
                <Text>{product.product.brands}</Text>
                <Text>{product.product.brands}</Text>
            </Info>
            <ImageContainer>
                <Image src={product.product.image_thumb_url} />
            </ImageContainer>   
        </CardContainer>
   
    
    )
}