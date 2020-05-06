import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { userinterface } from '../reducers/userinterface'
import { ScanBarcode } from '../components/ScanBarcode'

export const Scanner = () => {
  const food = useSelector((store) => store.foodproducts)
  console.log(food)
  const dispatch = useDispatch()
  dispatch(userinterface.actions.setHeader("Scanner"))

  return (
    <>
      <ScanBarcode />
    </>
  )
}