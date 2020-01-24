import React from 'react'
import styled from 'styled-components/macro'

const BottomBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Footer = () => {
    return (
        <BottomBox>
            <p className="smallP">© Angelica Brodin Technigo 2020</p>
        </BottomBox>
    )
}