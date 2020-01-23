import React from 'react'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

export const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)

  return (
    <>
      {isLoading && (
        <Loader
          className='loader'
          type='Circles'
          color='#486689'
          height={50}
          width={50}
        />
      )}
    </>
  )
}
