import React from 'react'
import { useSelector } from 'react-redux'

export const LoadingIndicator = () => {
    const isloading = useSelector(state => state.loading.isLoading)

    return (
        <>{isloading && (
            <h1>LOADING</h1>)}
        </>
    )
}