import React from 'react'
import { useSelector } from 'react-redux'

export const InsulinCounter = () => { 
    const insulinDose = useSelector(state => state.insulinDose)

if (!insulinDose) return "(no dose found)"
console.log(insulinDose)

return (
    <>
    The insulindose: 
    {insulinDose}
    </>
)
}