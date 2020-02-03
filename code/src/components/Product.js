import React from 'react'
import { useSelector } from 'react-redux'
//this component Product, whill show the product when we fetched it
import styled from 'styled-components/macro'

const h4 = styled.h4`
    margin: 0;
    padding: 0;
`
const ProductContainer = styled.div`
    // background:  #e5faf5;
    // background-image: url('../assets/tag.jpg');   
    // height: 63vh;  
    margin-top: -10px;  
    display: flex;
    flex-direction: column;
    align-items: center;    
`
const ProductHeading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: darkslategrey;
    // padding-right: 5px;
    display: flex;
`
const ProductInfo = styled.div`
    align-items: center;
    justify-content: center;
    color: darkslategrey;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 1;
`
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

    const formattedCategories =
        scan.product &&
        scan.product.ingredients_tags.map(cat =>
            // cat.replace(/-/gi, ' ')
            cat.replace('sv:', '').replace('en:', '')
        )


    return (

        <>
            {scan.product && scan.status === 1 && (
                <ProductContainer>
                    <ProductHeading>
                        {/* <img src={scan.product && scan.product.image_thumb_url} alt="" /> */}
                        <h3>{scan.product && scan.product.product_name}</h3>
                        {/* <h4>Ingredients:{product.product && product.product.ingredients_tags}</h4> */}
                    </ProductHeading>

                    <ProductInfo>
                        <h4>Ingredients:</h4>
                        <ul>
                            {formattedCategories.map((cat, index) => (
                                <li key={index}>{cat}</li>
                            ))}
                        </ul>
                    </ProductInfo>

                    <ProductStore>
                        <h4 className="Stores">Stores:{scan.product && scan.product.stores}</h4>
                    </ProductStore>

                    <ProductImg>
                        {/* first checking that we get the product in the fetch && then show the picture of the product */}
                        <img src={scan.product && scan.product.image_url} alt="" />
                        {/* <img src={scan.product && scan.product.image_nutrition_url} alt="" /> */}
                    </ProductImg>
                </ProductContainer>
            )}
            {scan.status === 0 && <h1>{scan.status_verbose}</h1>}
        </>
    )
}

