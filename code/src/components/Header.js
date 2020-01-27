import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:olivedrab;
    margin:0px;
    width:100%;
    height:120px;
`
const Headline = styled.h1`
    margin: 10px 15px 0 15px;
    font-size:25px;
`

export const Header = () => {
    return (
        <Container>
            <Headline>What's in my fridge?</Headline>
        </Container>
    )
}