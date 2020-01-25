import React from "react"
import { useSelector } from "react-redux"

export const SavedProducts = () => {
  const products = useSelector(state => state.products.savedProducts)

  if (!products)
    return null

  console.log(products)


  return (
    <>

      {products &&
        <>
          <h1>Saved products:</h1>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
          {/* <p>weight: {product.product && product.product.quantity}</p>
      <img src={product.product && product.product.image_url} /> */}
        </>
      }

    </>
  )

}
