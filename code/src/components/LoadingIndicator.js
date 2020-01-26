import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const LoadingIndicator = () => {
  const isLoading = useSelector(state => state.ui.isLoading)


  return (
    <>
      {isLoading && (
        <h1>LOADING</h1>
      )}

    </>

  )
}


{/* // Kolla ca 59 min in för detta, tidigare för att ladda ner loading-indicator */ }
{/* // <Loader type="" color="" widht={} height={} /> */ }