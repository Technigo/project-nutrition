import React from 'react'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'


export const LoadingIndicator = () => {
    const isLoading = useSelector((state) => state.ui.isLoading)

    return (
        <>
            {isLoading && (
                <Loader type="ThreeDots" color="red" height={80} width={80} />
            )}
        </>
    )
}