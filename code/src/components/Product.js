import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {
    const productScan = useSelector(state => state.products.product)

    if (!productScan)
        return (
            <div>product not found</div>
        )

    console.log('product', productScan)

    return (
        <>
            {productScan.product && (
                <section>
                    <h1>{productScan.product.product_name}</h1>
                    <h3>{productScan.product.code}</h3>
                    <img src={productScan.product.image_front_thumb_url} alt="product" />
                </section>
            )}
        </>
    )
}