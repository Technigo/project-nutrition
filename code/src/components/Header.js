import React from 'react'
import { LoadingIndicator } from 'components/LoadingIndicator'
import styled from 'styled-components'

const Section = styled.div`
border-bottom: 1px solid grey;
`

export const Header = () => {
    return (
        <Section>
            <h1>My Barcode scanner</h1>
            <p>Loadingindicator</p>
            <LoadingIndicator />
        </Section>
    )
}