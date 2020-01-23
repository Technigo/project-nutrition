import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {
  const product = useSelector((state) => state.products.product)

  //   if (!product) {
  //     return (
  //       <>
  //         <p>Oh no, I couldn't find this product.</p>
  //         <p>
  //           If you have the time, please visit world.openfoodfacts.org and add the
  //           product for others to find!
  //         </p>
  //       </>
  //     )
  //   }

  //   if (product) {
  //     return (
  //       <>
  //         <h2>{product.product && product.product.product_name}</h2>
  //         {product && (
  //           <h3>
  //             {' '}
  //             Please sort this as{' '}
  //             {product.product && product.product.packaging.toLowerCase()}
  //           </h3>
  //         )}

  //         <img src={product.product && product.product.image_url} />
  //       </>
  //     )
  //   }
  // }

  return (
    <>
      {!product && (
        <>
          <p>Oh no, I couldn't find this product.</p>
          <p>
            If you have the time, please visit world.openfoodfacts.org and add
            the product for others to find!
          </p>
        </>
      )}

      {product && (
        <>
          <h2>{product.product && product.product.product_name}</h2>
          {product.product && (
            <h3>
              Please sort this as{''} {product.product.packaging.toLowerCase()}
            </h3>
          )}

          <img
            className='product-image'
            src={product.product && product.product.image_url}
          />
        </>
      )}
    </>
  )
}
