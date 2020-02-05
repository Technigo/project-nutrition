import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './loadingindicator.css'

export const LoadingIndicator = () => {
  const isLoading = useSelector(state => state.ui.isLoading)


  return (
    <>
      {isLoading && (

        <div className="loading"></div>

      )}

    </>

  )
}
