import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BarcodeScanner } from './BarcodeScanner'
import { fetchProduct } from 'reducers/products'
import styled from 'styled-components/macro'

const Button = styled.button`
background:'gray;
`

export const ScanBarcode = () => {
    const [showScanner, setShowScanner] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            {!showScanner && (
                <Button type="button" onClick={() => setShowScanner(true)}>
                    Show scanner
                </Button>
            )}
            {showScanner && (
                <BarcodeScanner className='scanner'
                    onDetected={(code) => {
                        console.log('Got barcode', code)
                        setShowScanner(false)
                        dispatch(fetchProduct(code))
                    }} />
            )}
        </>
    )
}