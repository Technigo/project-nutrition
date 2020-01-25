import React from "react"
import { useSelector } from "react-redux"





export const Product = () => {

  const item = useSelector((state) => state.products)
  if (!item) return null


  return (

    <div>
      <img src={item.product.image_url} alt="product-image" height="300" width="300" />
      <img src={item.product.image_front_small_url} alt="" />
      <p>The product name:  {item.product.product_name}</p>
      <p> Carbohydrates per 100g: {item.product.nutriments.carbohydrates_100g}</p>
      <p> Protein per 100g: {item.product.nutriments.proteins_100g}</p>
      <p> Energy kcal per 100g: {item.product.nutriments['energy-kcal_100g']}</p>
      <div height="500px" width="500px">
        <div height={item.product.nutriments.fat_100g}> Fat per 100g: </div>
      </div>
    </div>
  )
}