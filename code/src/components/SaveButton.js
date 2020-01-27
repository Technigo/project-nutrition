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
      onClick={handleSave}>Save <span role="img" aria-label="list emoji">📝</span></Save>
  )
}

const Save = styled.button`
background-color: olive;
color: white;
font-family: 'Quicksand', sans-serif;
font-size: 26px;
font-weight: bold;
border: 1px solid black;
border-radius: 10px;
margin: 10px;
padding: 10px 18px;
`
