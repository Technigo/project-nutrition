import React from 'react'
import { useSelector } from 'react-redux'

export const Loading = () => {
  const isLoading = useSelector(state => state.userinterface.isLoading)

  return (
    <>
      {isLoading && (
        <p>Loading</p>
      )}
    </>
  )
}