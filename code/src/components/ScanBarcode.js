import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchBarcodes } from 'reducers/products'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import { LoadingIndicator } from 'components/LoadingIndicator'


const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 150px 0 50px;
`
const Scanner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: 300px;
    height: 300px;
`
const BarcodeIcon = styled.img`
    width: 300px;
    height: auto;
`
const ShowScannerBtn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: red;
    color: white;
    width: 140px;
    height: 50px;
    border-radius: 25px;
    font-size: 10px;
    text-transform: uppercase;
`
const Icon = styled.img`
    width: 25px;
    height: auto;
    margin: 8px;
`

export const ScanBarcode = () => {
    const [showScanner, setShowScanner] = useState(false)
    const dispatch = useDispatch()

    return (
        <Section>
            <LoadingIndicator />
            <Scanner>
                <BarcodeIcon src="/assets/barcode-icon.svg"></BarcodeIcon>
                {showScanner && (
                    <BarcodeScanner onDetected={(code) => {
                        console.log('Got barcode', code)
                        dispatch(fetchBarcodes(code))
                        setShowScanner(false)
                    }} />
                )}
            </Scanner>
            <h5>Scan your barcode to see information about your product</h5>
            {!showScanner && (
                <ShowScannerBtn type="button" onClick={() => setShowScanner(true)}>
                    <Icon src="assets/white-scan-icon.svg" alt="scan-icon" ></Icon>
                    Scan Barcode
                </ShowScannerBtn>
            )}
        </Section>
    )
}