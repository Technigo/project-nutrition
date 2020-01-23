import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => { 
const product = useSelector(state => state.products.product)

if (!product) return null
console.log(product)

return (
    <>
    make a reusable card to put here in Products.js  with the button and product info
    <h1>{product.product && product.product.product_name_sv}</h1>
     
     <h2>Carbohydrates: {product.product && product.product.nutriments.carbohydrates}g</h2>
     
     
     
    <img src={product.product && product.product.image_url}/>
    </>
)
}