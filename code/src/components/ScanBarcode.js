import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchBarcodes } from 'reducers/products'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import { LoadingIndicator } from 'components/LoadingIndicator'
// import { barcodes } from 'reducers/barcodes'

const Spinner = styled.p`
padding: 15px;
color: darkgreen;
font-size: 25px;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
   
    width: 100%;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 40px 0;
`

const Scanner = styled.div`
    display: flex;
    /* justify-content: center; */
    border: 1px solid black;
    width: 300px;
    height: 300px;
    /* align-content: center;
    justify-content: center; */
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
    /* padding: 7px; */
    position: relative;
    top: 75%;
    left: 40%;
    font-size: 10px;
    text-align: center;
    text-transform: uppercase;
    /* align-self: center;
    justify-self: center; */
`
const Icon = styled.img`
    width: 25px;
    height: auto;
    /* font-weight: 700; */
    margin: 8px;
    /* color: white;
    fill: white; */
`


export const ScanBarcode = () => {
    const [showScanner, setShowScanner] = useState(false)
    const dispatch = useDispatch()



    return (
        <Section>
            <Spinner>Loadingindicator</Spinner>
            <LoadingIndicator />
            <Scanner>
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