import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components/macro"


export const SavedProducts = () => {
  const savedProducts = useSelector(state => state.products.savedProducts)

  if (!savedProducts)
    return null

  console.log(savedProducts)


  return (
    <>

      {savedProducts[0] &&
        <SavedList>
          <h1>Saved products 📝</h1>
          <ul>
            {savedProducts.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
          {/* <p>weight: {product.product && product.product.quantity}</p>
      <img src={product.product && product.product.image_url} /> */}
        </SavedList>
      }

    </>
  )

}

const SavedList = styled.div`
background: rgba(255, 255, 255, 0.8);
padding: 10px;
margin: 20px;
`