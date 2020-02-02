import React from 'react'
import { useSelector } from 'react-redux'

export const LoaderIndicator = () => {
    const isLoading = useSelector(state => state.ui.isLoading)

    return (
        <>
            {isLoading && (
                <h1>Loading</h1>
            )}
        </>
    )
}
