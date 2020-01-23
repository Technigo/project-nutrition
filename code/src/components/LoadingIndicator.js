import React from 'react'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

export const LoadingIndicator = () => {
    const isLoading = useSelector(state => state.ui.isLoading)

    return (
        <>
            {isLoading && (
                <Loader type='Hearts' color='#FF000' height={200} />
            )}
        </>
    )
}
