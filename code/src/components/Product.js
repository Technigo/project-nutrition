import React from 'react'
import { useSelector } from 'react-redux'
//this component Product, whill show the product when we fetched it
import styled from 'styled-components'

const ProductHeading = styled.div`
    display: flex;
    flex-direction: row;
    // width: 500px;
    justify-content: center;
`
const ProductInfo = styled.div`
    display: flex;
    flex-direction: row;
    // width: 500px;
    justify-content: center;   
`
const ProductStore = styled.div`
    display: flex;
    flex-direction: row;
    // width: 500px;
    justify-content: center; 
`
const ProductImg = styled.div`
    display: flex;
    flex-direction: row;
    // width: 500px;
    justify-content: center;
`


//this component Product, whill show the product when we fetched it
export const Product = () => {
    const product = useSelector(state => state.products.product)

    // if we dont have a product at all, we dont want to show anything, return null
    if (!product) return null
    // if we get a product, we want to show it
    console.log('product', product)


    return (
        <>
            <ProductHeading>
                <img src={product.product && product.product.image_thumb_url} alt="" />
                <h1>{product.product && product.product.product_name}</h1>
                {/* <h4>Ingredients:{product.product && product.product.ingredients_tags}</h4> */}
            </ProductHeading>

            <ProductInfo>
                <h4>Ingredients:</h4>
                <h4>{product.product && product.product.ingredients_tags}</h4>
                <h4>{product.product && product.product._keywords}</h4>
            </ProductInfo>

            <ProductStore>
                <h5 className="Stores">Stores:{product.product && product.product.stores}</h5>
            </ProductStore>
            <ProductImg>
                {/* first checking that we get the product in the fetch && then show the picture of the product */}
                <img src={product.product && product.product.image_url} alt="" />
                {/* <img src={product.product && product.product.image_nutrition_url} alt="" /> */}
            </ProductImg>

        </>
    )
}



