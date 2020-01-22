import React from 'react'
import { useSelector } from 'react-redux'

/**** To show the product info  ****/

export const ProductInfo = () => {

    const barcodes = useSelector((state) => state.barcodes.items)

    return (
        <div>
            <h1>Products</h1>

            <ul>
                {barcodes.map((item) => (
                    <li key={item.id}>
                        {item.id}
                    </li>
                ))}
            </ul>
        </div>
    )
}