import React from 'react'
import { useSelector } from 'react-redux'
import { ScaleLoader } from 'react-spinners'
import styled from 'styled-components/macro'

const Loader = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 93vh;
`

export const LoadingIndicator = () => {
    const isLoading = useSelector(state => state.ui.isLoading)

    return (
        <Loader>
            <ScaleLoader color={"#3061fc"} loading={isLoading} />
        </Loader>
    )
}