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
      
      <ul>
         {/* {all.product.ingredients_hierarchy.map((food) => (
          <li key={food.code}>{food.name}</li>
        ))}  */}
       {product.product && (
         <li> info123: {product.product.manufacturing_places} </li> 
       )}
       

      </ul>
      </div>
    
    </>
  )
}