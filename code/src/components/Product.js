import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { ProductImage } from './ProductImage'
import { ProductInfo } from './ProductInfo'
import { ProductDiagram } from './ProductDiagram'

import './css/product.css'


export const Product = () => {
  const history = useHistory()

  const item = useSelector((state) => state.products.item)
  console.log("ITEM:", item)

  // if item == undefined (default) go to /scan
  if (item === undefined) {
    history.push("/scan")
    return (<div></div>)
  }

  return (
    <div className="product">
      {item.status === 0 ?
        <div className="not-found">
          <h2>Oops...! Product not found!</h2>
          <h3>Scan the product again or try another product</h3>
        </div> :
        <div>
          <h1 className="title">{item.product_name}</h1>
          <div className="product-wrapper">
            <ProductImage product={item.product} />
            <ProductDiagram product={item.product} />
            <ProductInfo product={item.product} />
          </div>
        </div>

      }
    </div >
  )
}