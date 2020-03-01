import React from 'react'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import './LoadingIndicator.css'

export const LoadingIndicator = () => {
  const isLoading = useSelector(state => state.ui.isLoading)

  return(
    <section className="loading-indicator">
      {isLoading && <Loader
        type="Puff"
        color="green"
        height={200}
        width={200}
        timeout={3000} //3 secs
        />
      }
    </section>
  )
}

