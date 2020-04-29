import React from 'react'
import { useSelector } from 'react-redux' 



export const NutritionList = () => {

   const product = useSelector((state) => state.foods.foodProduct)
    console.log('product', product)
    console.log(product.product)


  return (
    <>
    
      <div>
       {product.product && (
         <div className='nutrition-card'> 
        <h2 className='product-name'>{product.product.product_name}</h2>
        <ul className='title-and-pic'>
         <li><img src={product.product.image_front_url} alt='pic'/> </li> 
         <li><span className='title'>Ingredients</span></li>
         </ul>
         <ul className='ingredient-list'>
         {product.product.ingredients_tags.map((ingredient)=> (
           <li> {ingredient.replace(/\w+:/, '').replace('-', ' ')} </li>
         ))}
        </ul>
        </div>
       )}

      </div>
    
    </>
  )
}