import React from 'react'
import { useSelector } from 'react-redux'

export const InsulinCounter = () => { 
    const insulinDose = useSelector(state => state.products.insulinDose)
    console.log("insulinCounter: " + insulinDose)

if (!insulinDose) return "(no dose found)"
console.log(insulinDose)

return (
    <>
    My insulindose: 
    {insulinDose.toFixed(1)}
    </>
)
}