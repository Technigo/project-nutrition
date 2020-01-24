import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct } from 'reducers/products'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import img from 'components/barcode.png';

const Button = styled.button`
    background: blue;
    // background-image: url(${img});
    background-size: cover;
    background-position: center; 
    display: inline-block; 
    border: none; 
    padding: 20px; 
    width: 70px; 
    height: 70px;
    margin:10px;
    transition: all 0.5s; 
    cursor: grab;
`

export const ScanBarcode = () => {
    const [showScanner, setShowScanner] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            {!showScanner && (
                <Button type="button"
                    onClick={() => setShowScanner(true)}>
                    {/* Show scanner */}
                </Button>
            )}

            {showScanner && (
                <BarcodeScanner onDetected={(code) => {
                    console.log('Got barcode', code)
                    setShowScanner(false)
                    dispatch(fetchProduct(code))
                }} />
            )}
        </>
    )
}