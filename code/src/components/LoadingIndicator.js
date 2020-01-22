import React from 'react'
import { useSelector } from 'react-redux'

export const LoadingIndicator = () => {
  const isLoading = useSelector(state => state.ui.isLoading)

  return (
    <>
      {isLoading && <h3>Loading...</h3>}
    </>
  )
}