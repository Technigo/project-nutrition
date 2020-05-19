import React from 'react'
import { useSelector } from 'react-redux' 

export const NutritionList = () => {
   const product = useSelector((state) => state.foods.foodProduct)


  return (
    <>
    
      <div>
      {product.status === 0 ? <h2>No product found</h2> :  

       product.product && (
         <div className='nutrition-card'> 
          {product.product && (<h2 className='product-name'>{product.product.product_name}</h2>)}  
          
            <ul className='title-and-pic'>
              {product.product && (<li><img src={product.product.image_front_url} alt='pic'/> </li>  )}   
              {product.product && (<li><span className='title'>Ingredients</span></li>)} 
            </ul>
            <ul className='ingredient-list'>
              <li> 
              {product.product.ingredients_tags.length > 0 ? product.product.ingredients_tags.map((ingredient) => 
               ( ingredient.replace(/\w+:/, '').replace('-', ' '))) : `No ingredients found` } 
           </li> 
            </ul>
            <div>
             
            </div>
          </div>
       )} 
      </div>
    
    </>
  )
}