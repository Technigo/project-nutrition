import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchBarcodes } from 'reducers/products'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import { LoadingIndicator } from 'components/LoadingIndicator'
// import { barcodes } from 'reducers/barcodes'
// import Loader from 'react-loader-spinner'
// import { Link } from 'react-router-dom';
import { Header } from 'components/Header'
import { BottomBar } from 'components/BottomBar'


const BarcodeKey = 5218020031149

const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    /* border-bottom: 1px solid black; */
    padding: 100px 0 50px;
`

const Scanner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    /* border: 1px solid black; */
    width: 300px;
    height: 300px;
    /* align-content: center;
    justify-content: center; */
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
    width: 170px;
    height: 50px;
    border-radius: 25px;
    /* padding: 7px; */
    /* position: relative; */
    font-size: 10px;
    /* text-align: center; */
    text-transform: uppercase;
    /* align-self: center;
    justify-self: center; */
    border: none;
`
const Icon = styled.img`
    width: 25px;
    height: auto;
    /* font-weight: 700; */
    margin: 8px;
    /* color: white;
    fill: white; */
`


export const ScanBarcode = (product) => {
    const [showScanner, setShowScanner] = useState(false)
    // const [products, setProducts] = useState()
    const dispatch = useDispatch()



    return (
        <Section >
            <Header />
            {/* <Link to="/productinfo" ></Link> */}

            <LoadingIndicator />
            <Scanner>
                <BarcodeIcon src="/assets/barcode-icon.svg"></BarcodeIcon>
                {showScanner && (
                    <BarcodeScanner onDetected={(code) => {
                        console.log('Got barcode', code)
                        dispatch(fetchBarcodes(code))
                        // dispatch(fetchBarcodes(7394376616037))
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

            <BottomBar />

        </Section>

    )


}