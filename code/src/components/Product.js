import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const Product = () => {
const product = useSelector(state => state.products.product)
const [palmOil, setPalmOil ] = useState(false)


if (!product) return null

console.log('product: ', product)

  return (
    <ProductCard>
      {product.product && product.status === 1 && (
      <ProductDiv>
        {!product.product.product_name && (
          <p>No product information found</p>
        )}
        
        {product.product.image_front_url && (
        <img src={product.product.image_front_url} alt="Your scanned product"/>
          )}
        <Title>{product.product.product_name}</Title> 

        {!product.product && (
        <Button type="button" onClick={() => {
          setPalmOil(true) 
        }}>
          Palm oil?
        </Button>
        )}

      {palmOil && (
      <div>
        {product.product.ingredients_from_palm_oil_tags.length === 0 && (
        <p>There is no known ingredients from palm oil</p>
          )}
      {product.product.ingredients_from_palm_oil_tags.length > 0 && (
        <p>This product is not free from palm oil</p>
          )}
      </div>
      )}
      </ProductDiv>     
        )
      }
{product.status === 0 && (
<h1>{product.status_verbose}</h1>
 )}
 {!product.product  && (
<h1>No product found</h1>
 )}
</ProductCard>
)
}

const ProductCard = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
padding: 5px 10px;
margin-top: 0px;
background: rgb(54,110,0, 0.5);
/* opacity: 0.6; */
box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2), 0px 3px 3px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
`
const ProductDiv = styled.div`
opacity: 1;
`
const Title = styled.h1`
font-size: 20px;
color: white;
`
const Button = styled.button`
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: 50px;
padding: 5px 10px;
margin: 10px 0px;
background: #366e00;
border: none;
box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2), 0px 3px 3px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
`