import React from 'react'
import { useSelector } from 'react-redux'

export const FoodsList = () => {
  const foodsList = useSelector(state => state.macros.foods)
  
  const totalCalories = () => {
    let sum = 0
    foodsList.map(food => {
      return sum += food.kcal*1
    })
    return sum
  }
  return (
    <>
      <p>Total calories: {totalCalories()}</p>
      <ul>
        {foodsList.map((food, index) => {
          return (
            <li key={index}>{food.name}</li>
          )
        })}
      </ul>
    </>
  )
}