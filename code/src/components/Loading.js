import React from 'react'
import styled from 'styled-components/macro'

import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

export const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)

  return (
    <LoadingIcon>
      {isLoading && (
        <Loader
          type="BallTriangle"
          color="#00BFFF"
          height={150}
          width={150}
          padding={100}
        />)}
    </LoadingIcon>
  )
}

{/* // https://www.npmjs.com/package/react-loader-spinner */ }

const LoadingIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 50px;
`
