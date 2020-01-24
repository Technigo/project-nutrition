import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
    display:flex;
    justify-content:center;
    background-color:gray;
    margin:0px;
    width:100%;
    height:100px;
`
const Headline = styled.h1`
    margin: 10px 10px 0 10px;
    font-size:30px;
`

export const Header = () => {
    return (
        <Container>
            <Headline>Whats in my fridge?</Headline>
        </Container>
    )
}