import React from 'react'
import { useSelector } from 'react-redux'
//this component Product, whill show the product when we fetched it
import styled from 'styled-components/macro'


const ProductContainer = styled.div`
    background:  #e5faf5;
    background-image: url('../assets/tag.jpg');   
    // padding-top: 150px;
    // padding-bottom: 150px;  
    height: 63vh;  
    margin: 0px;         
`
const ProductHeading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: darkslategrey;
`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: darkslategrey;
`
// const ProductN = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     color: darkslategrey;
// `
const ProductStore = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: darkslategrey;
`
const ProductImg = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

//this component Product, whill show the product when we fetched it
export const Product = () => {
    const scan = useSelector(state => state.products.product)
    // if we dont have a product at all, we dont want to show anything, return null
    if (!scan) return null
    // if we get a product, we want to show it
    console.log('SCAN', scan)

    // const formattedCategories =
    //     scan.product &&
    //     scan.product.nutrition_score_debug.map(cat =>
    //         cat.replace(/-/gi, ' ')
    // cat.replace('en:', '').replace(/-/gi, ' ')
    // )

    return (
        <ProductContainer>
            <ProductHeading>
                {/* <img src={scan.product && scan.product.image_thumb_url} alt="" /> */}
                <h1>{scan.product && scan.product.product_name}</h1>
                {/* <h4>Ingredients:{product.product && product.product.ingredients_tags}</h4> */}
            </ProductHeading>

            <ProductInfo>
                <h4>Ingredients:</h4>
                <h4>{scan.product && scan.product.ingredients_original_tags[0]}</h4>
                {/* <h4>NUTRITION:</h4>
                <h4>{scan.product && scan.product.nutrition_score_debug}</h4> */}
            </ProductInfo>

            {/* <ProductN>
                <h4>Nutrition score:</h4>
                <h4>{scan.product && scan.product.nutrition_score_debug}</h4>
            </ProductN> */}

            <ProductStore>
                <h4 className="Stores">Stores:{scan.product && scan.product.stores}</h4>
            </ProductStore>

            <ProductImg>
                {/* first checking that we get the product in the fetch && then show the picture of the product */}
                <img src={scan.product && scan.product.image_url} alt="" />
                {/* <img src={scan.product && scan.product.image_nutrition_url} alt="" /> */}
            </ProductImg>
        </ProductContainer>
    )
}