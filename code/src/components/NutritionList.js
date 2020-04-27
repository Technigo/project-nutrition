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
  

  return (
    <>
    
      <div>
      
     
         {/* {all.product.ingredients_hierarchy.map((food) => (
          <li key={food.code}>{food.name}</li>
        ))}  */}
       {product.product && (
        
        <ul>
         <li> {product.product.product_name_nb} </li>
         <li><img src={product.product.image_front_url} alt='pic'/> </li> 
         {product.product.ingredients_original_tags.map((food)=> (
           <li> {food} </li>
         ))}
         
         
        </ul>
       )}
       

     
      </div>
    
    </>
  )
}