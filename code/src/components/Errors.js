import React from 'react'
import styled from 'styled-components'
import {useSelector } from 'react-redux'

export const Errors = () => {
const scanProduct = useSelector(state => state.ui.isScanning)

return (
 
)

}