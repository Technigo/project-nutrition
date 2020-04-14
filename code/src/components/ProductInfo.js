import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto; 
`

/**** To show the product info  ****/
export const ProductInfo = () => {

    const product = useSelector((state) => state.products.product)
    if (!product) return null

    return (
        <Section>
            <h1>Product info:</h1>
            <p>{product.product && product.product.product_name}</p>
            <img src={product.product && product.product.image_url} />
            <img src={product.product && product.product.image_nutrition_url} />
            <img src={product.product && product.product.images[1]} />
            <img src={product.product && product.product.images[1].sizes[100]} />
            <img src={product.product && product.product.images[1].sizes[400]} />
            <p>{product.product && product.product._keywords[1]}</p>
            <p>{product.product && product.product.ingredients_original_tags}</p>
        </Section>
    )
}
