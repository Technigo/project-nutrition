import React from 'react'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

export const LoadingIndicator = () => {
    const isloading = useSelector(state => state.loading.isLoading)

    return (
        <>{isloading && (
            <Loader type='Puff' color='#ffffff' height={150} width={150} />)}
        </>
    )
}