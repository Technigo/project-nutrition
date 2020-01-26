import React from 'react'
import moment from 'moment'

import styled from 'styled-components/macro'

const Section = styled.div`
    display: flex;
    flex-direction: column;
    background-color: red;
    text-align: center;
    position: fixed;
    top: 0;
    width: 100%;
`
const H1 = styled.h1`
    padding-top: 25px;
    color: white; 
    font-size: 30px;
    margin: 0 0 15px;
`
const IconDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const Time = styled.p`
    display: flex;
    flex-direction: row;
    padding: 0 5%;
    color: white;
`
const BatteryImg = styled.img`
    width: 25px;
    height: auto;
    padding: 0 5%;
`
const time = moment().format('LT');

export const Header = () => {
    return (
        <Section>
            <IconDiv>
                <Time>{time}</Time>
                <BatteryImg src='/assets/battery.svg' alt='battery icon'></BatteryImg>
            </IconDiv>
            <H1>Barcode scanner</H1>
        </Section>
    )
}