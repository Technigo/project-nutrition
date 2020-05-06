import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userinterface } from '../reducers/userinterface'

export const Help = () => {
  const dispatch = useDispatch()
  dispatch(userinterface.actions.setHeader("Help"))

  return (
    <h1>Information on how to use this app</h1>
  )
}