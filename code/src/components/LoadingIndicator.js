import React from 'react'
import  { useSelector } from 'react-redux'

export const LoadingIndicator = () => {
    const loading = useSelector((state) => state.ui.loadingIndicator)
    return (
        <>
        {loading && <p>!! Loading !!</p>}
        </>
    )
}