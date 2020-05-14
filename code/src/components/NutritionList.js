import React from 'react'
import { useSelector } from 'react-redux' 

export const NutritionList = () => {
   const product = useSelector((state) => state.foods.foodProduct)


  return (
    <>
    
      <div>
       {product.product && (
         <div className='nutrition-card'> 
          {product.product && (<h2 className='product-name'>{product.product.product_name}</h2>)}   
            <ul className='title-and-pic'>
              {product.product && (<li><img src={product.product.image_front_url} alt='pic'/> </li>  )}   
              {product.product && (<li><span className='title'>Ingredients</span></li>)} 
            </ul>
            <ul className='ingredient-list'>
              {product.product.ingredients_tags && product.product.ingredients_tags.map((ingredient) => 
               <li> { ingredient.replace(/\w+:/, '').replace('-', ' ')} </li> )} 
            </ul>
          </div>
       )}
      </div>
    
    </>
  )
}