import React from 'react'
import { useSelector } from 'react-redux'

export const LoadingIndicator = () => {
  const islLoading = useSelector((state) => state.ui.isLoading)

  return <>{islLoading && <h1>LOADING</h1>}</>
}
