import React from 'react'
import { useDispatch } from 'react-redux'
import { food } from 'reducers/food'
import { useSelector } from 'react-redux' 



export const FetchFoodButton = () => {
  const dispatch = useDispatch()

  // const food = useSelector((state) => state.foodReducer.all)

     return (
       <div>
         <h1> Todos: </h1>
        
          <button type='button'>Testar</button>
       </div>
     )

  
   
  
}