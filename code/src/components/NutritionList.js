import React from 'react'
import { useSelector } from 'react-redux' 

export const NutritionList = () => {
   const product = useSelector((state) => state.foods.foodProduct)


   return (
    <>
   {product.status === 0 && (
     <div className='nutrition-card'>
       <h2>No product found</h2>
       </div>
   )}
    {product.product && product.status === 1 && (
      <div className='nutrition-card'>
    <h2 className='product-name'>{product.product.product_name}</h2>  
      <ul className='title-and-pic'>
        {product.product && (<li><img src={product.product.image_front_url} alt='pic'/> </li>  )}   
        {product.product && (<li><span className='title'>Ingredients</span></li>)} 
      </ul>
      <ul className='ingredient-list'>
        {product.product.ingredients_tags && product.product.ingredients_tags.length > 0 ? product.product.ingredients_tags.map((ingredient) => 
         (
           <li>{ingredient.replace(/\w+:/, '').replace('-', ' ')}</li>))
           : <li>No ingredients found</li>  } 
      </ul>
      </div> 
      )}
      <div>
      </div>
      </>
)
}