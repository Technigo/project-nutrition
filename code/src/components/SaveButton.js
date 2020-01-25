import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { products } from "reducers/products"
import styled from "styled-components/macro"



export const SaveButton = () => {

  const dispatch = useDispatch()
  const product = useSelector(state => state.products.product)

  const handleSave = () => {
    dispatch(products.actions.saveProduct(product.product.product_name))
  }

  return (
    <Save type="button"
      onClick={handleSave}>Save this product to list</Save>
  )
}

const Save = styled.button`
background-color: hotpink;
color: black;
font-size: 16px;
border: 1px solid black;
border-radius: 10px;
margin: 10px;
`
