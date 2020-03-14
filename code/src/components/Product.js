import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {
    const productScan = useSelector(state => state.products.product)

    if (productScan && productScan.status === 0)
        return (
            <>
                <div className="productNotFound">product not found</div>
            </>
        )

    console.log('product', productScan)

    var levels
    if (productScan.product)
        levels = productScan.product.nutrient_levels

    return (
        <>
            {productScan.product && (
                <section className="productFound">
                    <img src={productScan.product.image_front_thumb_url} alt="product" />
                    <h1>{productScan.product.product_name}</h1>
                    <h3>Barcode:<br /> {productScan.product.code}</h3>
                    <h3><b>Nutrient levels:</b></h3>
                    <div className="wrapperNutrientLevels">
                        <ul className="columnLeftNutrient">
                            <li>Sugar: </li>
                            <li>Fat: </li>
                            <li>Saturated Fat: </li>
                            <li>Salt: </li>
                        </ul>
                        <ul className="columnRightNutrient">
                            <li>{levels.sugars}</li>
                            <li>{levels.fat}</li>
                            <li>{levels["saturated-fat"]}</li>
                            <li>{levels.salt}</li>
                        </ul>
                    </div>
                </section>
            )}
        </>
    )

}