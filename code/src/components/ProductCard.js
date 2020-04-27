import React from "react"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { nutrition } from '../reducers/nutrition'

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


export const ProductCard = ({ shelf, ...product }) => {
    const dispatch = useDispatch()

    const increaseQuantity = (shelf, code) => {

        dispatch(nutrition.actions.increaseQuantity({ shelf: shelf, productId: code }))

    }

    const decreaseQuantity = (shelf, code) => {

        dispatch(nutrition.actions.decreaseQuantity({ shelf: shelf, productId: code }))

    }

    const removeProduct = (shelf, code) => {
        dispatch(nutrition.actions.removeProduct({ shelf: shelf, productId: code }))
    }


    return (
        <CardContainer>
            <Info>
                <Text>{product.product.product_name}</Text>
                <Text>{product.quantity.toString()}</Text>
                <button onClick={() => decreaseQuantity(shelf, product.code)}>-</button>
                <button onClick={() => increaseQuantity(shelf, product.code)}>+</button>
                <button onClick={() => removeProduct(shelf, product.code)}>[remove item]</button>
                <Link to={`/${product.code}`}>{product.product.brands}</Link>
            </Info>
            <ImageContainer>
                <Image src={product.product.image_thumb_url} />
            </ImageContainer>
        </CardContainer>


    )
}