import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import Loader from 'react-loader-spinner'

const LoadingWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoadingIndicator = () => {
  const isLoading = useSelector(state => state.ui.isLoading)

  return (
    <>
      {isLoading &&
        <LoadingWrapper>
          <Loader type="ThreeDots" color="#333" height={80} width={80} />
        </LoadingWrapper>
      }
    </>
  )
}