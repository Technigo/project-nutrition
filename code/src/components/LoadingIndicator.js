import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Spinner = styled.img`
color: darkgreen;
background-color: yellow;
width: 300px;
height: 300px;

`

export const LoadingIndicator = () => {
    const isLoading = useSelector((state) => state.ui.isLoading)

    return (
        <>
            {isLoading && (
                <Spinner
                    src="https://assets3.lottiefiles.com/datafiles/rqoCisneWAPgGr6/data.json"
                    alt="loading"
                    //     background="transparent"
                    speed="1"
                    loop
                    controls
                    autoplay ></Spinner>

                // <h1> !!  Loading  !!</h1>
            )}
        </>
    )
}