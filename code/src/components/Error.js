import React from 'react'
import { useDispatch } from 'react-redux'
import { userinterface } from '../reducers/userinterface'

export const Error = () => {
  const dispatch = useDispatch()
  dispatch(userinterface.actions.setHeader("Error"))

  return (
    <>
      <h1>There is an error</h1>
    </>
  )
}