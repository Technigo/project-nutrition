import React from 'react'
import { useSelector } from 'react-redux' 
// import { food } from 'reducers/food'


export const NutritionList = () => {
  // export const food = (code) => {
   const product = useSelector((state) => state.foods.foodProduct)
    console.log('product', product)
   //  console.log('productitem:', product)
    console.log(product.product)

    // console.log(`Code: ${code}`);
    // fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
    //   .then((data) => data.json())
    //   .then((json) => {
    //     setFood(json);
    //   });  
    
  
// const formattedIngredients = product.product.ingredients_original_tags.map((ingredient) => (
//   ingredient.replace(/\w+:/, '')
  
//   .replace('-', ' ')
// ))
  return (
    <>
    
      <div>
      
     
         {/* {all.product.ingredients_hierarchy.map((food) => (
          <li key={food.code}>{food.name}</li>
        ))}  */}
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