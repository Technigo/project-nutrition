import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const LoadingIndicator = () => {
  const isLoading = useSelector(state => state.ui.isLoading)


  return (
    <>
      {isLoading && (

        <lottie-player id="loading"
          src="https://assets4.lottiefiles.com/datafiles/KS8ZpEdYbIuaZqg/data.json" background="transparent" speed="1" loop autoplay >
        </lottie-player>
      )}

    </>

  )
}


{/* // Kolla ca 59 min in för detta, tidigare för att ladda ner loading-indicator */ }
{/* // <Loader type="" color="" widht={} height={} /> */ }