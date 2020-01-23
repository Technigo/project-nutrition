import React from 'react'
import { useSelector } from 'react-redux'

/**** To show the product info  ****/

export const ProductInfo = () => {

    const product = useSelector((state) => state.products.product)

    if (!product) return null

    console.log('product', product)

    return (
        <>
            <h1>Product info:</h1>
            <img src={product.product && product.product.image_nutrition_url} />
            <p>{product.product && product.product._keywords[1]}</p>
            <li>{product.product && product.product.product_name}</li>
            <p>{product.product && product.product.product_name}</p>
        </>
    )
}


// <ul>
//                 <p>{product.product && product.product._keywords[1]}</p>
//                 <p>{product.product && product.product._keywords[1]}</p>
//                 <li>{product.product && product.product.product_name}</li>
//                 <li>{product.product && product.product.product_name}</li>
//                 {/* {barcodes.map((item) => (
//                     <li key={item.code} item={item}>
//                         {item.product.generic_name_sv}
//                     </li>
//                 ))} */}
//             </ul>