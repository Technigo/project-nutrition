import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'




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
    <div className="product-container">
      {item.status === 0 ? <div>Product not found</div> :
        <div>
          <img src={item.product.image_url} alt="product-image" height="300" width="300" />
          <img src={item.product.image_front_small_url} alt="" />
          <p>The product name:  {item.product.product_name}</p>
          <p> Carbohydrates per 100g: {item.product.nutriments.carbohydrates_100g}</p>
          <p> Protein per 100g: {item.product.nutriments.proteins_100g}</p>
          <p> Energy kcal per 100g: {item.product.nutriments['energy-kcal_100g']}</p>
          <div height="500px" width="500px"></div>
          <div height={item.product.nutriments.fat_100g}> Fat per 100g: </div>
        </div>
      }
    </div>
  )
}