import React from 'react'
import { LoadingIndicator } from 'components/LoadingIndicator'
import styled from 'styled-components/macro'

const Section = styled.div`
border-bottom: 1px solid black;
background-color: grey;
text-align: center;
padding: 10px;
margin: 0;
`
const Spinner = styled.p`
color: darkgreen;
font-size: 25px;
`

export const Header = () => {
    return (
        <Section>
            <h1>My Barcode scanner</h1>
            <Spinner>Loadingindicator</Spinner>
            <LoadingIndicator />
        </Section>
    )
}