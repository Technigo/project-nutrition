import React from 'react'
import { useSelector } from 'react-redux'
import mglass from 'assets/mglass.jpg'
import styled from "styled-components"

const Icon = styled.img`
height:30px;
margin-left:20px;

`

const Wrap = styled.div`
display:flex;

`

const Title = styled.h1`
margin:0;
`



export const Product = () => {
    const product = useSelector(state => state.facts.products)

    if (!product)
        return null

    return (
        <>
            {product && (
                <>
                    <Wrap>
                        <Title>Search find  </Title>
                        <Icon alt="glass" src={mglass} />
                    </Wrap>
                    <h3>Name of product:{product.product && product.product.product_name}</h3>
                    <h4>Brand: {product.product && product.product.brands}</h4>
                    <img alt="product" src={product.product && product.product.image_url} />
                    <h4>Ingredients:</h4> <img alt="ingrediens" src={product.product && product.product.image_ingredients_url} />

                </>)}
        </>
    )
}