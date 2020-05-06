import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userinterface } from '../reducers/userinterface'

export const ScannedResult = () => {
  const dispatch = useDispatch()
  dispatch(userinterface.actions.setHeader("Add food"))

  return (
    <>
      <h1>Here is the scanned food</h1>
      <NavLink to="/scanner/">Scan again</NavLink>
    </>
  )
}