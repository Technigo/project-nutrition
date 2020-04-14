import React from 'react'
import styled from 'styled-components/macro'

const Section = styled.div`
    background-color: red;
    text-align: center;
    position: fixed;
    top: 0;
    width: 100%;
`
const Text = styled.h1`
    padding-top: 25px;
    color: white; 
    font-size: 18px;
`

export const Header = () => {
    return (
        <Section>
            <Text>Barcode scanner</Text>
        </Section>
    )
}