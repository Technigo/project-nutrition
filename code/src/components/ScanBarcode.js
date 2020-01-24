import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../reducers/products'
import styled from 'styled-components'
import { ToggleSwitch } from 'components/ToggleSwitch'


const Button = styled.button`
// background: yellow;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
`
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
            {/* <Btn> */}
            {!showScanner && (
                <Button type='button' onClick={() => setShowScanner(true)}>
                    Show scanner
        </Button>
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
            {/* </Btn> */}
        </>
    )
}