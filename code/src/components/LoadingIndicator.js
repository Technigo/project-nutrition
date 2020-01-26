import React from 'react'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import styled from 'styled-components/macro'

const Container = styled.div`
    display:flex;
    justify-content:center;
`

export const LoadingIndicator = () => {
    const isloading = useSelector(state => state.loading.isLoading)

    return (
        <Container>{isloading && (
            <Loader type='Puff' color='#ffffff' height={150} width={150} />)}
        </Container>
    )
}