import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { userinterface } from '../reducers/userinterface'
import { NavLink } from 'react-router-dom'
import { ScanBarcode } from '../components/ScanBarcode'

export const Scanner = () => {
  const food = useSelector((store) => store.foodproducts)
  console.log(food)
  const dispatch = useDispatch()
  dispatch(userinterface.actions.setHeader("Scanner"))

  return (
    <NavLink to="/scanner/">
      <ScanBarcode />
    </NavLink>
  )
}