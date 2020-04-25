import React from 'react'
import { useSelector } from 'react-redux'

export const LoadingIndicator = () => {
  const isLoding = useSelector((state) => state.loading.isLoding)

  return (
    <> 
    {isLoding && <div>!! Loading !!</div>}
    </>
  )
}