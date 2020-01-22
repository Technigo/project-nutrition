import React from 'react'
import { useSelector } from 'react-redux'

/**** To show the product info  ****/

export const ProductInfo = () => {

    const barcodes = useSelector((state) => state.barcodes.items)

    return (
        <div>
            <h1>Products</h1>

            <ul>
                <img src={barcodes.items && barcodes.items.image_nutrition_url} />
                {/* {barcodes.map((item) => (
                    <li key={item.code} item={item}>
                        {item.product.generic_name_sv}
                    </li>
                ))} */}
            </ul>
        </div>
    )
}