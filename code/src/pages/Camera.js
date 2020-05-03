import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export const Camera = () => {
  const fooditems = useSelector((store) => store.food)
  console.log(fooditems)

  return (
    <NavLink to="/camera/">
      This is the camera comp {fooditems.items[0]}
    </NavLink>
  )
}