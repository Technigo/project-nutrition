import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { products } from "reducers/products"
import styled from "styled-components/macro"

import { SavedProducts } from "./SavedProducts"


export const Product = () => {
  const product = useSelector(state => state.products.product)
  const dispatch = useDispatch()

  // const handleSave = () => {
  //   // dispatch(products.actions.saveProduct(product))
  //   dispatch(products.actions.saveProduct(product.product.product_name))
  // }

  if (!product)
    return null

  console.log(product)


  return (
    <>
      {product.product && product.status === 1 && (
        <section><h1>Product:</h1>
          <h3>{product.product.product_name}</h3>
          <p>weight: {product.product.quantity}</p>
          <img src={product.product.image_url} />

          {/* <SaveButton type="button" onClick={handleSave()}>Save this product to list</SaveButton> */}
        </section>
      )}
      {product.status === 0 && <h1>{product.status_verbose}</h1>}
    </>
  )

}

const SaveButton = styled.button`
background-color: hotpink;
color: black;
font-size: 16px;
border: 1px solid black;
border-radius: 10px;
margin: 10px;
`