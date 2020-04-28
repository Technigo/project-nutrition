import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { nutrition } from '../reducers/nutrition'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faChevronCircleDown, faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";

const CardContainer = styled.section`
    display: flex;
    align-items: center;
    border-radius: 500px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    background-color: #f1f1f1;
    padding: 8px;
    margin: 10px;
    width: 70%;
`

const Thumbnail = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: all .8s ease-in-out;
  margin-right: 8px;
  &:hover {
      transform: scale(3)
  }
`

const Text = styled.p`
    font-size: 13px;
    color: black;
    text-decoration: none;
    width: 100px;
`

const ButtonWrapper = styled.div`
display: flex;
flex-direction: column;
`
const QuantityButtons = styled.button`
border: none;
background: transparent;
`

const RemoveButton = styled.button`
border: none;
background: transparent;
`


export const ProductCard = ({ shelf, ...product }) => {
    console.log(product)
    const dispatch = useDispatch()
    const [chipText, setChipText] = useState(`${product.product.product_name.substr(0, 20)}..`)

    const increaseQuantity = (shelf, code) => {

        dispatch(nutrition.actions.increaseQuantity({ shelf: shelf, productId: code }))

    }

    const decreaseQuantity = (shelf, code) => {

        dispatch(nutrition.actions.decreaseQuantity({ shelf: shelf, productId: code }))

    }

    const removeProduct = (shelf, code) => {
        dispatch(nutrition.actions.removeProduct({ shelf: shelf, productId: code }))
    }

    const mouseEnter = () => {
        setChipText(product.product.product_name)
    }

    const mouseLeave = () => {
        setChipText(product.product.product_name.substr(0, 25))
    }

    return (
        <CardContainer>
            <Thumbnail background={product.product.image_thumb_url} />
            <Link to={`/ ${product.code} `} style={{ textDecoration: "none" }}>
                <Text onMouseEnter={() => mouseEnter()}
                    onMouseLeave={() => mouseLeave()}
                >{chipText}</Text>
            </Link>
            <p>({product.quantity})</p>
            <ButtonWrapper>
                <QuantityButtons onClick={() => increaseQuantity(shelf, product.code)}>
                    <FontAwesomeIcon icon={faChevronCircleUp} />
                </QuantityButtons>
                <QuantityButtons onClick={() => decreaseQuantity(shelf, product.code)}>
                    <FontAwesomeIcon icon={faChevronCircleDown} />
                </QuantityButtons>
            </ButtonWrapper>
            <RemoveButton onClick={() => removeProduct(shelf, product.code)}>
                <FontAwesomeIcon icon={faTimesCircle}
                    style={{ color: "red", fontSize: 18 }} />
            </RemoveButton>
        </CardContainer>


    )
}