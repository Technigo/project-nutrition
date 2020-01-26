import React from 'react'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

export const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)

  return (
    <>
      {isLoading && (
        <Loader type="Audio" color="white" height={80} width={80} />
      )}
    </>
  )
}