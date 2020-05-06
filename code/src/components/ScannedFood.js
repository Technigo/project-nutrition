import React from 'react'
import { useDispatch } from 'react-redux'
import { userinterface } from '../reducers/userinterface'
import { useSelector } from 'react-redux'

export const ScannedFood = () => {
  const dispatch = useDispatch()
  dispatch(userinterface.actions.setHeader("Found food"))
  const scannedFood = useSelector((store) => store.foodproducts)
  console.log(scannedFood.foodproduct.product.nutriments.energy)

  return (
    <>
      <h1>{scannedFood.foodproduct.product.product_name}</h1>
      <h3>Nutrition information of 100g</h3>
      <ul>
        <li>Energy {scannedFood.foodproduct.product.nutriments.energy} kj/{scannedFood.foodproduct.product.nutriments.energy_value} kcal</li>
        <li>Fat {scannedFood.foodproduct.product.nutriments.fat_100g} g</li>
        <li>Carbohydrate {scannedFood.foodproduct.product.nutriments.carbohydrates_100g} g</li>
        <li>Protein {scannedFood.foodproduct.product.nutriments.proteins_100g} g</li>
      </ul>
    </>
  )
}