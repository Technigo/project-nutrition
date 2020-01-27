import React from 'react'
import  { useSelector } from 'react-redux'
import { CircularProgress } from '@material-ui/core'

export const LoadingIndicator = () => {
    const loading = useSelector((state) => state.ui.loadingIndicator)
    return (
        <>
        {loading && <CircularProgress />}
        </>
    )
}