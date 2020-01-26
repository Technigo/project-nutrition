import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Error } from 'components/Error'

export const Product = () => { 
const product = useSelector(state => state.products.product)
//const showProduct = useSelector(state => state.showProduct)
const [showProduct, setShowProduct] = useState(false)

if (!product) return null
//if (!product || !showProduct) return null
console.log(product)
console.log("showProduct: " + showProduct)

return (
    <>
    {product.product && product.status === 1 && ( 
    <section>
    <h1 className="productName">{product.product && product.product.product_name_sv}</h1>
     <h2>Carbohydrates: {product.product && product.product.nutriments.carbohydrates}g</h2>
    <img src={product.product && product.product.image_url}/>
    </section>
    
)}

{product.status === 0 && <Error msg={product.status_verbose}/>}
</>
)}