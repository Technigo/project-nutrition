import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {
    const product = useSelector(state => state.products.product)

    if (!product) return null

    return (
        <>
            {product.product && product.status === 1 && (
                <section>
                    <h1>{product.product.product_name}</h1>
                    <p>Nutrition grade: {product.product.nutrition_grades}</p>
                    <img src={product.product.image_nutrition_url} />
                    <img src={product.product.image_nutrition_url} />
                </section>
            )}
            {product.status === 0 && <h1>{product.status_verbose}</h1>}
        </>
    )
}