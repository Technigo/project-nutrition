import React from 'react'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

export const Loading = () => {
  const isLoading = useSelector(state => state.ui.isLoading)

  return (
    <>
    {isLoading && (
            <Loader
            type="RevolvingDot"
            color="#32936F"
            height={100}
            width={100}
            timeout={3000} //3 secs
   
         />
    )}
    </>
  )
}