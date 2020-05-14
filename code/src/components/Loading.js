
import React from "react"
import { useSelector } from "react-redux"
import Loader from "react-loader-spinner"
import styled from 'styled-components'

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const Loading = () => {
  const isLoading = useSelector(state => state.ui.isLoading)

  return (
    <LoaderContainer>
      {isLoading && (
        <Loader
          type='ThreeDots'
          color='pink' />
      )}
    </LoaderContainer>
  )
}
