import React from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components/macro";

const Container = styled.div`
@media (min-width: 900px){
    font-size: 1.5em;
  }
`;

export const InsulinCounter = () => { 
    const insulinDose = useSelector(state => state.products.insulinDose)
    console.log("insulinCounter: " + insulinDose)

if (!insulinDose) return "(no dose found)"
console.log(insulinDose)

return (
    <Container>
    My insulindose: {insulinDose.toFixed(1)}e
    </Container>
)
}