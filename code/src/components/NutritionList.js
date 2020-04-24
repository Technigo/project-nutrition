import React, {useState} from 'react'
import { useSelector } from 'react-redux' 
// import { food } from 'reducers/food'


export const NutritionList = (code) => {
  // export const food = (code) => {
    const [food, setFood] = useState()
    console.log(`Code: ${code}`);
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((data) => data.json())
      .then((json) => {
        setFood(json);
      });  
  

  return (
    <div>
      <h1> Todos: </h1>
      <ul>
        {food.map((ingredient) => (
          <li key={ingredient.code}>
            {ingredient}
          </li>
        ))}
      </ul>

    </div>
  )
}