import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../reducers/products'
import styled from 'styled-components'

const Btn = styled.div`
display: flex;
flex-direction: row;
// width: 500px;
justify-content: center;
`
export const ScanBarcode = () => {
    const [showScanner, setShowScanner] = useState(false)
    const dispatch = useDispatch()
    return (
        <>
            <Btn>
                {!showScanner && (
                    <button type='button' onClick={() => setShowScanner(true)}>
                        Show scanner
        </button>
                )}
                {showScanner && (
                    <BarcodeScanner
                        // Damien had parenthesis around code down below
                        onDetected={code => {
                            console.log('Got barcode', code)
                            setShowScanner(false)
                            //fetching the barcode from the reducer:products
                            dispatch(fetchProduct(code))
                        }} />
                )}
            </Btn>
        </>
    )
}