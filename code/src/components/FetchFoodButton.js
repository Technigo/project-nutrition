import React from 'react'
import { useDispatch } from 'react-redux'
import { food } from 'reducers/foods'
import { useSelector } from 'react-redux' 



export const FetchFoodButton = () => {



     return (
       <div>
         <h1> Food </h1>
        
          <button type='button'>Fetch food</button>
       </div>
     )

  
   
  
}