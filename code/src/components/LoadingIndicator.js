import React from 'react'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

import styled from 'styled-components'

// const Spinner = styled.img`
// color: darkgreen;
// background-color: yellow;
// width: 300px;
// height: 300px;

// `

export const LoadingIndicator = () => {
    const isLoading = useSelector((state) => state.ui.isLoading)

    return (
        <>
            {isLoading && (
                <Loader type="ThreeDots" color="red" height={80} width={80} />
                // <Spinner
                //     src="https://assets3.lottiefiles.com/datafiles/rqoCisneWAPgGr6/data.json"
                //     alt="loading"
                //     //     background="transparent"
                //     speed="1"
                //     loop
                //     controls
                //     autoplay ></Spinner>

                // <h1> !!  Loading  !!</h1>
            )}
        </>
    )
}