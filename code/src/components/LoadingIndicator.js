import React from "react"
import { useSelector } from "react-redux"
import Loader from "react-loader-spinner"

export const LoadingIndicator = () => {
  const isLoading = useSelector(state => state.ui.isLoading)

  return (
    <>
      {isLoading && (
        <Loader type='Puff' color='00BFFF' height={100} width={100} />
      )}
    </>
  )
}
