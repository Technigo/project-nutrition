import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userinterface } from '../reducers/userinterface'

export const Home = () => {
  const dispatch = useDispatch()
  dispatch(userinterface.actions.setHeader("Home"))

  return (
    <NavLink to="/">
      <h1>Home</h1>
    </NavLink>
  )
}