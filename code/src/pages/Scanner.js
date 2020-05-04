import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ScanBarcode } from '../components/ScanBarcode'

export const Scanner = () => {
  const food = useSelector((store) => store.foodproducts)
  console.log(food)

  return (
    <NavLink to="/scanner/">
      <ScanBarcode />
    </NavLink>
  )
}