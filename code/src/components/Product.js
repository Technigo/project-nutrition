import React from 'react'
import { useSelector } from 'react-redux'
import './products.css'

export const Product = () => {
    const product = useSelector(state => state.products.product)

    if (!product) return null

    console.log('product', product)

    return (
        <>
        {product.product && product.status === 1 && (
            <section className="showProduct">
                <h1>{product.product.product_name}</h1>
                <img src={product.product.image_small_url} />
                <h2> You will find it here: {product.product.stores}</h2>
            </section>
        )}
        {product.status === 0 && <h4>We couldnt find the product, pleas try again! <span>🤞🏼</span></h4>}
    
        </> 
    )
}

// {product.status === 0 && <Error msg={product.status_verbose} />}