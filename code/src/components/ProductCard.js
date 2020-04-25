import React from "react"


export const ProductCard = ({ ...product }) => {

    return <p>{product.product.product_name}</p>
}