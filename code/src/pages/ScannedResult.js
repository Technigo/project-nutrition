import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Error } from '../components/Error'
import { ScannedFood } from '../components/ScannedFood'

export const ScannedResult = () => {
  const scannedFood = useSelector((store) => store.foodproducts.foodproduct)

  return (
    <>
      {(scannedFood.status_verbose === "product found") ? <ScannedFood /> : <Error />}
      <NavLink to="/scanner/">Scan again</NavLink>
    </>
  )
}