import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {
    const product = useSelector(state => state.products.product)

    if (!product) return null

    console.log('product', product)

    return (
        <>
        {product.product && product.status === 1 && (
            <section>
                <h1>{product.product.product_name}</h1>
                <img src={product.product.image_small_url} />
            </section>
        )}
        {product.status === 0 && <h3>{product.status_verbose}</h3>}
    
        </> 
    )
}

// {product.status === 0 && <Error msg={product.status_verbose} />}